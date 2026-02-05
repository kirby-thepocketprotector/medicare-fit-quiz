'use client';

import { useEffect } from 'react';

/**
 * Component to cleanup any unwanted elements added by third-party scripts
 * This runs on the client side to remove debug indicators, badges, etc.
 */
export default function CleanupScript() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cleanup = () => {
      // Remove any small fixed/absolute positioned elements that might be badges
      const suspiciousElements = document.querySelectorAll(
        'body > div:not(#__next):not([id^="root"]), body > span'
      );

      suspiciousElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const style = window.getComputedStyle(htmlEl);
        const position = style.position;
        const width = parseInt(style.width);
        const height = parseInt(style.height);

        // If it's fixed or absolute and very small (< 30px), hide it
        if ((position === 'fixed' || position === 'absolute') &&
            (width < 30 || height < 30 || isNaN(width) || isNaN(height))) {
          htmlEl.style.display = 'none';
          htmlEl.style.visibility = 'hidden';
          htmlEl.style.opacity = '0';
        }

        // If it's empty or has suspicious classes/IDs, hide it
        if (
          htmlEl.innerHTML.trim() === '' ||
          htmlEl.className.includes('debug') ||
          htmlEl.className.includes('indicator') ||
          htmlEl.id.includes('debug') ||
          htmlEl.id.includes('gtm') ||
          htmlEl.id.includes('ringba')
        ) {
          htmlEl.style.display = 'none';
        }
      });

      // Remove any z-index: 2147483647 elements (often debug overlays)
      const highZIndexElements = document.querySelectorAll('*');
      highZIndexElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const zIndex = window.getComputedStyle(htmlEl).zIndex;
        if (zIndex === '2147483647') {
          htmlEl.style.display = 'none';
        }
      });
    };

    // Run cleanup on mount
    cleanup();

    // Run cleanup periodically in case elements are added dynamically
    const interval = setInterval(cleanup, 1000);

    // Observer to catch elements added after initial load
    const observer = new MutationObserver(() => {
      cleanup();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: false, // Only watch direct children of body
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}
