'use client';

import { useState } from 'react';

const PillIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="8" y="14" width="24" height="12" rx="6" fill="#16a34a" fillOpacity="0.12" stroke="#16a34a" strokeWidth="2" />
    <line x1="20" y1="14" x2="20" y2="26" stroke="#16a34a" strokeWidth="2" />
  </svg>
);

const DollarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="14" fill="#16a34a" fillOpacity="0.12" stroke="#16a34a" strokeWidth="2" />
    <path d="M20 10v20M24 15.5c0-1.93-1.79-3.5-4-3.5s-4 1.57-4 3.5 1.79 3.5 4 3.5 4 1.57 4 3.5-1.79 3.5-4 3.5-4-1.57-4-3.5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const BellIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 6c-5.52 0-10 4.48-10 10v6l-2 4h24l-2-4v-6c0-5.52-4.48-10-10-10z" fill="#16a34a" fillOpacity="0.12" stroke="#16a34a" strokeWidth="2" />
    <path d="M17 30c0 1.66 1.34 3 3 3s3-1.34 3-3" stroke="#16a34a" strokeWidth="2" />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#16a34a" />
    <path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 4.5h10M5.5 4.5V3a1 1 0 011-1h3a1 1 0 011 1v1.5M6.5 7v4M9.5 7v4M4.5 4.5l.5 8a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5l.5-8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FREQUENCIES = ["Monthly", "Every 90 days", "Weekly", "Not sure"];

interface Drug {
  name: string;
  dosage: string;
  cost: string;
  frequency: string;
}

