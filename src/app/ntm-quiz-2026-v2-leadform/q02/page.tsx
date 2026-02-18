'use client';

import { useEffect } from 'react';
import { Shield } from 'lucide-react';
import QuizHeader from '@/components/QuizHeader';
import QuestionHeader from '@/components/QuestionHeader';
import OptionButton from '@/components/OptionButton';
import { useQuiz } from '@/contexts/QuizContext';
import Colors from '@/constants/colors';
import { trackViewMedicareAB, trackIsNewToMedicare } from '@/utils/analytics';
import { useNavigateWithUTM } from '@/hooks/useNavigateWithUTM';

export default function Q02Page() {
  const router = useNavigateWithUTM();
  const { answers, updateAnswer, setCurrentStep } = useQuiz();

  useEffect(() => {
    trackViewMedicareAB();
    // Prefetch likely next routes for instant navigation
    router.prefetch('/ntm-quiz-2026-v2-leadform/q02a');
    router.prefetch('/ntm-quiz-2026-v2-leadform/q03');
  }, []); // Empty deps to run only once on mount

  const handleSelect = (value: boolean) => {
    // Navigate immediately for instant response
    const nextRoute = value ? '/ntm-quiz-2026-v2-leadform/q02a' : '/ntm-quiz-2026-v2-leadform/q03';

    // Update state and navigate (these happen asynchronously now)
    updateAnswer('hasPartAB', value);
    setCurrentStep(2);
    router.push(nextRoute);

    // Track is_new_to_medicare event if hasPartAB === false (async)
    if (!value) {
      const updatedAnswers = { ...answers, hasPartAB: value };
      setTimeout(() => trackIsNewToMedicare(updatedAnswers), 0);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: Colors.background,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <QuizHeader currentStep={2} totalSteps={10} />

      <div style={{
        flex: 1,
        padding: '24px',
        paddingTop: '8px',
        maxWidth: '600px',
        margin: '0 auto',
        width: '100%',
      }}>
        <QuestionHeader
          Icon={Shield}
          question="Are you currently enrolled in both Medicare Part A and Part B?"
        />

        <div>
          <OptionButton
            label="Yes"
            selected={answers.hasPartAB === true}
            onPress={() => handleSelect(true)}
          />
          <OptionButton
            label="No"
            selected={answers.hasPartAB === false}
            onPress={() => handleSelect(false)}
          />
        </div>
      </div>
    </div>
  );
}
