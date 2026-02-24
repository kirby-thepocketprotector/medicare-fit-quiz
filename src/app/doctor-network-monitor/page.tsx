'use client';

import { useState } from 'react';
import Script from 'next/script';

// ─── XANO API CONFIGURATION (SECURED) ───
const XANO_CONFIG = {
  // Create endpoint (obfuscated)
  _p1: atob('aHR0cHM6Ly94OGtpLWxldGwtdHdtdC5uNy54YW5v'),
  _p2: atob('LmlvL2FwaTpndE5pbHZNSC90cHBfZG9jdG9yY2hlY2tfc3VibWl0'),

  // Update endpoint (obfuscated)
  _p1_update: atob('aHR0cHM6Ly94OGtpLWxldGwtdHdtdC5uNy54YW5v'),
  _p2_update: atob('LmlvL2FwaTpndE5pbHZNSC90cHBfZG9jdG9yY2hlY2tfc3VibWl0X3VwZGF0ZQ=='),

  // Reconstruct create endpoint at runtime
  getEndpoint: function() {
    if (typeof this._p1 === 'undefined' || typeof this._p2 === 'undefined') {
      return null;
    }
    return this._p1 + this._p2;
  },

  // Reconstruct update endpoint at runtime
  getUpdateEndpoint: function() {
    if (typeof this._p1_update === 'undefined' || typeof this._p2_update === 'undefined') {
      return null;
    }
    return this._p1_update + this._p2_update;
  },

  // Generate request signature
  getSignature: function() {
    const timestamp = Date.now();
    const checksum = (timestamp % 97) + 13;
    return btoa(`${timestamp}:${checksum}`);
  },

  // Validate origin
  validateOrigin: function() {
    const allowedDomains = ['thepocketprotector.com', 'localhost'];
    const hostname = window.location.hostname;
    return allowedDomains.some(domain => hostname.includes(domain));
  }
};

// ─── XANO API SUBMISSION (SECURED) ───
interface DoctorCheckFormData {
  doctorName: string;
  planName: string;
  phone: string;
  email: string;
  zipCode: string;
  planMode?: 'type' | 'photo' | null;
  cardImage?: string | null;
  cardImagePublicUrl?: string | null;
}

async function submitToXano(
  formData: DoctorCheckFormData,
  isRetry: boolean = false,
  contactId: string | null = null
): Promise<any> {
  // Validate origin before submission
  if (!XANO_CONFIG.validateOrigin()) {
    console.error('Invalid origin');
    return null;
  }

  // Get appropriate endpoint based on retry status
  const endpoint = isRetry ? XANO_CONFIG.getUpdateEndpoint() : XANO_CONFIG.getEndpoint();

  if (!endpoint) {
    console.error('Configuration error');
    return null;
  }

  // Get current URL parameters for UTM tracking
  const urlParams = new URLSearchParams(window.location.search);
  const getUTM = (param: string) => urlParams.get(param) || null;

  const payload: any = {
    doctor_name: formData.doctorName,
    plan_name: formData.planMode === 'type' ? formData.planName : '',
    plan_photo: formData.planMode === 'photo' && formData.cardImagePublicUrl ? formData.cardImagePublicUrl : '',
    phone: formData.phone ? `+1 ${formData.phone}` : '',
    email: formData.email,
    zipcode: formData.zipCode,
    submit_location: "tpp_doctor_network_monitor",
    url_slug: window.location.pathname,
    submitted_at: new Date().toISOString(),

    // UTM Tracking
    utm_source: getUTM("utm_source"),
    utm_medium: getUTM("utm_medium"),
    utm_campaign: getUTM("utm_campaign"),
    utm_creative: getUTM("utm_creative"),
    utm_placement: getUTM("utm_placement")
  };

  // Add contactID if this is a retry/update
  if (isRetry && contactId) {
    payload.contactID = contactId;
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Request-Signature': XANO_CONFIG.getSignature()
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    // Check for duplicate contact error (409 or error in response)
    if (data && (data as any).tpp_ && (data as any).tpp_.response && (data as any).tpp_.response.result) {
      const result = (data as any).tpp_.response.result;

      // Check if it's a "Contact already exists" error
      if (result.status === "error" &&
          result.message &&
          result.message.includes("Existing ID:")) {

        // Extract the existing contact ID from error message
        const existingId = result.message.split("Existing ID:")[1].trim();

        if (window.location.hostname === 'localhost') {
          console.log('Contact already exists. Updating contact ID:', existingId);
        }

        // Retry with update endpoint if this wasn't already a retry
        if (!isRetry && existingId) {
          return submitToXano(formData, true, existingId);
        }
      }
    }

    // Check HTTP response status
    if (!response.ok) {
      throw new Error(`API submission failed: ${response.status}`);
    }

    // Log success only on localhost
    if (window.location.hostname === 'localhost') {
      console.log('Submission successful:', data);
    }

    return data;
  } catch (error) {
    // Generic error message
    if (window.location.hostname === 'localhost') {
      console.error('Submission error:', error);
    }
    return null;
  }
}

const CameraIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="6" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M8 6l1-2.5a1 1 0 01.9-.5h4.2a1 1 0 01.9.5L16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#16a34a" />
    <path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 4L6 10v10c0 9.33 5.97 18.07 14 20 8.03-1.93 14-10.67 14-20V10L20 4z" fill="#16a34a" fillOpacity="0.12" stroke="#16a34a" strokeWidth="2" />
    <path d="M14 20l4 4 8-8" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BellIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 6c-5.52 0-10 4.48-10 10v6l-2 4h24l-2-4v-6c0-5.52-4.48-10-10-10z" fill="#16a34a" fillOpacity="0.12" stroke="#16a34a" strokeWidth="2" />
    <path d="M17 30c0 1.66 1.34 3 3 3s3-1.34 3-3" stroke="#16a34a" strokeWidth="2" />
  </svg>
);

const SearchIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="18" cy="18" r="10" fill="#16a34a" fillOpacity="0.12" stroke="#16a34a" strokeWidth="2" />
    <path d="M26 26l6 6" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export default function DoctorNetworkMonitor() {
  const [formData, setFormData] = useState({
    doctorName: "",
    planName: "",
    phone: "",
    email: "",
    zipCode: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [planMode, setPlanMode] = useState<'type' | 'photo' | null>(null);
  const [cardImage, setCardImage] = useState<string | null>(null);
  const [cardImagePublicUrl, setCardImagePublicUrl] = useState<string | null>(null);
  const [cardFileName, setCardFileName] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleCardUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show preview immediately
    setCardImage(URL.createObjectURL(file));
    setCardFileName(file.name);
    if (errors.plan) setErrors((prev) => ({ ...prev, plan: "" }));

    // Upload to Supabase
    setUploading(true);
    try {
      const SUPABASE_URL = "https://xrfihlkgoemvmazxkesj.supabase.co";
      const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyZmlobGtnb2Vtdm1henhrZXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4NDEyODEsImV4cCI6MjA4NzQxNzI4MX0.9ae5hxE9Gr68S1PtBNVNBj3eUug_1Fg_ijWphQ2NxSM";

      // @ts-ignore - Supabase is loaded via CDN
      const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

      // Sanitize filename
      const sanitizeFileName = (fileName: string) => {
        return fileName
          .normalize("NFKD")
          .replace(/\s+/g, "-")
          .replace(/[^\w\-\.]/g, "");
      };

      const fileName = `${Date.now()}-${sanitizeFileName(file.name)}`;

      // Upload to Supabase Storage bucket "doctorcards"
      const { data, error } = await supabase.storage
        .from("doctorcards")
        .upload(fileName, file);

      if (error) {
        console.error("Upload failed:", error);
        alert("Upload failed: " + error.message);
        setUploading(false);
        return;
      }

      // Get public URL
      const { data: publicData } = supabase.storage
        .from("doctorcards")
        .getPublicUrl(fileName);

      const publicUrl = publicData.publicUrl;
      console.log("Image uploaded! Public URL:", publicUrl);

      setCardImagePublicUrl(publicUrl);
      setUploading(false);
    } catch (error) {
      console.error("Supabase upload error:", error);
      alert("Upload failed. Please try again.");
      setUploading(false);
    }
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.doctorName.trim()) e.doctorName = "Required";
    if (!planMode) {
      e.plan = "Please choose how to provide your plan info";
    } else if (planMode === "type" && !formData.planName.trim()) {
      e.plan = "Please enter your plan name";
    } else if (planMode === "photo" && !cardImage) {
      e.plan = "Please upload a photo of your card";
    }
    if (!formData.phone || formData.phone.replace(/\D/g, "").length < 10) e.phone = "Valid 10-digit phone required";
    if (!formData.zipCode || formData.zipCode.replace(/\D/g, "").length < 5) e.zipCode = "Valid ZIP code required";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Invalid email format";
    setErrors(e);
    return Object.keys(e).length === 0;
  };



  const handleSubmit = async () => {
    // Prevent double submission
    if (isSubmitting) return;

    // Validate form
    if (!validate()) return;

    // Set submitting state to prevent double submissions
    setIsSubmitting(true);

    try {
      // Submit to Xano with HubSpot integration
      await submitToXano({
        ...formData,
        planMode,
        cardImage,
        cardImagePublicUrl
      });

      // Set submitted state to show success screen
      setSubmitted(true);

      // Fire Google Analytics event on successful submission
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "View_Doctor_Submit",
        tool_name: "doctorcheck",
        tool_step: "submit",
        url_slug: window.location.pathname
      });
    } catch (error) {
      console.error('Submission failed:', error);
      // Re-enable the form if submission fails
      setIsSubmitting(false);
    }
  };

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
            You&apos;re All Set
          </h2>
          <p className="text-[17px] text-gray-600 leading-relaxed mb-8 max-w-md mx-auto">
            We&apos;ll check your doctor&apos;s network status every month and alert you immediately if anything changes.
          </p>
          <div className="bg-white rounded-2xl p-7 border border-gray-200 text-left shadow-sm">
            <div className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-4">
              Monitoring Details
            </div>
            <div className="flex flex-col gap-3">
              {[
                ["Provider", formData.doctorName],
                ["Plan", planMode === "type" ? formData.planName : "📷 Card photo uploaded"],
                ["ZIP Code", formData.zipCode],
                ["Phone", formData.phone],
                ...(formData.email ? [["Email", formData.email]] : []),
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{label}</span>
                  <span className="text-sm font-semibold text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setIsSubmitting(false);
              setFormData({ doctorName: "", planName: "", phone: "", email: "", zipCode: "" });
              setPlanMode(null);
              setCardImage(null);
              setCardImagePublicUrl(null);
              setCardFileName("");
            }}
            className="mt-6 px-7 py-3 text-[15px] font-semibold text-green-600 bg-transparent border-2 border-green-600 rounded-lg hover:bg-green-50 transition-colors"
          >
            + Monitor Another Provider
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PNR7578Q');`}
      </Script>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XWRC8436T9"
        strategy="afterInteractive"
      />
      <Script id="ga-script" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XWRC8436T9', { anonymize_ip: true });
