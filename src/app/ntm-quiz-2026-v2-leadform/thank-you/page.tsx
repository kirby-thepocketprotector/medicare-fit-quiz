'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Check } from 'lucide-react';
import { useQuiz } from '@/contexts/QuizContext';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const { contactInfo } = useQuiz();

  // Get first name from context or URL parameter
  const firstName = contactInfo?.firstName || searchParams.get('name') || 'there';

  useEffect(() => {
    // Track thank you page view if needed
    // trackThankYouView();

    // Trigger Ringba to process this page after mount
    if (typeof window !== 'undefined' && (window as any).Ringba) {
      try {
        // Give Ringba time to initialize
        setTimeout(() => {
          if (typeof (window as any).Ringba.processDOM === 'function') {
            (window as any).Ringba.processDOM();
          } else if (typeof (window as any).Ringba.refresh === 'function') {
            (window as any).Ringba.refresh();
          } else if (typeof (window as any).Ringba.update === 'function') {
            (window as any).Ringba.update();
          }
        }, 500);
      } catch (error) {
        console.debug('Ringba manual refresh failed:', error);
      }
    }
  }, []);

  const benefitsList = [
    'Review your personalized recommendation in detail',
    'Help make sure your doctors and drugs are covered for whichever path you choose',
    'Go over any extra benefits you may qualify for',
    'Help you understand important deadlines and avoid penalties',
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FAFAFA',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '32px 24px',
    }}>
      <div style={{
        maxWidth: '500px',
        width: '100%',
        margin: '0 auto',
      }}>
        {/* Success Icon */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '32px',
        }}>
          <div style={{
            position: 'relative',
            width: '60px',
            height: '60px',
          }}>
            {/* Circle outline using SVG for exact match */}
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            >
              <circle
                cx="30"
                cy="30"
                r="27"
                stroke="#4CAF50"
                strokeWidth="4"
                fill="none"
              />
            </svg>
            {/* Checkmark */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}>
              <Check size={28} color="#4CAF50" strokeWidth={3.5} />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 style={{
          color: '#1A1F2C',
          fontSize: '26px',
          fontWeight: '700',
          lineHeight: '34px',
          marginBottom: '32px',
          textAlign: 'center',
        }}>
          Thanks, {firstName}! We&apos;ll be in touch with your results shortly.
        </h1>

        {/* Benefits Section - White Card */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E5E7EB',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        }}>
          <h2 style={{
            color: '#1A1F2C',
            fontSize: '17px',
            fontWeight: '600',
            marginBottom: '20px',
            marginTop: '0px',
          }}>
            We&apos;ll be reaching out to:
          </h2>

          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}>
            {benefitsList.map((benefit, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: index < benefitsList.length - 1 ? '16px' : '0',
                }}
              >
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: '#0A5C5C',
                  marginTop: '8px',
                  flexShrink: 0,
                }}></div>
                <span style={{
                  color: '#5A6275',
                  fontSize: '15px',
                  lineHeight: '24px',
                }}>
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action Text */}
        <p style={{
          color: '#5A6275',
          fontSize: '15px',
          lineHeight: '22px',
          textAlign: 'center',
          marginBottom: '16px',
        }}>
          Don&apos;t want to wait? Call to get your result now
        </p>

        {/* Call Now Button - Same structure as result page */}
        <a
          href="tel:18449170659"
          data-ringba-number="18449170659"
          className="ringba-phone"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
          <span data-ringba-swap="true">Call Now</span>
        </a>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div>Loading...</div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
