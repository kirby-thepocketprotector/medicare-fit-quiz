'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initializeUTMTracking, appendUTMToAllLinks } from '@/utils/utm';

/**
 * UTMTracker Component
 *
 * Initializes UTM tracking on mount and captures UTM parameters from URL.
 * Runs on every page to ensure UTM params are captured and persisted.
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
