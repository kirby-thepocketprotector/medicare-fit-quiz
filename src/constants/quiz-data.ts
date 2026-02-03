export const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export const YEARS = Array.from({ length: 41 }, (_, i) => (1966 - i).toString());

export const VA_PREFERENCE_OPTIONS = [
  { id: 'civilian_doctors', label: 'I regularly see several civilian doctors or specialists' },
  { id: 'va_inconvenient', label: "The VA isn't very convenient or accessible where I live" },
  { id: 'travel_multiple_states', label: "I travel or live in multiple states and don't rely on the VA much" },
  { id: 'none_apply', label: 'None of these really apply — the VA works well for me' },
];

export type ResultScreenId = 'R01' | 'R02' | 'R03' | 'R04' | 'R05' | 'R06' | 'R07' | 'R08' | 'R09';

export type CurrentCoverageType = 'parts_ab_only' | 'medicare_advantage' | 'medigap' | null;

export interface QuizAnswers {
  birthMonth: string | null;
  birthYear: string | null;
  isInIEP: boolean;
  hasPartAB: boolean | null;
  currentCoverage: CurrentCoverageType;
  isVeteran: boolean | null;
  usesVA: boolean | null;
  vaPreferences: string[];
  hasMedicaid: boolean | null;
  budgetChoice: 'flexible' | 'lower_cost' | null;
}

export const initialQuizAnswers: QuizAnswers = {
  birthMonth: null,
  birthYear: null,
  isInIEP: false,
  hasPartAB: null,
  currentCoverage: null,
  isVeteran: null,
  usesVA: null,
  vaPreferences: [],
  hasMedicaid: null,
  budgetChoice: null,
};

export function calculateIsInIEP(month: string, year: string): boolean {
  const monthIndex = MONTHS.indexOf(month);
  const birthYear = parseInt(year, 10);

  if (monthIndex === -1 || isNaN(birthYear)) return false;

  const birthDate = new Date(birthYear, monthIndex, 1);
  const today = new Date();

  const turnedOrTurning65 = new Date(birthDate);
  turnedOrTurning65.setFullYear(birthDate.getFullYear() + 65);

  const iepStart = new Date(turnedOrTurning65);
  iepStart.setMonth(iepStart.getMonth() - 3);

  const iepEnd = new Date(turnedOrTurning65);
  iepEnd.setMonth(iepEnd.getMonth() + 3);

  return today >= iepStart && today <= iepEnd;
}

export function determineResult(answers: QuizAnswers): ResultScreenId {
  if (answers.hasMedicaid === true) {
    return 'R03';
  }

  if (answers.isVeteran === true) {
    if (answers.usesVA === true) {
      const hasFlexibilityOption = answers.vaPreferences.some(
        (pref) => pref !== 'none_apply'
      );

      if (hasFlexibilityOption) {
        return 'R05';
      } else {
        return 'R04';
      }
    } else {
      if (answers.budgetChoice === 'flexible') {
        return 'R07';
      } else {
        return 'R06';
      }
    }
  }

  if (answers.budgetChoice === 'flexible') {
    return 'R02';
  } else {
    return 'R01';
  }
}

