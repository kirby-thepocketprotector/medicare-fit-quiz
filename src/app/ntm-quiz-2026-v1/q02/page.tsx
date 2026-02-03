'use client';

import { useRouter } from 'next/navigation';
import { Shield } from 'lucide-react';
import QuizHeader from '@/components/QuizHeader';
import QuestionHeader from '@/components/QuestionHeader';
import OptionButton from '@/components/OptionButton';
import { useQuiz } from '@/contexts/QuizContext';
import Colors from '@/constants/colors';

export default function Q02Page() {
  const router = useRouter();
  const { answers, updateAnswer, setCurrentStep } = useQuiz();

  const handleSelect = (value: boolean) => {
    updateAnswer('hasPartAB', value);
    setCurrentStep(2);
    if (value) {
      router.push('/ntm-quiz-2026-v1/q02a');
    } else {
      router.push('/ntm-quiz-2026-v1/q03');
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
