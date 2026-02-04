/**
 * useNavigateWithUTM Hook
 *
 * Custom navigation hook that automatically preserves UTM parameters
 * when navigating between pages.
 */

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { getAllUTMParams, utmParamsToString } from '@/utils/utm';

export function useNavigateWithUTM() {
  const router = useRouter();

  const push = useCallback((path: string) => {
    const utmParams = getAllUTMParams();
    const utmString = utmParamsToString(utmParams);

    // Append UTM params to the path
    const pathWithUTM = utmString
      ? `${path}${path.includes('?') ? '&' : '?'}${utmString.substring(1)}`
      : path;

    router.push(pathWithUTM);
  }, [router]);

  const replace = useCallback((path: string) => {
    const utmParams = getAllUTMParams();
    const utmString = utmParamsToString(utmParams);

    // Append UTM params to the path
    const pathWithUTM = utmString
      ? `${path}${path.includes('?') ? '&' : '?'}${utmString.substring(1)}`
      : path;

    router.replace(pathWithUTM);
  }, [router]);

  return {
    push,
    replace,
    back: router.back,
    forward: router.forward,
    refresh: router.refresh,
    prefetch: router.prefetch,
  };
}
