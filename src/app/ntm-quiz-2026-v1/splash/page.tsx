'use client';

import { useRouter } from 'next/navigation';
import { Clock, Calendar, HeartPulse, DollarSign, Users, Stethoscope } from 'lucide-react';
import Colors from '@/constants/colors';
import ContinueButton from '@/components/ContinueButton';

export default function SplashPage() {
  const router = useRouter();

  const features = [
    { Icon: Calendar, text: 'Your enrollment timing and eligibility window' },
    { Icon: HeartPulse, text: 'Your veteran or Medicaid status' },
    { Icon: DollarSign, text: 'Your budget and cost priorities' },
    { Icon: Users, text: 'Your doctor preference and flexibility needs' },
    { Icon: Stethoscope, text: 'Your specific healthcare requirements' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: Colors.background,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        flex: 1,
        padding: '24px',
        maxWidth: '600px',
        margin: '0 auto',
        width: '100%',
      }}>
        <div style={{ marginTop: '40px', marginBottom: '32px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: Colors.accent + '15',
            padding: '6px 12px',
            borderRadius: '20px',
            marginBottom: '24px',
          }}>
            <Clock size={16} color={Colors.accent} style={{ marginRight: '6px' }} />
            <span style={{
              fontSize: '14px',
              fontWeight: '600',
              color: Colors.accent,
            }}>
              2 minutes
            </span>
          </div>

          <h1 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: Colors.text,
            lineHeight: '1.2',
            marginBottom: '16px',
          }}>
            This short quiz will help you decide between Medigap vs Medicare Advantage
          </h1>
        </div>

        <div style={{
          backgroundColor: Colors.card,
          border: `1px solid ${Colors.border}`,
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '32px',
        }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: Colors.text,
            marginBottom: '16px',
          }}>
            We'll help you understand:
          </h2>

          {features.map((feature, index) => (
            <div key={index}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '12px 0',
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: Colors.primaryLight + '15',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px',
                  flexShrink: 0,
                }}>
                  <feature.Icon size={18} color={Colors.primary} />
                </div>
                <p style={{
                  fontSize: '15px',
                  color: Colors.text,
                  lineHeight: '1.5',
                  margin: 0,
                }}>
                  {feature.text}
                </p>
              </div>
              {index < features.length - 1 && (
                <div style={{
                  height: '1px',
                  backgroundColor: Colors.borderLight,
                }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{
        padding: '24px',
        backgroundColor: Colors.white,
        borderTop: `1px solid ${Colors.borderLight}`,
        maxWidth: '600px',
        margin: '0 auto',
        width: '100%',
      }}>
        <ContinueButton
          label="Start the quiz"
          onPress={() => router.push('/ntm-quiz-2026-v1/q01')}
        />
        <p style={{
          textAlign: 'center',
          fontSize: '14px',
          color: Colors.textMuted,
          marginTop: '12px',
        }}>
          Takes about 2 minutes • No obligation
        </p>
      </div>
    </div>
  );
}
