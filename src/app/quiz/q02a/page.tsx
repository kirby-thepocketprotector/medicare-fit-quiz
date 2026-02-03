'use client';

import { useRouter } from 'next/navigation';
import { FileText } from 'lucide-react';
import QuizHeader from '@/components/QuizHeader';
import QuestionHeader from '@/components/QuestionHeader';
import OptionButton from '@/components/OptionButton';
import { useQuiz } from '@/contexts/QuizContext';
import { CurrentCoverageType } from '@/constants/quiz-data';
import Colors from '@/constants/colors';

const COVERAGE_OPTIONS: { id: CurrentCoverageType; label: string }[] = [
  { id: 'parts_ab_only', label: 'I just have Medicare Parts A and B' },
  { id: 'medicare_advantage', label: 'I already have a Medicare Advantage plan' },
  { id: 'medigap', label: 'I already have a Medigap / Supplement plan' },
];

export default function Q02APage() {
  const router = useRouter();
  const { answers, updateAnswer, setCurrentStep } = useQuiz();

  const handleSelect = (value: CurrentCoverageType) => {
    updateAnswer('currentCoverage', value);
    setCurrentStep(2);

    if (value === 'medicare_advantage') {
      router.push('/quiz/result/R08');
    } else if (value === 'medigap') {
      router.push('/quiz/result/R09');
    } else {
      router.push('/quiz/q03');
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
          Icon={FileText}
          question="What kind of Medicare coverage do you have right now?"
          subtext="This helps us understand where you are in your Medicare journey. If you already have a plan, we can almost certainly save you money."
        />

        <div>
          {COVERAGE_OPTIONS.map((option) => (
            <OptionButton
              key={option.id}
              label={option.label}
              selected={answers.currentCoverage === option.id}
              onPress={() => handleSelect(option.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
