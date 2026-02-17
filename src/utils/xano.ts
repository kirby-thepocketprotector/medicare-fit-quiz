/**
 * Xano API Integration
 *
 * Functions to sync quiz data to Xano backend for analysis and storage.
 */

interface XanoUserAgeData {
  session_id: string;
  birth_month: string;
  birth_year: string;
  age: number;
  age_group: string;
}

/**
 * Send user age data to Xano
 *
 * @param data - User age and demographic data
 * @returns Promise resolving to the response or null if failed
 */
export async function syncUserAgeToXano(
  data: XanoUserAgeData
): Promise<any | null> {
  // Get Xano endpoint from environment variable
  const xanoEndpoint = process.env.NEXT_PUBLIC_XANO_USER_AGE_ENDPOINT;

  if (!xanoEndpoint) {
    console.warn(
      'Xano endpoint not configured. Set NEXT_PUBLIC_XANO_USER_AGE_ENDPOINT in your .env file.'
    );
    return null;
  }

  try {
    const response = await fetch(xanoEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        session_id: data.session_id,
        birth_month: data.birth_month,
        birth_year: data.birth_year,
        age: data.age,
        age_group: data.age_group,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error('Xano API error:', response.status, response.statusText);
      return null;
    }

    const result = await response.json();
    console.log('✓ User age data synced to Xano:', result);
    return result;
  } catch (error) {
    console.error('Failed to sync user age data to Xano:', error);
    return null;
  }
}

/**
 * Send complete quiz results to Xano
 *
 * @param data - Complete quiz data including all answers
 * @returns Promise resolving to the response or null if failed
 */
export async function syncQuizResultsToXano(data: any): Promise<any | null> {
  const xanoEndpoint = process.env.NEXT_PUBLIC_XANO_QUIZ_RESULTS_ENDPOINT;

  if (!xanoEndpoint) {
    console.warn(
      'Xano quiz results endpoint not configured. Set NEXT_PUBLIC_XANO_QUIZ_RESULTS_ENDPOINT in your .env file.'
    );
    return null;
  }

  try {
    const response = await fetch(xanoEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error('Xano API error:', response.status, response.statusText);
      return null;
    }

    const result = await response.json();
    console.log('✓ Quiz results synced to Xano:', result);
    return result;
  } catch (error) {
    console.error('Failed to sync quiz results to Xano:', error);
    return null;
  }
}

interface XanoLeadData {
  first_name: string;
  last_name: string;
  phone: string;
  email?: string;
  medicare_ab: boolean;
  recommended_plan: string;
  result_id: string;
  quiz_session_id: string;
}

/**
 * Map result IDs to recommended plan names
 */
export function mapResultIdToRecommendedPlan(resultId: string): string {
  const mapping: Record<string, string> = {
    R01: 'Advantage',
    R02: 'Medigap',
    R03: 'D-SNP',
    R04: 'Advantage_Veteran_VA',
    R05: 'Medigap_Veteran_VA',
    R06: 'Advantage_Veteran',
    R07: 'Medigap_Veteran',
  };

  return mapping[resultId] || 'Unknown';
}

/**
 * Check if we should store lead for this result ID
 * R08 and R09 should NOT be stored
 */
export function shouldStoreLeadForResult(resultId: string): boolean {
  return resultId !== 'R08' && resultId !== 'R09';
}

interface XanoHubSpotData {
  firstname: string;
  lastname: string;
  phone: string;
  email?: string;
  medicare_ab: boolean;
  recommended_plan: string;
  submit_location: string;
}

/**
 * Send lead data to HubSpot via Xano endpoint
 *
 * @param data - Lead contact information for HubSpot
 * @returns Promise resolving to the response or null if failed
 */
export async function sendLeadToHubSpot(
  data: XanoHubSpotData
): Promise<any | null> {
  const xanoEndpoint = process.env.NEXT_PUBLIC_XANO_HUBSPOT_ENDPOINT;

  if (!xanoEndpoint) {
    console.warn(
      'Xano HubSpot endpoint not configured. Set NEXT_PUBLIC_XANO_HUBSPOT_ENDPOINT in your .env file.'
    );
    return null;
  }

  try {
    const response = await fetch(xanoEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: data.firstname,
        lastname: data.lastname,
        phone: data.phone,
        email: data.email || null,
        medicare_ab: data.medicare_ab,
        recommended_plan: data.recommended_plan,
        submit_location: data.submit_location,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error('Xano HubSpot API error:', response.status, response.statusText);
      return null;
    }

    const result = await response.json();
    console.log('✓ Lead data sent to HubSpot via Xano:', result);
    return result;
  } catch (error) {
    console.error('Failed to send lead data to HubSpot:', error);
    return null;
  }
}

/**
 * Send contact/lead data to Xano
 *
 * @param data - Lead contact information
 * @returns Promise resolving to the response or null if failed/skipped
 */
export async function syncLeadToXano(
  data: XanoLeadData
): Promise<any | null> {
  // Don't store leads for R08 and R09
  if (!shouldStoreLeadForResult(data.result_id)) {
    console.log(`Skipping lead storage for result ${data.result_id}`);
    return null;
  }

  const xanoEndpoint = process.env.NEXT_PUBLIC_XANO_LEAD_ENDPOINT;

  if (!xanoEndpoint) {
    console.warn(
      'Xano lead endpoint not configured. Set NEXT_PUBLIC_XANO_LEAD_ENDPOINT in your .env file.'
    );
    return null;
  }

  try {
    const response = await fetch(xanoEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: data.first_name,
        last_name: data.last_name,
        phone: data.phone,
        email: data.email || null,
        medicare_ab: data.medicare_ab,
        recommended_plan: data.recommended_plan,
        result_id: data.result_id,
        quiz_session_id: data.quiz_session_id,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error('Xano API error:', response.status, response.statusText);
      return null;
    }

    const result = await response.json();
    console.log('✓ Lead data synced to Xano:', result);
    return result;
  } catch (error) {
    console.error('Failed to sync lead data to Xano:', error);
    return null;
  }
}
