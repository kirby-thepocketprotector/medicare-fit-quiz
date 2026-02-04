'use client';

import { Info } from 'lucide-react';

interface WhyWeAskBoxProps {
  title?: string;
  content: string;
}

export default function WhyWeAskBox({ title = 'Why We Ask', content }: WhyWeAskBoxProps) {
  return (
    <div
      style={{
        backgroundColor: '#0d7a7a0f',
        borderRadius: '16px',
        padding: '20px',
        marginTop: '24px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
        <Info size={20} color="#6B7280" style={{ marginRight: '8px' }} strokeWidth={2} />
        <h3
          style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#0a5c5c',
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>

      <p
        style={{
          fontSize: '15px',
          color: '#6B7280',
          lineHeight: '1.6',
          margin: 0,
        }}
      >
        {content}
      </p>
    </div>
  );
}
