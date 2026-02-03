'use client';

import { useRouter } from 'next/navigation';
import { User, Clock, DollarSign, FileText } from 'lucide-react';
import QuizHeader from '@/components/QuizHeader';
import ContinueButton from '@/components/ContinueButton';
import Colors from '@/constants/colors';

const timeline = [
  "Does not need to see the primary care doctor",
  "Alex can go directly to any GI specialist that takes Medicare.",
  "No waiting, preapprovals or referrals needed",
];

export default function Q05BPage() {
  const router = useRouter();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: Colors.background }}>
      <QuizHeader currentStep={9} totalSteps={10} />
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '24px', paddingTop: '8px', paddingBottom: '100px' }}>
        <div style={{ display: 'flex', backgroundColor: Colors.primaryLight + '12', borderRadius: '12px', padding: '16px', marginBottom: '24px', gap: '12px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: Colors.primaryLight + '20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={24} color={Colors.primary} />
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: Colors.text }}>Alex, 68 — Original Medicare + Medigap</div>
            <div style={{ fontSize: '13px', color: Colors.primary, fontWeight: '500' }}>Pays $175 Monthly Premium</div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: Colors.text, marginBottom: '8px' }}>The problem:</h3>
          <p style={{ fontSize: '15px', lineHeight: '24px', color: Colors.textSecondary, margin: 0 }}>
            Alex develops severe abdominal pain and needs a GI specialist. Alex can go directly to the GI specialist.
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: Colors.text, marginBottom: '8px' }}>Alex&apos;s timeline:</h3>
          {timeline.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '14px', backgroundColor: Colors.backgroundDark, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '14px', fontWeight: '600', color: Colors.textSecondary }}>{i + 1}</span>
              </div>
              <p style={{ fontSize: '15px', lineHeight: '22px', color: Colors.textSecondary, margin: 0, paddingTop: '3px' }}>{step}</p>
            </div>
          ))}
        </div>

        {[
          { Icon: Clock, title: 'Outcome', text: 'Alex had care start immediately.' },
          { Icon: DollarSign, title: 'The Cost', text: 'Alex paid the $514 deductible before her plan kicked in and paid the rest.' },
          { Icon: FileText, title: 'Bottom Line', text: 'Alex pays a $175 monthly premium, but when Alex needed care, Alex got it immediately and was able to choose any doctor with very low out of pocket costs.' },
        ].map(({ Icon, title, text }, idx) => (
          <div key={idx} style={{ backgroundColor: Colors.backgroundDark, borderRadius: '12px', padding: '16px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Icon size={20} color={Colors.textSecondary} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: Colors.text, marginBottom: '4px' }}>{title}</div>
                <div style={{ fontSize: '14px', lineHeight: '22px', color: Colors.textSecondary }}>{text}</div>
              </div>
            </div>
          </div>
        ))}

        <div style={{ marginTop: '8px' }}>
          <ContinueButton onPress={() => router.push('/ntm-quiz-2026-v1/q05c')} label="Let's See What Fits You Best" />
        </div>
      </div>
    </div>
  );
}
