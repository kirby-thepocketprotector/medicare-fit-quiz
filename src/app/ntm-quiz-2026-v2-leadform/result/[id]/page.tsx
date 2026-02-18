'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Phone, DollarSign, Shield, MapPin, Heart } from 'lucide-react';
import { useQuiz } from '@/contexts/QuizContext';
import { RESULT_CONTENT, ResultScreenId, QuizAnswers } from '@/constants/quiz-data';
import { useNavigateWithUTM } from '@/hooks/useNavigateWithUTM';
import RingbaPhoneNumber from '@/components/RingbaPhoneNumber';
import {
  trackViewResultMANonVet,
  trackViewResultMSNonVet,
  trackViewResultDSNP,
  trackViewResultMAVetVA,
  trackViewResultMSVetVA,
  trackViewResultMAVetNonVA,
  trackViewResultMSVetNonVA,
  trackViewResultAlreadyEnrolledMA,
  trackViewResultAlreadyEnrolledMS,
  trackResultCall,
  trackQuizRestart,
} from '@/utils/analytics';

const iconMap: Record<string, any> = {
  'dollar-sign': DollarSign,
  'shield': Shield,
  'map-pin': MapPin,
  'pill': Heart,
  'smile': Heart,
  'gift': Heart,
  'plane': MapPin,
  'credit-card': DollarSign,
  'award': Shield,
  'stethoscope': Heart,
  'users': Heart,
};

// Helper function to get the recommended plan type based on result ID
function getRecommendedPlanType(resultId: ResultScreenId): string {
  const planTypeMap: Record<ResultScreenId, string> = {
    R01: 'Medicare Advantage plan',
    R02: 'Medigap (Medicare Supplement) plan',
    R03: 'Dual Eligible Medicare Advantage plan',
    R04: 'VA-Friendly Medicare Advantage plan',
    R05: 'Medigap (Medicare Supplement) plan',
    R06: 'VA-Friendly Medicare Advantage plan',
    R07: 'Medigap (Medicare Supplement) plan',
    R08: 'Medicare Advantage plan',
    R09: 'Medigap (Medicare Supplement) plan',
  };
  return planTypeMap[resultId] || 'Medicare plan';
}

