'use client';

import { useState, useEffect } from 'react';
import { Stethoscope } from 'lucide-react';
import QuizHeader from '@/components/QuizHeader';
import QuestionHeader from '@/components/QuestionHeader';
import OptionButton from '@/components/OptionButton';
import ContinueButton from '@/components/ContinueButton';
import { useQuiz } from '@/contexts/QuizContext';
import Colors from '@/constants/colors';
import { trackViewUsesVA } from '@/utils/analytics';
import { useNavigateWithUTM } from '@/hooks/useNavigateWithUTM';

export default function Q03APage() {
  const router = useNavigateWithUTM();
  const { answers, updateAnswer, setCurrentStep } = useQuiz();

  useEffect(() => {
    trackViewUsesVA();
    // Prefetch likely next routes for instant navigation
    router.prefetch('/ntm-quiz-2026-v1/q03b');
    router.prefetch('/ntm-quiz-2026-v1/q04');
  }, []);
  const [selected, setSelected] = useState<boolean | null>(answers.usesVA);

  const handleSelect = (value: boolean) => {
    setSelected(value);
    updateAnswer('usesVA', value);
  };

  const handleContinue = () => {
    if (selected === null) return;

    // Navigate immediately, then update state asynchronously
    const nextRoute = selected === true ? '/ntm-quiz-2026-v1/q03b' : '/ntm-quiz-2026-v1/q04';
    router.push(nextRoute);
    setCurrentStep(4);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: Colors.background,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <QuizHeader currentStep={4} totalSteps={10} />

      <div style={{
        flex: 1,
        padding: '24px',
        paddingTop: '8px',
        maxWidth: '600px',
        margin: '0 auto',
        width: '100%',
      }}>
        <QuestionHeader
          Icon={Stethoscope}
          question="Do you see your doctor through the VA?"
          subtext="Veterans use the VA in different ways. If the VA is where you get most of your care, Medicare can act more like a safety net. If you don't, your Medicare plan may need to do more of the heavy lifting."
        />

        <div>
          <OptionButton
            label="Yes"
            selected={selected === true}
            onPress={() => handleSelect(true)}
            expandedContent="In this case, many people choose a Medicare plan that acts as backup—often with no added monthly cost. Some plans can even put money back on your social security check each month. The right fit depends on how much you rely on the VA versus how much flexibility you want outside it."
          />
          <OptionButton
            label="No"
            selected={selected === false}
            onPress={() => handleSelect(false)}
            expandedContent="If you don't usually see doctors through the VA, your Medicare coverage will play a bigger role in where and how you get care."
          />
        </div>

        <div style={{ marginTop: '24px' }}>
          <ContinueButton
            onPress={handleContinue}
            disabled={selected === null}
          />
        </div>
      </div>
    </div>
  );
}
