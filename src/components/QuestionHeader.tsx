'use client';

import { LucideIcon } from 'lucide-react';

interface QuestionHeaderProps {
  Icon: LucideIcon;
  question: string;
  subtext?: string;
}

export default function QuestionHeader({ Icon, question, subtext }: QuestionHeaderProps) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <div
        style={{
          width: '52px',
          height: '52px',
          backgroundColor: '#E8F0F0',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
        }}
      >
        <Icon size={24} color="#0A5C5C" strokeWidth={2} />
      </div>

      <h2
        style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#1A1F2C',
          marginBottom: subtext ? '12px' : '0',
          lineHeight: '32px',
          letterSpacing: '-0.4px',
        }}
      >
        {question}
      </h2>

      {subtext && (
        <p
          style={{
            fontSize: '16px',
            color: '#6B7280',
            lineHeight: '1.5',
          }}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
