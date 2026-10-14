'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

// Form action URL
const MFC_FORM_ACTION_URL =
  process.env.NEXT_PUBLIC_MFC_DEMO_URL ||
  'https://staging.myformcapture.com/f/af081980-b7c4-4d97-a99d-e3e00c3473dc';

const MFC_MEETING_TITLE = 'Book a Call';
const MFC_MEETING_DESCRIPTION = '15-minute intro call';
const MFC_MEETING_DURATION = 15;

export interface BookingWidgetProps {
  actionUrl?: string;
  meetingTitle?: string;
  meetingDescription?: string;
  meetingDuration?: number;
}

export default function BookingWidget({
  actionUrl = MFC_FORM_ACTION_URL,
  meetingTitle = MFC_MEETING_TITLE,
  meetingDescription = MFC_MEETING_DESCRIPTION,
  meetingDuration = MFC_MEETING_DURATION,
}: BookingWidgetProps) {
  // Parse the form UUID from the URL
  const rawUrl = (actionUrl || '').trim();
  const uuidMatch = rawUrl.match(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/);
  const uuid = uuidMatch ? uuidMatch[0] : 'af081980-b7c4-4d97-a99d-e3e00c3473dc';

  let apiBase = 'https://staging.myformcapture.com';
  try {
    const parsed = new URL(rawUrl);
    apiBase = parsed.origin;
  } catch (e) {
    // fallback
  }

  const cleanSubmitUrl = `${apiBase}/f/${uuid}`;
  const slotsUrl = `${cleanSubmitUrl}/slots`;

  // Trigger widget render on client navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      document.dispatchEvent(new Event('DOMContentLoaded'));
      document.dispatchEvent(new Event('turbo:render'));
    }, 50);

    return () => clearTimeout(timer);
  }, [actionUrl]);

  return (
    <div className="wix-booking-wrapper">
      {/* Widget stylesheet and script */}
      <link rel="stylesheet" href="/booking-widget.css" />
      <Script
        src={`${apiBase}/booking-widget.js`}
        strategy="afterInteractive"
        onLoad={() => {
          document.dispatchEvent(new Event('DOMContentLoaded'));
          document.dispatchEvent(new Event('turbo:render'));
        }}
      />

      {/* Target container */}
      <div
        id="mfc-booking-widget"
        data-booking-widget=""
        data-form-uuid={uuid}
        data-api-base={apiBase}
        data-submit-url={cleanSubmitUrl}
        data-slots-url={slotsUrl}
        data-branding-name="MyFormConnect"
        data-branding-url="https://myformconnect.io"
        data-meeting-title={meetingTitle}
        data-meeting-description={meetingDescription}
        data-meeting-duration={meetingDuration}
      />
    </div>
  );
}
