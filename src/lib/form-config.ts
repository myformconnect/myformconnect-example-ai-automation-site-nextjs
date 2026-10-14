// ============================================================================
// MyFormConnect (MFC) Form Configurations
// Action URL visible directly in file for GitHub search and production operation.
// Reference endpoint: https://myformcapture.com/f/373ce8f5-0df6-4ca3-82e9-886981a4bb32
// ============================================================================

export const DEFAULT_MFC_ACTION_URL =
  'https://myformcapture.com/f/373ce8f5-0df6-4ca3-82e9-886981a4bb32';

export const DEFAULT_MFC_FORM_UUID =
  '373ce8f5-0df6-4ca3-82e9-886981a4bb32';

export interface FormConfig {
  id: 'waitlist' | 'career-profile' | 'newsletter' | 'contact' | 'demo';
  badge: string;
  title: string;
  description: string;
  submitLabel: string;
  submitLoadingLabel: string;
  endpointUrl: string;
  formUuid: string;
  isConfigured: boolean;
  disclaimer?: string;
  demoNote?: string;
}

export const MFC_FORM_CONFIGS: Record<string, FormConfig> = {
  'career-profile': {
    id: 'career-profile',
    badge: '01 / Career Profile — Primary Workflow',
    title: 'Prepare your career profile',
    description:
      'Ground your resume, skills, and target job requirements for tailored agent-assisted application preparation.',
    submitLabel: 'Prepare my profile',
    submitLoadingLabel: 'Packaging profile...',
    formUuid: process.env.NEXT_PUBLIC_MFC_PROFILE_ID || DEFAULT_MFC_FORM_UUID,
    endpointUrl:
      process.env.NEXT_PUBLIC_MFC_PROFILE_URL ||
      'https://myformcapture.com/f/373ce8f5-0df6-4ca3-82e9-886981a4bb32',
    isConfigured: true,
    disclaimer:
      'Note: This form demonstrates the application preparation workflow and packages your information for review. It does not submit an application to external employers.',
  },
  waitlist: {
    id: 'waitlist',
    badge: '02 / Early Access Waitlist',
    title: 'Get early access',
    description:
      'Join forward-thinking job seekers securing early access to AutoSubmit career automation tools.',
    submitLabel: 'Join the waitlist',
    submitLoadingLabel: 'Submitting to waitlist...',
    formUuid: process.env.NEXT_PUBLIC_MFC_WAITLIST_ID || DEFAULT_MFC_FORM_UUID,
    endpointUrl:
      process.env.NEXT_PUBLIC_MFC_WAITLIST_URL ||
      'https://myformcapture.com/f/373ce8f5-0df6-4ca3-82e9-886981a4bb32',
    isConfigured: true,
  },
  newsletter: {
    id: 'newsletter',
    badge: '03 / Career Intelligence Newsletter',
    title: 'A smarter job search, in your inbox',
    description:
      'Bi-weekly briefings on career automation, AI tools, and interview preparation strategy.',
    submitLabel: 'Subscribe',
    submitLoadingLabel: 'Subscribing...',
    formUuid: process.env.NEXT_PUBLIC_MFC_NEWSLETTER_ID || DEFAULT_MFC_FORM_UUID,
    endpointUrl:
      process.env.NEXT_PUBLIC_MFC_NEWSLETTER_URL ||
      'https://myformcapture.com/f/373ce8f5-0df6-4ca3-82e9-886981a4bb32',
    isConfigured: true,
  },
  contact: {
    id: 'contact',
    badge: '04 / Support & Inquiries',
    title: "Let's talk",
    description:
      'Have questions, partner inquiries, or product feedback? Reach our team directly.',
    submitLabel: 'Send inquiry',
    submitLoadingLabel: 'Sending message...',
    formUuid: process.env.NEXT_PUBLIC_MFC_CONTACT_ID || DEFAULT_MFC_FORM_UUID,
    endpointUrl:
      process.env.NEXT_PUBLIC_MFC_CONTACT_URL ||
      'https://myformcapture.com/f/373ce8f5-0df6-4ca3-82e9-886981a4bb32',
    isConfigured: true,
  },
  demo: {
    id: 'demo',
    badge: '05 / Product Demonstration Walkthrough',
    title: 'See AutoSubmit in action',
    description:
      'Schedule a tailored walkthrough of the career agent workflow and form automation features.',
    submitLabel: 'Request a demo',
    submitLoadingLabel: 'Requesting demo...',
    formUuid: process.env.NEXT_PUBLIC_MFC_DEMO_ID || DEFAULT_MFC_FORM_UUID,
    endpointUrl:
      process.env.NEXT_PUBLIC_MFC_DEMO_URL ||
      'https://myformcapture.com/f/373ce8f5-0df6-4ca3-82e9-886981a4bb32',
    isConfigured: true,
    demoNote:
      'Live walkthroughs are conducted 1-on-1 by product specialists. No automated bot calendar or third-party tracking required.',
  },
};
