'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Colors from '@/constants/colors';

interface QuizHeaderProps {
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
}

export default function QuizHeader({ currentStep, totalSteps, onBack }: QuizHeaderProps) {
  const router = useRouter();

  const progress = (currentStep / totalSteps) * 100;

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: '16px',
      paddingBottom: '16px',
      paddingLeft: '24px',
      paddingRight: '24px',
    }}>
      <button
        onClick={handleBack}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '20px',
          backgroundColor: Colors.backgroundDark,
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          marginRight: '16px',
        }}
      >
        <ChevronLeft size={20} color={Colors.text} />
      </button>

      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: '14px',
          color: Colors.textMuted,
          marginBottom: '8px',
        }}>
          {currentStep} of {totalSteps}
        </div>

        <div style={{
          width: '100%',
          height: '6px',
          backgroundColor: Colors.backgroundDark,
          borderRadius: '3px',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: Colors.primary,
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>
    </div>
  );
}
