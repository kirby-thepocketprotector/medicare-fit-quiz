'use client';

import { useEffect } from 'react';
import { trackQuizStart } from '@/utils/analytics';
import { useNavigateWithUTM } from '@/hooks/useNavigateWithUTM';

export default function SplashPage() {
  const router = useNavigateWithUTM();

  useEffect(() => {
    trackQuizStart();
    // Prefetch the first question for instant navigation
    router.prefetch('/ntm-quiz-2026-v1/q01');
  }, []); // Empty deps to run only once on mount

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#FAF9F7',
      minHeight: '100vh',
    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '44px 0 34px',
      }}>
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'center',
              flexDirection: 'row',
              gap: '5px',
              marginBottom: '16px',
              opacity: 0.8,
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0A5C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle fill="none" stroke="#0A5C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="10"></circle>
                <polyline fill="none" stroke="#0A5C5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points="12 6 12 12 16 14"></polyline>
              </svg>
              <div style={{
                color: '#0A5C5C',
                fontSize: '13px',
                fontWeight: '500',
              }}>
                2 minutes
              </div>
            </div>
            <div style={{
              color: '#1A1F2C',
              fontSize: '22px',
              fontWeight: '700',
              letterSpacing: '-0.3px',
              lineHeight: '30px',
              marginBottom: '28px',
              textAlign: 'center',
            }}>
              This short quiz will help you decide between Medigap vs Medicare Advantage.
            </div>
        <div style={{
          backgroundColor: '#FFFFFF',
          borderColor: '#F0EEEB',
          borderRadius: '12px',
          borderWidth: '1px',
          borderStyle: 'solid',
          paddingBottom: '4px',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: '14px',
          marginLeft: '14px',
          marginRight: '14px',
        }}>
          <div style={{
            color: '#8B92A5',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.5px',
            marginBottom: '10px',
            textTransform: 'uppercase',
          }}>
            It looks at:
          </div>
          <div style={{
            gap: '0px',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '11px',
              paddingBottom: '11px',
              borderBottomColor: '#F0EEEB',
              borderBottomWidth: '1px',
              borderBottomStyle: 'solid',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 2v4"></path>
                <path fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16 2v4"></path>
                <rect fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" x="3" y="4" rx="2"></rect>
                <path fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 10h18"></path>
              </svg>
              <div style={{
                color: '#1A1F2C',
                flex: 1,
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '20px',
              }}>
                Your eligibility &amp; enrollment timing
              </div>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '11px',
              paddingBottom: '11px',
              borderBottomColor: '#F0EEEB',
              borderBottomWidth: '1px',
              borderBottomStyle: 'solid',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="8" r="6"></circle>
              </svg>
              <div style={{
                color: '#1A1F2C',
                flex: 1,
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '20px',
              }}>
                Veteran and Medicaid status
              </div>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '11px',
              paddingBottom: '11px',
              borderBottomColor: '#F0EEEB',
              borderBottomWidth: '1px',
              borderBottomStyle: 'solid',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" x1="12" x2="12" y1="2" y2="22"></line>
                <path fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <div style={{
                color: '#1A1F2C',
                flex: 1,
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '20px',
              }}>
                Your budget and cost preferences
              </div>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '11px',
              paddingBottom: '11px',
              borderBottomColor: '#F0EEEB',
              borderBottomWidth: '1px',
              borderBottomStyle: 'solid',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M11 2v2"></path>
                <path fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 2v2"></path>
                <path fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                <path fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 15a6 6 0 0 0 12 0v-3"></path>
                <circle fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" cx="20" cy="10" r="2"></circle>
              </svg>
              <div style={{
                color: '#1A1F2C',
                flex: 1,
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '20px',
              }}>
                Your doctor choice preferences
              </div>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '12px',
              paddingTop: '11px',
              paddingBottom: '11px',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path fill="none" stroke="#0A5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              <div style={{
                color: '#1A1F2C',
                flex: 1,
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '20px',
              }}>
                Your health care needs
              </div>
            </div>
          </div>
        </div>

          </div>
        </div>

      </div>
      <div style={{
        width: '100%',
        paddingBottom: '8px',
        paddingLeft: '24px',
        paddingRight: '24px',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '24px',
      }}>
        <div
          onClick={() => router.push('/ntm-quiz-2026-v1/q01')}
          style={{
            cursor: 'pointer',
            userSelect: 'none',
            touchAction: 'manipulation',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0A5C5C',
            borderRadius: '12px',
            boxShadow: '0px 4px 8px rgba(10, 92, 92, 0.25)',
            paddingTop: '16px',
            paddingBottom: '16px',
          }}
        >
          <div style={{
            color: '#FFFFFF',
            fontSize: '17px',
            fontWeight: '600',
          }}>
            Start the quiz
          </div>
        </div>
        <div style={{
          color: '#8B92A5',
          fontSize: '13px',
          marginTop: '10px',
          textAlign: 'center',
        }}>
          Takes about 2 minutes • No obligation
        </div>
      </div>
    </div>
  );
}
