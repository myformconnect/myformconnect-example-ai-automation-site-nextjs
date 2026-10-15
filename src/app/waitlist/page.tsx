import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import WaitlistForm, { WAITLIST_FORM_ACTION_URL } from '@/components/forms/WaitlistForm';
import { Sparkles, Shield, Clock, Users, ArrowRight } from '@/components/Icons';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Join the Early Access Waitlist',
  description:
    'Secure early access to AutoSubmit and automate repetitive job applications with complete human oversight.',
  alternates: {
    canonical: '/waitlist',
  },
  openGraph: {
    title: 'Join the Early Access Waitlist — AutoSubmit',
    description:
      'Secure early access to AutoSubmit and automate repetitive job applications with complete human oversight.',
    url: '/waitlist',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join the Early Access Waitlist — AutoSubmit',
    description:
      'Secure early access to AutoSubmit and automate repetitive job applications with complete human oversight.',
  },
};

export default function WaitlistPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: '40px', paddingBottom: '96px' }}>
        <div className="container">
          {/* Breadcrumb / Back Link */}
          <div style={{ marginBottom: '28px' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                textDecoration: 'none',
              }}
            >
              <span>← Back to overview</span>
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'flex-start',
            }}
          >
            {/* Left Column: Context & Perks */}
            <div>
              <ScrollReveal>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-pill)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '16px',
                  }}
                >
                  <Sparkles size={12} />
                  <span>EARLY ACCESS COHORT 03</span>
                </div>

                <h1
                  style={{
                    fontSize: 'clamp(28px, 4vw, 42px)',
                    fontWeight: 600,
                    lineHeight: 1.15,
                    letterSpacing: '-0.03em',
                    color: 'var(--text-primary)',
                    marginBottom: '16px',
                  }}
                >
                  Apply smarter with your personal AI job copilot.
                </h1>

                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '32px',
                    maxWidth: '480px',
                  }}
                >
                  We are opening access in weekly cohorts to ensure high-touch support and zero hallucinations on your candidate profile.
                </p>
              </ScrollReveal>

              {/* What you get */}
              <ScrollReveal delay={100}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                    marginBottom: '36px',
                  }}
                >
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--surface-navy)',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--indicator-success)',
                        flexShrink: 0,
                      }}
                    >
                      <Clock size={16} />
                    </div>
                    <div>
                      <h2 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '3px' }}>
                        Weekly Cohort Rollout
                      </h2>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        Invitations are dispatched in batches every Monday based on registration order.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--surface-navy)',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--indicator-success)',
                        flexShrink: 0,
                      }}
                    >
                      <Shield size={16} />
                    </div>
                    <div>
                      <h2 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '3px' }}>
                        Candidate Privacy Guarantee
                      </h2>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        Your resume and profile data are never sold, scraped, or used to train third-party public models.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--surface-navy)',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--indicator-success)',
                        flexShrink: 0,
                      }}
                    >
                      <Users size={16} />
                    </div>
                    <div>
                      <h2 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '3px' }}>
                        Direct Engineering Channel
                      </h2>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        Early members get direct access to our core product team to request custom ATS workflow integrations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Onboarding note */}
                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-input)',
                    backgroundColor: 'var(--surface-navy)',
                    border: '1px solid var(--border)',
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  <div style={{ color: 'var(--text-primary)', fontWeight: 500, marginBottom: '4px' }}>
                    What happens after registering?
                  </div>
                  <div>You will receive an instant confirmation upon submission, followed by cohort access credentials as upcoming rollout slots open.</div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Working Waitlist Form */}
            <ScrollReveal variant="scale" delay={120}>
              <WaitlistForm actionUrl={WAITLIST_FORM_ACTION_URL} />
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
