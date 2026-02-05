'use client';

import { useEffect } from 'react';
import { Minus } from 'lucide-react';
import QuizHeader from '@/components/QuizHeader';
import OptionButton from '@/components/OptionButton';
import { useQuiz } from '@/contexts/QuizContext';
import { determineResult } from '@/constants/quiz-data';
import Colors from '@/constants/colors';
import { trackViewBudgetChoiceDecide } from '@/utils/analytics';
import { useNavigateWithUTM } from '@/hooks/useNavigateWithUTM';

export default function Q05CPage() {
  const router = useNavigateWithUTM();
  const { answers, updateAnswer } = useQuiz();

  useEffect(() => {
    trackViewBudgetChoiceDecide();
  }, []);

  const handleSelect = (choice: 'flexible' | 'lower_cost') => {
    updateAnswer('budgetChoice', choice);
    const updatedAnswers = { ...answers, budgetChoice: choice };
    const result = determineResult(updatedAnswers);
    router.push(`/ntm-quiz-2026-v1/result/${result}`);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: Colors.background }}>
      <QuizHeader currentStep={10} totalSteps={10} />
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '24px', paddingTop: '8px', paddingBottom: '80px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: Colors.text, lineHeight: '32px', marginBottom: '24px', letterSpacing: '-0.3px' }}>
          Let&apos;s bring this story home and decide on a direction.
        </h1>

        {[
          {
            title: 'Medicare Advantage',
            subtitle: 'Monthly premium focus',
            description: "You will save money every month by paying $0 premium. That's real savings. And many plans come with valuable benefits like $0 Rx coverage and $1,000+ dental allowances.",
            tradeoffs: ['Restricted networks', 'Possible care delays', 'Copays up to ~$8,000 in a bad health year'],
          },
          {
            title: 'Medigap',
            subtitle: 'Flexibility focus',
            benefits: ['Any Medicare doctor (~99% of ALL doctors in US)', 'No delays', 'Costs ~$500 in a bad health year'],
            cost: '$150-$200 per month premium',
          },
        ].map((card, idx) => (
          <div key={idx} style={{ backgroundColor: Colors.card, borderRadius: '16px', padding: '20px', border: `1px solid ${Colors.border}`, marginBottom: '16px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: Colors.text, marginBottom: '4px', marginTop: '0px' }}>{card.title}</h2>
            <p style={{ fontSize: '12px', color: Colors.textMuted, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{card.subtitle}</p>
            {card.description && <p style={{ fontSize: '14px', lineHeight: '22px', color: Colors.textSecondary, marginBottom: '12px' }}>{card.description}</p>}

            {card.tradeoffs && (
              <>
                <p style={{ fontSize: '14px', fontWeight: '600', color: Colors.text, marginBottom: '8px' }}>But you trade that off against:</p>
                {card.tradeoffs.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                    <Minus size={14} color={Colors.textMuted} style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', lineHeight: '20px', color: Colors.textSecondary }}>{item}</span>
                  </div>
                ))}
              </>
            )}

            {card.benefits && (
              <div style={{ marginBottom: '12px' }}>
                {card.benefits.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                    <Minus size={14} color={Colors.textMuted} style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', lineHeight: '20px', color: Colors.textSecondary }}>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {card.cost && (
              <>
                <p style={{ fontSize: '14px', fontWeight: '600', color: Colors.text, marginBottom: '4px' }}>But you pay:</p>
                <p style={{ fontSize: '14px', color: Colors.textSecondary }}>{card.cost}</p>
              </>
            )}
          </div>
        ))}

        <div style={{ backgroundColor: Colors.backgroundDark, borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
          <p style={{ fontSize: '15px', lineHeight: '24px', color: Colors.text, fontWeight: '500', margin: 0 }}>
            The Big question: Are you comfortable paying each month for the more robust coverage of MediGap, or do you want to save money every month and get help choosing the right $0 MAPD plan?
          </p>
        </div>

        <OptionButton
          label="I can pay $150-$200/mo for more flexibility"
          selected={answers.budgetChoice === 'flexible'}
          onPress={() => handleSelect('flexible')}
        />
        <OptionButton
          label="I prefer lower monthly costs with less flexibility"
          selected={answers.budgetChoice === 'lower_cost'}
          onPress={() => handleSelect('lower_cost')}
        />
      </div>
    </div>
  );
}
