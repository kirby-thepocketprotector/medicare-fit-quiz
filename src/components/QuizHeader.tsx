'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

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
      paddingTop: '16px',
      paddingBottom: '8px',
      paddingLeft: '24px',
      paddingRight: '24px',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px',
      }}>
        <button
          onClick={handleBack}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '24px',
            backgroundColor: '#E8E8E8',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <ChevronLeft size={24} color="#1A1F2C" strokeWidth={2.5} />
        </button>

        <div style={{
          fontSize: '16px',
          color: '#9CA3AF',
          fontWeight: '500',
        }}>
          {currentStep} of {totalSteps}
        </div>
      </div>

      <div style={{
        width: '100%',
        height: '4px',
        backgroundColor: '#E8E8E8',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: '#0A5C5C',
          transition: 'width 0.3s ease',
        }} />
      </div>
    </div>
  );
}
