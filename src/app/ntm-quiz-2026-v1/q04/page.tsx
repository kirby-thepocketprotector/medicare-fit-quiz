'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';
import QuizHeader from '@/components/QuizHeader';
import QuestionHeader from '@/components/QuestionHeader';
import OptionButton from '@/components/OptionButton';
import ContinueButton from '@/components/ContinueButton';
import { useQuiz } from '@/contexts/QuizContext';
import Colors from '@/constants/colors';

export default function Q04Page() {
  const router = useRouter();
  const { answers, updateAnswer, setCurrentStep } = useQuiz();
  const [selected, setSelected] = useState<boolean | null>(answers.hasMedicaid);

  const handleSelect = (value: boolean) => {
    setSelected(value);
    updateAnswer('hasMedicaid', value);
  };

  const handleContinue = () => {
    if (selected === null) return;

    setCurrentStep(6);

    if (selected === true) {
      router.push('/ntm-quiz-2026-v1/result/R03');
    } else {
      router.push('/ntm-quiz-2026-v1/q05');
    }
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