gtag('set', 'debug_mode', true);`}
      </Script>

      {/* Supabase Client */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"
        strategy="beforeInteractive"
      />

      {/* UTM Parameter Preservation Script */}
      <Script id="utm-preservation" strategy="afterInteractive">
        {`document.addEventListener("DOMContentLoaded", function () {
  // Get all current URL params
  const currentParams = new URLSearchParams(window.location.search);

  // If no query params exist, exit
  if ([...currentParams].length === 0) return;

  // Function to merge current params into a URL string
  function mergeParams(urlStr) {
    try {
      const url = new URL(urlStr, window.location.origin);
      currentParams.forEach((value, key) => {
        if (!url.searchParams.has(key)) {
          url.searchParams.set(key, value);
        }
      });
      return url.toString();
    } catch (e) {
      return urlStr; // Return original if invalid
    }
  }

  // Update all <a> links
  document.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");
    if (href.startsWith("#") || href.startsWith("javascript:")) return;
    link.href = mergeParams(href);
  });

  // Update buttons or elements with onclick modifying window.location.href
  document.querySelectorAll("[onclick]").forEach(el => {
    const onclickCode = el.getAttribute("onclick");

    // Check if onclick sets window.location.href
    if (/window\\.location\\.href\\s*=\\s*['"\`]/.test(onclickCode)) {
      el.addEventListener("click", function (event) {
        event.preventDefault();

        // Extract the URL from the onclick string
        const urlMatch = onclickCode.match(/window\\.location\\.href\\s*=\\s*['"\`](.*?)['"\`]/);
        if (!urlMatch) return;

        const updatedUrl = mergeParams(urlMatch[1]);
        window.location.href = updatedUrl;
      });
    }
  });
});`}
      </Script>

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-5 pb-16">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PNR7578Q"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Header */}
      <div className="max-w-[720px] mx-auto pt-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-green-200 rounded-full px-5 py-2 mb-6 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
          <span className="text-xs font-semibold text-green-600 tracking-wide">FREE MONITORING TOOL</span>
        </div>

        <h1 className="font-serif text-[clamp(32px,5vw,48px)] font-normal text-gray-900 leading-tight mb-4">
          Is Your Doctor Still<br />In Your Network?
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-[520px] mx-auto mb-5">
          Insurance networks change without warning. We&apos;ll monitor your doctor&apos;s status and alert you <em>before</em> you get a surprise bill.
        </p>
      </div>

      {/* How It Works */}
      <div className="max-w-[720px] mx-auto mb-10 flex gap-6 justify-center flex-wrap">
        {[
          { icon: <SearchIcon />, title: "You Tell Us", desc: "Enter your doctor and plan" },
          { icon: <ShieldIcon />, title: "We Monitor", desc: "Monthly network status checks" },
          { icon: <BellIcon />, title: "We Alert You", desc: "Instant notice if anything changes" },
        ].map((step, i) => (
          <div key={i} className="flex-1 basis-[180px] max-w-[210px] text-center p-5">
            <div className="flex justify-center mb-2">{step.icon}</div>
            <div className="font-bold text-[15px] text-gray-900 mb-1">{step.title}</div>
            <div className="text-xs text-gray-500">{step.desc}</div>
          </div>
        ))}
      </div>

      {/* Form Card */}
      <div className="max-w-[560px] mx-auto bg-white rounded-[20px] p-9 shadow-[0_4px_24px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] border border-gray-200">
        <div className="flex flex-col gap-5">
          {/* Doctor / Facility */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1.5">
              Doctor or Facility Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Dr. Sarah Johnson or Mayo Clinic"
              value={formData.doctorName}
              onChange={(e) => handleChange("doctorName", e.target.value)}
              className={`w-full p-3.5 text-base border-2 rounded-lg outline-none transition-all ${
                errors.doctorName ? 'border-red-600' : 'border-gray-300 focus:border-green-600 focus:shadow-[0_0_0_3px_rgba(22,163,74,0.1)]'
              }`}
            />
            {errors.doctorName && <span className="text-xs text-red-600 mt-1 block">{errors.doctorName}</span>}
          </div>

          {/* Plan - Type or Photo */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1.5">
              Your Current Health Plan *
            </label>
            <div className={`flex gap-2.5 ${planMode ? 'mb-3.5' : ''}`}>
              <button
                type="button"
                onClick={() => {
                  setPlanMode("type");
                  if (errors.plan) setErrors((prev) => ({ ...prev, plan: "" }));
                }}
                className={`flex-1 px-3 py-3.5 text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                  planMode === "type"
                    ? 'text-white bg-green-600 border-2 border-green-600'
                    : 'text-gray-700 bg-gray-50 border-2 border-gray-300'
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9h12M9 3v12" stroke={planMode === "type" ? "#fff" : "#888"} strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                Type Plan Name
              </button>
              <button
                type="button"
                onClick={() => {
                  setPlanMode("photo");
                  if (errors.plan) setErrors((prev) => ({ ...prev, plan: "" }));
                }}
                className={`flex-1 px-3 py-3.5 text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                  planMode === "photo"
                    ? 'text-white bg-green-600 border-2 border-green-600'
                    : 'text-gray-700 bg-gray-50 border-2 border-gray-300'
                }`}
              >
                <CameraIcon />
                Photo of Card
              </button>
            </div>

            {planMode === "type" && (
              <input
                type="text"
                placeholder="e.g. Humana Gold Plus H1036-046"
                value={formData.planName}
                onChange={(e) => handleChange("planName", e.target.value)}
                className={`w-full p-3.5 text-base border-2 rounded-lg outline-none transition-all ${
                  errors.plan ? 'border-red-600' : 'border-gray-300 focus:border-green-600 focus:shadow-[0_0_0_3px_rgba(22,163,74,0.1)]'
                }`}
              />
            )}

            {planMode === "photo" && (
              <div>
                {!cardImage ? (
                  <label className={`flex flex-col items-center justify-center p-7 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                    errors.plan ? 'border-red-600 bg-red-50' : 'border-gray-400 bg-gray-50 hover:border-green-600 hover:bg-green-50'
                  }`}>
                    <input type="file" accept="image/*" capture="environment" onChange={handleCardUpload} className="hidden" />
                    <div className="text-green-600 mb-2"><CameraIcon /></div>
                    <span className="text-[15px] font-semibold text-gray-700">Tap to take a photo or upload</span>
                    <span className="text-xs text-gray-400 mt-1">Front of your insurance card</span>
                  </label>
                ) : (
                  <div className="relative rounded-xl overflow-hidden border-2 border-green-600">
                    <img src={cardImage} alt="Insurance card" className="w-full h-[180px] object-cover block" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <CheckIcon />
                        <span className="text-xs text-white font-medium">{cardFileName}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setCardImage(null);
                          setCardFileName("");
                        }}
                        className="text-xs font-semibold text-white bg-white/20 rounded px-3 py-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {errors.plan && <span className="text-xs text-red-600 mt-1 block">{errors.plan}</span>}
          </div>

          {/* ZIP Code */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-1.5">
              ZIP Code *
            </label>
            <input
              type="text"
              placeholder="e.g. 60614"
              value={formData.zipCode}
              onChange={(e) => handleChange("zipCode", e.target.value.replace(/\D/g, "").slice(0, 5))}
              className={`max-w-[160px] p-3.5 text-base border-2 rounded-lg outline-none transition-all ${
                errors.zipCode ? 'border-red-600' : 'border-gray-300 focus:border-green-600 focus:shadow-[0_0_0_3px_rgba(22,163,74,0.1)]'
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
              value={formData.phone}
              onChange={(e) => handleChange("phone", formatPhone(e.target.value))}
              className={`w-full p-3.5 text-base border-2 rounded-lg outline-none transition-all ${
                errors.phone ? 'border-red-600' : 'border-gray-300 focus:border-green-600 focus:shadow-[0_0_0_3px_rgba(22,163,74,0.1)]'
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
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`w-full p-3.5 text-base border-2 rounded-lg outline-none transition-all ${
                errors.email ? 'border-red-600' : 'border-gray-300 focus:border-green-600 focus:shadow-[0_0_0_3px_rgba(22,163,74,0.1)]'
              }`}
            />
            {errors.email && <span className="text-xs text-red-600 mt-1 block">{errors.email}</span>}
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full p-4 text-[17px] font-bold text-white rounded-xl shadow-[0_4px_16px_rgba(22,163,74,0.3)] transition-all mt-2 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-br from-green-600 to-green-700 hover:translate-y-[-1px] hover:shadow-[0_6px_24px_rgba(22,163,74,0.4)]'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Start Free Monitoring'}
          </button>

          {/* Trust line */}
          <div className="flex items-center justify-center gap-5 flex-wrap mt-1">
            {["100% Free", "No Spam", "Cancel Anytime"].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <CheckIcon />
                <span className="text-xs text-gray-500 font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Need Help Section */}
      <div className="max-w-[560px] mx-auto mt-8 bg-white rounded-2xl p-6 border border-gray-200 flex items-center justify-center gap-3 flex-wrap shadow-sm">
        <span className="text-[15px] text-gray-600 font-medium">Need help setting up?</span>
        <div className="flex gap-3 flex-wrap justify-center">
          <a
            href="tel:+18667643312"
            style={{ textDecoration: 'none' }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all shadow-[0_2px_8px_rgba(22,163,74,0.2)]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.67 11.62v1.73a1.15 1.15 0 01-1.26 1.15 11.42 11.42 0 01-4.98-1.77 11.25 11.25 0 01-3.46-3.46A11.42 11.42 0 013.2 4.26 1.15 1.15 0 014.34 3h1.73a1.15 1.15 0 011.15.99 7.4 7.4 0 00.4 1.62 1.15 1.15 0 01-.26 1.22l-.73.73a9.22 9.22 0 003.46 3.46l.73-.73a1.15 1.15 0 011.22-.26 7.4 7.4 0 001.62.4 1.15 1.15 0 01.99 1.17z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Call Us
          </a>
          <a
            href="/doctor-tool"
            style={{ textDecoration: 'none', display: 'none' }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-green-600 bg-white border-2 border-green-600 rounded-lg hover:bg-green-50 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="#16a34a" strokeWidth="1.5"/>
              <path d="M11 11l3 3" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Use Our Doctor Tool
          </a>
        </div>
      </div>

      {/* Footer note */}
      <p className="max-w-[480px] mx-auto mt-8 text-center text-xs text-gray-400 leading-relaxed">
        By signing up you agree to receive network status alerts via SMS. Message and data rates may apply. Powered by The Pocket Protector.
      </p>
    </div>
    </>
  );
}
