# HubSpot Contact Identification Implementation
## Medicare Calendar Tool - Contact-Level Tracking

**Last Updated:** March 9, 2026
**Status:** ✅ Implemented

---

## ✅ Webhook Implementation via Server-Side Proxy

**Webhook functionality has been restored** using a server-side proxy approach to bypass CORS restrictions.

**Implementation:**
- Client-side JavaScript sends webhook data to our Next.js API route: `/app/api/hubspot-webhook`
- The Next.js API route (server-side) forwards the request to HubSpot's webhook endpoint with proper authentication
- This bypasses browser CORS restrictions since the actual HubSpot API call happens server-to-server
- Both webhook triggers AND behavioral events are now working simultaneously

**Benefits:**
- ✅ No CORS issues - Server-side calls don't have browser restrictions
- ✅ More secure - API keys (if needed) are handled server-side
- ✅ Dual tracking - Both webhooks and behavioral events fire together
- ✅ Full error handling and logging

---

## Overview

This document describes the HubSpot contact identification and behavioral event tracking implementation for the Medicare Calendar Tool. The implementation allows us to track contact-level engagement without requiring users to re-enter their email or phone number.

---

## Implementation Summary

### Tool Pages

| Tool Version | URL Path | HTML File |
|--------------|----------|-----------|
| **DIY (General)** | `/app/tools/deadline-reminder-tool-diy` | `medicare-calendar-updated.html` |
| **Chris O'Kieffe** | `/app/tools/deadline-reminder-tool-christopher-o-kieffe` | `medicare-calendar-chris.html` |
| **Scott Martin** | `/app/tools/deadline-reminder-tool-scott-martin` | `medicare-calendar-scott.html` |
| **Megan Lengerich** | `/app/tools/deadline-reminder-tool-megan-lengerich` | `medicare-calendar-megan.html` |
| **Mike Boshardy** | `/app/tools/deadline-reminder-tool-michael-boshardy` | `medicare-calendar-mike.html` |

---

## How It Works

### 1. Contact ID Parameter (ctid)

When Marketing sends an email with a calendar tool link, the URL includes the HubSpot contact ID:

```
https://www.thepocketprotector.com/app/tools/deadline-reminder-tool-scott-martin?ctid={{contact.hs_object_id}}
```

**Example with actual contact ID:**
```
https://www.thepocketprotector.com/app/tools/deadline-reminder-tool-scott-martin?ctid=12345678
```

### 2. JavaScript Tracking Implementation

Each tool page includes JavaScript code that:

1. **Extracts and stores the `ctid` parameter** from the URL on page load
2. **Fires HubSpot custom behavioral events** tied to the contact ID
3. **Triggers webhook automations** via server-side proxy
4. **Appends `ctid` to all outbound CTAs** (especially booking links)
5. **Gracefully degrades** when `ctid` is not present

---

## HubSpot Tracking: Dual Approach

The implementation uses **two complementary tracking methods** for maximum reliability:

