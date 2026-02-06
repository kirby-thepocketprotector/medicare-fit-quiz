# is_new_to_medicare Analytics Event Documentation

## Overview

The `is_new_to_medicare` event is a custom analytics event that identifies users who are new to Medicare. This event fires **once per session** when specific conditions are met, allowing marketing and sales teams to identify high-value prospects who need enrollment assistance.

## Event Name

```
is_new_to_medicare
```

## When It Fires

The event fires **only when TRUE** based on the following logic:

### Trigger Conditions (OR Logic)

The event fires when **either** of these conditions is met:

**Condition 1:** User has Medicare Parts A & B but no additional coverage
```
medicare_parts_ab == true AND has_additional_coverage == false
```

**Condition 2:** User doesn't have Medicare Parts A & B and is within 6 months of their 65th birthday
```
medicare_parts_ab == false AND current_date <= (65th_birthday_date - 6 months)
```

## Field Definitions

### Input Fields (from quiz answers)

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `medicare_parts_ab` | boolean | `answers.hasPartAB` | Whether user has Medicare Part A & Part B |
| `has_additional_coverage` | boolean | Derived from `answers.currentCoverage` | true if MA or Medigap, false if AB-only or none |
| `current_date` | Date | `new Date()` | System date at time of evaluation |
| `65th_birthday_date` | Date | Calculated from `answers.birthMonth` + `answers.birthYear` | User's 65th birthday |

### Derived Fields

#### has_additional_coverage Logic

```typescript
// true if user has Medicare Advantage or Medigap
// false if user has only Parts A&B or no coverage
has_additional_coverage = (
  currentCoverage === 'medicare_advantage' ||
  currentCoverage === 'medigap'
)
```

#### 65th_birthday_date Calculation

```typescript
// Parse birth month and year from quiz answers
const monthIndex = MONTHS.indexOf(birthMonth);
const birthYear = parseInt(birthYear, 10);
const birthDate = new Date(birthYear, monthIndex, 1);

// Calculate 65th birthday
const birthday65th = new Date(birthDate);
birthday65th.setFullYear(birthDate.getFullYear() + 65);
```

## Event Payload

When the event fires, the following data is sent to the dataLayer:

```javascript
{
  event: 'is_new_to_medicare',
  medicare_parts_ab: boolean,           // Has Part A & B
  has_additional_coverage: boolean,     // Has MA or Medigap
  current_date: string,                 // ISO 8601 format
  birthday_65th_date: string,           // ISO 8601 format
  birth_month: string,                  // e.g., "Jan", "Feb"
  birth_year: string,                   // e.g., "1959"
  current_coverage: string | null,      // "parts_ab_only", "medicare_advantage", "medigap", or null
  timestamp: string,                    // ISO 8601 format
  // Plus all UTM parameters automatically included
}
```

### Example Payloads

**Example 1: User has Parts A&B but no additional coverage**
```javascript
{
  event: 'is_new_to_medicare',
  medicare_parts_ab: true,
  has_additional_coverage: false,
  current_date: '2026-02-06T10:30:00.000Z',
  birthday_65th_date: '2025-06-01T00:00:00.000Z',
  birth_month: 'Jun',
  birth_year: '1960',
  current_coverage: 'parts_ab_only',
  timestamp: '2026-02-06T10:30:00.000Z'
}
```

**Example 2: User doesn't have Parts A&B and is within 6 months of turning 65**
```javascript
{
  event: 'is_new_to_medicare',
  medicare_parts_ab: false,
  has_additional_coverage: false,
  current_date: '2026-02-06T10:30:00.000Z',
  birthday_65th_date: '2026-07-15T00:00:00.000Z',
  birth_month: 'Jul',
  birth_year: '1961',
  current_coverage: null,
  timestamp: '2026-02-06T10:30:00.000Z'
}
```

## Fire Behavior

### Once Per Session
- The event fires **exactly once per eligible session**
- Session tracking uses `sessionStorage.setItem('ntm_quiz_new_to_medicare_fired', 'true')`
- If user refreshes the page or navigates within the quiz, the event will not fire again
- Starting a new quiz (clicking "Start Over") clears the flag and allows the event to fire again

### Required Data Check
The event only fires when all required data is available:
1. Birth month (`answers.birthMonth`)
2. Birth year (`answers.birthYear`)
3. Medicare Part A&B status (`answers.hasPartAB`)
4. If `hasPartAB === true`, then current coverage must also be known (`answers.currentCoverage`)

## Implementation Details

### File Locations

**Analytics Logic:** `/src/utils/analytics.ts` (lines 477-601)
- `trackIsNewToMedicare()` - Main function to track the event
- `calculateIsNewToMedicare()` - Logic to determine if user qualifies
- `hasRequiredDataForNewToMedicare()` - Validation of required data

**Trigger Points:**

1. **Q02 Page** (`/src/app/ntm-quiz-2026-v1/q02/page.tsx:36`)
   - Fires when user answers "No" to having Medicare Part A & B
   - Wrapped in `setTimeout` for async execution after navigation

2. **Q02a Page** (`/src/app/ntm-quiz-2026-v1/q02a/page.tsx:35`)
   - Fires when user answers the current coverage question
   - This is where we have all required data for users who answered "Yes" to Part A & B

### Code Flow

