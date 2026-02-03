'use client';

import { LucideIcon } from 'lucide-react';
import Colors from '@/constants/colors';

interface QuestionHeaderProps {
  Icon: LucideIcon;
  question: string;
  subtext?: string;
}

export default function QuestionHeader({ Icon, question, subtext }: QuestionHeaderProps) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <div
        style={{
          width: '52px',
          height: '52px',
          backgroundColor: Colors.primaryLight + '20',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
        }}
      >
        <Icon size={28} color={Colors.primary} />
      </div>

      <h2
        style={{
          fontSize: '24px',
          fontWeight: '700',
          color: Colors.text,
          marginBottom: subtext ? '12px' : '0',
          lineHeight: '1.3',
          letterSpacing: '-0.3px',
        }}
      >
        {question}
      </h2>

      {subtext && (
        <p
          style={{
            fontSize: '16px',
            color: Colors.textSecondary,
            lineHeight: '1.5',
          }}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
