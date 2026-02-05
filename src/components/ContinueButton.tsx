'use client';

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
        backgroundColor: disabled ? '#f2f0ed' : '#0A5C5C',
        color: disabled ? '#8b92a5': '#FFFFFF',
        padding: '18px',
        borderRadius: '16px',
        border: 'none',
        fontSize: '17px',
        fontWeight: '600',
        cursor: disabled ? 'not-allowed' : 'pointer',
        boxShadow: 'none',
        transition: 'all 0.15s ease',
        opacity: 1,
        WebkitBoxShadow: disabled ? 'none' : '0px 4px 8px rgba(10,92,92,0.30)',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
      }}
      onMouseDown={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'scale(0.98)';
          e.currentTarget.style.opacity = '0.9';
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.opacity = '1';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.opacity = '1';
        }
      }}
      onTouchStart={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'scale(0.98)';
          e.currentTarget.style.opacity = '0.9';
        }
      }}
      onTouchEnd={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.opacity = '1';
        }
      }}
    >
      {label}
    </button>
  );
}
