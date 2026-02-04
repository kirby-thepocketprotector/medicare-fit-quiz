/**
 * UTM Parameter Management
 *
 * Captures UTM parameters from the URL and persists them throughout the session.
 * UTM parameters are stored in sessionStorage and included in analytics events.
 */

const UTM_STORAGE_KEY = 'quiz_utm_params';

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  [key: string]: string | undefined;
}

/**
 * Extract UTM parameters from URL search params
 */
export function extractUTMParams(searchParams: URLSearchParams): UTMParams {
  const utmParams: UTMParams = {};

  searchParams.forEach((value, key) => {
    if (key.toLowerCase().startsWith('utm_')) {
      utmParams[key.toLowerCase()] = value;
    }
  });

  return utmParams;
}

/**
 * Get UTM parameters from current URL
 */
export function getCurrentUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};

  const urlParams = new URLSearchParams(window.location.search);
  return extractUTMParams(urlParams);
}

/**
 * Save UTM parameters to sessionStorage
 */
export function saveUTMParams(utmParams: UTMParams): void {
  if (typeof window === 'undefined') return;

  const existingParams = getStoredUTMParams();
  const mergedParams = { ...existingParams, ...utmParams };

  // Only save if there are UTM params
  if (Object.keys(mergedParams).length > 0) {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(mergedParams));
  }
}

/**
 * Get stored UTM parameters from sessionStorage
 */
export function getStoredUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};

  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    return {};
  }
}

/**
 * Get all UTM parameters (current URL + stored)
 */
export function getAllUTMParams(): UTMParams {
  const currentParams = getCurrentUTMParams();
  const storedParams = getStoredUTMParams();

  // Current URL params take precedence over stored
  return { ...storedParams, ...currentParams };
}

/**
 * Convert UTM params object to URL search params string
 */
export function utmParamsToString(utmParams: UTMParams): string {
  const params = new URLSearchParams();

  Object.entries(utmParams).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });

  const paramString = params.toString();
  return paramString ? `?${paramString}` : '';
}

/**
 * Append UTM parameters to a URL
 */
export function appendUTMToURL(url: string, utmParams?: UTMParams): string {
  const params = utmParams || getAllUTMParams();

  if (Object.keys(params).length === 0) {
    return url;
  }

  try {
    const urlObj = new URL(url, window.location.origin);

    // Add UTM params only if they don't already exist
    Object.entries(params).forEach(([key, value]) => {
      if (value && !urlObj.searchParams.has(key)) {
        urlObj.searchParams.set(key, value);
      }
    });

    return urlObj.toString();
  } catch (e) {
    // If URL parsing fails, return original
    return url;
  }
}

/**
 * Initialize UTM tracking
 * Call this on app load to capture and store UTM parameters
 */
export function initializeUTMTracking(): void {
  if (typeof window === 'undefined') return;

  const currentUTMs = getCurrentUTMParams();

  if (Object.keys(currentUTMs).length > 0) {
    saveUTMParams(currentUTMs);
  }
}

/**
 * Append UTM parameters to all links on the page
 * Useful for external links (internal navigation handled by Next.js)
 */
export function appendUTMToAllLinks(): void {
  if (typeof window === 'undefined') return;

  const utmParams = getAllUTMParams();

  if (Object.keys(utmParams).length === 0) return;

  document.querySelectorAll('a[href]').forEach((link) => {
    try {
      const anchor = link as HTMLAnchorElement;
      const url = new URL(anchor.href, window.location.origin);

      // Only append to external links or tel: links
      if (url.origin !== window.location.origin || anchor.href.startsWith('tel:')) {
        Object.entries(utmParams).forEach(([key, value]) => {
          if (value && !url.searchParams.has(key)) {
            url.searchParams.set(key, value);
          }
        });

        anchor.href = url.toString();
      }
    } catch (e) {
      // Ignore invalid links (like anchors: "#")
    }
  });
}
