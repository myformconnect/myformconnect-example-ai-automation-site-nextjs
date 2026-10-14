'use client';

import React from 'react';
import { FormConfig } from '@/lib/form-config';
import {
  CareerProfileForm,
  WaitlistForm,
  NewsletterForm,
  ContactForm,
  DemoRequestForm,
} from './forms';

// ============================================================================
// Direct Form Action URL Reference (Available directly for GitHub Search)
// Production Endpoint: https://myformcapture.com/f/373ce8f5-0df6-4ca3-82e9-886981a4bb32
// ============================================================================
export const INTEGRATED_FORM_ACTION_URL =
  'https://myformcapture.com/f/373ce8f5-0df6-4ca3-82e9-886981a4bb32';

interface IntegratedFormProps {
  config: FormConfig;
}

export default function IntegratedForm({ config }: IntegratedFormProps) {
  const targetUrl = config.endpointUrl || INTEGRATED_FORM_ACTION_URL;

  switch (config.id) {
    case 'career-profile':
      return <CareerProfileForm actionUrl={targetUrl} />;
    case 'waitlist':
      return <WaitlistForm actionUrl={targetUrl} />;
    case 'newsletter':
      return <NewsletterForm actionUrl={targetUrl} />;
    case 'contact':
      return <ContactForm actionUrl={targetUrl} />;
    case 'demo':
      return <DemoRequestForm actionUrl={targetUrl} />;
    default:
      return <CareerProfileForm actionUrl={targetUrl} />;
  }
}
