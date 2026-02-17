'use client';

import { useEffect } from 'react';
import { Calendar } from 'lucide-react';
import QuizHeader from '@/components/QuizHeader';
import ContinueButton from '@/components/ContinueButton';
import Colors from '@/constants/colors';
import { trackViewInIEP } from '@/utils/analytics';
import { useNavigateWithUTM } from '@/hooks/useNavigateWithUTM';

export default function Q01APage() {
  const router = useNavigateWithUTM();

  useEffect(() => {
    trackViewInIEP();
    // Prefetch next route for instant navigation
    router.prefetch('/ntm-quiz-2026-v1-leadform/q02');
  }, []); // Empty deps to run only once on mount

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: Colors.background,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <QuizHeader currentStep={1} totalSteps={10} />

      <div style={{
        flex: 1,
        padding: '20px',
        paddingTop: '4px',
        maxWidth: '600px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            backgroundColor: Colors.primary + '12',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '12px',
          }}>
            <Calendar size={20} color={Colors.primary} strokeWidth={2.5} />
          </div>

          <h1 style={{
            fontSize: '26px',
            fontWeight: '700',
            color: Colors.text,
            lineHeight: '32px',
            letterSpacing: '-0.4px',
            margin: 0,
          }}>
            You&apos;re in a very important enrollment window
          </h1>
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', marginBottom: '14px' }}>
            <div style={{
              width: '3px',
              backgroundColor: Colors.primary + '25',
              borderRadius: '2px',
              marginRight: '12px',
            }} />
            <p style={{
              flex: 1,
              fontSize: '15px',
              lineHeight: '22px',
              color: Colors.textSecondary,
              margin: 0,
            }}>
              You&apos;re in your Initial Enrollment Period — a one-time window that lasts until 3 months after your 65th birthday when you have the most flexibility choosing Medicare coverage.
            </p>
          </div>

          <div style={{ display: 'flex', marginBottom: '14px' }}>
            <div style={{
              width: '3px',
              backgroundColor: Colors.primary + '25',
              borderRadius: '2px',
              marginRight: '12px',
            }} />
            <p style={{
              flex: 1,
              fontSize: '15px',
              lineHeight: '22px',
              color: Colors.textSecondary,
              margin: 0,
            }}>
              During this period, you can explore all types of plans, avoid late enrollment penalties, and lock in choices while your options are widest.
            </p>
          </div>

          <div style={{ display: 'flex', marginBottom: '14px' }}>
            <div style={{
              width: '3px',
              backgroundColor: Colors.primary + '25',
              borderRadius: '2px',
              marginRight: '12px',
            }} />
            <p style={{
              flex: 1,
              fontSize: '15px',
              lineHeight: '22px',
              color: Colors.textSecondary,
              margin: 0,
            }}>
              It&apos;s also the only time Medigap plans must accept you as-is — no health questions, higher pricing, or denials. After this window, those protections often disappear.
            </p>
          </div>

          <div style={{
            backgroundColor: Colors.primary + '08',
            borderRadius: '12px',
            padding: '14px',
            marginTop: '4px',
            borderLeft: `3px solid ${Colors.primary}`,
          }}>
            <p style={{
              fontSize: '15px',
              lineHeight: '22px',
              color: Colors.text,
              fontWeight: '500',
              margin: 0,
            }}>
              That&apos;s why now is the best time to understand your options, even if you don&apos;t plan to enroll right away.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '24px' }}>
          <ContinueButton onPress={() => router.push('/ntm-quiz-2026-v1-leadform/q02')} />
        </div>
      </div>
    </div>
  );
}
