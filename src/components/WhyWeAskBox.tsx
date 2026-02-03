'use client';

import { Info } from 'lucide-react';
import Colors from '@/constants/colors';

interface WhyWeAskBoxProps {
  title?: string;
  content: string;
}

export default function WhyWeAskBox({ title = 'Why We Ask', content }: WhyWeAskBoxProps) {
  return (
    <div
      style={{
        backgroundColor: Colors.primaryLight + '10',
        border: `1px solid ${Colors.primaryLight + '30'}`,
        borderRadius: '12px',
        padding: '16px',
        marginTop: '24px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <Info size={18} color={Colors.primary} style={{ marginRight: '8px' }} />
        <h3
          style={{
            fontSize: '14px',
            fontWeight: '600',
            color: Colors.text,
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>

      <p
        style={{
          fontSize: '14px',
          color: Colors.textSecondary,
          lineHeight: '1.6',
          margin: 0,
        }}
      >
        {content}
      </p>
    </div>
  );
}
