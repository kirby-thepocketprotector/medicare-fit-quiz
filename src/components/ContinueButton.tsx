'use client';

import Colors from '@/constants/colors';

interface ContinueButtonProps {
  onPress: () => void;
  disabled?: boolean;
  label?: string;
}

export default function ContinueButton({ onPress, disabled = false, label = 'Continue' }: ContinueButtonProps) {
  return (
    <button
      onClick={onPress}
      disabled={disabled}
      style={{
        width: '100%',
        backgroundColor: disabled ? Colors.textMuted : Colors.primary,
        color: Colors.white,
        padding: '18px',
        borderRadius: '12px',
        border: 'none',
        fontSize: '16px',
        fontWeight: '600',
        cursor: disabled ? 'not-allowed' : 'pointer',
        boxShadow: disabled ? 'none' : '0 4px 12px rgba(10, 92, 92, 0.2)',
        transition: 'all 0.2s ease',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {label}
    </button>
  );
}
