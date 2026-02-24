'use client';

interface ContinueButtonProps {
  onPress: () => void;
  disabled?: boolean;
  label?: string;
  loading?: boolean;
}

export default function ContinueButton({ onPress, disabled = false, label = 'Continue', loading = false }: ContinueButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      onClick={onPress}
      disabled={isDisabled}
      style={{
        width: '100%',
        backgroundColor: isDisabled ? '#f2f0ed' : '#0A5C5C',
        color: isDisabled ? '#8b92a5': '#FFFFFF',
        padding: '18px',
        borderRadius: '16px',
        border: 'none',
        fontSize: '17px',
        fontWeight: '600',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        boxShadow: 'none',
        transition: 'all 0.15s ease',
        opacity: 1,
        WebkitBoxShadow: isDisabled ? 'none' : '0px 4px 8px rgba(10,92,92,0.30)',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}
      onMouseDown={(e) => {
        if (!isDisabled) {
          e.currentTarget.style.transform = 'scale(0.98)';
          e.currentTarget.style.opacity = '0.9';
        }
      }}
      onMouseUp={(e) => {
        if (!isDisabled) {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.opacity = '1';
        }
      }}
      onMouseLeave={(e) => {
        if (!isDisabled) {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.opacity = '1';
        }
      }}
      onTouchStart={(e) => {
        if (!isDisabled) {
          e.currentTarget.style.transform = 'scale(0.98)';
          e.currentTarget.style.opacity = '0.9';
        }
      }}
      onTouchEnd={(e) => {
        if (!isDisabled) {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.opacity = '1';
        }
      }}
    >
      {loading && (
        <div
          style={{
            width: '18px',
            height: '18px',
            border: '2px solid #8b92a5',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }}
        />
      )}
      {loading ? 'Submitting...' : label}
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </button>
  );
}
