/**
 * Analytics Utility for Medicare Quiz
 *
 * Provides functions to track quiz interactions with Google Analytics 4 (GA4)
 * and push events to the dataLayer for GTM integration.
 *
 * All quiz variables are automatically included in tracking events for:
 * - Behavior analysis
 * - Conversion funnel tracking
 * - Marketing attribution
 * - A/B testing
 */

import { QuizAnswers, ResultScreenId, MONTHS, calculateIEPWindow, IEPWindow } from '@/constants/quiz-data';
import { getAllUTMParams } from './utm';
import { syncUserAgeToXano } from './xano';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Tracking guard to prevent duplicate events
 * Uses sessionStorage to track which events have fired in this session
 */
const TRACKING_GUARD_PREFIX = 'analytics_tracked_';

function hasBeenTracked(eventKey: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem(`${TRACKING_GUARD_PREFIX}${eventKey}`) === 'true';
  } catch {
    return false;
  }
}

function markAsTracked(eventKey: string): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(`${TRACKING_GUARD_PREFIX}${eventKey}`, 'true');
  } catch {
    // Ignore errors
  }
}

function clearTrackingGuard(eventKey: string): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.removeItem(`${TRACKING_GUARD_PREFIX}${eventKey}`);
  } catch {
    // Ignore errors
  }
}

/**
 * Clear all tracking guards - used when quiz is restarted
 */
export function clearAllTrackingGuards(): void {
  if (typeof window === 'undefined') return;
  try {
    // Get all keys from sessionStorage
    const keys = Object.keys(sessionStorage);
    // Remove all tracking guard keys
    keys.forEach(key => {
      if (key.startsWith(TRACKING_GUARD_PREFIX)) {
        sessionStorage.removeItem(key);
      }
    });

    // Also clear the is_new_to_medicare flag
    sessionStorage.removeItem(NEW_TO_MEDICARE_FIRED_KEY);
  } catch {
    // Ignore errors
  }
}

/**
 * Initialize dataLayer if it doesn't exist
 */
function initDataLayer() {
  if (typeof window !== 'undefined' && !window.dataLayer) {
    window.dataLayer = [];
  }
}

/**
 * Push event to dataLayer with UTM parameters included
 */
function pushToDataLayer(data: Record<string, any>) {
  initDataLayer();
  if (typeof window !== 'undefined' && window.dataLayer) {
    // Include UTM parameters in all events
    const utmParams = getAllUTMParams();
    window.dataLayer.push({
      ...data,
      ...utmParams,
    });
  }
}

/**
 * Track page/screen views (with duplicate prevention)
 */
export function trackPageView(eventName: string, metadata?: Record<string, any>) {
  // Check if this event has already been tracked in this session
  if (hasBeenTracked(eventName)) {
    return; // Already tracked, skip
  }

  pushToDataLayer({
    event: eventName,
    timestamp: new Date().toISOString(),
    ...metadata,
  });

  // Mark as tracked
  markAsTracked(eventName);
}

/**
 * Track quiz start (splash screen view)
 */
export function trackQuizStart() {
  trackPageView('View_ntm_quiz_start');
}

/**
 * Track individual quiz step completion
 *
 * @param step - Current step number (1-10)
 * @param answers - Current quiz answers object
 */
export function trackQuizStep(step: number, answers: Partial<QuizAnswers>) {
  pushToDataLayer({
    event: 'quiz_step_completed',
    quiz_step: step,
    quiz_step_name: getStepName(step),

    // User data
    birth_month: answers.birthMonth,
    birth_year: answers.birthYear,
    is_in_iep: answers.isInIEP,

    // Medicare status
    has_part_ab: answers.hasPartAB,
    current_coverage: answers.currentCoverage,

    // Veteran status
    is_veteran: answers.isVeteran,
    uses_va: answers.usesVA,
    va_preferences: answers.vaPreferences?.join(',') || null,

    // Other factors
    has_medicaid: answers.hasMedicaid,
    budget_choice: answers.budgetChoice,

    timestamp: new Date().toISOString(),
  });
}

/**
 * Track quiz completion and result
 *
 * @param resultId - Result screen ID (R01-R09)
 * @param answers - Complete quiz answers object
 */
