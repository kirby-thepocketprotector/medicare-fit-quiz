'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initializeUTMTracking, appendUTMToAllLinks } from '@/utils/utm';

/**
 * UTMTracker Component
 *
 * Detects and logs ALL query parameters from the current URL.
 * This includes UTM params, fbclid, gclid, and any custom tracking parameters.
 * Runs on every page - parameters are passed via URL, no storage used.
 */
export default function UTMTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize UTM tracking on mount
    initializeUTMTracking();

    // Append UTM params to external links
    // Run after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      appendUTMToAllLinks();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return null; // This component doesn't render anything
}
