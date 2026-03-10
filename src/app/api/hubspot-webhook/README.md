# HubSpot Webhook Proxy API Route

## Overview

This Next.js API route acts as a server-side proxy for forwarding webhook events to HubSpot's automation webhook trigger endpoint. It solves the CORS (Cross-Origin Resource Sharing) problem that prevents client-side JavaScript from directly calling HubSpot's webhook API.

## Endpoint

```
POST /app/api/hubspot-webhook
```

## Why This Exists

**Problem:**
- HubSpot's webhook endpoint requires `application/json` content type
- This triggers CORS preflight (OPTIONS) requests in browsers
- HubSpot's webhook endpoint doesn't have CORS headers configured
- Direct client-side calls fail with CORS errors

**Solution:**
- Client sends webhook data to this Next.js API route
- This route (running server-side) forwards the request to HubSpot
- Server-to-server calls don't have CORS restrictions
- HubSpot receives the webhook successfully

## Request Format

### Headers
```
Content-Type: application/json
```

### Body
```json
{
  "eventName": "deadline_reminder_tool_opened",
  "contactId": "12345678",
  "toolVersion": "scott-martin",
  "agentName": "Scott Martin",
  "pageUrl": "https://www.thepocketprotector.com/app/tools/deadline-reminder-tool-scott-martin?ctid=12345678",
  "occurredAt": "2026-03-09T18:30:00.000Z"
}
```

### Required Fields
- `eventName` (string) - The name of the event (e.g., "deadline_reminder_tool_opened")
- `contactId` (string) - HubSpot contact ID

### Optional Fields
- `toolVersion` (string) - Which tool variant (e.g., "scott-martin", "diy")
- `agentName` (string) - Agent name for branded versions
- `pageUrl` (string) - Full page URL where event occurred
- `occurredAt` (string) - ISO 8601 timestamp
- Any additional custom properties

## Response Format

### Success (200)
```json
{
  "success": true,
  "message": "Webhook sent successfully",
  "data": { ... }
}
```

### Client Error (400)
```json
{
  "error": "Missing required fields: eventName and contactId"
}
```

### HubSpot Error (varies)
```json
{
  "success": false,
  "error": "HubSpot webhook failed",
  "status": 415,
  "data": { ... }
}
```

### Server Error (500)
```json
{
  "success": false,
  "error": "Internal server error",
  "message": "Error details"
}
```

## Client-Side Usage

### Example 1: Tool Opened Event

```javascript
// Send "opened" webhook via proxy
const webhookPayload = {
  eventName: 'deadline_reminder_tool_opened',
  contactId: '12345678',
  toolVersion: 'scott-martin',
  agentName: 'Scott Martin',
  pageUrl: window.location.href,
  occurredAt: new Date().toISOString()
};

fetch('/app/api/hubspot-webhook', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(webhookPayload)
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    console.log('Webhook sent successfully');
  } else {
    console.error('Webhook failed:', data);
  }
})
.catch(error => {
  console.error('Error calling webhook proxy:', error);
});
```

### Example 2: Tool Completed Event

```javascript
// Send "completed" webhook via proxy
const webhookPayload = {
  eventName: 'deadline_reminder_tool_completed',
  contactId: '12345678',
  toolVersion: 'scott-martin',
  agentName: 'Scott Martin',
  pageUrl: window.location.href,
  occurredAt: new Date().toISOString(),
  calendar_detail_preference: 'key' // Additional property
};

fetch('/app/api/hubspot-webhook', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(webhookPayload)
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    console.log('Completion webhook sent successfully');
  } else {
    console.error('Completion webhook failed:', data);
  }
})
.catch(error => {
  console.error('Error calling webhook proxy:', error);
});
```

### Example 3: Book Call Clicked Event

```javascript
// Send "book call clicked" webhook via proxy
const webhookPayload = {
  eventName: 'deadline_reminder_tool_book_call_clicked',
  contactId: '12345678',
  toolVersion: 'scott-martin',
  agentName: 'Scott Martin',
  pageUrl: window.location.href,
  occurredAt: new Date().toISOString(),
  cta_text: 'Book a Call With Scott',
  cta_type: 'advisor_card'
};

fetch('/app/api/hubspot-webhook', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(webhookPayload)
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    console.log('Booking click webhook sent successfully');
  } else {
    console.error('Booking click webhook failed:', data);
  }
})
.catch(error => {
  console.error('Error calling webhook proxy:', error);
});
```

**Note:** The proxy automatically routes to the correct HubSpot webhook URL based on the `eventName` field. No need to specify the webhook URL in the client code.

## Configuration

### HubSpot Webhook URLs

The proxy supports multiple webhook URLs mapped by event name:

```typescript
const WEBHOOK_URLS: Record<string, string> = {
  'deadline_reminder_tool_opened': 'https://api-na2.hubapi.com/automation/v4/webhook-triggers/243005180/tg12FD2',
  'deadline_reminder_tool_completed': 'https://api-na2.hubapi.com/automation/v4/webhook-triggers/243005180/kDXhAP4',
  'deadline_reminder_tool_book_call_clicked': 'https://api-na2.hubapi.com/automation/v4/webhook-triggers/243005180/jYTl2zj',
};
```

**How It Works:**
- The proxy automatically selects the correct webhook URL based on the `eventName` in the request
- If the event name matches a key in `WEBHOOK_URLS`, that URL is used
- Falls back to the "opened" webhook if event name is not found

