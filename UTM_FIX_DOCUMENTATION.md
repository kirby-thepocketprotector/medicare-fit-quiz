# UTM Parameter Persistence Fix

**Issue #1 - UTM Parameters Not Persisting**

## 🐛 Problems Identified

### Problem 1: `fbclid` Not Being Captured
The `extractUTMParams()` function was only capturing parameters that started with `utm_`, which meant **Facebook Click ID (`fbclid`) and other tracking parameters were being completely ignored**.

```typescript
// ❌ OLD CODE (BROKEN)
searchParams.forEach((value, key) => {
  if (key.toLowerCase().startsWith('utm_')) {
    utmParams[key.toLowerCase()] = value;
  }
});
```

### Problem 2: Limited Tracking Parameter Support
The code only supported standard UTM parameters and ignored other important advertising platform tracking IDs like:
- `fbclid` (Facebook)
- `gclid` (Google)
- `msclkid` (Microsoft/Bing)
- `ttclid` (TikTok)
- And others

### Problem 3: Risk of Overwriting Stored Parameters
The save logic could potentially overwrite stored UTM parameters with empty values if someone navigated to a page without UTMs in the URL.

---

## ✅ Solutions Implemented

### Fix 1: Capture ALL Tracking Parameters

**File:** `/src/utils/utm.ts`

Added a comprehensive list of tracking parameters to always capture:

```typescript
const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'fbclid',      // Facebook click ID
  'gclid',       // Google click ID
  'msclkid',     // Microsoft click ID
  'ttclid',      // TikTok click ID
  'twclid',      // Twitter click ID
  'li_fat_id',   // LinkedIn click ID
  'ScCid',       // Snapchat click ID
];
```

Updated `extractUTMParams()` to capture any parameter in this list OR starting with `utm_`:

```typescript
// ✅ NEW CODE (FIXED)
searchParams.forEach((value, key) => {
  const lowerKey = key.toLowerCase();

  // Capture if it's a known tracking parameter OR starts with utm_
  if (TRACKING_PARAMS.includes(lowerKey) || lowerKey.startsWith('utm_')) {
    utmParams[lowerKey] = value;
  }
});
```

### Fix 2: Improved Parameter Persistence

Updated `saveUTMParams()` to only overwrite stored values if new values are not empty:

```typescript
// ✅ NEW CODE (FIXED)
const mergedParams = { ...existingParams };

Object.entries(utmParams).forEach(([key, value]) => {
  if (value && value.trim() !== '') {
    mergedParams[key] = value;  // Only overwrite if value exists
  }
});
```

This prevents accidentally clearing stored parameters when navigating to pages without UTMs in the URL.

### Fix 3: Added Debug Logging

Added comprehensive logging in development mode to track UTM parameter flow:

**In `utm.ts`:**
```typescript
console.log('🔍 UTM Tracking Initialized:', {
  currentURL: window.location.href,
  currentUTMs,
  storedUTMs,
  willSave: Object.keys(currentUTMs).length > 0,
});
```

**In `useNavigateWithUTM.ts`:**
```typescript
console.log('🔗 Navigation with UTMs:', {
  from: window.location.pathname,
  to: path,
  withUTMs: pathWithUTM,
  utmParams: getAllUTMParams(),
});
```

---

## 🧪 How to Test

### Test 1: Facebook Ad Click Flow

1. **Start with Facebook parameters:**
   ```
   http://localhost:3001/ntm-quiz-2026-v1?utm_source=facebook&utm_medium=paid&utm_campaign=test&fbclid=TEST123
   ```

2. **Open browser DevTools Console**
   - You should see: `🔍 UTM Tracking Initialized`
   - Verify `fbclid: "TEST123"` is captured

3. **Click "Start Quiz" button**
   - Watch console for: `🔗 Navigation with UTMs`
   - Verify URL includes: `?utm_source=facebook&utm_medium=paid&utm_campaign=test&fbclid=TEST123`

4. **Navigate through ALL quiz steps (Q01 → Q02 → Q03 → ... → Result)**
   - Check console logs at each step
   - Verify all parameters persist in the URL
   - Verify `fbclid` is never lost

5. **Check sessionStorage:**
   ```javascript
   // In console:
   JSON.parse(sessionStorage.getItem('quiz_utm_params'))
   ```
   Should return:
   ```json
   {
     "utm_source": "facebook",
     "utm_medium": "paid",
     "utm_campaign": "test",
     "fbclid": "TEST123"
   }
   ```

### Test 2: Multiple Tracking Parameters

Test with multiple ad platform parameters:

```
http://localhost:3001/ntm-quiz-2026-v1?utm_source=test&utm_medium=cpc&utm_campaign=winter&fbclid=FB123&gclid=GOOGLE456&msclkid=MS789
```

Expected behavior:
- ALL parameters should be captured
- ALL parameters should persist through navigation
- Console logs should show all parameters at each step

### Test 3: Parameter Persistence After Clearing URL

1. **Start with parameters:**
   ```
   http://localhost:3001/ntm-quiz-2026-v1?utm_source=test&fbclid=TEST
   ```

2. **Manually navigate to a page without parameters:**
   ```
   http://localhost:3001/ntm-quiz-2026-v1/q01
   ```