### Method 1: Custom Behavioral Events
- Sent via HubSpot's `_hsq` tracking API
- Stores events on contact timeline in HubSpot
- Can trigger workflows based on event properties
- No CORS issues (uses HubSpot's tracking script)

### Method 2: Webhook Triggers
- Sent via our server-side proxy (`/app/api/hubspot-webhook`)
- Directly triggers HubSpot workflow automations
- Bypasses CORS using server-to-server communication
- Immediate workflow trigger (no delay)

**Why Both?**
- **Redundancy:** If one method fails, the other still works
- **Flexibility:** Behavioral events for complex workflows, webhooks for immediate triggers
- **Analytics:** Behavioral events show in contact timeline, webhooks provide instant automation
- **Compatibility:** Different HubSpot features work better with each method

---

## HubSpot Custom Behavioral Events

### Event 1: `deadline_reminder_tool_opened`
**When:** Page loads with valid `ctid`
**Purpose:** Track that a contact opened/viewed the calendar tool

**Properties:**
- `tool_version` - Which version (e.g., "diy", "scott-martin", "megan-lengerich", "chris-okieffe", "michael-boshardy")
- `agent_name` - Agent name for branded versions (null for DIY)
- `page_url` - Full URL where event occurred
- `occurred_at` - ISO timestamp

### Event 2: `deadline_reminder_tool_completed`
**When:** User completes the calendar flow (reaches results/thank you page)
**Purpose:** Track successful completion of the tool

**Properties:**
- `tool_version`
- `agent_name`
- `page_url`
- `occurred_at`
- `calendar_detail_preference` - User's preference (e.g., "full" or "key")

### Event 3: `deadline_reminder_tool_book_call_clicked`
**When:** User clicks any "Book a Call" or scheduling CTA
**Purpose:** Track intent to schedule with an advisor

**Properties:**
- `tool_version`
- `agent_name`
- `page_url`
- `occurred_at`
- `cta_text` - Text of the clicked button
- `cta_type` - Type of CTA (e.g., "advisor_card", "results_cta")

---

## HubSpot Webhook Triggers

Webhook triggers fire simultaneously with behavioral events but directly trigger HubSpot workflow automations.

### Webhook 1: `deadline_reminder_tool_opened`
**URL:** `https://api-na2.hubapi.com/automation/v4/webhook-triggers/243005180/tg12FD2`
**When:** Page loads with valid `ctid`
**Purpose:** Immediately trigger HubSpot workflows when a contact opens the tool

**Payload:**
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

### Webhook 2: `deadline_reminder_tool_completed`
**URL:** `https://api-na2.hubapi.com/automation/v4/webhook-triggers/243005180/kDXhAP4`
**When:** User completes the calendar flow (reaches results page)
**Purpose:** Immediately trigger HubSpot workflows when a contact finishes the tool

**Payload:**
```json
{
  "eventName": "deadline_reminder_tool_completed",
  "contactId": "12345678",
  "toolVersion": "scott-martin",
  "agentName": "Scott Martin",
  "pageUrl": "https://www.thepocketprotector.com/app/tools/deadline-reminder-tool-scott-martin?ctid=12345678",
  "occurredAt": "2026-03-09T18:30:00.000Z",
  "calendar_detail_preference": "key"
}
```

### Webhook 3: `deadline_reminder_tool_book_call_clicked`
**URL:** `https://api-na2.hubapi.com/automation/v4/webhook-triggers/243005180/jYTl2zj`
**When:** User clicks any "Book a Call" or scheduling CTA button
**Purpose:** Immediately trigger HubSpot workflows when a contact shows booking intent

**Payload:**
```json
{
  "eventName": "deadline_reminder_tool_book_call_clicked",
  "contactId": "12345678",
  "toolVersion": "scott-martin",
  "agentName": "Scott Martin",
  "pageUrl": "https://www.thepocketprotector.com/app/tools/deadline-reminder-tool-scott-martin?ctid=12345678",
  "occurredAt": "2026-03-09T18:30:00.000Z",
  "cta_text": "Book a Call With Scott",
  "cta_type": "advisor_card"
}
```

---

## Code Implementation

### JavaScript Functions Added to Each Tool

```javascript
// ═══════════════════════════════════════════════════════════════
// HUBSPOT CONTACT IDENTIFICATION & BEHAVIORAL EVENT TRACKING
// ═══════════════════════════════════════════════════════════════

/**
 * Configuration for each tool version
 * This object should be customized per HTML file
 */
const HUBSPOT_TOOL_CONFIG = {
  toolVersion: 'scott-martin',  // or 'diy', 'chris-okieffe', 'megan-lengerich', 'michael-boshardy'
  agentName: 'Scott Martin'     // or null for DIY version
};

/**
 * Extract and persist the HubSpot contact ID (ctid) from URL
 */
function getHubSpotContactId() {
  // Check if already stored in session
  let ctid = sessionStorage.getItem('hs_contact_id');

  if (!ctid) {
    // Extract from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    ctid = urlParams.get('ctid');

    if (ctid) {
      // Store in session for persistence
      sessionStorage.setItem('hs_contact_id', ctid);
    }
  }

  return ctid;
}

/**
 * Send custom behavioral event to HubSpot
 */
function sendHubSpotEvent(eventName, properties = {}) {
  const ctid = getHubSpotContactId();

  // Only send events if ctid is present
  if (!ctid) {
    console.log('[HubSpot] No contact ID found - skipping event:', eventName);
    return;
  }

  // Merge default properties with custom ones
  const eventData = {
    eventName: eventName,
    properties: {
      tool_version: HUBSPOT_TOOL_CONFIG.toolVersion,
      agent_name: HUBSPOT_TOOL_CONFIG.agentName,
      page_url: window.location.href,
      occurred_at: new Date().toISOString(),
      ...properties
    }
  };

  // Send to HubSpot using the tracking API
  const _hsq = window._hsq = window._hsq || [];
  _hsq.push(['trackCustomBehavioralEvent', {
    name: eventName,
    properties: eventData.properties,
    objectId: ctid
  }]);

  console.log('[HubSpot] Event sent:', eventName, eventData);
}

/**
 * Append ctid to URLs (for booking links, etc.)
 */
function appendContactIdToUrl(url) {
  const ctid = getHubSpotContactId();

  if (!ctid) return url;

  try {
    const urlObj = new URL(url);
    urlObj.searchParams.set('ctid', ctid);
    return urlObj.toString();
  } catch (e) {
    // If URL parsing fails, return original
    return url;
  }
}

/**
 * Initialize HubSpot tracking on page load
 */
function initializeHubSpotTracking() {
  const ctid = getHubSpotContactId();

  if (ctid) {
    console.log('[HubSpot] Contact ID detected:', ctid);

    // Send "opened" event
    sendHubSpotEvent('deadline_reminder_tool_opened');
  } else {
    console.log('[HubSpot] No contact ID - tool will function normally without contact-level tracking');
  }
}

// Initialize tracking when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeHubSpotTracking);
} else {
  initializeHubSpotTracking();
}
```

---

## Integration Points

### 1. Page Load (Automatic)
When the page loads, the `initializeHubSpotTracking()` function automatically:
- Extracts `ctid` from URL
- Stores it in `sessionStorage`
- Fires the `deadline_reminder_tool_opened` event

### 2. Tool Completion
When user completes the calendar flow, add this code:

```javascript
// In the completion/thank you step
sendHubSpotEvent('deadline_reminder_tool_completed', {
  calendar_detail_preference: answers.intensity || 'key'
});
```

### 3. Book a Call CTAs
For any booking/scheduling buttons, add event tracking:

```javascript
// Example: On book call button click
document.querySelector('.booking-button').addEventListener('click', function(e) {
  sendHubSpotEvent('deadline_reminder_tool_book_call_clicked', {
    cta_text: this.textContent.trim(),
    cta_type: 'advisor_card'
  });

  // Also append ctid to the booking URL
  const bookingUrl = this.href;
  this.href = appendContactIdToUrl(bookingUrl);
});
```

---

## Tool Version Configuration

Each HTML file has its own configuration at the top of the HubSpot tracking code:

### DIY Version (medicare-calendar-updated.html)
```javascript
const HUBSPOT_TOOL_CONFIG = {
  toolVersion: 'diy',
  agentName: null
};
```

### Chris O'Kieffe Version (medicare-calendar-chris.html)
```javascript
const HUBSPOT_TOOL_CONFIG = {
  toolVersion: 'chris-okieffe',
  agentName: 'Chris O\'Kieffe'
};
```

### Scott Martin Version (medicare-calendar-scott.html)
```javascript
const HUBSPOT_TOOL_CONFIG = {
  toolVersion: 'scott-martin',
  agentName: 'Scott Martin'
};
```

### Megan Lengerich Version (medicare-calendar-megan.html)
```javascript
const HUBSPOT_TOOL_CONFIG = {
  toolVersion: 'megan-lengerich',
  agentName: 'Megan Lengerich'
};
```

### Mike Boshardy Version (medicare-calendar-mike.html)
```javascript
const HUBSPOT_TOOL_CONFIG = {
  toolVersion: 'michael-boshardy',
  agentName: 'Mike Boshardy'
};
```

---

## Graceful Degradation

The implementation is designed to work gracefully when `ctid` is not present:

- **No errors** - All functions check for `ctid` before executing
- **Normal functionality** - The tool works exactly the same for users without `ctid`
- **Console logging** - Debug messages help developers understand what's happening
- **No broken UI** - Missing `ctid` doesn't affect the user experience

### Example Scenarios

**Scenario 1: Email Link with ctid**
```
URL: /app/tools/deadline-reminder-tool-scott-martin?ctid=12345678
Result: ✅ Full contact-level tracking enabled
```

**Scenario 2: Direct Traffic (no ctid)**
```
URL: /app/tools/deadline-reminder-tool-scott-martin
Result: ✅ Tool works normally, no contact tracking (expected)
```

**Scenario 3: Forwarded Link**
```
URL: /app/tools/deadline-reminder-tool-scott-martin?ctid=12345678
User: Different person than original contact
Result: ⚠️ Engagement attributed to original contact (acceptable tradeoff)
```

---

## Testing Checklist

### Manual Testing

- [ ] Load tool with `?ctid=test123` in URL
- [ ] Verify `deadline_reminder_tool_opened` event fires
- [ ] Complete the tool flow
- [ ] Verify `deadline_reminder_tool_completed` event fires
- [ ] Click a "Book a Call" button
- [ ] Verify `deadline_reminder_tool_book_call_clicked` event fires
- [ ] Check that booking URL includes `ctid` parameter
- [ ] Test without `ctid` - verify tool works normally

### Browser Console Verification

Open browser console and look for HubSpot event logs:
```
[HubSpot] Contact ID detected: 12345678
[HubSpot] Event sent: deadline_reminder_tool_opened {...}
[HubSpot] Event sent: deadline_reminder_tool_completed {...}
[HubSpot] Event sent: deadline_reminder_tool_book_call_clicked {...}
```

**Note:** You should NOT see any webhook-related console messages since direct webhook calls have been removed.

### HubSpot Dashboard Verification

1. Go to HubSpot → Reports → Analytics Tools → Custom Events
2. Look for events:
   - `deadline_reminder_tool_opened`
   - `deadline_reminder_tool_completed`
   - `deadline_reminder_tool_book_call_clicked`
3. Check individual contact records for event timeline

---

## Marketing Team Usage

### Creating Email Links

Use HubSpot's personalization tokens in email templates:

```html
<a href="https://www.thepocketprotector.com/app/tools/deadline-reminder-tool-scott-martin?ctid={{contact.hs_object_id}}">
  View Your Medicare Calendar
</a>
```

### Reporting & Analytics

**In HubSpot:**
1. Navigate to Custom Behavioral Events
2. Filter by event name (e.g., `deadline_reminder_tool_opened`)
3. View engagement rates, completion rates, and booking conversion
4. Segment by `tool_version` or `agent_name` for performance comparison

**Key Metrics to Track:**
- **Open Rate:** Contacts who triggered `deadline_reminder_tool_opened`
- **Completion Rate:** Contacts who triggered `deadline_reminder_tool_completed`
- **Booking Rate:** Contacts who triggered `deadline_reminder_tool_book_call_clicked`
- **Tool Version Performance:** Compare metrics across DIY vs. agent-branded versions

### Creating HubSpot Workflows (Complementary to Webhooks)

In addition to webhook triggers, you can also create **HubSpot Workflows** triggered by behavioral events for more complex automation:

**Step-by-Step:**

1. **Navigate to Workflows:**
   - Go to HubSpot → Automation → Workflows
   - Click "Create workflow"

2. **Set Enrollment Trigger:**
   - Choose "Contact-based workflow"
   - For enrollment trigger, select "Custom behavioral event"
   - Choose the event: `deadline_reminder_tool_opened`, `deadline_reminder_tool_completed`, or `deadline_reminder_tool_book_call_clicked`

3. **Add Filters (Optional):**
   - Filter by `tool_version` property to create version-specific workflows
   - Filter by `agent_name` property for agent-specific automation
   - Example: Only enroll contacts who opened the Scott Martin version

4. **Add Workflow Actions:**
   - Send follow-up emails
   - Create tasks for sales team
   - Update contact properties
   - Add to lists or sequences
   - Trigger other automations

**Example Workflow Use Cases:**

- **Tool Opened but Not Completed:** If contact triggers `deadline_reminder_tool_opened` but not `deadline_reminder_tool_completed` within 24 hours, send a reminder email
- **Completed Tool:** When `deadline_reminder_tool_completed` fires, send personalized follow-up based on their results
- **Booking Intent:** When `deadline_reminder_tool_book_call_clicked` fires, immediately notify the matched agent and create a task

**Advantages Over Direct Webhooks:**
- ✅ No CORS issues
- ✅ More flexible - can add delays, if/then branches, multiple actions
- ✅ Easier to manage and update without code changes
- ✅ Built-in HubSpot reporting and analytics
- ✅ Can re-enroll contacts for recurring workflows

---

## Privacy & Data Considerations

### What is ctid?
- `ctid` is an internal HubSpot object ID
- It's **not PII** (not personally identifiable information)
- It's meaningless outside our HubSpot instance
- Safe to include in URLs

### Forwarded Link Caveat
If a contact forwards their email (with the tool link) to another person:
- Any engagement from the other person will be attributed to the original contact
- This is an **acceptable tradeoff** given we're avoiding PII re-collection
- Be aware of this when reviewing engagement data

### GDPR/Privacy Compliance
- No PII is exposed in URLs
- Tracking only occurs for contacts who have opted into our marketing
- Users can complete the tool without any tracking (graceful degradation)

---

## Technical Architecture

### Storage
- **sessionStorage:** Used to persist `ctid` during the session
- **Lifetime:** Cleared when browser tab/window is closed
- **Scope:** Unique to each tab

### Event Delivery
- **Method:** HubSpot's `_hsq.push()` API with `trackCustomBehavioralEvent`
- **Endpoint:** HubSpot's tracking JavaScript automatically handles delivery
- **Retry Logic:** Built into HubSpot's tracking library

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Gracefully degrades if JavaScript is disabled

### Server-Side Proxy Architecture

**Purpose:** Bypasses browser CORS restrictions for HubSpot webhook calls

**Flow:**
1. **Client-side JavaScript** → Sends webhook data to `/app/api/hubspot-webhook` (our Next.js API route)
2. **Next.js API Route** → Validates data and forwards to HubSpot's webhook endpoint server-to-server
3. **HubSpot API** → Processes webhook and returns response
4. **Next.js API Route** → Returns response to client

**Implementation Details:**
- **File:** `src/app/api/hubspot-webhook/route.ts`
- **Method:** POST
- **Authentication:** None required for this specific webhook (public endpoint)
- **Content Type:** `application/json`
- **Webhook URL Mapping:** Automatically routes events to correct webhook based on `eventName`
  - `deadline_reminder_tool_opened` → `tg12FD2` webhook
  - `deadline_reminder_tool_completed` → `kDXhAP4` webhook
  - `deadline_reminder_tool_book_call_clicked` → `jYTl2zj` webhook
- **Error Handling:** Comprehensive try-catch with detailed error responses
- **Logging:** Development-only console logging for debugging

**Benefits:**
- ✅ **No CORS issues** - Server-to-server calls bypass browser security
- ✅ **Secure** - API keys (if needed) stay on server, never exposed to client
- ✅ **Reliable** - No browser/network variations affecting webhook delivery
- ✅ **Debuggable** - Server logs provide visibility into webhook success/failure

**Payload Example:**
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

**Response Example (Success):**
```json
{
  "success": true,
  "message": "Webhook sent successfully",
  "data": { ... }
}
```

---

## Troubleshooting

### Events Not Showing in HubSpot

**Check:**
1. Is `ctid` present in URL and being extracted correctly?
2. Open browser console - do you see `[HubSpot] Event sent` logs?
3. Is HubSpot tracking code loaded? Check for `window._hsq` in console
4. Are custom events enabled in your HubSpot account?

### ctid Not Persisting Between Page Loads

**Solution:**
- Ensure `sessionStorage.setItem('hs_contact_id', ctid)` is being called
- Check if browser has sessionStorage enabled
- Verify no page refresh is clearing session storage

### Booking Links Not Including ctid

**Check:**
1. Is `appendContactIdToUrl()` being called on click?
2. Is the URL being constructed correctly?
3. Check browser console for any JavaScript errors

### Webhook Not Sending

**Check:**
1. Is the Next.js server running? (webhook requires server-side API route)
2. Open browser console - do you see `[HubSpot Webhook] Successfully sent via proxy` logs?
3. Check Network tab for POST to `/app/api/hubspot-webhook` - what's the status code?
4. If you see 404 error, ensure Next.js server has been restarted after adding the API route

**Server-side debugging:**
```bash
# Check if API route file exists
ls -la src/app/api/hubspot-webhook/route.ts

# Restart Next.js dev server
npm run dev
```

### Webhook Returns Error

**If webhook call fails:**
- Check browser console for error details
- Look at the response from `/app/api/hubspot-webhook`
- Common issues:
  - **400 Bad Request:** Missing eventName or contactId in payload
  - **500 Internal Server Error:** Server-side issue - check Next.js console
  - **Network Error:** Server not running or route not accessible

---

## Future Enhancements

### Potential Additions
- [ ] Track individual step progression through the tool
- [ ] Add engagement time metrics (time spent on tool)
- [ ] Track specific calendar download formats (ICS, Google Calendar, etc.)
- [ ] A/B test different agent-branded versions
- [ ] Add tool abandonment tracking

---

## Support Contacts

**Development Questions:**
Contact the dev team

**HubSpot Configuration:**
Contact the marketing operations team

**Event Data Questions:**
Check HubSpot Analytics or contact marketing analytics

---

## Changelog

### March 9, 2026 - Book Call Clicked Webhook
- ✅ Added webhook trigger for `deadline_reminder_tool_book_call_clicked` event
- ✅ Updated API proxy to include third webhook URL mapping
- ✅ All 5 calendar tools now send booking click webhooks
- ✅ All three key events now have dual tracking (behavioral + webhook)
- ✅ Updated documentation with complete webhook details

### March 9, 2026 - Completed Event Webhook
- ✅ Added webhook trigger for `deadline_reminder_tool_completed` event
- ✅ Updated API proxy to support multiple webhook URLs
- ✅ Proxy now automatically routes events to correct webhook based on `eventName`
- ✅ All 5 calendar tools now send completion webhooks
- ✅ Updated documentation with webhook trigger details

### March 9, 2026 - Server-Side Proxy Implementation
- ✅ Created Next.js API route for webhook proxy at `/app/api/hubspot-webhook`
- ✅ Restored webhook functionality using server-side proxy (bypasses CORS)
- ✅ Updated all 5 calendar tools to use proxy endpoint
- ✅ Both webhooks and behavioral events now working simultaneously
- ✅ Added comprehensive documentation for proxy architecture
- ✅ Dual tracking approach provides redundancy and flexibility

### March 9, 2026 - Initial Implementation
- ✅ Added HubSpot contact identification to all 5 tool versions
- ✅ Implemented 3 custom behavioral events
- ✅ Added graceful degradation for missing ctid
- ✅ Created comprehensive documentation