export default function DrugPriceChecker() {
  const [drugs, setDrugs] = useState<Drug[]>([{ name: "", dosage: "", cost: "", frequency: "" }]);
  const [contactInfo, setContactInfo] = useState({ phone: "", email: "", zipCode: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleDrugChange = (index: number, field: keyof Drug, value: string) => {
    const updated = [...drugs];
    updated[index][field] = value;
    setDrugs(updated);
    if (errors[`drug_${index}_${field}`]) {
      setErrors((prev) => {
        const n = { ...prev };
        delete n[`drug_${index}_${field}`];
        return n;
      });
    }
  };

  const addDrug = () => {
    if (drugs.length < 10) setDrugs([...drugs, { name: "", dosage: "", cost: "", frequency: "" }]);
  };

  const removeDrug = (index: number) => {
    if (drugs.length > 1) setDrugs(drugs.filter((_, i) => i !== index));
  };

  const handleContactChange = (field: string, value: string) => {
    setContactInfo((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const formatCost = (value: string) => {
    const cleaned = value.replace(/[^\d.]/g, "");
    const parts = cleaned.split(".");
    if (parts.length > 2) return parts[0] + "." + parts.slice(1).join("");
    if (parts[1] && parts[1].length > 2) return parts[0] + "." + parts[1].slice(0, 2);
    return cleaned;
  };

  const validate = () => {
    const e: Record<string, string> = {};
    drugs.forEach((drug, i) => {
      if (!drug.name.trim()) e[`drug_${i}_name`] = "Required";
      if (!drug.cost.trim()) e[`drug_${i}_cost`] = "Required";
    });
    if (!contactInfo.phone || contactInfo.phone.replace(/\D/g, "").length < 10) e.phone = "Valid 10-digit phone required";
    if (!contactInfo.zipCode || contactInfo.zipCode.replace(/\D/g, "").length < 5) e.zipCode = "Valid ZIP code required";
    if (contactInfo.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email)) e.email = "Invalid email format";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) setSubmitted(true);
  };

  const totalMonthlyCost = drugs.reduce((sum, d) => {
    const cost = parseFloat(d.cost) || 0;
    if (d.frequency === "Every 90 days") return sum + cost / 3;
    if (d.frequency === "Weekly") return sum + cost * 4.33;
    return sum + cost;
  }, 0);

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-10">
        <div className="max-w-[520px] w-full text-center animate-[fadeUp_0.5s_ease-out]">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-[0_8px_32px_rgba(22,163,74,0.3)]">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M10 21l7 7 13-13" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="font-serif text-[32px] font-normal text-gray-900 mb-3">
            We&apos;re On It
          </h2>
          <p className="text-[17px] text-gray-600 leading-relaxed mb-8 max-w-[420px] mx-auto">
            We&apos;ll shop your prescriptions and reach out if we can find you a better price. No obligation, no cost.
          </p>

          <div className="bg-white rounded-2xl p-7 border border-gray-200 text-left shadow-sm">
            <div className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-4">
              Your Medications
            </div>
            {drugs.map((drug, i) => (
              <div
                key={i}
                className={`flex justify-between items-center py-2.5 ${
                  i < drugs.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div>
                  <span className="text-[15px] font-semibold text-gray-900">{drug.name}</span>
                  {drug.dosage && <span className="text-xs text-gray-500 ml-2">{drug.dosage}</span>}
                  {drug.frequency && <span className="text-xs text-gray-400 ml-2">({drug.frequency})</span>}
                </div>
                <span className="text-[15px] font-bold text-gray-900">${drug.cost}</span>
              </div>
            ))}
            <div className="flex justify-between items-center mt-4 pt-4 border-t-2 border-gray-200">
              <span className="text-sm font-semibold text-gray-500">Est. Monthly Total</span>
              <span className="text-xl font-bold text-green-600">${totalMonthlyCost.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setDrugs([{ name: "", dosage: "", cost: "", frequency: "" }]);
              setContactInfo({ phone: "", email: "", zipCode: "" });
            }}
            className="mt-6 px-7 py-3 text-[15px] font-semibold text-green-600 bg-transparent border-2 border-green-600 rounded-lg hover:bg-green-50 transition-all"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-5 pb-16">
      {/* Header */}
      <div className="max-w-[720px] mx-auto pt-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-green-200 rounded-full px-5 py-2 mb-6 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
          <span className="text-xs font-semibold text-green-600 tracking-wide">FREE PRICE CHECK</span>
        </div>

        <h1 className="font-serif text-[clamp(32px,5vw,48px)] font-normal text-gray-900 leading-tight mb-4">
          Paying Too Much for<br />Your Prescriptions?
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-[540px] mx-auto mb-5">
          Tell us what you take and what you pay. We&apos;ll shop around and let you know if we can find a better deal — at no cost to you.
        </p>
      </div>

      {/* How It Works */}
      <div className="max-w-[720px] mx-auto mb-10 flex gap-6 justify-center flex-wrap">
        {[
          { icon: <PillIcon />, title: "List Your Meds", desc: "Drug name and what you pay" },
          { icon: <DollarIcon />, title: "We Shop For You", desc: "Compare plans and pharmacies" },
          { icon: <BellIcon />, title: "We Call You", desc: "Only if we find real savings" },
        ].map((step, i) => (
          <div key={i} className="flex-1 basis-[180px] max-w-[210px] text-center p-5">
            <div className="flex justify-center mb-2">{step.icon}</div>
            <div className="font-bold text-[15px] text-gray-900 mb-1">{step.title}</div>
            <div className="text-xs text-gray-500">{step.desc}</div>
          </div>
        ))}
      </div>

      {/* Form Card */}
      <div className="max-w-[600px] mx-auto bg-white rounded-[20px] p-9 shadow-[0_4px_24px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] border border-gray-200">
        <div className="flex flex-col gap-6">
          {/* Drug entries */}
          {drugs.map((drug, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-[14px] p-5 pb-4 border border-gray-200 relative"
            >
              <div className="flex justify-between items-center mb-3.5">
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                  Medication {drugs.length > 1 ? `#${i + 1}` : ""}
                </span>
                {drugs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDrug(i)}
                    className="flex items-center gap-1 text-xs font-semibold text-red-600 bg-transparent hover:bg-red-50 p-1.5 rounded transition-colors"
                  >
                    <TrashIcon /> Remove
                  </button>
                )}
              </div>

              <div className="flex flex-col gap-3">
                {/* Drug name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Drug Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Metformin, Lipitor, Eliquis"
                    value={drug.name}
                    onChange={(e) => handleDrugChange(i, "name", e.target.value)}
                    className={`w-full p-3.5 text-base border-2 rounded-lg outline-none transition-all ${
                      errors[`drug_${i}_name`]
                        ? 'border-red-600'
                        : 'border-gray-300 focus:border-green-600 focus:shadow-[0_0_0_3px_rgba(22,163,74,0.1)]'
                    }`}
                  />
                  {errors[`drug_${i}_name`] && (
                    <span className="text-xs text-red-600 mt-1 block">{errors[`drug_${i}_name`]}</span>
                  )}
                </div>

                <div className="flex gap-3 flex-wrap">
                  {/* Dosage */}
                  <div className="flex-1 min-w-[140px]">
                    <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                      Dosage <span className="font-normal text-gray-400">(optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 500mg"
                      value={drug.dosage}
                      onChange={(e) => handleDrugChange(i, "dosage", e.target.value)}
                      className="w-full p-3.5 text-base border-2 border-gray-300 rounded-lg outline-none transition-all focus:border-green-600 focus:shadow-[0_0_0_3px_rgba(22,163,74,0.1)]"
                    />
                  </div>

                  {/* Cost */}
                  <div className="flex-1 min-w-[120px]">
                    <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                      What You Pay *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base text-gray-500 font-semibold pointer-events-none">
                        $
                      </span>
                      <input
                        type="text"
                        inputMode="decimal"
                        placeholder="0.00"
                        value={drug.cost}
                        onChange={(e) => handleDrugChange(i, "cost", formatCost(e.target.value))}
                        className={`w-full pl-7 pr-3.5 py-3.5 text-base border-2 rounded-lg outline-none transition-all ${
                          errors[`drug_${i}_cost`]
                            ? 'border-red-600'
                            : 'border-gray-300 focus:border-green-600 focus:shadow-[0_0_0_3px_rgba(22,163,74,0.1)]'
                        }`}
                      />
                    </div>
                    {errors[`drug_${i}_cost`] && (
                      <span className="text-xs text-red-600 mt-1 block">{errors[`drug_${i}_cost`]}</span>
                    )}
                  </div>
                </div>

                {/* Frequency */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    How Often? <span className="font-normal text-gray-400">(optional)</span>
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {FREQUENCIES.map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => handleDrugChange(i, "frequency", drug.frequency === f ? "" : f)}
                        className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                          drug.frequency === f
                            ? 'text-white bg-green-600 border-[1.5px] border-green-600'
                            : 'text-gray-600 bg-white border-[1.5px] border-gray-300'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Add another drug */}
          {drugs.length < 10 && (
            <button
              type="button"
              onClick={addDrug}
              className="flex items-center justify-center gap-2 p-3.5 w-full text-[15px] font-semibold text-green-600 bg-green-50 border-2 border-dashed border-green-300 rounded-xl hover:bg-green-100 hover:border-green-600 transition-all"
            >
              <PlusIcon /> Add Another Medication
            </button>
          )}

          {/* Divider */}
          <div className="border-t border-gray-200 my-1" />

          {/* Contact info section */}
          <div>
            <span className="text-xs font-bold text-green-600 uppercase tracking-wider block mb-3.5">
              Your Contact Info
            </span>

            <div className="flex flex-col gap-3.5">
              {/* ZIP Code */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  placeholder="e.g. 60614"
                  value={contactInfo.zipCode}
                  onChange={(e) => handleContactChange("zipCode", e.target.value.replace(/\D/g, "").slice(0, 5))}
                  className={`max-w-[160px] p-3.5 text-base border-2 rounded-lg outline-none transition-all ${
                    errors.zipCode
                      ? 'border-red-600'
                      : 'border-gray-300 focus:border-green-600 focus:shadow-[0_0_0_3px_rgba(22,163,74,0.1)]'
                  }`}
                />
                {errors.zipCode && <span className="text-xs text-red-600 mt-1 block">{errors.zipCode}</span>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={contactInfo.phone}
                  onChange={(e) => handleContactChange("phone", formatPhone(e.target.value))}
                  className={`w-full p-3.5 text-base border-2 rounded-lg outline-none transition-all ${
                    errors.phone
                      ? 'border-red-600'
                      : 'border-gray-300 focus:border-green-600 focus:shadow-[0_0_0_3px_rgba(22,163,74,0.1)]'
                  }`}
                />
                {errors.phone && <span className="text-xs text-red-600 mt-1 block">{errors.phone}</span>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                  Email <span className="font-normal text-gray-400">(optional)</span>
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={contactInfo.email}
                  onChange={(e) => handleContactChange("email", e.target.value)}
                  className={`w-full p-3.5 text-base border-2 rounded-lg outline-none transition-all ${
                    errors.email
                      ? 'border-red-600'
                      : 'border-gray-300 focus:border-green-600 focus:shadow-[0_0_0_3px_rgba(22,163,74,0.1)]'
                  }`}
                />
                {errors.email && <span className="text-xs text-red-600 mt-1 block">{errors.email}</span>}
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full p-4 text-[17px] font-bold text-white bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-[0_4px_16px_rgba(22,163,74,0.3)] hover:translate-y-[-1px] hover:shadow-[0_6px_24px_rgba(22,163,74,0.4)] transition-all mt-1"
          >
            Find Me a Better Price
          </button>

          {/* Trust line */}
          <div className="flex items-center justify-center gap-5 flex-wrap mt-1">
            {["100% Free", "No Obligation", "We Only Call If We Save You Money"].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <CheckIcon />
                <span className="text-xs text-gray-500 font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Need Help Section */}
      <div className="max-w-[600px] mx-auto mt-8 bg-white rounded-2xl p-6 border border-gray-200 flex items-center justify-center gap-3 flex-wrap shadow-sm">
        <span className="text-[15px] text-gray-600 font-medium">Need help?</span>
        <div className="flex gap-3 flex-wrap justify-center">
          <a
            href="tel:+18005551234"
            style={{ textDecoration: 'none' }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all shadow-[0_2px_8px_rgba(22,163,74,0.2)]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M14.67 11.62v1.73a1.15 1.15 0 01-1.26 1.15 11.42 11.42 0 01-4.98-1.77 11.25 11.25 0 01-3.46-3.46A11.42 11.42 0 013.2 4.26 1.15 1.15 0 014.34 3h1.73a1.15 1.15 0 011.15.99 7.4 7.4 0 00.4 1.62 1.15 1.15 0 01-.26 1.22l-.73.73a9.22 9.22 0 003.46 3.46l.73-.73a1.15 1.15 0 011.22-.26 7.4 7.4 0 001.62.4 1.15 1.15 0 01.99 1.17z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Call Us
          </a>
          <a
            href="/drug-lookup"
            style={{ textDecoration: 'none', display: 'none' }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-green-600 bg-white border-2 border-green-600 rounded-lg hover:bg-green-50 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="#16a34a" strokeWidth="1.5" />
              <path d="M11 11l3 3" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Use Our Drug Lookup Tool
          </a>
        </div>
      </div>

      {/* Footer note */}
      <p className="max-w-[480px] mx-auto mt-8 text-center text-xs text-gray-400 leading-relaxed">
        By signing up you agree to receive a call or text about your prescription savings. Message and data rates may apply. Powered by The Pocket Protector.
      </p>
    </div>
  );
}