**Current Event Mappings:**
- `deadline_reminder_tool_opened` → Triggers when contact opens the tool
- `deadline_reminder_tool_completed` → Triggers when contact completes the tool
- `deadline_reminder_tool_book_call_clicked` → Triggers when contact clicks booking button

**To add a new webhook:**
1. Open `src/app/api/hubspot-webhook/route.ts`
2. Add the new event name and webhook URL to the `WEBHOOK_URLS` object:
   ```typescript
   'deadline_reminder_tool_book_call_clicked': 'https://api-na2.hubapi.com/automation/v4/webhook-triggers/YOUR_ID/YOUR_TOKEN',
   ```
3. Restart the Next.js server

**To update an existing webhook:**
1. Open `src/app/api/hubspot-webhook/route.ts`
2. Update the webhook URL for the event in the `WEBHOOK_URLS` object
3. Restart the Next.js server

### Environment Variables (Optional)

If you need to make the webhook URL configurable, you can use environment variables:

```typescript
// In route.ts
const HUBSPOT_WEBHOOK_URL = process.env.HUBSPOT_WEBHOOK_URL ||
  'https://api-na2.hubapi.com/automation/v4/webhook-triggers/243005180/tg12FD2';
```

Then add to `.env.local`:
```
HUBSPOT_WEBHOOK_URL=https://api-na2.hubapi.com/automation/v4/webhook-triggers/YOUR_ID/YOUR_TOKEN
```

## Debugging

### Development Logging

The route includes console logging that only runs in development:

```typescript
if (process.env.NODE_ENV === 'development') {
  console.log('[HubSpot Webhook Proxy] Request:', { ... });
  console.log('[HubSpot Webhook Proxy] HubSpot Response:', { ... });
}
```

### Check Logs

**Client-side (Browser Console):**
```
[HubSpot Webhook] Successfully sent via proxy: deadline_reminder_tool_opened
```

**Server-side (Terminal):**
```
[HubSpot Webhook Proxy] Request: { eventName: 'deadline_reminder_tool_opened', contactId: '12345678', ... }
[HubSpot Webhook Proxy] HubSpot Response: { status: 200, data: { ... } }
```

## Testing

### Manual Testing

1. Start Next.js dev server:
```bash
npm run dev
```

2. Open a tool page with ctid:
```
http://localhost:3000/app/tools/deadline-reminder-tool-scott-martin?ctid=test123
```

3. Check browser console for webhook success message

4. Check terminal for server-side logs

### Using cURL

```bash
curl -X POST http://localhost:3000/app/api/hubspot-webhook \
  -H "Content-Type: application/json" \
  -d '{
    "eventName": "deadline_reminder_tool_opened",
    "contactId": "test123",
    "toolVersion": "scott-martin",
    "agentName": "Scott Martin",
    "pageUrl": "http://localhost:3000/app/tools/deadline-reminder-tool-scott-martin",
    "occurredAt": "2026-03-09T18:30:00.000Z"
  }'
```

## Security Considerations

### Current Implementation
- No authentication required (HubSpot webhook URL is public)
- The webhook URL itself acts as the authentication token
- Anyone with the URL can trigger webhooks

### Potential Improvements

If you need to add authentication:

```typescript
// Add to route.ts
const API_KEY = process.env.WEBHOOK_API_KEY;

export async function POST(request: NextRequest) {
  // Verify API key
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${API_KEY}`) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  // ... rest of code
}
```

### Rate Limiting

Consider adding rate limiting to prevent abuse:

```typescript
// Example with next-rate-limit
import rateLimit from 'next-rate-limit';

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
});

export async function POST(request: NextRequest) {
  try {
    await limiter.check(10, 'WEBHOOK_CACHE_TOKEN'); // 10 requests per minute
  } catch {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      { status: 429 }
    );
  }

  // ... rest of code
}
```

## Deployment

### Vercel / Netlify
- API routes deploy automatically with your Next.js app
- No additional configuration needed

### Self-Hosted
- Ensure Node.js server is running
- API routes are handled by Next.js server
- Works in both development and production builds

## Troubleshooting

### 404 Not Found

**Cause:** API route not found

**Solution:**
1. Verify file exists at `src/app/api/hubspot-webhook/route.ts`
2. Restart Next.js dev server
3. Clear Next.js cache: `rm -rf .next`

### 500 Internal Server Error

**Cause:** Server-side error

**Solution:**
1. Check terminal for error logs
2. Verify HubSpot webhook URL is correct
3. Test HubSpot endpoint directly to ensure it's accessible

### Webhook Succeeds but Nothing Happens in HubSpot

**Cause:** Webhook URL may be incorrect or inactive

**Solution:**
1. Verify webhook URL in HubSpot → Automation → Workflows
2. Check that the workflow is turned on
3. Confirm trigger settings accept the event data format

## Related Documentation

- [HubSpot Contact Tracking Implementation](../../../HUBSPOT_CONTACT_TRACKING_IMPLEMENTATION.md)
- [Next.js API Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [HubSpot Webhook API Documentation](https://developers.hubspot.com/docs/api/automation/webhooks)

## Support

For issues or questions:
1. Check this README
2. Review server logs (terminal output)
3. Check browser console logs
4. Contact development team
