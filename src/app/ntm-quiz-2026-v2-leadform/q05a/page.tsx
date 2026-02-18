'use client';

import { useEffect } from 'react';
import { User, Clock, DollarSign, FileText } from 'lucide-react';
import QuizHeader from '@/components/QuizHeader';
import ContinueButton from '@/components/ContinueButton';
import Colors from '@/constants/colors';
import { trackViewBudgetChoiceSam } from '@/utils/analytics';
import { useNavigateWithUTM } from '@/hooks/useNavigateWithUTM';

const timeline = [
  "Visits the primary care doctor.",
  "Primary care doctor issues referral for GI specialist.",
  "Sam needs to wait for the insurance to pre-authorize and approve the referral.",
  "Once approved, Sam has a limited number of options to choose from in-network.",
];

export default function Q05APage() {
  const router = useNavigateWithUTM();

  useEffect(() => {
    trackViewBudgetChoiceSam();
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: Colors.background }}>
      <QuizHeader currentStep={8} totalSteps={10} />
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '24px', paddingTop: '8px', paddingBottom: '100px' }}>
        <div style={{ display: 'flex', backgroundColor: Colors.primaryLight + '12', borderRadius: '12px', padding: '16px', marginBottom: '24px', gap: '12px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: Colors.primaryLight + '20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={24} color={Colors.primary} />
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: Colors.text }}>Sam, 68 — Medicare Advantage</div>
            <div style={{ fontSize: '13px', color: Colors.primary, fontWeight: '500' }}>Pays $0 Monthly Premium</div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: Colors.text, marginBottom: '8px' }}>The problem:</h3>
          <p style={{ fontSize: '15px', lineHeight: '24px', color: Colors.textSecondary, margin: 0 }}>
            Sam develops severe abdominal pain and needs a GI specialist. But Sam can&apos;t go directly.
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: Colors.text, marginBottom: '8px' }}>Sam&apos;s timeline:</h3>
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
          { Icon: Clock, title: 'Outcome', text: 'This all took 3 weeks, and care got delayed.' },
          { Icon: DollarSign, title: 'The Cost', text: "By year-end, Sam has hit the plan's deductible and copay limit before the plan starts paying the rest. All in, this ends up costing Sam $7,000 out of pocket (the plan pays the rest)" },
          { Icon: FileText, title: 'Bottom Line', text: 'Sam does not have to pay anything for the plan each month, and yes, Sam got care - but it took 3 weeks with more limited doctor options and real out of pocket costs.' },
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
          <ContinueButton onPress={() => router.push('/ntm-quiz-2026-v2-leadform/q05b')} label="See Alex's Story" />
        </div>
      </div>
    </div>
  );
}
