'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ContinueButton from '@/components/ContinueButton';
import { useNavigateWithUTM } from '@/hooks/useNavigateWithUTM';
import { useQuiz } from '@/contexts/QuizContext';
import { syncLeadToXano, mapResultIdToRecommendedPlan, sendLeadToHubSpot } from '@/utils/xano';
import { trackLeadSubmission, calculateAge, getAgeGroup } from '@/utils/analytics';
import { getAllUTMParams } from '@/utils/utm';

function ContactForm() {
  const router = useNavigateWithUTM();
  const searchParams = useSearchParams();
  const resultId = searchParams.get('result');
  const { setContactInfo, answers } = useQuiz();

  const [firstName, setFirstName] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{
    firstName?: string;
    zipcode?: string;
    email?: string;
    phone?: string;
  }>({});

  useEffect(() => {
    // Prefetch the thank you page
    router.prefetch('/ntm-quiz-2026-v2-leadform/thank-you');
  }, [router]);

  const formatPhoneNumber = (value: string): string => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, '');

    // Limit to 10 digits
    const limited = numbers.slice(0, 10);

    // Format as (XXX) XXX-XXXX
    if (limited.length <= 3) {
      return limited;
    } else if (limited.length <= 6) {
      return `(${limited.slice(0, 3)}) ${limited.slice(3)}`;
    } else {
      return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`;
    }
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    setPhone(formatted);

    // Clear phone error when user starts typing
    if (errors.phone) {
      setErrors({ ...errors, phone: undefined });
    }
  };

  const handleZipcodeChange = (value: string) => {
    // Only allow numeric input and limit to 5 digits
    const numbers = value.replace(/\D/g, '').slice(0, 5);
    setZipcode(numbers);

    // Clear zipcode error when user starts typing
    if (errors.zipcode) {
      setErrors({ ...errors, zipcode: undefined });
    }
  };

  const validateZipcode = (zip: string): boolean => {
    // Must be exactly 5 digits
    return /^\d{5}$/.test(zip);
  };

  const validateEmail = (email: string): boolean => {
    // Email is required in V2
    if (email === '') return false;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Phone is optional in V2, but if provided must be valid
    if (phone === '') return true;

    // Remove formatting and check if we have exactly 10 digits
    const numbers = phone.replace(/\D/g, '');
    return numbers.length === 10;
  };

  const formatPhoneForAPI = (phone: string): string => {
    // Remove all non-numeric characters
    const numbers = phone.replace(/\D/g, '');

    // Format as +1 (XXX) XXX-XXXX
    if (numbers.length === 10) {
      return `+1 (${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
    }

    // Fallback to original if not 10 digits
    return phone;
  };

  const handleSubmit = async () => {
    const newErrors: typeof errors = {};

    // Validate required fields
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!zipcode.trim()) {
      newErrors.zipcode = 'ZIP code is required';
    } else if (!validateZipcode(zipcode)) {
      newErrors.zipcode = 'Please enter a valid 5-digit ZIP code';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (phone && !validatePhone(phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save contact info to context
    setContactInfo({
      firstName: firstName.trim(),
      zipcode: zipcode.trim(),
      email: email.trim(),
      phone: phone ? phone.replace(/\D/g, '') : undefined,
    });

    // Send contact/lead data to Xano and HubSpot
    if (resultId) {
      const recommendedPlan = mapResultIdToRecommendedPlan(resultId);
      const sessionId = typeof window !== 'undefined' ? (window as any).ntmSessionId : null;
      const medicareAB = answers.hasPartAB || false;

      // Calculate age and age_group from birth data
      const birthMonth = answers.birthMonth || '';
      const birthYear = answers.birthYear || '';
      const age = calculateAge(birthMonth, birthYear);
      const ageGroup = getAgeGroup(age);

      // Capture UTM parameters from URL
      const utmParams = getAllUTMParams();

      // Send to Xano database
      await syncLeadToXano({
        first_name: firstName.trim(),
        // No last_name in V2
        phone: phone ? formatPhoneForAPI(phone) : undefined,
        email: email.trim(),
        zipcode: zipcode.trim(),
        medicare_ab: medicareAB,
        recommended_plan: recommendedPlan,
        result_id: resultId,
        quiz_session_id: sessionId || 'unknown',
        birth_month: birthMonth,
        birth_year: birthYear,
        age: age,
        age_group: ageGroup,
        url_slug: 'ntm-quiz-2026-v2-leadform',
        utm_source: utmParams.utm_source,
        utm_campaign: utmParams.utm_campaign,
        utm_content: utmParams.utm_content,
        utm_creative: utmParams.utm_creative,
      });

      // Send to HubSpot via Xano (fire and forget - non-blocking)
      sendLeadToHubSpot({
        firstname: firstName.trim(),
        // No lastname in V2
        phone: phone ? formatPhoneForAPI(phone) : undefined,
        email: email.trim(),
        zipcode: zipcode.trim(),
        medicare_ab: medicareAB,
        recommended_plan: recommendedPlan,
        submit_location: 'ntm_quiz_v1_2026', // Keep as V1
        url_slug: 'ntm-quiz-2026-v2-leadform',
        birth_year: birthYear,
        birth_month: birthMonth,
        age: age,
        utm_source: utmParams.utm_source,
        utm_campaign: utmParams.utm_campaign,
        utm_creative: utmParams.utm_creative,
      }).catch((error) => {
        // Silent fail - already logged in sendLeadToHubSpot
        console.debug('HubSpot submission failed:', error);
      });

      // Track lead submission in GA4
      trackLeadSubmission(recommendedPlan, medicareAB);
    }

    // Navigate to thank you page with first name
    router.push(`/ntm-quiz-2026-v2-leadform/thank-you?name=${encodeURIComponent(firstName.trim())}&result=${resultId}`);
  };

  const isValid =
    firstName.trim() !== '' &&
    validateZipcode(zipcode) &&
    validateEmail(email) &&
    validatePhone(phone);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FAFAFA',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        flex: 1,
        padding: '24px',
        paddingTop: '60px',
        maxWidth: '500px',
        margin: '0 auto',
        width: '100%',
      }}>
        {/* Heading */}
        <h1 style={{
          color: '#1A1F2C',
          fontSize: '24px',
          fontWeight: '700',
          lineHeight: '32px',
          marginBottom: '12px',
          textAlign: 'center',
        }}>
          Your Recommendation is Almost Ready
        </h1>

        {/* Subtitle */}
        <p style={{
          color: '#5B6B7F',
          fontSize: '16px',
          lineHeight: '24px',
          textAlign: 'center',
          marginBottom: '8px',
        }}>
          We'll review your answers and email you a recommendation built around your situation — not a generic template.
        </p>

        {/* Note about phone being optional */}
        <p style={{
          color: '#5B6B7F',
          fontSize: '14px',
          lineHeight: '20px',
          textAlign: 'center',
          marginBottom: '32px',
        }}>
          If you'd like an advisor to walk you through it, you can add your phone number, but that is totally optional. (We'll never spam you or sell your info to anyone)
        </p>

        {/* Form */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                if (errors.firstName) {
                  setErrors({ ...errors, firstName: undefined });
                }
              }}
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '17px',
                color: '#1A1F2C',
                backgroundColor: '#FFFFFF',
                border: `1px solid ${errors.firstName ? '#DC2626' : '#E5E7EB'}`,
                borderRadius: '12px',
                fontWeight: '400',
                outline: 'none',
              }}
            />
            {errors.firstName && (
              <p style={{
                color: '#DC2626',
                fontSize: '13px',
                marginTop: '4px',
              }}>
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Zip Code */}
          <div>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Zip code"
              value={zipcode}
              onChange={(e) => handleZipcodeChange(e.target.value)}
              maxLength={5}
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '17px',
                color: '#1A1F2C',
                backgroundColor: '#FFFFFF',
                border: `1px solid ${errors.zipcode ? '#DC2626' : '#E5E7EB'}`,
                borderRadius: '12px',
                fontWeight: '400',
                outline: 'none',
              }}
            />
            {errors.zipcode && (
              <p style={{
                color: '#DC2626',
                fontSize: '13px',
                marginTop: '4px',
              }}>
                {errors.zipcode}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              inputMode="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  setErrors({ ...errors, email: undefined });
                }
              }}
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '17px',
                color: '#1A1F2C',
                backgroundColor: '#FFFFFF',
                border: `1px solid ${errors.email ? '#DC2626' : '#E5E7EB'}`,
                borderRadius: '12px',
                fontWeight: '400',
                outline: 'none',
              }}
            />
            {errors.email && (
              <p style={{
                color: '#DC2626',
                fontSize: '13px',
                marginTop: '4px',
              }}>
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone (optional) */}
          <div>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="Phone (optional)"
              value={phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '17px',
                color: '#1A1F2C',
                backgroundColor: '#FFFFFF',
                border: `1px solid ${errors.phone ? '#DC2626' : '#E5E7EB'}`,
                borderRadius: '12px',
                fontWeight: '400',
                outline: 'none',
              }}
            />
            {errors.phone && (
              <p style={{
                color: '#DC2626',
                fontSize: '13px',
                marginTop: '4px',
              }}>
                {errors.phone}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <ContinueButton
            onPress={handleSubmit}
            disabled={!isValid}
            label="Get My Free Recommendation"
          />
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div>Loading...</div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}