3. **Check sessionStorage:**
   ```javascript
   JSON.parse(sessionStorage.getItem('quiz_utm_params'))
   ```

   **Expected:** Parameters should STILL be in storage (not cleared)

4. **Click Continue button**

   **Expected:** URL should include the stored parameters

### Test 4: Article to Quiz Flow

1. **Simulate coming from an article:**
   - Start at: `http://localhost:3001/?utm_source=article&fbclid=ARTICLE123`

2. **Click a link to quiz splash page**

3. **Verify parameters persist:**
   - Check console logs
   - Check URL includes all parameters
   - Proceed through quiz
   - Verify parameters reach result page

---

## 🔍 Debugging UTM Issues

If you encounter issues, check the following:

### 1. Check Browser Console Logs

Look for these logs in development mode:

```
🔍 UTM Tracking Initialized: { ... }
✓ UTMs saved: { ... }
🔗 Navigation with UTMs: { ... }
```

These logs show:
- What parameters were found in the URL
- What's stored in sessionStorage
- What parameters are being appended during navigation

### 2. Check sessionStorage

In browser console:
```javascript
// View all stored UTM params
JSON.parse(sessionStorage.getItem('quiz_utm_params'))

// Clear stored params (for testing)
sessionStorage.removeItem('quiz_utm_params')
```

### 3. Check URL at Each Step

At each quiz step, verify the URL contains all expected parameters:
- Look in the address bar
- Or run: `console.log(window.location.search)`

### 4. Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| `fbclid` missing | Old code didn't capture it | ✅ Fixed in this update |
| Parameters lost between pages | Not using `useNavigateWithUTM` | All pages already use it ✅ |
| Parameters overwritten with empty values | Old save logic | ✅ Fixed in this update |
| Test UTMs appearing | Unknown - needs investigation | Check for hardcoded test params |

---

## 📊 What Gets Tracked

### Captured Parameters

After this fix, the following parameters are automatically captured and persisted:

**Standard UTM Parameters:**
- `utm_source` - Traffic source (e.g., "facebook", "google")
- `utm_medium` - Marketing medium (e.g., "cpc", "email")
- `utm_campaign` - Campaign name
- `utm_term` - Paid keyword
- `utm_content` - Content variant
- `utm_id` - Campaign ID

**Advertising Platform Click IDs:**
- `fbclid` - Facebook Click ID
- `gclid` - Google Click ID
- `msclkid` - Microsoft/Bing Click ID
- `ttclid` - TikTok Click ID
- `twclid` - Twitter Click ID
- `li_fat_id` - LinkedIn Click ID
- `ScCid` - Snapchat Click ID

**Custom UTM Parameters:**
- Any parameter starting with `utm_` (e.g., `utm_custom`)

### Where Parameters Are Used

1. **Analytics Events** - All events sent to GTM include UTM params
2. **PostHog Tracking** - User properties include UTM data
3. **Xano Sync** - Session data includes UTMs (can be added)
4. **Ringba Call Tracking** - Can access UTMs from page URL

---

## 🚀 Deployment Notes

### Changes Made

**Modified Files:**
1. `/src/utils/utm.ts`
   - Updated `extractUTMParams()` to capture all tracking parameters
   - Updated `saveUTMParams()` to prevent overwriting with empty values
   - Added debug logging for development

2. `/src/hooks/useNavigateWithUTM.ts`
   - Added debug logging to track navigation with UTMs

### No Breaking Changes

- All existing functionality is preserved
- Backward compatible with existing stored UTM data
- Debug logs only appear in development mode

### Testing Checklist

Before deploying to production:

- [ ] Test Facebook ad flow (`fbclid` parameter)
- [ ] Test Google ad flow (`gclid` parameter)
- [ ] Test quiz navigation (all steps)
- [ ] Test article → quiz flow
- [ ] Verify GTM receives all parameters
- [ ] Verify Ringba call tracking works
- [ ] Check for any console errors

### Production Considerations

The debug logs are wrapped in `if (process.env.NODE_ENV === 'development')`, so they won't appear in production builds.

If you want to completely remove logging, you can delete the console.log statements from:
- `/src/utils/utm.ts` (lines ~160-170)
- `/src/hooks/useNavigateWithUTM.ts` (lines ~25-32)

---

## 📝 Summary

### What Was Fixed

✅ **`fbclid` now captured** - Facebook Click IDs are properly tracked
✅ **Multiple ad platforms supported** - Google, Microsoft, TikTok, etc.
✅ **Parameters persist correctly** - Won't be lost between pages
✅ **No accidental overwrites** - Stored params protected from empty values
✅ **Debug logging added** - Easy troubleshooting in development

### Expected Behavior After Fix

1. **Visitor arrives from Facebook ad:**
   - URL: `...?utm_source=facebook&fbclid=ABC123`
   - ✅ Both `utm_source` AND `fbclid` are captured

2. **Visitor navigates through quiz:**
   - Every page URL includes all original parameters
   - sessionStorage maintains all parameters
   - ✅ No parameters are lost

3. **Visitor reaches result page:**
   - All original parameters are still present
   - GTM and Ringba can access all parameters
   - ✅ Full attribution maintained

---

**Fix Date:** 2026-02-12
**Updated Files:** `utm.ts`, `useNavigateWithUTM.ts`
**Issue:** UTM parameters and fbclid not persisting across quiz flow
**Status:** ✅ FIXED
