import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AutoSubmit — AI Career Automation Agent',
    short_name: 'AutoSubmit',
    description:
      'Automate repetitive job applications with complete human oversight. Match your profile, ground your resume, and stage application drafts.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
