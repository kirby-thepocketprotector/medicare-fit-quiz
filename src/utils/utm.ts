/**
 * Query Parameter Management
 *
 * Captures ALL query parameters from the current URL without any persistence/storage.
 * Parameters are read directly from the URL on each page and passed along during navigation.
 * This includes UTM parameters, ad platform click IDs (fbclid, gclid, etc.), and any custom parameters.
 */

export interface UTMParams {
  [key: string]: string | undefined;
}

/**
 * Extract ALL query parameters from URL search params
 * Captures everything: UTM params, fbclid, gclid, custom parameters, etc.
 *
 * Best practice: Capture all parameters to ensure no tracking data is lost
 */
export function extractUTMParams(searchParams: URLSearchParams): UTMParams {
  const params: UTMParams = {};

  // Capture ALL query parameters
  searchParams.forEach((value, key) => {
    // Store with lowercase key for consistency
    const normalizedKey = key.toLowerCase();

    // Only store non-empty values
    if (value && value.trim() !== '') {
      params[normalizedKey] = value;
    }
  });

  return params;
}

/**
 * Get all query parameters from current URL
 * No storage - always reads fresh from URL
 */
export function getCurrentUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};

  const urlParams = new URLSearchParams(window.location.search);
  return extractUTMParams(urlParams);
}

/**
 * Get all query parameters (alias for getCurrentUTMParams)
 * Kept for backward compatibility with existing code
 */
export function getAllUTMParams(): UTMParams {
  return getCurrentUTMParams();
}

/**
 * Convert query params object to URL search params string
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
 * Append query parameters to a URL
 */
export function appendUTMToURL(url: string, utmParams?: UTMParams): string {
  const params = utmParams || getAllUTMParams();

  if (Object.keys(params).length === 0) {
    return url;
  }

  try {
    const urlObj = new URL(url, window.location.origin);

    // Add params only if they don't already exist in target URL
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
 * Initialize query parameter tracking
 * Logs current parameters in development mode (no storage)
 */
export function initializeUTMTracking(): void {
  if (typeof window === 'undefined') return;

  const currentParams = getCurrentUTMParams();

  // Debug logging in development
  if (process.env.NODE_ENV === 'development') {
    console.log('🔍 Query Parameters Detected:', {
      currentURL: window.location.href,
      params: currentParams,
      paramCount: Object.keys(currentParams).length,
    });
  }
}

/**
 * Append query parameters to all links on the page
 * Best practice: Only append to external links and skip anchors/javascript links
 */
export function appendUTMToAllLinks(): void {
  if (typeof window === 'undefined') return;

  const params = getAllUTMParams();

  // If no params exist, nothing to do
  if (Object.keys(params).length === 0) return;

  document.querySelectorAll('a[href]').forEach((link) => {
    try {
      const anchor = link as HTMLAnchorElement;
      const href = anchor.getAttribute('href');

      // Skip anchor-only links, javascript links, and tel/mailto links
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('javascript:') ||
        href.startsWith('tel:') ||
        href.startsWith('mailto:')
      ) {
        return;
      }

      const url = new URL(href, window.location.origin);

      // Only append to external links (different origin)
      if (url.origin !== window.location.origin) {
        // Merge params: existing URL params take precedence
        Object.entries(params).forEach(([key, value]) => {
          if (value && !url.searchParams.has(key)) {
            url.searchParams.set(key, value);
          }
        });

        anchor.href = url.toString();
      }
    } catch (e) {
      // Ignore invalid URLs
      console.debug('Could not process link:', link, e);
    }
  });
}
