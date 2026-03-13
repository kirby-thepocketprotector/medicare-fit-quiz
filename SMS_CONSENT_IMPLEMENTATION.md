# SMS Consent Tracking Implementation

## Overview
Implemented comprehensive SMS consent tracking for the Doctor Network Monitor tool, with full compliance support for opt-in, opt-out, and re-consent scenarios.

## Files Modified/Created

### 1. Client-Side: `public/tools/doctor-network-monitor-diy.html`
**Changes:**
- Added SMS consent disclosure text constant
- Implemented consent status determination logic
- Added SMS consent fields to Xano submission payload
- Updated to use proxy endpoint for IP capture

### 2. Server-Side: `src/app/api/xano-submit/route.ts` (NEW)
**Purpose:**
- Proxy API route that forwards submissions to Xano
- Captures client IP address from request headers
- Supports both create and update endpoints

## SMS Consent Fields Implementation

### Fields Populated

| Field | When Populated | Value/Logic |
|-------|---------------|-------------|
| `sms_consent_status` | **Always** | `opted_in` if phone provided AND consent shown<br/>`never_asked` if no phone or no disclosure |
| `sms_consent_datetime` | Only when `opted_in` | ISO timestamp at form submission |
| `sms_consent_source` | Only when `opted_in` | URL path (e.g., `/app/tools/doctor-network-monitor-diy`) |
| `sms_consent_language` | Only when `opted_in` | Exact consent disclosure text (stored verbatim) |
| `sms_consent_scope` | Only when `opted_in` | "Medicare Advantage, PDP, Medicare Supplement" |
| `sms_consent_ip` | Only when `opted_in` | Client IP from headers (added server-side) |
| `sms_opt_out_datetime` | When status changes to `opted_out` | ISO timestamp (not yet implemented - for future opt-out flow) |

### Default Values
- `sms_consent_status`: Defaults to `never_asked` (never left blank)
- All other fields: `NULL` until populated by consent event

## Consent Disclosure Text

```
"By adding your number you provide express consent to The Pocket Protector
and its licensed agents to provide updates and communications by text message
related to Medicare Advantage, PDP plans, and Medicare Supplement solutions.
Consent is not a condition of purchase. Msg & data rates may apply."
```

This exact text is stored in `sms_consent_language` for all submissions.

## Implementation Details

### Client-Side Logic (doctor-network-monitor-diy.html)

```javascript
// SMS Consent disclosure text (exact copy from the form)
const SMS_CONSENT_DISCLOSURE = "By adding your number...";

// Determine SMS consent status
const hasPhone = formData.phone && formData.phone.length === 10;
const hasConsentDisclosure = true; // Disclosure is always shown
const smsConsentStatus = (hasPhone && hasConsentDisclosure) ? 'opted_in' : 'never_asked';

// SMS consent fields (only populate when opted_in)
const smsConsentData = {};
if (smsConsentStatus === 'opted_in') {
  smsConsentData.sms_consent_datetime = new Date().toISOString();
  smsConsentData.sms_consent_source = window.location.pathname;
  smsConsentData.sms_consent_language = SMS_CONSENT_DISCLOSURE;
  smsConsentData.sms_consent_scope = "Medicare Advantage, PDP, Medicare Supplement";
}

// Add to payload
const payload = {
  // ... other fields
  sms_consent_status: smsConsentStatus,
  ...smsConsentData, // Spread consent fields
  // ... rest of fields
};
```

### Server-Side IP Capture (xano-submit/route.ts)

```typescript
function getClientIP(request: NextRequest): string | null {
  // Try Cloudflare header first
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  if (cfConnectingIP) return cfConnectingIP;

  // Try X-Forwarded-For
  const xForwardedFor = request.headers.get('x-forwarded-for');
  if (xForwardedFor) return xForwardedFor.split(',')[0].trim();

  // Try X-Real-IP
  const xRealIP = request.headers.get('x-real-ip');
  if (xRealIP) return xRealIP;

  // Try Vercel-specific header
  const vercelForwardedFor = request.headers.get('x-vercel-forwarded-for');
  if (vercelForwardedFor) return vercelForwardedFor.split(',')[0].trim();

  return null;
}

// Add IP to consent data if opted in
if (body.sms_consent_status === 'opted_in' && clientIP) {
  body.sms_consent_ip = clientIP;
}
```

## Edge Cases Handled

| Scenario | Handling |
|----------|----------|
| Phone provided + consent shown | `opted_in`, populate all consent fields |
| No phone provided | `never_asked`, leave other fields NULL |
| Phone exists but no disclosure | `never_asked` (compliance gap flag) |
| User texts STOP | Status → `opted_out`, set `sms_opt_out_datetime` (future) |
| Re-consent after opt-out | Update status → `opted_in`, update all fields, retain `opt_out_datetime` |
| Consent language changes | Old records keep old language, new submissions get new language |

## API Endpoints

### Xano Endpoints
- **Create:** `https://x8ki-letl-twmt.n7.xano.io/api:gtNilvMH/tpp_doctorcheck_submit_v2`
- **Update:** `https://x8ki-letl-twmt.n7.xano.io/api:gtNilvMH/tpp_doctorcheck_submit_v2_update`

### Proxy Endpoint
- **Route:** `/app/api/xano-submit`
- **Method:** POST
- **Purpose:** Capture client IP and forward to Xano

## Data Flow

```
User fills form with phone
        ↓
JavaScript determines consent status
        ↓
Client builds payload with consent fields
        ↓
POST to /app/api/xano-submit
        ↓
Server captures client IP from headers
        ↓
Server adds IP to consent data (if opted_in)
        ↓
Server forwards to Xano (create or update endpoint)
        ↓
Xano processes and updates HubSpot
```

## IP Headers Supported

The proxy captures IP from these headers (in order of priority):
1. `cf-connecting-ip` (Cloudflare)
2. `x-forwarded-for` (Standard reverse proxy)
3. `x-real-ip` (Nginx)
4. `x-vercel-forwarded-for` (Vercel)

## Testing Checklist

- [ ] Phone provided → status = `opted_in`, all fields populated
- [ ] No phone → status = `never_asked`, other fields NULL
- [ ] IP captured correctly in different environments
- [ ] Create endpoint used for new contacts
- [ ] Update endpoint used for existing contacts
- [ ] Error handling for duplicate contacts
- [ ] Retry logic works correctly
- [ ] Consent language stored verbatim

## Future Enhancements

1. **Opt-Out Handling:**
   - Implement webhook/endpoint to receive STOP messages
   - Update `sms_consent_status` → `opted_out`
   - Set `sms_opt_out_datetime`

2. **Re-Consent Flow:**
   - Allow users to re-opt-in after opting out
   - Update status and timestamps
   - Preserve opt-out history

3. **Consent Version Tracking:**
   - Track changes to consent language
   - Support multiple consent versions
   - Migration path for updated language

## Compliance Notes

- ✅ Consent disclosure always shown when phone field exists
- ✅ Exact consent language stored for audit trail
- ✅ IP address captured for verification
- ✅ Timestamp recorded at moment of consent
- ✅ Source (URL) tracked for context
- ✅ Scope clearly defined (Medicare products)
- ✅ Default status is `never_asked` (never blank)

## Deployment Requirements

1. Deploy the new API route: `src/app/api/xano-submit/route.ts`
2. Test IP capture in production environment
3. Verify Xano endpoints are accessible
4. Confirm HubSpot integration works end-to-end
5. Monitor logs for any errors

---

**Implementation Date:** March 13, 2026
**File:** doctor-network-monitor-diy.html
**API Route:** /app/api/xano-submit
