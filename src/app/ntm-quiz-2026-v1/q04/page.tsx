'use client';

import { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import QuizHeader from '@/components/QuizHeader';
import QuestionHeader from '@/components/QuestionHeader';
import OptionButton from '@/components/OptionButton';
import ContinueButton from '@/components/ContinueButton';
import { useQuiz } from '@/contexts/QuizContext';
import Colors from '@/constants/colors';
import { trackViewHasMedicaid } from '@/utils/analytics';
import { useNavigateWithUTM } from '@/hooks/useNavigateWithUTM';

export default function Q04Page() {
  const router = useNavigateWithUTM();
  const { answers, updateAnswer, setCurrentStep } = useQuiz();

  useEffect(() => {
    trackViewHasMedicaid();
    // Prefetch likely next routes for instant navigation
    router.prefetch('/ntm-quiz-2026-v1/result/R03');
    router.prefetch('/ntm-quiz-2026-v1/q05');
  }, []); // Empty deps to run only once on mount
  const [selected, setSelected] = useState<boolean | null>(answers.hasMedicaid);

  const handleSelect = (value: boolean) => {
    setSelected(value);
    updateAnswer('hasMedicaid', value);
  };

  const handleContinue = () => {
    if (selected === null) return;

    // Navigate immediately, then update state asynchronously
    const nextRoute = selected === true ? '/ntm-quiz-2026-v1/result/R03' : '/ntm-quiz-2026-v1/q05';
    router.push(nextRoute);
    setCurrentStep(6);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: Colors.background,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <QuizHeader currentStep={6} totalSteps={10} />

      <div style={{
        flex: 1,
        padding: '24px',
        paddingTop: '8px',
        maxWidth: '600px',
        margin: '0 auto',
        width: '100%',
      }}>
        <QuestionHeader
          Icon={ShieldCheck}
          question="Do you currently qualify for Medicaid?"
          subtext="Some Medicare plans are designed for people with Medicaid and can offer lower costs and extra benefits."
        />

        <div>
          <OptionButton
            label="Yes"
            selected={selected === true}
            onPress={() => handleSelect(true)}
            expandedContent="There are special Medicare plans designed just for you. These plans usually offer much lower costs and provide extra benefits that regular Medicare plans can't."
          />
          <OptionButton
            label="No"
            selected={selected === false}
            onPress={() => handleSelect(false)}
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
