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
