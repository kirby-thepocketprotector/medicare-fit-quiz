import { NextRequest, NextResponse } from 'next/server';

/**
 * HubSpot Webhook Proxy API Route
 *
 * This server-side proxy forwards webhook events to HubSpot's API,
 * bypassing CORS restrictions that prevent direct client-side calls.
 *
 * Endpoint: POST /app/api/hubspot-webhook
 */

// Type definition for webhook payload
interface WebhookPayload {
  eventName: string;
  contactId: string;
  toolVersion?: string;
  agentName?: string | null;
  pageUrl?: string;
  occurredAt?: string;
  webhookUrl?: string;
  [key: string]: unknown; // Allow additional properties
}

// HubSpot webhook URLs mapped by event name
const WEBHOOK_URLS: Record<string, string> = {
  'deadline_reminder_tool_opened': 'https://api-na2.hubapi.com/automation/v4/webhook-triggers/243005180/tg12FD2',
  'deadline_reminder_tool_completed': 'https://api-na2.hubapi.com/automation/v4/webhook-triggers/243005180/kDXhAP4',
  'deadline_reminder_tool_book_call_clicked': 'https://api-na2.hubapi.com/automation/v4/webhook-triggers/243005180/jYTl2zj',
};

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body
    const body = await request.json() as WebhookPayload;

    // Validate required fields
    if (!body.eventName || !body.contactId) {
      return NextResponse.json(
        { error: 'Missing required fields: eventName and contactId' },
        { status: 400 }
      );
    }

    // Determine which webhook URL to use
    // 1. Use webhookUrl from request body if provided
    // 2. Otherwise, look up by eventName
    // 3. Fall back to default opened webhook
    const webhookUrl = body.webhookUrl ||
                       WEBHOOK_URLS[body.eventName] ||
                       WEBHOOK_URLS['deadline_reminder_tool_opened'];

    // Remove webhookUrl from body before sending to HubSpot
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { webhookUrl: _, ...hubspotPayload } = body;

    // Forward the request to HubSpot's webhook endpoint
    const hubspotResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hubspotPayload),
    });

    // Get the response data
    const responseData = await hubspotResponse.json().catch(() => ({}));

    // Log for debugging (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('[HubSpot Webhook Proxy] Request:', {
        eventName: body.eventName,
        contactId: body.contactId,
        toolVersion: body.toolVersion,
        webhookUrl: webhookUrl,
      });
      console.log('[HubSpot Webhook Proxy] HubSpot Response:', {
        status: hubspotResponse.status,
        data: responseData,
      });
    }

    // Return the HubSpot response
    if (hubspotResponse.ok) {
      return NextResponse.json(
        {
          success: true,
          message: 'Webhook sent successfully',
          data: responseData
        },
        { status: 200 }
      );
    } else {
      // HubSpot returned an error
      return NextResponse.json(
        {
          success: false,
          error: 'HubSpot webhook failed',
          status: hubspotResponse.status,
          data: responseData
        },
        { status: hubspotResponse.status }
      );
    }

  } catch (error) {
    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[HubSpot Webhook Proxy] Error:', error);
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Prevent caching
export const dynamic = 'force-dynamic';
