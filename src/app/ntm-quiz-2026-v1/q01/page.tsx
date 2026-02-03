'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, ChevronDown } from 'lucide-react';
import QuizHeader from '@/components/QuizHeader';
import QuestionHeader from '@/components/QuestionHeader';
import WhyWeAskBox from '@/components/WhyWeAskBox';
import ContinueButton from '@/components/ContinueButton';
import { useQuiz } from '@/contexts/QuizContext';
import { MONTHS, YEARS } from '@/constants/quiz-data';
import Colors from '@/constants/colors';

export default function Q01Page() {
  const router = useRouter();
  const { answers, setBirthDate, setCurrentStep } = useQuiz();
  const [selectedMonth, setSelectedMonth] = useState<string | null>(answers.birthMonth);
  const [selectedYear, setSelectedYear] = useState<string | null>(answers.birthYear);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);

  const isValid = selectedMonth !== null && selectedYear !== null;

  const handleContinue = () => {
    if (selectedMonth && selectedYear) {
      setBirthDate(selectedMonth, selectedYear);
      setCurrentStep(1);

      const monthIndex = MONTHS.indexOf(selectedMonth);
      const birthYear = parseInt(selectedYear, 10);
      const birthDate = new Date(birthYear, monthIndex, 1);
      const today = new Date();

      const turnedOrTurning65 = new Date(birthDate);
      turnedOrTurning65.setFullYear(birthDate.getFullYear() + 65);

      const iepStart = new Date(turnedOrTurning65);
      iepStart.setMonth(iepStart.getMonth() - 3);

      const iepEnd = new Date(turnedOrTurning65);
      iepEnd.setMonth(iepEnd.getMonth() + 3);

      const isInIEP = today >= iepStart && today <= iepEnd;

      if (isInIEP) {
        router.push('/ntm-quiz-2026-v1/q01a');
      } else {
        router.push('/ntm-quiz-2026-v1/q02');
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: Colors.background,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <QuizHeader currentStep={1} totalSteps={10} />

      <div style={{
        flex: 1,
        padding: '24px',
        paddingTop: '8px',
        maxWidth: '600px',
        margin: '0 auto',
        width: '100%',
      }}>
        <QuestionHeader
          Icon={Calendar}
          question="What month and year were you born?"
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ position: 'relative' }}>
            <select
              value={selectedMonth || ''}
              onChange={(e) => setSelectedMonth(e.target.value)}
              style={{
                width: '100%',
                padding: '18px',
                fontSize: '16px',
                color: selectedMonth ? Colors.text : Colors.textMuted,
                backgroundColor: Colors.card,
                border: `2px solid ${Colors.border}`,
                borderRadius: '12px',
                fontWeight: '500',
                cursor: 'pointer',
                appearance: 'none',
              }}
            >
              <option value="" disabled>Select month</option>
              {MONTHS.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <ChevronDown
              size={20}
              color={Colors.textMuted}
              style={{
                position: 'absolute',
                right: '18px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <select
              value={selectedYear || ''}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{
                width: '100%',
                padding: '18px',
                fontSize: '16px',
                color: selectedYear ? Colors.text : Colors.textMuted,
                backgroundColor: Colors.card,
                border: `2px solid ${Colors.border}`,
                borderRadius: '12px',
                fontWeight: '500',
                cursor: 'pointer',
                appearance: 'none',
              }}
            >
              <option value="" disabled>Select year</option>
              {YEARS.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <ChevronDown
              size={20}
              color={Colors.textMuted}
              style={{
                position: 'absolute',
                right: '18px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>

        <WhyWeAskBox
          content="This tells us if you're in or close to your Initial Enrollment Period (IEP), a critical time when MediGap providers cannot ask health questions, upcharge you, or deny you.

This is a very important one-time window. If you miss it, getting MediGap later can be difficult or even impossible."
        />
      </div>

      <div style={{
        padding: '24px',
        backgroundColor: Colors.white,
        borderTop: `1px solid ${Colors.borderLight}`,
        maxWidth: '600px',
        margin: '0 auto',
        width: '100%',
      }}>
        <ContinueButton onPress={handleContinue} disabled={!isValid} />
      </div>
    </div>
  );
}
