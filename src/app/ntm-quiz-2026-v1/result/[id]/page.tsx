'use client';

import { useParams, useRouter } from 'next/navigation';
import { Phone, RotateCcw, DollarSign, Shield, MapPin, Heart } from 'lucide-react';
import { useQuiz } from '@/contexts/QuizContext';
import { RESULT_CONTENT, ResultScreenId } from '@/constants/quiz-data';
import Colors from '@/constants/colors';

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

export default function ResultPage() {
  const params = useParams();
  const router = useRouter();
  const { answers, resetQuiz } = useQuiz();

  const resultId = params.id as ResultScreenId;
  const result = RESULT_CONTENT[resultId];

  if (!result) {
    return <div>Result not found</div>;
  }

  const isEarlyExit = resultId === 'R08' || resultId === 'R09';
  const showMedicareOverride = !answers.hasPartAB && !isEarlyExit;

  const handleStartOver = () => {
    resetQuiz();
    router.push('/ntm-quiz-2026-v1/splash');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: Colors.background }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '24px', paddingBottom: '100px' }}>
        <div style={{ backgroundColor: Colors.primary + '10', borderRadius: '20px', padding: '8px 16px', display: 'inline-block', marginBottom: '16px' }}>
          <span style={{ fontSize: '13px', fontWeight: '600', color: Colors.primary, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {result.subtitle}
          </span>
        </div>

        <h1 style={{ fontSize: '32px', fontWeight: '700', color: Colors.text, lineHeight: '1.2', marginBottom: '24px' }}>
          {result.title}
        </h1>

        {showMedicareOverride && (
          <div style={{ backgroundColor: Colors.warning + '15', borderLeft: `4px solid ${Colors.warning}`, borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
            <p style={{ fontSize: '15px', lineHeight: '24px', color: Colors.text, margin: 0, fontWeight: '500' }}>
              <strong>Important:</strong> You mentioned you're not yet enrolled in both Medicare Part A and Part B. Before choosing a supplemental plan, you'll need to get enrolled in Original Medicare first.
            </p>
          </div>
        )}

        {result.whyHeader && result.whyText && (
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: Colors.text, marginBottom: '12px' }}>
              {result.whyHeader}
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '28px', color: Colors.textSecondary, whiteSpace: 'pre-line' }}>
              {result.whyText}
            </p>
          </div>
        )}

        {result.benefits && result.benefits.length > 0 && (
          <div style={{ marginBottom: '32px' }}>
            {result.benefits.map((benefit, idx) => {
              const IconComponent = iconMap[benefit.icon] || Shield;
              return (
                <div key={idx} style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: Colors.primaryLight + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <IconComponent size={24} color={Colors.primary} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', color: Colors.text, marginBottom: '4px' }}>
                      {benefit.title}
                    </h3>
                    <p style={{ fontSize: '14px', lineHeight: '22px', color: Colors.textSecondary, margin: 0 }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {result.importantNote && (
          <div style={{ backgroundColor: Colors.backgroundDark, borderRadius: '12px', padding: '20px', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: Colors.text, marginBottom: '12px' }}>
              Important to Know
            </h3>
            <p style={{ fontSize: '15px', lineHeight: '26px', color: Colors.textSecondary, margin: 0, whiteSpace: 'pre-line' }}>
              {result.importantNote}
            </p>
          </div>
        )}

        {result.nextStepHeader && (
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: Colors.text, marginBottom: '16px' }}>
              {result.nextStepHeader}
            </h2>
            {result.nextStepIntro && (
              <p style={{ fontSize: '16px', lineHeight: '26px', color: Colors.textSecondary, marginBottom: '20px' }}>
                {result.nextStepIntro}
              </p>
            )}
            {result.nextStepItems && result.nextStepItems.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: Colors.text, marginBottom: '6px' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '15px', lineHeight: '24px', color: Colors.textSecondary, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '40px' }}>
          <button
            onClick={() => window.location.href = 'tel:1-800-MEDICARE'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: Colors.primary,
              color: Colors.white,
              padding: '18px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(10, 92, 92, 0.2)',
            }}
          >
            <Phone size={20} />
            Call for Free Consultation
          </button>

          <button
            onClick={handleStartOver}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: Colors.white,
              color: Colors.text,
              padding: '16px',
              borderRadius: '12px',
              border: `1px solid ${Colors.border}`,
              fontSize: '15px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            <RotateCcw size={18} />
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
}
