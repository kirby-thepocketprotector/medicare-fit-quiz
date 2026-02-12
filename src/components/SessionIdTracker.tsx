'use client';

import { useEffect } from 'react';

/**
 * SessionIdTracker Component
 *
 * Generates and persists a unique session ID for tracking quiz sessions.
 * The session ID is stored in localStorage and made available globally via window.ntmSessionId
 *
 * This is used for:
 * - Anonymous user tracking without PII
 * - Syncing quiz data to Xano
 * - Correlating quiz responses with analytics
 */
export default function SessionIdTracker() {
  useEffect(() => {
    // Only run on client-side (after hydration)
    if (typeof window === 'undefined') return;

    function getSessionId(): string {
      let sessionId = localStorage.getItem('ntm_session_id');

      if (!sessionId) {
        // Generate unique session ID using UUID format
        sessionId = crypto.randomUUID();
        localStorage.setItem('ntm_session_id', sessionId);
      }

      return sessionId;
    }

    // Make session ID available globally
    const sessionId = getSessionId();
    (window as any).ntmSessionId = sessionId;

    // Wait for PostHog to fully initialize before identifying user
    const identifyInPostHog = () => {
      if (typeof window !== 'undefined' && (window as any).posthog) {
        const posthog = (window as any).posthog;

        // Check if PostHog is fully loaded (has the identify method as a function)
        if (typeof posthog.identify === 'function') {
          try {
            posthog.identify(sessionId);
          } catch (error) {
            console.warn('PostHog identify failed:', error);
          }
        } else {
          // PostHog not ready yet, try again in 100ms
          setTimeout(identifyInPostHog, 100);
        }
      }
    };

    // Start trying to identify after a short delay to let PostHog initialize
    setTimeout(identifyInPostHog, 500);
  }, []);

  return null;
}
