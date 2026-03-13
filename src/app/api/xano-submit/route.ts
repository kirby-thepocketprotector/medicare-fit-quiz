import { NextRequest, NextResponse } from 'next/server';

/**
 * Xano Submission Proxy API Route
 *
 * This server-side proxy forwards form submissions to Xano's API,
 * adding client IP address for SMS consent tracking and bypassing CORS.
 *
 * Endpoint: POST /app/api/xano-submit
 */

// Type definition for Xano payload
interface XanoPayload {
  // Doctor Network Monitor specific fields
  doctorcheck_doctorname?: string;
  doctorcheck_planname?: string;
  doctorcheck_card?: string;

  // Contact fields
  postalcode?: string;
  email?: string;
  phone?: string;
  contactID?: string;

  // SMS Consent fields
  sms_consent_status: 'opted_in' | 'never_asked' | 'opted_out';
  sms_consent_datetime?: string;
  sms_consent_source?: string;
  sms_consent_language?: string;
  sms_consent_scope?: string;
  sms_consent_ip?: string;
  sms_opt_out_datetime?: string;

  // Tool tracking
  submit_location?: string;
  url_slug?: string;
  submitted_at?: string;

  // UTM tracking
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_creative?: string | null;
  utm_placement?: string | null;

  // Internal flags
  _isRetry?: boolean;
  _endpoint?: 'create' | 'update';

  [key: string]: unknown; // Allow additional properties
}

// Xano endpoints
const XANO_ENDPOINTS = {
  create: 'https://x8ki-letl-twmt.n7.xano.io/api:gtNilvMH/tpp_doctorcheck_submit_v2',
  update: 'https://x8ki-letl-twmt.n7.xano.io/api:gtNilvMH/tpp_doctorcheck_submit_v2_update',
};

/**
 * Extract client IP address from request headers
 * Supports Cloudflare, Vercel, and standard reverse proxy headers
 */
function getClientIP(request: NextRequest): string | null {
  // Try Cloudflare header first
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  if (cfConnectingIP) return cfConnectingIP;

  // Try X-Forwarded-For header (can contain multiple IPs)
  const xForwardedFor = request.headers.get('x-forwarded-for');
  if (xForwardedFor) {
    // Take the first IP in the list (client IP)
    return xForwardedFor.split(',')[0].trim();
  }

  // Try X-Real-IP header
  const xRealIP = request.headers.get('x-real-ip');
  if (xRealIP) return xRealIP;

  // Try Vercel-specific header
  const vercelForwardedFor = request.headers.get('x-vercel-forwarded-for');
  if (vercelForwardedFor) {
    return vercelForwardedFor.split(',')[0].trim();
  }

  return null;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body
    const body = await request.json() as XanoPayload;

    // Validate required fields
    if (!body.email) {
      return NextResponse.json(
        { error: 'Missing required field: email' },
        { status: 400 }
      );
    }

    // Capture client IP address for SMS consent tracking
    const clientIP = getClientIP(request);

    // Add IP address to consent data if user opted in
    if (body.sms_consent_status === 'opted_in' && clientIP) {
      body.sms_consent_ip = clientIP;

      if (process.env.NODE_ENV === 'development') {
        console.log('[Xano Proxy] Added IP to consent data:', {
          sms_consent_status: body.sms_consent_status,
          client_ip: clientIP,
          sms_consent_ip: body.sms_consent_ip,
        });
      }
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.log('[Xano Proxy] IP NOT added:', {
          sms_consent_status: body.sms_consent_status,
          clientIP: clientIP,
          reason: !body.sms_consent_status ? 'No consent status' :
                  body.sms_consent_status !== 'opted_in' ? 'Not opted in' : 'No IP detected'
        });
      }
    }

    // Determine which endpoint to use
    // Use update endpoint if contactID is present or if _endpoint is explicitly set to 'update'
    const useUpdate = Boolean(body.contactID) || body._endpoint === 'update';
    const endpoint = useUpdate ? XANO_ENDPOINTS.update : XANO_ENDPOINTS.create;

    // Remove internal flags before sending to Xano
    const { _isRetry, _endpoint, ...xanoPayload } = body;

    // Generate request signature (timestamp-based)
    const signature = Buffer.from(Date.now().toString()).toString('base64');

    // Forward the request to Xano endpoint
    const xanoResponse = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Request-Signature': signature,
      },
      body: JSON.stringify(xanoPayload),
    });

    // Get the response data
    const responseData = await xanoResponse.json().catch(() => ({}));

    // Log for debugging (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('[Xano Proxy] Request:', {
        endpoint: useUpdate ? 'UPDATE' : 'CREATE',
        email: body.email,
        contactID: body.contactID,
        sms_consent_status: body.sms_consent_status,
        client_ip: clientIP,
        sms_consent_ip_in_payload: xanoPayload.sms_consent_ip,
      });
      console.log('[Xano Proxy] Full Payload Sent to Xano:', xanoPayload);
      console.log('[Xano Proxy] Response:', {
        status: xanoResponse.status,
        data: responseData,
      });
    }

    // Return the Xano response
    return NextResponse.json(
      {
        success: xanoResponse.ok,
        status: xanoResponse.status,
        data: responseData,
      },
      { status: xanoResponse.status }
    );

  } catch (error) {
    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[Xano Proxy] Error:', error);
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