export default function ResultPage() {
  const params = useParams();
  const router = useNavigateWithUTM();
  const { answers, resetQuiz } = useQuiz();

  const resultId = params.id as ResultScreenId;
  const result = RESULT_CONTENT[resultId];

  if (!result) {
    return <div>Result not found</div>;
  }

  const isEarlyExit = resultId === 'R08' || resultId === 'R09';
  const showMedicareOverride = !answers.hasPartAB && !isEarlyExit;
  const recommendedPlanType = getRecommendedPlanType(resultId);

  useEffect(() => {
    // Track result page view based on result ID with pass-through variables
    // Only track once on mount, not when answers change
    const trackingMap: Record<ResultScreenId, (quizAnswers: QuizAnswers) => void> = {
      R01: trackViewResultMANonVet,
      R02: trackViewResultMSNonVet,
      R03: trackViewResultDSNP,
      R04: trackViewResultMAVetVA,
      R05: trackViewResultMSVetVA,
      R06: trackViewResultMAVetNonVA,
      R07: trackViewResultMSVetNonVA,
      R08: trackViewResultAlreadyEnrolledMA,
      R09: trackViewResultAlreadyEnrolledMS,
    };

    const trackFn = trackingMap[resultId];
    if (trackFn) {
      trackFn(answers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only track once on mount

  const handleCallClick = () => {
    trackResultCall();
    // The RingbaPhoneNumber component will handle the tel: link
  };

  const handleStartOver = () => {
    trackQuizRestart();
    resetQuiz();
    router.push('/ntm-quiz-2026-v2-leadform/');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF9F7', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: '44px', paddingBottom: '34px', overflowY: 'auto', overflowX: 'hidden', WebkitOverflowScrolling: 'touch' as any }}>
        <div style={{ padding: '24px', paddingBottom: '180px', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              alignSelf: 'flex-start',
              backgroundColor: 'rgba(46,158,107,0.08)',
              borderRadius: '16px',
              padding: '6px 14px',
              marginBottom: '16px'
            }}>
              <span style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(46,158,107,1.00)' }}>
                {result.subtitle}
              </span>
            </div>

            <h1 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1A1F2C',
              lineHeight: '40px',
              letterSpacing: '-0.5px',
              marginBottom: '24px'
            }}>
              {result.title}
            </h1>

            {showMedicareOverride && (
              <div style={{
                backgroundColor: 'rgba(229,168,75,0.06)',
                border: '1px solid rgba(229,168,75,0.19)',
                borderLeft: '3px solid #E5A84B',
                borderRadius: '12px',
                padding: '14px 16px',
                marginBottom: '24px'
              }}>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '22px',
                  color: '#1A1F2C',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  <strong>Important:</strong> You mentioned you're not yet enrolled in both Medicare Part A and Part B. Before choosing a supplemental plan, you'll need to get enrolled in Original Medicare first.
                </p>
              </div>
            )}

            {result.whyHeader && result.whyText && (
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#1A1F2C',
                  marginBottom: '12px'
                }}>
                  {result.whyHeader}
                </h2>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '26px',
                  color: '#5A6275',
                  whiteSpace: 'pre-line',
                  margin: 0
                }}>
                  {result.whyText}
                </p>
              </div>
            )}

            {result.benefits && result.benefits.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                {result.benefits.map((benefit, idx) => {
                  const IconComponent = iconMap[benefit.icon] || Shield;
                  return (
                    <div key={idx} style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(232,230,227,1.00)',
                      borderRadius: '12px',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '14px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(13,122,122,0.08)',
                        borderRadius: '22px',
                        width: '44px',
                        height: '44px',
                        flexShrink: 0
                      }}>
                        <IconComponent size={20} color="#0A5C5C" strokeWidth={2} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          fontSize: '15px',
                          fontWeight: '600',
                          color: '#1A1F2C',
                          marginBottom: '4px',
                          margin: 0
                        }}>
                          {benefit.title}
                        </h3>
                        <p style={{
                          fontSize: '14px',
                          lineHeight: '20px',
                          color: '#5A6275',
                          margin: 0
                        }}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {result.importantNote && (
              <div style={{
                backgroundColor: 'rgba(229,168,75,0.06)',
                border: '1px solid rgba(229,168,75,0.19)',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '24px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '10px'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E5A84B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                  <h3 style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#1A1F2C',
                    margin: 0
                  }}>
                    Important to Know
                  </h3>
                </div>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: '#5A6275',
                  margin: 0,
                  whiteSpace: 'pre-line'
                }}>
                  {result.importantNote}
                </p>
              </div>
            )}

            {showMedicareOverride ? (
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#1A1F2C',
                  letterSpacing: '-0.3px',
                  marginBottom: '12px'
                }}>
                  Next Step: Get Enrolled in Medicare Part A & Part B
                </h2>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '24px',
                  color: '#5A6275',
                  marginBottom: '24px'
                }}>
                  Before you can move forward with your recommended plan, you'll first need to enroll in Original Medicare (Part A and Part B). This is a required first step—but you don't have to figure it out on your own.
                </p>

                <h3 style={{
                  fontSize: '17px',
                  fontWeight: '600',
                  color: '#1A1F2C',
                  marginBottom: '16px'
                }}>
                  How Pocket Protector Helps
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(13,122,122,0.08)',
                      borderRadius: '14px',
                      width: '28px',
                      height: '28px',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A5C5C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '24px',
                      color: '#5A6275',
                      margin: 0,
                      flex: 1
                    }}>
                      When and how to enroll in Part A & Part B
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(13,122,122,0.08)',
                      borderRadius: '14px',
                      width: '28px',
                      height: '28px',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A5C5C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '24px',
                      color: '#5A6275',
                      margin: 0,
                      flex: 1
                    }}>
                      What to expect after you enroll
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(13,122,122,0.08)',
                      borderRadius: '14px',
                      width: '28px',
                      height: '28px',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A5C5C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '24px',
                      color: '#5A6275',
                      margin: 0,
                      flex: 1
                    }}>
                      Choosing the {recommendedPlanType} that fits your needs once your Medicare is active
                    </p>
                  </div>
                </div>


              </div>
            ) : (
              result.nextStepHeader && (
                <div style={{ marginBottom: '20px' }}>
                  <h2 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#1A1F2C',
                    letterSpacing: '-0.3px',
                    marginBottom: '12px'
                  }}>
                    {result.nextStepHeader}
                  </h2>
                  {result.nextStepIntro && (
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '24px',
                      color: '#5A6275',
                      marginBottom: '20px'
                    }}>
                      {result.nextStepIntro}
                    </p>
                  )}
                  {result.nextStepItems && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {result.nextStepItems.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(13,122,122,0.08)',
                            borderRadius: '14px',
                            width: '28px',
                            height: '28px',
                            flexShrink: 0,
                            marginTop: '2px'
                          }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A5C5C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </div>
                          <div style={{ flex: 1 }}>
                            <h4 style={{
                              fontSize: '15px',
                              fontWeight: '600',
                              color: '#1A1F2C',
                              marginBottom: '4px',
                              margin: 0
                            }}>
                              {item.title}
                            </h4>
                            <p style={{
                              fontSize: '14px',
                              lineHeight: '22px',
                              color: '#5A6275',
                              margin: 0
                            }}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}

            <div style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(232,230,227,1.00)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '16px'
            }}>
              {showMedicareOverride ? (
                <p style={{
                  fontSize: '15px',
                  lineHeight: '24px',
                  color: '#1A1F2C',
                  margin: 0,
                }}>
                  Don't guess or go it alone. Call our team and we'll help you enroll correctly, on time, and without missing any important steps.
                </p>
              ) : (
                <>
                  <p style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#1A1F2C',
                    marginBottom: '6px',
                    margin: 0
                  }}>
                    Our help is always free
                  </p>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '22px',
                    color: '#5A6275',
                    margin: 0
                  }}>
                    Medicare plans cost the same whether you enroll with us or on your own. We never charge anything for our help.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

      {/* Fixed button container - stays visible at bottom */}
      <div style={{
        position: 'fixed',
        bottom: '0px',
        left: '0px',
        right: '0px',
        backgroundColor: '#FAF9F7',
        borderTop: '1px solid rgba(232,230,227,1.00)',
        padding: '16px 16px calc(24px + env(safe-area-inset-bottom)) 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: 1000,
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.05)',
        maxWidth: '100vw',
        width: '100%',
      }}>
          <RingbaPhoneNumber
            defaultNumber="18449170659"
            displayFormat="Call Now"
            onCallClick={handleCallClick}
            asLink={true}
            showNumber={true}
            className="ringba-phone"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              backgroundColor: '#0A5C5C',
              color: '#FFFFFF',
              padding: '18px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '17px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0px 4px 8px rgba(10,92,92,0.30)',
              transition: 'all 0.15s ease',
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
              textDecoration: 'none',
              width: '100%',
            }}
          >
            <Phone size={20} strokeWidth={2} />
          </RingbaPhoneNumber>

          <button
            onClick={handleStartOver}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              backgroundColor: 'transparent',
              color: 'rgba(139,146,165,1.00)',
              border: 'none',
              fontSize: '15px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            Start Over
          </button>
      </div>
    </div>
  );
}
