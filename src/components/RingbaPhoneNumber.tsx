'use client';

import { useEffect, useRef } from 'react';

interface RingbaPhoneNumberProps {
  /** Default phone number to display (before Ringba swaps it) */
  defaultNumber: string;
  /** Display format (e.g., "1-844-917-0659") */
  displayFormat?: string;
  /** Additional CSS class names */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Whether to render as a clickable link */
  asLink?: boolean;
  /** Callback when number is clicked */
  onCallClick?: () => void;
  /** Custom content to display alongside or instead of the phone number */
  children?: React.ReactNode;
  /** Show phone number in addition to children */
  showNumber?: boolean;
}

/**
 * RingbaPhoneNumber Component
 *
 * Displays a phone number that Ringba can dynamically swap based on traffic source.
 * The component:
 * - Displays the phone number as visible text
 * - Makes it clickable (tel: link)
 * - Tags it properly for Ringba to detect and swap
 * - Handles dynamic number updates from Ringba
 *
 * Ringba Integration:
 * - Uses data-ringba-number attribute for tracking
 * - Adds ringba-phone class for easier targeting
 * - Manually triggers Ringba refresh after component mounts
 */
export default function RingbaPhoneNumber({
  defaultNumber,
  displayFormat,
  className = '',
  style = {},
  asLink = true,
  onCallClick,
  children,
  showNumber = true,
}: RingbaPhoneNumberProps) {
  const phoneRef = useRef<HTMLAnchorElement | HTMLSpanElement>(null);
  const displayNumber = displayFormat || defaultNumber;

  useEffect(() => {
    // Trigger Ringba to process this element after mount
    if (typeof window !== 'undefined' && (window as any).Ringba) {
      try {
        // Ringba might have different API methods, try common ones:
        if (typeof (window as any).Ringba.processDOM === 'function') {
          (window as any).Ringba.processDOM();
        } else if (typeof (window as any).Ringba.refresh === 'function') {
          (window as any).Ringba.refresh();
        } else if (typeof (window as any).Ringba.update === 'function') {
          (window as any).Ringba.update();
        }
      } catch (error) {
        console.debug('Ringba manual refresh failed:', error);
      }
    }
  }, []);

  const handleClick = () => {
    if (onCallClick) {
      onCallClick();
    }

    // If rendered as link, the tel: link will handle the call
    // If not a link, manually trigger the call
    if (!asLink && phoneRef.current) {
      const numberToCall = phoneRef.current.textContent?.replace(/[^0-9]/g, '') || defaultNumber.replace(/[^0-9]/g, '');
      window.location.href = `tel:${numberToCall}`;
    }
  };

  const commonProps = {
    ref: phoneRef as any,
    'data-ringba-number': defaultNumber.replace(/[^0-9]/g, ''), // Numbers only for Ringba
    className: `ringba-phone ${className}`,
    style: style,
    onClick: handleClick,
  };

  const content = (
    <>
      {children}
      {showNumber && <span data-ringba-swap="true">{displayNumber}</span>}
    </>
  );

  if (asLink) {
    return (
      <a
        href={`tel:${defaultNumber.replace(/[^0-9]/g, '')}`}
        {...commonProps}
      >
        {content}
      </a>
    );
  }

  return (
    <span {...commonProps}>
      {content}
    </span>
  );
}