export function trackQuizResult(resultId: ResultScreenId, answers: QuizAnswers) {
  pushToDataLayer({
    event: 'quiz_completed',
    quiz_name: 'medicare_fit_quiz',
    result_id: resultId,
    result_name: getResultName(resultId),

    // All quiz variables for analysis
    birth_month: answers.birthMonth,
    birth_year: answers.birthYear,
    is_in_iep: answers.isInIEP,
    has_part_ab: answers.hasPartAB,
    current_coverage: answers.currentCoverage,
    is_veteran: answers.isVeteran,
    uses_va: answers.usesVA,
    va_preferences: answers.vaPreferences.join(','),
    has_medicaid: answers.hasMedicaid,
    budget_choice: answers.budgetChoice,

    // User journey metadata
    is_early_exit: resultId === 'R08' || resultId === 'R09',
    total_steps_completed: getCurrentStepCount(answers),

    timestamp: new Date().toISOString(),
  });
}

/**
 * Track button clicks and interactions
 *
 * @param buttonName - Name/label of the button clicked
 * @param page - Current page/screen
 * @param metadata - Additional context
 */
export function trackButtonClick(
  buttonName: string,
  page: string,
  metadata?: Record<string, any>
) {
  pushToDataLayer({
    event: 'button_click',
    button_name: buttonName,
    page_name: page,
    ...metadata,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track form interactions
 *
 * @param action - Action taken (focus, blur, error, etc.)
 * @param fieldName - Form field name
 * @param page - Current page
 */
export function trackFormInteraction(
  action: 'focus' | 'blur' | 'error' | 'submit',
  fieldName: string,
  page: string
) {
  pushToDataLayer({
    event: 'form_interaction',
    form_action: action,
    field_name: fieldName,
    page_name: page,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track call-to-action clicks (phone, schedule, etc.)
 *
 * @param ctaType - Type of CTA (phone, email, schedule, etc.)
 * @param resultId - Result screen where CTA was clicked
 * @param answers - Quiz answers for context
 */
export function trackCTAClick(
  ctaType: 'phone' | 'email' | 'schedule' | 'chat',
  resultId: ResultScreenId,
  answers: QuizAnswers
) {
  pushToDataLayer({
    event: 'cta_click',
    cta_type: ctaType,
    result_id: resultId,
    result_name: getResultName(resultId),

    // Include key variables for lead scoring
    is_in_iep: answers.isInIEP,
    has_medicaid: answers.hasMedicaid,
    is_veteran: answers.isVeteran,
    budget_choice: answers.budgetChoice,

    timestamp: new Date().toISOString(),
  });
}

/**
 * Track quiz abandonment
 *
 * @param lastStep - Last completed step
 * @param answers - Partial answers collected so far
 */
export function trackQuizAbandonment(lastStep: number, answers: Partial<QuizAnswers>) {
  pushToDataLayer({
    event: 'quiz_abandoned',
    last_step: lastStep,
    last_step_name: getStepName(lastStep),

    // Partial data collected
    birth_month: answers.birthMonth,
    birth_year: answers.birthYear,
    is_in_iep: answers.isInIEP,
    has_part_ab: answers.hasPartAB,
    is_veteran: answers.isVeteran,
    has_medicaid: answers.hasMedicaid,

    timestamp: new Date().toISOString(),
  });
}

/**
 * Track quiz restart and clear all tracking guards
 */
export function trackQuizRestart() {
  // Clear all tracking guards so events can fire again
  clearAllTrackingGuards();

  // Track the restart event
  trackPageView('ntm_quiz_result_startover');
}

// ============================================================================
// Page View Tracking Functions
// ============================================================================

/**
 * Calculate age from birth month and year
 */
export function calculateAge(birthMonth: string, birthYear: string): number {
  const monthIndex = MONTHS.indexOf(birthMonth);
  const birthDate = new Date(parseInt(birthYear, 10), monthIndex, 1);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Adjust if birthday hasn't occurred yet this year
  if (monthDiff < 0) {
    age--;
  }

  return age;
}

/**
 * Track user age/demographics when birth date is submitted
 * Sends to PostHog, GTM dataLayer, and Xano for analysis
 */
export async function trackUserAge(birthMonth: string, birthYear: string) {
  const age = calculateAge(birthMonth, birthYear);
  const ageGroup = getAgeGroup(age);
  const sessionId = typeof window !== 'undefined' ? (window as any).ntmSessionId : null;

  // Track in GTM dataLayer
  pushToDataLayer({
    event: 'user_age_captured',
    birth_month: birthMonth,
    birth_year: birthYear,
    user_age: age,
    age_group: ageGroup,
    session_id: sessionId,
    timestamp: new Date().toISOString(),
  });

  // Track in PostHog with person properties (with safety checks)
  if (typeof window !== 'undefined' && (window as any).posthog) {
    const posthog = (window as any).posthog;

    try {
      // Check if PostHog is fully initialized
      if (typeof posthog.setPersonProperties === 'function' && typeof posthog.capture === 'function') {
        // Set person properties for demographic analysis
        posthog.setPersonProperties({
          birth_month: birthMonth,
          birth_year: birthYear,
          age: age,
          age_group: ageGroup,
        });

        // Capture event for tracking
        posthog.capture('birth_date_submitted', {
          birth_month: birthMonth,
          birth_year: birthYear,
          age: age,
          age_group: ageGroup,
          session_id: sessionId,
        });
      }
    } catch (error) {
      console.warn('PostHog tracking failed:', error);
    }
  }

  // Sync to Xano (fire and forget - don't wait for response)
  if (sessionId) {
    syncUserAgeToXano({
      session_id: sessionId,
      birth_month: birthMonth,
      birth_year: birthYear,
      age: age,
      age_group: ageGroup,
    }).catch(() => {
      // Silent fail - already logged in syncUserAgeToXano
    });
  }
}

/**
 * Get age group for demographic segmentation
 */
export function getAgeGroup(age: number): string {
  if (age < 60) return 'under_60';
  if (age >= 60 && age <= 63) return '60-63';
  if (age === 64) return '64';
  if (age === 65) return '65';
  if (age >= 66 && age <= 70) return '66-70';
  if (age > 70) return 'over_70';
  return 'unknown';
}

/**
 * Track Q01: Birth Month/Year screen view
 */
export function trackViewBirthMonth() {
  trackPageView('View_ntm_quiz_birthMonth');
}

/**
 * Track Q01a: IEP screen view
 */
export function trackViewInIEP() {
  trackPageView('View_ntm_quiz_inIEP');
}

/**
 * Track Q02: Medicare A&B screen view
 */
export function trackViewMedicareAB() {
  trackPageView('View_ntm_quiz_medicare_ab');
}

/**
 * Track Q02a: Current coverage screen view
 */
export function trackViewCurrentCoverage() {
  trackPageView('View_ntm_quiz_current_coverage');
}

/**
 * Track Q03: Veteran status screen view
 */
export function trackViewIsVeteran() {
  trackPageView('View_ntm_quiz_is_veteran');
}

/**
 * Track Q03a: Uses VA screen view
 */
export function trackViewUsesVA() {
  trackPageView('View_ntm_quiz_uses_va');
}

/**
 * Track Q03b: VA preferences screen view
 */
export function trackViewVAPreference() {
  trackPageView('View_ntm_quiz_va_preference');
}

/**
 * Track Q04: Medicaid screen view
 */
export function trackViewHasMedicaid() {
  trackPageView('View_ntm_quiz_has_medicaid');
}

/**
 * Track Q05: Budget choice intro screen view
 */
export function trackViewBudgetChoiceStart() {
  trackPageView('View_ntm_quiz_budget_choice_start');
}

/**
 * Track Q05a: Sam's story screen view
 */
export function trackViewBudgetChoiceSam() {
  trackPageView('View_ntm_quiz_budget_choice_sam');
}

/**
 * Track Q05b: Alex's story screen view
 */
export function trackViewBudgetChoiceAlex() {
  trackPageView('View_ntm_quiz_budget_choice_alex');
}

/**
 * Track Q05c: Budget decision screen view
 */
export function trackViewBudgetChoiceDecide() {
  trackPageView('View_ntm_quiz_budget_choice_decide');
}

/**
 * Track result page views with pass-through variables
 * @param eventName - GA4 event name
 * @param answers - Quiz answers for context
 */
function trackResultPageView(eventName: string, answers: Partial<QuizAnswers>) {
  const iepWindow = calculateIEPWindow(answers.birthMonth ?? null, answers.birthYear ?? null);
  const medicareABStatus = answers.hasPartAB ?? false;

  trackPageView(eventName, {
    iep_window: iepWindow,
    medicare_ab_status: medicareABStatus,
  });
}

/**
 * Track R01: Medicare Advantage (non-veteran) result view
 */
export function trackViewResultMANonVet(answers: Partial<QuizAnswers>) {
  trackResultPageView('View_ntm_quiz_result_MA_nonvet', answers);
}

/**
 * Track R02: Medigap (non-veteran) result view
 */
export function trackViewResultMSNonVet(answers: Partial<QuizAnswers>) {
  trackResultPageView('View_ntm_quiz_result_MS_nonvet', answers);
}

/**
 * Track R03: D-SNP result view
 */
export function trackViewResultDSNP(answers: Partial<QuizAnswers>) {
  trackResultPageView('View_ntm_quiz_result_DNSP', answers);
}

/**
 * Track R04: Medicare Advantage (veteran, uses VA) result view
 */
export function trackViewResultMAVetVA(answers: Partial<QuizAnswers>) {
  trackResultPageView('View_ntm_quiz_result_MA_vet_va', answers);
}

/**
 * Track R05: Medigap (veteran, uses VA) result view
 */
export function trackViewResultMSVetVA(answers: Partial<QuizAnswers>) {
  trackResultPageView('View_ntm_quiz_result_MS_vet_va', answers);
}

/**
 * Track R06: Medicare Advantage (veteran, doesn't use VA) result view
 */
export function trackViewResultMAVetNonVA(answers: Partial<QuizAnswers>) {
  trackResultPageView('View_ntm_quiz_result_MA_vet_nonva', answers);
}

/**
 * Track R07: Medigap (veteran, doesn't use VA) result view
 */
export function trackViewResultMSVetNonVA(answers: Partial<QuizAnswers>) {
  trackResultPageView('View_ntm_quiz_result_MS_vet_nonva', answers);
}

/**
 * Track R08: Already enrolled in MA result view
 */
export function trackViewResultAlreadyEnrolledMA(answers: Partial<QuizAnswers>) {
  trackResultPageView('View_ntm_quiz_result_already_enrolled_ma', answers);
}

/**
 * Track R09: Already enrolled in Medigap result view
 */
export function trackViewResultAlreadyEnrolledMS(answers: Partial<QuizAnswers>) {
  trackResultPageView('View_ntm_quiz_result_already_enrolled_ms', answers);
}

/**
 * Track result screen call button click
 */
export function trackResultCall() {
  pushToDataLayer({
    event: 'ntm_quiz_result_call',
    timestamp: new Date().toISOString(),
  });
}

// ============================================================================
// Custom Event: is_new_to_medicare
// ============================================================================

const NEW_TO_MEDICARE_FIRED_KEY = 'ntm_quiz_new_to_medicare_fired';

/**
 * Check if user has all required data to evaluate is_new_to_medicare
 */
function hasRequiredDataForNewToMedicare(answers: Partial<QuizAnswers>): boolean {
  // Always need birth month and year
  if (!answers.birthMonth || !answers.birthYear) {
    return false;
  }

  // Always need hasPartAB answer
  if (answers.hasPartAB === null) {
    return false;
  }

  // If hasPartAB is true, we need currentCoverage to determine has_additional_coverage
  if (answers.hasPartAB === true && answers.currentCoverage === null) {
    return false;
  }

  return true;
}

/**
 * Calculate if user is new to Medicare based on quiz answers
 */
function calculateIsNewToMedicare(answers: Partial<QuizAnswers>): boolean {
  if (!hasRequiredDataForNewToMedicare(answers)) {
    return false;
  }

  const medicarePartsAB = answers.hasPartAB === true;

  // Determine has_additional_coverage
  // true if MA or Medigap, false if AB-only or none
  let hasAdditionalCoverage = false;
  if (answers.currentCoverage === 'medicare_advantage' || answers.currentCoverage === 'medigap') {
    hasAdditionalCoverage = true;
  }

  // Calculate 65th birthday date
  const monthIndex = MONTHS.indexOf(answers.birthMonth!);
  const birthYear = parseInt(answers.birthYear!, 10);
  const birthDate = new Date(birthYear, monthIndex, 1);
  const birthday65th = new Date(birthDate);
  birthday65th.setFullYear(birthDate.getFullYear() + 65);

  // Calculate 6 months before 65th birthday
  const sixMonthsBefore65th = new Date(birthday65th);
  sixMonthsBefore65th.setMonth(sixMonthsBefore65th.getMonth() - 6);

  const currentDate = new Date();

  // Condition 1: medicare_parts_ab == true AND has_additional_coverage == false
  const condition1 = medicarePartsAB && !hasAdditionalCoverage;

  // Condition 2: medicare_parts_ab == false AND current_date <= (65th_birthday_date - 6 months)
  const condition2 = !medicarePartsAB && currentDate <= sixMonthsBefore65th;

  return condition1 || condition2;
}

/**
 * Track is_new_to_medicare custom event
 * Only fires once per session when conditions are met
 */
export function trackIsNewToMedicare(answers: Partial<QuizAnswers>) {
  // Check if already fired in this session
  if (typeof window !== 'undefined') {
    const alreadyFired = sessionStorage.getItem(NEW_TO_MEDICARE_FIRED_KEY);
    if (alreadyFired === 'true') {
      return; // Already fired, don't fire again
    }
  }

  // Check if we have all required data
  if (!hasRequiredDataForNewToMedicare(answers)) {
    return; // Don't have enough data yet
  }

  // Calculate if user is new to Medicare
  const isNewToMedicare = calculateIsNewToMedicare(answers);

  // Only fire if TRUE
  if (!isNewToMedicare) {
    return;
  }

  // Calculate all computed fields for payload
  const medicarePartsAB = answers.hasPartAB === true;

  let hasAdditionalCoverage = false;
  if (answers.currentCoverage === 'medicare_advantage' || answers.currentCoverage === 'medigap') {
    hasAdditionalCoverage = true;
  }

  const monthIndex = MONTHS.indexOf(answers.birthMonth!);
  const birthYear = parseInt(answers.birthYear!, 10);
  const birthDate = new Date(birthYear, monthIndex, 1);
  const birthday65th = new Date(birthDate);
  birthday65th.setFullYear(birthDate.getFullYear() + 65);

  // Fire the event
  pushToDataLayer({
    event: 'is_new_to_medicare',
    medicare_parts_ab: medicarePartsAB,
    has_additional_coverage: hasAdditionalCoverage,
    current_date: new Date().toISOString(),
    birthday_65th_date: birthday65th.toISOString(),
    birth_month: answers.birthMonth,
    birth_year: answers.birthYear,
    current_coverage: answers.currentCoverage,
    timestamp: new Date().toISOString(),
  });

  // Mark as fired in session storage
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(NEW_TO_MEDICARE_FIRED_KEY, 'true');
  }
}

// Helper functions

function getStepName(step: number): string {
  const stepNames: Record<number, string> = {
    1: 'birthday',
    2: 'medicare_part_ab',
    3: 'veteran_status',
    4: 'medicaid',
    5: 'tradeoffs_intro',
    6: 'tradeoffs_story_1',
    7: 'tradeoffs_story_2',
    8: 'budget_choice',
  };
  return stepNames[step] || `step_${step}`;
}

function getResultName(resultId: ResultScreenId): string {
  const resultNames: Record<ResultScreenId, string> = {
    R01: 'medicare_advantage_lower_cost',
    R02: 'medigap_flexibility',
    R03: 'dual_eligible_dsnp',
    R04: 'va_friendly_ma',
    R05: 'medigap_va_flexibility',
    R06: 'va_friendly_ma_lower_cost',
    R07: 'medigap_veteran_flexibility',
    R08: 'existing_medicare_advantage',
    R09: 'existing_medigap',
  };
  return resultNames[resultId] || resultId;
}

function getCurrentStepCount(answers: QuizAnswers): number {
  let count = 0;

  // Q01: Birthday
  if (answers.birthMonth && answers.birthYear) count++;

  // Q02: Medicare Part A&B
  if (answers.hasPartAB !== null) count++;

  // Q02a: Current coverage (conditional)
  if (answers.currentCoverage !== null) count++;

  // Q03: Veteran status
  if (answers.isVeteran !== null) count++;

  // Q03a: Uses VA (conditional)
  if (answers.usesVA !== null) count++;

  // Q03b: VA preferences (conditional)
  if (answers.vaPreferences.length > 0) count++;

  // Q04: Medicaid
  if (answers.hasMedicaid !== null) count++;

  // Q05c: Budget choice
  if (answers.budgetChoice !== null) count++;

  return count;
}

/**
 * Track lead submission (contact form completed)
 *
 * @param recommendedPlan - The recommended plan based on quiz results
 * @param medicareAB - Whether user has Medicare Parts A & B
 */
export function trackLeadSubmission(
  recommendedPlan: string,
  medicareAB: boolean
): void {
  console.log('📊 Tracking lead submission:', { recommendedPlan, medicareAB });

  // Push to dataLayer for GA4 (via GTM)
  pushToDataLayer({
    event: 'ntm_quiz_lead',
    recommended_plan: recommendedPlan,
    medicare_ab: medicareAB,
  });

  // Track in PostHog
  if (typeof window !== 'undefined' && (window as any).posthog) {
    const posthog = (window as any).posthog;

    try {
      posthog.capture('ntm_quiz_lead', {
        recommended_plan: recommendedPlan,
        medicare_ab: medicareAB,
      });
    } catch (error) {
      console.warn('PostHog tracking failed:', error);
    }
  }
}
