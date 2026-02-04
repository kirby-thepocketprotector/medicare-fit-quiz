# Quiz State Variables Documentation

This document outlines all quiz state variables that are stored, persisted through localStorage, and available on the results screen for routing, messaging, analytics, and future integrations.

## Storage Implementation

All variables are:
- Stored in the `QuizAnswers` interface (`src/constants/quiz-data.ts`)
- Managed by `QuizContext` (`src/contexts/QuizContext.tsx`)
- Automatically persisted to `localStorage` on every update
- Restored from `localStorage` on page load/refresh
- Cleared when `resetQuiz()` is called

## Variable Reference

### 1. birthMonth
- **Source:** Q01 – Birth date picker
- **Type:** `string | null`
- **Possible Values:** `"Jan"`, `"Feb"`, `"Mar"`, `"Apr"`, `"May"`, `"Jun"`, `"Jul"`, `"Aug"`, `"Sep"`, `"Oct"`, `"Nov"`, `"Dec"`, `null`
- **Default:** `null`
- **Set via:** `setBirthDate(month, year)` method

### 2. birthYear
- **Source:** Q01 – Birth date picker
- **Type:** `string | null`
- **Possible Values:** `"1926"` through `"1966"` (string format), `null`
- **Default:** `null`
- **Set via:** `setBirthDate(month, year)` method

### 3. isInIEP
- **Source:** Derived/calculated from `birthMonth` + `birthYear`
- **Type:** `boolean`
- **Possible Values:** `true`, `false`
- **Default:** `false`
- **Calculation:** User is within the 7-month Initial Enrollment Period (3 months before turning 65, birth month, 3 months after turning 65)
- **Set via:** Automatically calculated in `setBirthDate()` using `calculateIsInIEP()` function

### 4. hasPartAB
- **Source:** Q02 – "Do you have Medicare Part A & Part B?"
- **Type:** `boolean | null`
- **Possible Values:** `true` (Yes), `false` (No), `null`
- **Default:** `null`
- **Set via:** `updateAnswer('hasPartAB', value)`

### 5. currentCoverage
- **Source:** Q02a – "What kind of Medicare coverage do you have right now?"
- **Conditional Display:** Only shown if `hasPartAB === true`
- **Type:** `'parts_ab_only' | 'medicare_advantage' | 'medigap' | null`
- **Possible Values:**
  - `"parts_ab_only"` – Parts A & B only
  - `"medicare_advantage"` – Medicare Advantage
  - `"medigap"` – Medigap/Medicare Supplement
  - `null` – Not answered
- **Default:** `null`
- **Set via:** `updateAnswer('currentCoverage', value)`

### 6. isVeteran
- **Source:** Q03 – "Did you serve in the United States Armed Services?"
- **Type:** `boolean | null`
- **Possible Values:** `true` (Yes), `false` (No), `null`
- **Default:** `null`
- **Set via:** `updateAnswer('isVeteran', value)`

### 7. usesVA
- **Source:** Q03a – "Do you use the VA for healthcare?"
- **Conditional Display:** Only shown if `isVeteran === true`
- **Type:** `boolean | null`
- **Possible Values:** `true` (Yes), `false` (No), `null`
- **Default:** `null`
- **Set via:** `updateAnswer('usesVA', value)`

### 8. vaPreferences
- **Source:** Q03b – "Do any of the following apply to you?"
- **Conditional Display:** Only shown if `usesVA === true`
- **Type:** `string[]` (array of strings)
- **Possible Values:** Array containing any combination of:
  - `"civilian_doctors"` – I regularly see several civilian doctors or specialists
  - `"va_inconvenient"` – The VA isn't very convenient or accessible where I live
  - `"travel_multiple_states"` – I travel or live in multiple states and don't rely on the VA much
  - `"none_apply"` – None of these really apply — the VA works well for me
- **Default:** `[]` (empty array)
- **Special Rules:**
  - Multi-select allowed
  - `"none_apply"` is mutually exclusive with all other options
  - Selecting `"none_apply"` clears all other selections
  - Selecting any other option automatically removes `"none_apply"`
