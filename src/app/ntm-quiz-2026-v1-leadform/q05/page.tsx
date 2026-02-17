'use client';

import { useEffect } from 'react';
import { Scale, User } from 'lucide-react';
import QuizHeader from '@/components/QuizHeader';
import ContinueButton from '@/components/ContinueButton';
import Colors from '@/constants/colors';
import { trackViewBudgetChoiceStart } from '@/utils/analytics';
import { useNavigateWithUTM } from '@/hooks/useNavigateWithUTM';

export default function Q05Page() {
  const router = useNavigateWithUTM();

  useEffect(() => {
    trackViewBudgetChoiceStart();
    // Prefetch next route for instant navigation
    router.prefetch('/ntm-quiz-2026-v1-leadform/q05a');
  }, []); // Empty deps to run only once on mount

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: Colors.background,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <QuizHeader currentStep={7} totalSteps={10} />

      <div style={{
        flex: 1,
        padding: '24px',
        paddingTop: '8px',
        maxWidth: '600px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: Colors.primaryLight + '15',
          padding: '8px 16px',
          borderRadius: '20px',
          marginBottom: '24px',
          gap: '6px',
        }}>
          <Scale size={14} color={Colors.primary} />
          <span style={{
            fontSize: '14px',
            fontWeight: '600',
            color: Colors.primary,
          }}>
            Understanding the tradeoffs
          </span>
        </div>

        <h1 style={{
          fontSize: '24px',
          fontWeight: '700',
          color: Colors.text,
          textAlign: 'center',
          lineHeight: '32px',
          marginBottom: '16px',
          letterSpacing: '-0.3px',
        }}>
          Let&apos;s understand the cost and care tradeoffs between Medicare Advantage and Medigap.
        </h1>

        <p style={{
          fontSize: '17px',
          color: Colors.textSecondary,
          textAlign: 'center',
          marginBottom: '32px',
        }}>
          Instead of theory, let&apos;s follow two real stories.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '32px',
          width: '100%',
        }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '32px',
              backgroundColor: Colors.primaryLight + '15',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px',
            }}>
              <User size={28} color={Colors.primary} />
            </div>
            <p style={{
              fontSize: '18px',
              fontWeight: '700',
              color: Colors.text,
              marginBottom: '4px',
            }}>
              Sam
            </p>
            <p style={{
              fontSize: '13px',
              color: Colors.textMuted,
              textAlign: 'center',
            }}>
              has Medicare Advantage
            </p>
          </div>

          <div style={{ padding: '0 8px' }}>
            <span style={{
              fontSize: '16px',
              fontWeight: '600',
              color: Colors.textMuted,
            }}>
              vs.
            </span>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '32px',
              backgroundColor: Colors.primaryLight + '15',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px',
            }}>
              <User size={28} color={Colors.primary} />
            </div>
            <p style={{
              fontSize: '18px',
              fontWeight: '700',
              color: Colors.text,
              marginBottom: '4px',
            }}>
              Alex
            </p>
            <p style={{
              fontSize: '13px',
              color: Colors.textMuted,
              textAlign: 'center',
            }}>
              has Medigap
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{
            fontSize: '18px',
            color: Colors.textSecondary,
            marginBottom: '4px',
          }}>
            Same illness. Same age.
          </p>
          <p style={{
            fontSize: '18px',
            fontWeight: '700',
            color: Colors.text,
          }}>
            Very different experiences.
          </p>
        </div>

        <div style={{ marginTop: 'auto', width: '100%' }}>
          <ContinueButton
            onPress={() => router.push('/ntm-quiz-2026-v1-leadform/q05a')}
            label="See Sam's story"
          />
        </div>
      </div>
    </div>
  );
}
