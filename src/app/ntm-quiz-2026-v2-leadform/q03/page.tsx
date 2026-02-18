'use client';

import { useEffect } from 'react';
import { Award } from 'lucide-react';
import QuizHeader from '@/components/QuizHeader';
import QuestionHeader from '@/components/QuestionHeader';
import OptionButton from '@/components/OptionButton';
import { useQuiz } from '@/contexts/QuizContext';
import Colors from '@/constants/colors';
import { trackViewIsVeteran } from '@/utils/analytics';
import { useNavigateWithUTM } from '@/hooks/useNavigateWithUTM';

export default function Q03Page() {
  const router = useNavigateWithUTM();
  const { answers, updateAnswer, setCurrentStep } = useQuiz();

  useEffect(() => {
    // Track page view only once
    trackViewIsVeteran();
    // Prefetch likely next routes for instant navigation
    router.prefetch('/ntm-quiz-2026-v2-leadform/q03a');
    router.prefetch('/ntm-quiz-2026-v2-leadform/q04');
  }, []); // Empty deps to run only once on mount

  const handleSelect = (value: boolean) => {
    // Navigate immediately, then update state asynchronously
    const nextRoute = value ? '/ntm-quiz-2026-v2-leadform/q03a' : '/ntm-quiz-2026-v2-leadform/q04';
    router.push(nextRoute);
    updateAnswer('isVeteran', value);
    setCurrentStep(3);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: Colors.background,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <QuizHeader currentStep={3} totalSteps={10} />

      <div style={{
        flex: 1,
        padding: '24px',
        paddingTop: '8px',
        maxWidth: '600px',
        margin: '0 auto',
        width: '100%',
      }}>
        <QuestionHeader
          Icon={Award}
          question="Are you a U.S. armed services Veteran?"
          subtext="Veteran status doesn't automatically change what's best—but it can unlock additional benefits in plans specifically designed for veterans, like money back on your social security check every month. We'll factor this in as we go."
        />

        <div>
          <OptionButton
            label="Yes"
            selected={answers.isVeteran === true}
            onPress={() => handleSelect(true)}
          />
          <OptionButton
            label="No"
            selected={answers.isVeteran === false}
            onPress={() => handleSelect(false)}
          />
        </div>
      </div>
    </div>
  );
}
