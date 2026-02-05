'use client';

import { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import Colors from '@/constants/colors';

interface OptionButtonProps {
  label: string;
  selected: boolean;
  onPress: () => void;
  expandedContent?: string;
  disabled?: boolean;
  showCheckmark?: boolean;
}

export default function OptionButton({
  label,
  selected,
  onPress,
  expandedContent,
  disabled = false,
  showCheckmark = true,
}: OptionButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      // Call onPress immediately for instant response
      onPress();
      if (expandedContent && !selected) {
        setIsExpanded(true);
      }
    }
  };

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <button
        onClick={handleClick}
        disabled={disabled}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 16px',
          backgroundColor: selected ? Colors.primaryLight + '15' : Colors.white,
          border: selected
            ? `2px solid ${Colors.primary}`
            : `1px solid ${Colors.border}`,
          borderRadius: '12px',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
          transition: 'all 0.15s ease',
          fontSize: '16px',
          textAlign: 'left',
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation',
        }}
        onMouseDown={(e) => {
          if (!disabled) {
            e.currentTarget.style.transform = 'scale(0.98)';
          }
        }}
        onMouseUp={(e) => {
          if (!disabled) {
            e.currentTarget.style.transform = 'scale(1)';
          }
        }}
        onTouchStart={(e) => {
          if (!disabled) {
            e.currentTarget.style.transform = 'scale(0.98)';
          }
        }}
        onTouchEnd={(e) => {
          if (!disabled) {
            e.currentTarget.style.transform = 'scale(1)';
          }
        }}
      >
        <span
          style={{
            flex: 1,
            color: Colors.text,
            fontWeight: selected ? '600' : '400',
          }}
        >
          {label}
        </span>

        {selected && showCheckmark && (
          <Check size={20} color={Colors.primary} />
        )}

        {expandedContent && selected && (
          <button
            onClick={toggleExpand}
            style={{
              marginLeft: '8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {isExpanded ? (
              <ChevronUp size={20} color={Colors.primary} />
            ) : (
              <ChevronDown size={20} color={Colors.primary} />
            )}
          </button>
        )}
      </button>

      {expandedContent && selected && isExpanded && (
        <div
          style={{
            backgroundColor: Colors.primaryLight + '10',
            padding: '12px 16px',
            borderRadius: '0 0 12px 12px',
            marginTop: '-10px',
            paddingTop: '16px',
          }}
        >
          <p
            style={{
              fontSize: '14px',
              color: Colors.textSecondary,
              lineHeight: '1.5',
              margin: 0,
            }}
          >
            {expandedContent}
          </p>
        </div>
      )}
    </div>
  );
}
