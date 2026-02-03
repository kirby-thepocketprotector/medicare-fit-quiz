'use client';

import { useRouter } from 'next/navigation';
import { Award } from 'lucide-react';
import QuizHeader from '@/components/QuizHeader';
import QuestionHeader from '@/components/QuestionHeader';
import OptionButton from '@/components/OptionButton';
import { useQuiz } from '@/contexts/QuizContext';
import Colors from '@/constants/colors';

export default function Q03Page() {
  const router = useRouter();
  const { answers, updateAnswer, setCurrentStep } = useQuiz();

  const handleSelect = (value: boolean) => {
    updateAnswer('isVeteran', value);
    setCurrentStep(3);
    if (value) {
      router.push('/ntm-quiz-2026-v1/q03a');
    } else {
      router.push('/ntm-quiz-2026-v1/q04');
    }
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
