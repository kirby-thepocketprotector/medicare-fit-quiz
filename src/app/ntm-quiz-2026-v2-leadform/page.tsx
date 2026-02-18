'use client';

import { useEffect } from 'react';
import { trackQuizStart, clearAllTrackingGuards } from '@/utils/analytics';
import { useNavigateWithUTM } from '@/hooks/useNavigateWithUTM';
import { useQuiz } from '@/contexts/QuizContext';
import ContinueButton from '@/components/ContinueButton';

export default function SplashPage() {
  const router = useNavigateWithUTM();
  const { resetQuiz } = useQuiz();

  useEffect(() => {
    // Reset quiz data and analytics when landing on splash page
    // This ensures a fresh start for analytics tracking
    resetQuiz();

    // Track quiz start (this will fire now that guards are cleared)
    trackQuizStart();

    // Prefetch the first question for instant navigation
    router.prefetch('/ntm-quiz-2026-v2-leadform/q01');
  }, []); // Empty deps to run only once on mount

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#FAFAFA',
      minHeight: '100vh',
    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '32px',
        paddingRight: '32px',
        paddingTop: '60px',
        paddingBottom: '40px',
      }}>
        <div style={{
          maxWidth: '400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
        }}>
          {/* Main Heading */}
          <h1 style={{
            color: '#1A1F2C',
            fontSize: '28px',
            fontWeight: '700',
            lineHeight: '36px',
            marginBottom: '20px',
            textAlign: 'center',
          }}>
            MediGap vs. Medicare Advantage
          </h1>

          {/* Subheading 1 */}
          <p style={{
            color: '#1A1F2C',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '24px',
            marginBottom: '16px',
            textAlign: 'center',
          }}>
            It&apos;s one of the most important Medicare decisions you&apos;ll make.
          </p>

          {/* Subheading 2 */}
          <p style={{
            color: '#5B6B7F',
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '22px',
            marginBottom: '32px',
            textAlign: 'center',
          }}>
            This 2-minute assessment helps you understand the trade-offs before you choose.
          </p>

          {/* White Card Wrapper */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E5E7EB',
            padding: '24px',
            marginBottom: '32px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          }}>
            {/* Section Heading */}
            <h2 style={{
              color: '#1A1F2C',
              fontSize: '17px',
              fontWeight: '600',
              lineHeight: '24px',
              marginBottom: '20px',
              marginTop: '0px',
            }}>
              In 2 minutes, you&apos;ll learn:
            </h2>

            {/* Bullet Points */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10" fill="#0A5C5C"/>
                  <path d="M9 12l2 2 4-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p style={{
                  color: '#1A1F2C',
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: '22px',
                  margin: 0,
                }}>
                  Which path better covers your specific doctors and drugs
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10" fill="#0A5C5C"/>
                  <path d="M9 12l2 2 4-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p style={{
                  color: '#1A1F2C',
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: '22px',
                  margin: 0,
                }}>
                  What you might actually pay each year under each option
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10" fill="#0A5C5C"/>
                  <path d="M9 12l2 2 4-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p style={{
                  color: '#1A1F2C',
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: '22px',
                  margin: 0,
                }}>
                  Whether you qualify for additional benefits (Veteran, Medicaid, etc.)
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10" fill="#0A5C5C"/>
                  <path d="M9 12l2 2 4-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p style={{
                  color: '#1A1F2C',
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: '22px',
                  margin: 0,
                }}>
                  If you&apos;re in your Initial Enrollment Period — and how it affects your options
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div style={{ marginBottom: '12px' }}>
            <ContinueButton
              onPress={() => router.push('/ntm-quiz-2026-v2-leadform/q01')}
              label="Get My Personalized Recommendation"
            />
          </div>

          {/* Footer Text */}
        
        </div>
      </div>
    </div>
  );
}
