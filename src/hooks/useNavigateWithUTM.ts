/**
 * useNavigateWithUTM Hook
 *
 * Custom navigation hook that automatically preserves UTM parameters
 * when navigating between pages. Optimized for instant navigation.
 */

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { getAllUTMParams, utmParamsToString } from '@/utils/utm';

export function useNavigateWithUTM() {
  const router = useRouter();

  const buildPathWithUTM = useCallback((path: string) => {
    const utmParams = getAllUTMParams();
    const utmString = utmParamsToString(utmParams);

    // Append UTM params to the path
    return utmString
      ? `${path}${path.includes('?') ? '&' : '?'}${utmString.substring(1)}`
      : path;
  }, []);

  const push = useCallback((path: string) => {
    const pathWithUTM = buildPathWithUTM(path);

    // Navigate immediately
    router.push(pathWithUTM);
  }, [router, buildPathWithUTM]);

  const replace = useCallback((path: string) => {
    const pathWithUTM = buildPathWithUTM(path);

    // Navigate immediately
    router.replace(pathWithUTM);
  }, [router, buildPathWithUTM]);

  const prefetch = useCallback((path: string) => {
    const pathWithUTM = buildPathWithUTM(path);
    router.prefetch(pathWithUTM);
  }, [router, buildPathWithUTM]);

  return {
    push,
    replace,
    prefetch,
    back: router.back,
    forward: router.forward,
    refresh: router.refresh,
  };
}
