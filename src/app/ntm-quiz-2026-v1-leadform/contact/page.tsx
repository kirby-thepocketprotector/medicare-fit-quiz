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
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
  }>({});

  useEffect(() => {
    // Prefetch the thank you page
    router.prefetch('/ntm-quiz-2026-v1-leadform/thank-you');
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

  const validateEmail = (email: string): boolean => {
    if (email === '') return true; // Email is optional

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
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
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (email && !validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Set loading state
    setIsLoading(true);

    try {
      // Save contact info to context
      setContactInfo({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        phone: phone.replace(/\D/g, ''), // Store unformatted
        email: email.trim(),
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
          last_name: lastName.trim(),
          phone: formatPhoneForAPI(phone),
          email: email.trim() || undefined,
          medicare_ab: medicareAB,
          recommended_plan: recommendedPlan,
          result_id: resultId,
          quiz_session_id: sessionId || 'unknown',
          birth_month: birthMonth,
          birth_year: birthYear,
          age: age,
          age_group: ageGroup,
          url_slug: 'ntm-quiz-2026-v1-leadform',
          utm_source: utmParams.utm_source,
          utm_campaign: utmParams.utm_campaign,
          utm_content: utmParams.utm_content,
          utm_creative: utmParams.utm_creative,
        });

        // Send to HubSpot via Xano (fire and forget - non-blocking)
        sendLeadToHubSpot({
          firstname: firstName.trim(),
          lastname: lastName.trim(),
          phone: formatPhoneForAPI(phone),
          email: email.trim() || undefined,
          medicare_ab: medicareAB,
          recommended_plan: recommendedPlan,
          submit_location: 'ntm_quiz_v1_2026',
          url_slug: 'ntm-quiz-2026-v1-leadform',
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
      router.push(`/ntm-quiz-2026-v1-leadform/thank-you?name=${encodeURIComponent(firstName.trim())}&result=${resultId}`);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsLoading(false);
    }
  };

  const isValid =
    firstName.trim() !== '' &&
    lastName.trim() !== '' &&
    validatePhone(phone) &&
    (email === '' || validateEmail(email));

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
          marginBottom: '32px',
          textAlign: 'center',
        }}>
          Last Step — Where Should We Send Your Results?
        </h1>

        {/* Form */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {/* First Name */}
          <div>
            <label style={{
              display: 'block',
              color: '#1A1F2C',
              fontSize: '15px',
              fontWeight: '500',
              marginBottom: '8px',
            }}>
              First name
            </label>
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

          {/* Last Name */}
          <div>
            <label style={{
              display: 'block',
              color: '#1A1F2C',
              fontSize: '15px',
              fontWeight: '500',
              marginBottom: '8px',
            }}>
              Last name
            </label>
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                if (errors.lastName) {
                  setErrors({ ...errors, lastName: undefined });
                }
              }}
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '17px',
                color: '#1A1F2C',
                backgroundColor: '#FFFFFF',
                border: `1px solid ${errors.lastName ? '#DC2626' : '#E5E7EB'}`,
                borderRadius: '12px',
                fontWeight: '400',
                outline: 'none',
              }}
            />
            {errors.lastName && (
              <p style={{
                color: '#DC2626',
                fontSize: '13px',
                marginTop: '4px',
              }}>
                {errors.lastName}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label style={{
              display: 'block',
              color: '#1A1F2C',
              fontSize: '15px',
              fontWeight: '500',
              marginBottom: '8px',
            }}>
              Phone
            </label>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="(555) 123-4567"
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

          {/* Email */}
          <div>
            <label style={{
              display: 'block',
              color: '#1A1F2C',
              fontSize: '15px',
              fontWeight: '500',
              marginBottom: '8px',
            }}>
              Email (optional)
            </label>
            <input
              type="email"
              inputMode="email"
              placeholder="you@example.com"
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

          {/* Submit Button */}
          <ContinueButton
            onPress={handleSubmit}
            disabled={!isValid}
            loading={isLoading}
            label="Get My Personalized Recommendation"
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
