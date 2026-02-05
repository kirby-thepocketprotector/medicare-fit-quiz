'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useNavigation } from '@/contexts/NavigationContext';

export default function NavigationLoader() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const { isNavigating, stopNavigation } = useNavigation();

  useEffect(() => {
    // When pathname changes, complete the loading
    if (isNavigating) {
      setProgress(100);
      const timer = setTimeout(() => {
        stopNavigation();
        setProgress(0);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [pathname, isNavigating, stopNavigation]);

  useEffect(() => {
    let progressTimer: NodeJS.Timeout;

    if (isNavigating) {
      // Start at 10% immediately
      setProgress(10);

      // Gradually increase progress
      progressTimer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 10;
        });
      }, 100);
    } else {
      setProgress(0);
    }

    return () => {
      if (progressTimer) clearInterval(progressTimer);
    };
  }, [isNavigating]);

  // Auto-hide loading if it's been showing for too long (failsafe)
  useEffect(() => {
    if (isNavigating) {
      const timeout = setTimeout(() => {
        stopNavigation();
        setProgress(0);
      }, 3000); // Hide after 3 seconds if no navigation

      return () => clearTimeout(timeout);
    }
  }, [isNavigating, stopNavigation]);

  if (!isNavigating && progress === 0) return null;

  return (
    <>
      {/* Thin progress bar at top */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor: 'transparent',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#0A5C5C',
            transition: 'width 0.2s ease, opacity 0.2s ease',
            boxShadow: '0 0 10px rgba(10, 92, 92, 0.5)',
            opacity: progress === 100 ? 0 : 1,
          }}
        />
      </div>
    </>
  );
}