```
User answers "Do you have Medicare Part A & B?"
    |
    ├─> No (hasPartAB = false)
    |   └─> Q02 page calls trackIsNewToMedicare()
    |       └─> Checks if within 6 months of 65th birthday
    |           └─> If yes, fires event
    |
    └─> Yes (hasPartAB = true)
        └─> Navigate to Q02a "What coverage do you have?"
            └─> User selects coverage type
                └─> Q02a page calls trackIsNewToMedicare()
                    └─> Checks if has_additional_coverage = false
                        └─> If yes (Parts A&B only), fires event
```

## Use Cases

### Marketing & Sales
- **Lead Scoring:** Identify high-value prospects who need enrollment help
- **Campaign Targeting:** Target users approaching Medicare eligibility
- **Follow-up Prioritization:** Focus outreach on users new to Medicare

### Analytics & Reporting
- **Conversion Funnel:** Track enrollment journey for new Medicare users
- **User Segmentation:** Separate experienced Medicare users from newcomers
- **A/B Testing:** Test different messaging for "new to Medicare" vs experienced users

## Testing

### Test Scenario 1: User has Parts A&B only (should fire)
1. Enter birth date (any date where user is 65+)
2. Answer "Yes" to "Do you have Medicare Part A & B?"
3. Select "I just have Medicare Parts A and B"
4. **Expected:** Event fires with `medicare_parts_ab: true`, `has_additional_coverage: false`

### Test Scenario 2: User doesn't have Parts A&B and is within 6 months of 65th (should fire)
1. Enter birth date 5 months in the future from today + current year - 65
   - Example: If today is Feb 6, 2026, enter birth month "Jul" and year "1961"
2. Answer "No" to "Do you have Medicare Part A & B?"
3. **Expected:** Event fires with `medicare_parts_ab: false`

### Test Scenario 3: User has Medicare Advantage (should NOT fire)
1. Enter birth date (any date where user is 65+)
2. Answer "Yes" to "Do you have Medicare Part A & B?"
3. Select "I already have a Medicare Advantage plan"
4. **Expected:** Event does NOT fire (has_additional_coverage = true)

### Test Scenario 4: User doesn't have Parts A&B and is >6 months from 65th (should NOT fire)
1. Enter birth date more than 6 months in the future from today
   - Example: If today is Feb 6, 2026, enter birth month "Feb" and year "1960"
2. Answer "No" to "Do you have Medicare Part A & B?"
3. **Expected:** Event does NOT fire (not within 6 months of 65th birthday)

### Test Scenario 5: Event fires only once per session
1. Complete the quiz triggering the event (use Test Scenario 1 or 2)
2. Click "Start Over" and complete quiz again with same answers
3. **Expected:** Event fires again in the new quiz session

### Verification in Browser Console
```javascript
// Check if event has fired
sessionStorage.getItem('ntm_quiz_new_to_medicare_fired')
// Returns: "true" if fired, null if not

// Check dataLayer for the event
window.dataLayer.filter(item => item.event === 'is_new_to_medicare')
// Returns: Array of event objects (should be 1 or 0)
```

## GTM/GA4 Configuration

### Google Tag Manager Setup
1. Create a new Custom Event trigger:
   - Trigger Type: Custom Event
   - Event name: `is_new_to_medicare`

2. Create a new GA4 Event Tag:
   - Tag Type: Google Analytics: GA4 Event
   - Event Name: `is_new_to_medicare`
   - Event Parameters: Include all custom fields from dataLayer

### GA4 Custom Dimensions
Recommended custom dimensions to create in GA4:
- `medicare_parts_ab` (User-scoped boolean)
- `has_additional_coverage` (User-scoped boolean)
- `birthday_65th_date` (User-scoped)

## Maintenance Notes

### Session Storage Keys
- **Event fired flag:** `ntm_quiz_new_to_medicare_fired`
- Cleared when user clicks "Start Over" via `clearAllTrackingGuards()` function

### Dependencies
- `QuizAnswers` type from `/src/constants/quiz-data.ts`
- `MONTHS` constant from `/src/constants/quiz-data.ts`
- `getAllUTMParams()` from `/src/utils/utm.ts`
- Session storage API (browser-native)

### Future Enhancements
- Consider adding a server-side backup for critical lead tracking
- Add event validation/monitoring in production
- Create dashboard widgets showing "new to Medicare" conversion rates

## Troubleshooting

### Event not firing?
1. Check browser console for errors
2. Verify all required fields are populated:
   ```javascript
   // In browser console
   console.log(sessionStorage.getItem('ntm_quiz_new_to_medicare_fired'))
   console.log(window.dataLayer)
   ```
3. Ensure user meets one of the trigger conditions
4. Check if event already fired earlier in the session

### Event firing multiple times?
1. Verify `sessionStorage` is working correctly
2. Check if "Start Over" properly clears the flag
3. Look for duplicate `trackIsNewToMedicare()` calls in code

### Wrong data in payload?
1. Verify quiz answer values are correct
2. Check date calculations (especially timezone handling)
3. Validate `currentCoverage` mapping to `has_additional_coverage`

## Contact

For questions or issues with this event:
- Review code in `/src/utils/analytics.ts`
- Check implementation in Q02 and Q02a pages
- Test using scenarios documented above