export const RESULT_CONTENT: Record<ResultScreenId, {
  title: string;
  subtitle: string;
  whyHeader: string;
  whyText: string;
  benefits: { icon: string; title: string; description: string }[];
  importantNote: string;
  nextStepHeader: string;
  nextStepIntro: string;
  nextStepItems: { title: string; description: string }[];
}> = {
  R01: {
    title: 'Medicare Advantage',
    subtitle: 'Your Recommendation',
    whyHeader: 'Why?',
    whyText: "Because you told us you don't want to pay monthly premiums for a Medigap plan, we recommend finding you the very best $0 premium Medicare Advantage plan available in your area.",
    benefits: [
      { icon: 'dollar-sign', title: '$0 monthly premium', description: 'No monthly cost beyond your Part B premium' },
      { icon: 'pill', title: 'Prescription drug coverage included', description: 'Most plans include drug coverage at no extra premium' },
      { icon: 'smile', title: 'Dental, vision and hearing allowances', description: 'Coverage for routine dental care, exams, and eyewear' },
      { icon: 'gift', title: 'Extra benefits', description: 'Many plans include gym memberships, grocery allowances, or utility bill credits' },
    ],
    importantNote: 'Medicare Advantage plans only cover doctors and hospitals in their network. Choosing the wrong plan could mean losing access to your current doctors or paying much more for prescriptions.',
    nextStepHeader: 'Match the Right Plan to Your Doctors and Drugs',
    nextStepIntro: "Not all $0 premium plans are created equal. Our licensed Medicare agents can help you avoid a costly mistake by:",
    nextStepItems: [
      { title: 'Verify your doctors are in-network', description: "We'll check which plans cover all your current doctors and specialists so you don't have to switch." },
      { title: 'Check your prescriptions are covered', description: "We'll review each plan's drug formulary to find the one with the lowest costs for your specific medications." },
      { title: 'Compare extra benefits', description: 'See which plans offer the most valuable extras like dental coverage, gym memberships, or grocery allowances.' },
      { title: 'Find the plan with the lowest total costs', description: "We'll calculate your expected out-of-pocket costs for each plan based on your actual healthcare needs." },
    ],
  },
  R02: {
    title: 'Medigap (Medicare Supplement) Plan',
    subtitle: 'Your Recommendation',
    whyHeader: 'Why?',
    whyText: 'Because you told us having predictable costs and full freedom to see any doctor matters more to you than saving on monthly premiums, we recommend a Medigap plan instead of Medicare Advantage.\n\nMedigap works alongside Original Medicare to help cover what Medicare doesn\'t — giving you stronger protection and fewer surprises.',
    benefits: [
      { icon: 'map-pin', title: 'Nationwide doctor access', description: 'See any doctor or specialist in the U.S. who accepts Medicare — no networks, no referrals.' },
      { icon: 'dollar-sign', title: 'Predictable out-of-pocket costs', description: 'Most medical bills are covered, reducing the risk of large, unexpected expenses.' },
      { icon: 'plane', title: 'Coverage that travels with you', description: "Your coverage works anywhere in the U.S., whether you're at home or traveling." },
      { icon: 'shield', title: 'No prior authorizations', description: 'You and your doctor decide what care you receive — not an insurance company.' },
    ],
    importantNote: 'Medigap plans have monthly premiums, and the best time to enroll is during your guaranteed issue window. Missing this window can mean higher costs later — or being denied coverage altogether.\n\nChoosing the wrong Medigap company can also lead to steep premium increases over time, even though the coverage itself is identical.',
    nextStepHeader: 'Choose the Right Medigap Plan (and Company)',
    nextStepIntro: "Not all Medigap plans are priced — or managed — the same. Our licensed Medicare agents help you avoid long-term mistakes by:",
    nextStepItems: [
      { title: 'Confirming you\'re in a guaranteed issue period', description: "We'll make sure you can enroll without medical underwriting or health questions." },
      { title: 'Selecting the right plan type', description: "Different plans offer different cost tradeoffs — we'll explain what actually matters." },
      { title: 'Projecting long-term costs', description: 'We help identify plans that tend to stay stable over time — not ones that look cheap now but spike later.' },
      { title: 'Pairing with the right drug plan', description: "Medigap doesn't include prescriptions, so we'll help match you with the lowest-cost Part D plan." },
    ],
  },
  R03: {
    title: 'Dual-Eligible Medicare Advantage Plan',
    subtitle: 'Your Recommendation',
    whyHeader: 'Why?',
    whyText: 'Because you told us you qualify for both Medicaid and Medicare, you may qualify for Special Medicare Plans that come with more benefits and lower care costs.',
    benefits: [
      { icon: 'dollar-sign', title: '$0 monthly premium', description: 'These plans cost nothing per month' },
      { icon: 'shield', title: 'Little or no out-of-pocket costs', description: 'Low or $0 deductibles and copays' },
      { icon: 'gift', title: 'Monthly allowances for groceries and utilities', description: 'Real money you can use for everyday expenses' },
      { icon: 'pill', title: 'Dramatically lower prescription costs', description: 'Extra help Rx subsidies potentially saving you hundreds or thousands per year' },
      { icon: 'credit-card', title: 'Part B premium giveback', description: 'Some plans add money back to your Social Security check each month' },
    ],
    importantNote: 'Medicare Advantage plans only cover doctors and hospitals in their network. Choosing the wrong plan could mean losing access to your current doctors or paying much more for prescriptions.',
    nextStepHeader: 'Make sure you qualify',
    nextStepIntro: "To ensure you qualify for one of these plans and get approved properly, our licensed Medicare agents can help you at no cost.",
    nextStepItems: [
      { title: 'Verify your eligibility', description: "We'll confirm you meet all the requirements for D-SNP enrollment." },
      { title: 'Ensure proper approval', description: "We make sure everything is submitted correctly so you don't face delays or denials." },
      { title: 'Find the plan with the most benefits for you', description: "Plans vary by location and carrier — we'll help you choose the one that maximizes your benefits." },
    ],
  },
  R04: {
    title: 'VA-Friendly Medicare Advantage Plan',
    subtitle: 'Your Recommendation',
    whyHeader: 'Why?',
    whyText: "Because you told us you're an Armed Services veteran who uses the VA for most of your care, you may qualify for a special Medicare plan designed specifically for veterans.",
    benefits: [
      { icon: 'credit-card', title: 'Part B premium giveback', description: 'Money added back to your Social Security check each month' },
      { icon: 'smile', title: 'Dental allowances', description: 'Coverage for routine dental care, cleanings, and procedures' },
      { icon: 'award', title: 'Works alongside your VA benefits', description: 'Designed to complement, not replace, your VA healthcare' },
      { icon: 'stethoscope', title: 'Additional coverage for non-VA care', description: 'When you need care outside the VA system' },
    ],
    importantNote: 'These plans are designed for veterans who primarily use VA healthcare. They provide additional benefits without interfering with your VA coverage.',
    nextStepHeader: 'Find Out Your Giveback Amount',
    nextStepIntro: "The amount of money added back to your Social Security check varies by plan and location. Our licensed Medicare agents can help you:",
    nextStepItems: [
      { title: 'Calculate your exact giveback amount', description: 'Find out exactly how much money you can get back each month based on the plans available in your area.' },
      { title: 'Compare your dental coverage options', description: 'See which plans offer the most comprehensive dental benefits for your needs.' },
      { title: 'Confirm compatibility with your VA benefits', description: "We'll make sure the plan works seamlessly with your existing VA healthcare coverage." },
    ],
  },
  R05: {
    title: 'Medigap (Medicare Supplement) Plan',
    subtitle: 'Your Recommendation',
    whyHeader: 'Why?',
    whyText: "Because you told us you use the VA, but also want the freedom to see civilian doctors without restrictions when you need care outside the VA, a Medigap plan is a strong fit.\n\nMedigap works alongside Original Medicare — and does not interfere with your VA benefits. It gives you unrestricted access to doctors outside the VA, with predictable costs and fewer surprises.\n\nThis combination is often chosen by veterans who want maximum flexibility beyond the VA, without giving up VA care.",
    benefits: [
      { icon: 'map-pin', title: 'Nationwide doctor access', description: 'See any civilian doctor or specialist in the U.S. who accepts Medicare — no networks or referrals.' },
      { icon: 'dollar-sign', title: 'Predictable out-of-pocket costs', description: 'Most Medicare-approved expenses are covered, helping protect you from large, unexpected bills outside the VA.' },
      { icon: 'plane', title: 'Coverage that travels with you', description: 'Your civilian coverage works anywhere in the U.S. — useful if you travel or spend time in multiple states.' },
      { icon: 'shield', title: 'No prior authorizations', description: 'You and your civilian doctor decide what care you receive — not an insurance company' },
    ],
    importantNote: 'Medigap plans have monthly premiums, and the best time to enroll is during your guaranteed issue window. Missing this window can mean higher costs later — or being denied coverage altogether.\n\nChoosing the wrong Medigap company can also lead to steep premium increases over time, even though the coverage itself is identical.',
    nextStepHeader: 'Choose the Right Medigap Plan (and Company)',
    nextStepIntro: "Not all Medigap plans are priced — or managed — the same. Our licensed Medicare agents help you avoid long-term mistakes by:",
    nextStepItems: [
      { title: 'Confirming you\'re in a guaranteed issue period', description: "We'll make sure you can enroll without medical underwriting or health questions." },
      { title: 'Selecting the right plan type', description: "Different plans offer different cost tradeoffs — we'll explain what actually matters." },
      { title: 'Projecting long-term costs', description: 'We help identify plans that tend to stay stable over time — not ones that look cheap now but spike later.' },
      { title: 'Pairing with the right drug plan', description: "Medigap doesn't include prescriptions, so we help match you with a low-cost Part D plan that works alongside your VA pharmacy benefits." },
    ],
  },
  R06: {
    title: 'VA-Friendly Medicare Advantage Plan',
    subtitle: 'Your Recommendation',
    whyHeader: 'Why?',
    whyText: "Because you told us you're a veteran but do not rely on the VA for your care, your Medicare plan will be your primary source of coverage.\n\nA Medicare Advantage plan can be a strong fit if you want lower monthly costs, are comfortable using a provider network, and value extra benefits beyond Original Medicare.\n\nSome Medicare Advantage plans also offer veteran-friendly features, depending on where you live.",
    benefits: [
      { icon: 'dollar-sign', title: 'Lower monthly costs', description: 'Many plans have low or $0 premiums and may include Part B premium reductions in some areas.' },
      { icon: 'smile', title: 'Built-in extra benefits', description: 'Coverage for dental, vision, hearing, fitness, and over-the-counter items.' },
      { icon: 'users', title: 'Coordinated network care', description: 'Your plan helps manage care through a defined network of doctors and hospitals.' },
      { icon: 'stethoscope', title: 'All-in-one coverage', description: 'Medical, hospital, and often prescription coverage bundled into a single plan.' },
    ],
    importantNote: 'Medicare Advantage plans use provider networks and may require referrals or prior authorizations for certain services. Costs are generally lower monthly, but your out-of-pocket expenses can vary based on how you use care.',
    nextStepHeader: 'Compare plans in your area',
    nextStepIntro: "Plan benefits, networks, and costs vary by location. Our licensed Medicare agents can help you:",
    nextStepItems: [
      { title: 'Compare plans and networks', description: 'Make sure your doctors, hospitals, and medications are covered.' },
      { title: 'Understand total yearly costs', description: 'Not just premiums, but copays, coinsurance, and out-of-pocket maximums.' },
      { title: 'Identify veteran-friendly options', description: 'Including any available givebacks or extra benefits where applicable.' },
    ],
  },
  R07: {
    title: 'Medigap (Medicare Supplement) Plan',
    subtitle: 'Your Recommendation',
    whyHeader: 'Why?',
    whyText: "Because you told us you don't use the VA and want maximum freedom and predictable costs with your civilian care, a Medigap plan is a strong fit.\n\nMedigap works with Original Medicare to help cover what Medicare doesn't — giving you nationwide access to doctors, fewer restrictions, and protection from large medical bills.\n\nThis option is often chosen by veterans who want Medicare coverage that works anywhere, with any doctor who accepts Medicare.",
    benefits: [
      { icon: 'map-pin', title: 'Nationwide doctor access', description: 'See any civilian doctor or specialist in the U.S. who accepts Medicare — no networks or referrals.' },
      { icon: 'dollar-sign', title: 'Predictable out-of-pocket costs', description: 'Most Medicare-approved services are covered, helping avoid surprise expenses.' },
      { icon: 'plane', title: 'Coverage that travels with you', description: 'Your civilian coverage works anywhere in the U.S. — useful if you travel or spend time in multiple states.' },
      { icon: 'shield', title: 'No prior authorizations', description: 'You and your civilian doctor decide what care you receive — not an insurance company' },
    ],
    importantNote: 'Medigap plans have monthly premiums, and timing matters. Outside your guaranteed issue window, enrolling later can involve medical underwriting, higher costs, or denial.\n\nWhile Medigap coverage is standardized, pricing and long-term rate stability vary by company.',
    nextStepHeader: 'Choose the Right Medigap Plan (and Company)',
    nextStepIntro: "Our licensed Medicare agents help veterans by:",
    nextStepItems: [
      { title: 'Confirming your enrollment timing', description: "We'll verify what protections apply based on your situation." },
      { title: 'Selecting the right plan type', description: 'We explain the real cost tradeoffs in plain language.' },
      { title: 'Projecting long-term costs', description: 'We help identify plans that tend to stay stable over time — not ones that look cheap now but spike later.' },
      { title: 'Pairing with the right drug plan', description: "Medigap doesn't include prescriptions, so we help match you with a Part D plan that fits your medications." },
    ],
  },
  R08: {
    title: "Ok, so you've already chosen Medicare Advantage.",
    subtitle: 'Plan Review',
    whyHeader: '',
    whyText: "There are real reasons this makes sense for many people, and you're probably saving money each month in premiums.\n\nThe most important thing is making sure you're in the RIGHT Medicare Advantage plan — one with the best doctor network for you and the strongest benefits in your county.",
    benefits: [],
    importantNote: '',
    nextStepHeader: 'Get a Plan Report Card',
    nextStepIntro: '',
    nextStepItems: [],
  },
  R09: {
    title: 'Congratulations! You made a great choice.',
    subtitle: 'Great Coverage',
    whyHeader: '',
    whyText: "Medigap is the best health insurance we can imagine, and it sounds like you're already well covered.\n\nIf you also have a prescription drug plan, there may still be an opportunity to save money without reducing your coverage.",
    benefits: [],
    importantNote: '',
    nextStepHeader: 'Prescription Drug Review',
    nextStepIntro: '',
    nextStepItems: [],
  },
};
