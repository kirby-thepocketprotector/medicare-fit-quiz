'use client';

import { useEffect } from 'react';
import { ClipboardList } from 'lucide-react';
import QuizHeader from '@/components/QuizHeader';
import OptionButton from '@/components/OptionButton';
import ContinueButton from '@/components/ContinueButton';
import { useQuiz } from '@/contexts/QuizContext';
import { VA_PREFERENCE_OPTIONS } from '@/constants/quiz-data';
import Colors from '@/constants/colors';
import { trackViewVAPreference } from '@/utils/analytics';
import { useNavigateWithUTM } from '@/hooks/useNavigateWithUTM';

export default function Q03BPage() {
  const router = useNavigateWithUTM();
  const { answers, toggleVAPreference, setCurrentStep } = useQuiz();

  useEffect(() => {
    trackViewVAPreference();
  }, []);

  const isValid = answers.vaPreferences.length > 0;
  const noneSelected = answers.vaPreferences.includes('none_apply');

  const handleContinue = () => {
    setCurrentStep(5);
    router.push('/ntm-quiz-2026-v2-leadform/q04');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: Colors.background,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <QuizHeader currentStep={5} totalSteps={10} />

      <div style={{
        flex: 1,
        padding: '20px',
        paddingTop: '4px',
        maxWidth: '600px',
        margin: '0 auto',
        width: '100%',
      }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            backgroundColor: Colors.primaryLight + '15',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '12px',
          }}>
            <ClipboardList size={20} color={Colors.primary} />
          </div>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '700',
            color: Colors.text,
            lineHeight: '28px',
            letterSpacing: '-0.3px',
            marginBottom: '8px',
            margin: 0,
          }}>
            Do any of the following apply to you?
          </h2>
          <p style={{
            fontSize: '14px',
            lineHeight: '20px',
            color: Colors.textSecondary,
            margin: 0,
          }}>
            This helps us understand whether your Medicare coverage should act mainly as backup to the VA, or give you broad access to doctors outside the VA if you need it.
          </p>
        </div>

        <div>
          {VA_PREFERENCE_OPTIONS.map((option) => (
            <OptionButton
              key={option.id}
              label={option.label}
              selected={answers.vaPreferences.includes(option.id)}
              onPress={() => toggleVAPreference(option.id)}
              disabled={option.id !== 'none_apply' && noneSelected}
            />
          ))}
        </div>

        <div style={{ marginTop: '24px' }}>
          <ContinueButton onPress={handleContinue} disabled={!isValid} />
        </div>
      </div>
    </div>
  );
}