- **Set via:** `toggleVAPreference(preferenceId)` method

### 9. hasMedicaid
- **Source:** Q04 – "Do you currently have Medicaid?"
- **Type:** `boolean | null`
- **Possible Values:** `true` (Yes), `false` (No), `null`
- **Default:** `null`
- **Set via:** `updateAnswer('hasMedicaid', value)`

### 10. budgetChoice
- **Source:** Q05c – Budget / flexibility preference
- **Type:** `'flexible' | 'lower_cost' | null`
- **Possible Values:**
  - `"flexible"` – User prefers flexibility/predictability over lower costs
  - `"lower_cost"` – User prefers lower costs
  - `null` – Not answered
- **Default:** `null`
- **Set via:** `updateAnswer('budgetChoice', value)`

## Usage Examples

### Reading State
```typescript
const { answers } = useQuiz();
console.log(answers.birthMonth); // "Jan" | "Feb" | ... | null
console.log(answers.isInIEP); // true | false
console.log(answers.vaPreferences); // ["civilian_doctors", "travel_multiple_states"]
```

### Updating State
```typescript
const { updateAnswer, setBirthDate, toggleVAPreference } = useQuiz();

// Set birth date (automatically calculates isInIEP)
setBirthDate("Mar", "1959");

// Update boolean answers
updateAnswer('hasPartAB', true);
updateAnswer('isVeteran', false);

// Update string/enum answers
updateAnswer('currentCoverage', 'medigap');
updateAnswer('budgetChoice', 'flexible');

// Toggle VA preferences (multi-select with special logic)
toggleVAPreference('civilian_doctors');
toggleVAPreference('none_apply');
```

### Result Determination
The `determineResult()` function uses the quiz answers to calculate which result screen (R01-R09) to show:

```typescript
const { getResult } = useQuiz();
const resultId = getResult(); // Returns 'R01' | 'R02' | ... | 'R09'
```

### Result Logic Flow
1. If `hasMedicaid === true` → R03 (Dual-Eligible Medicare Advantage)
2. If `isVeteran === true`:
   - If `usesVA === true`:
     - If any VA preference selected (not just "none_apply") → R05 (Medigap for VA users)
     - If only "none_apply" or no preferences → R04 (VA-Friendly Medicare Advantage)
   - If `usesVA === false`:
     - If `budgetChoice === 'flexible'` → R07 (Medigap for veterans)
     - Otherwise → R06 (Medicare Advantage for veterans)
3. If not veteran or Medicaid:
   - If `budgetChoice === 'flexible'` → R02 (Medigap)
   - Otherwise → R01 (Medicare Advantage)

## Persistence Details

### localStorage Keys
- **Answers:** `medicare-quiz-answers`
- **Current Step:** `medicare-quiz-step`

### Data Persistence
- All changes to `answers` are automatically saved to localStorage
- State is restored when the app loads
- Data persists across page refreshes and browser sessions
- Data is cleared when `resetQuiz()` is called

### Error Handling
All localStorage operations include try-catch blocks to handle:
- Browser environments where localStorage is unavailable
- Storage quota exceeded errors
- JSON parsing errors
- SSR/server-side rendering scenarios (returns null/default values)

## Analytics & Integration

All variables are available via the `useQuiz()` hook and can be accessed for:
- **Routing:** Determine which result page to show
- **Messaging:** Personalize content based on user answers
- **Analytics:** Track user responses and completion rates
- **API Integration:** Send data to backend services
- **Email/CRM:** Include quiz data in lead capture forms

Example analytics integration:
```typescript
const { answers, currentStep } = useQuiz();

// Track page view with quiz state
analytics.track('Quiz Step Viewed', {
  step: currentStep,
  isInIEP: answers.isInIEP,
  hasPartAB: answers.hasPartAB,
  isVeteran: answers.isVeteran,
  // ... other relevant fields
});
```
