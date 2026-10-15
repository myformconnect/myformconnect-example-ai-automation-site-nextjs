import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import DemoBookingSection from '@/components/DemoBookingSection';
import { Eye, FileCheck2, UserCheck, ArrowRight } from '@/components/Icons';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Request a Demo Walkthrough',
  description:
    'Schedule a tailored 1-on-1 walkthrough of the AutoSubmit career copilot and serverless MyFormConnect form automation.',
  alternates: {
    canonical: '/demo',
  },
  openGraph: {
    title: 'Request a Demo Walkthrough — AutoSubmit',
    description:
      'Schedule a tailored 1-on-1 walkthrough of the AutoSubmit career copilot and serverless MyFormConnect form automation.',
    url: '/demo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request a Demo Walkthrough — AutoSubmit',
    description:
      'Schedule a tailored 1-on-1 walkthrough of the AutoSubmit career copilot and serverless MyFormConnect form automation.',
  },
};

export default function DemoPage() {
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
            {/* Left Column: What to expect */}
            <div>
              <ScrollReveal>
                <span className="section-label" style={{ marginBottom: '14px' }}>
                  PRODUCT WALKTHROUGH
                </span>

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
                  Experience the copilot in real time.
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
                  Book a 15-minute tailored session with a product specialist to inspect how AutoSubmit processes target role requirements, extracts resume signals, and stages draft submissions without external auto-dispatch.
                </p>
              </ScrollReveal>

              {/* What we cover */}
              <ScrollReveal delay={100}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    marginBottom: '36px',
                  }}
                >
                  <div
                    style={{
                      padding: '16px',
                      backgroundColor: 'var(--surface-navy)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-panel)',
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--surface-elevated)',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        flexShrink: 0,
                      }}
                    >
                      <Eye size={16} />
                    </div>
                    <div>
                      <h2 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '4px' }}>
                        Live Grounding Walkthrough
                      </h2>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        See how raw candidate profile data is matched to real job postings without fabricated claims.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '16px',
                      backgroundColor: 'var(--surface-navy)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-panel)',
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--surface-elevated)',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--indicator-success)',
                        flexShrink: 0,
                      }}
                    >
                      <FileCheck2 size={16} />
                    </div>
                    <div>
                      <h2 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '4px' }}>
                        MyFormConnect Serverless Endpoints
                      </h2>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        Inspect how the frontend submits multipart FormData with spam honeypot filters directly to serverless capture webhooks.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '16px',
                      backgroundColor: 'var(--surface-navy)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-panel)',
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--surface-elevated)',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        flexShrink: 0,
                      }}
                    >
                      <UserCheck size={16} />
                    </div>
                    <div>
                      <h2 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '4px' }}>
                        Candidate Approval Gate
                      </h2>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        Verify the manual authorization checkpoint that ensures users maintain complete control over external submissions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Session logistics note */}
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
                    Session Format & Logistics
                  </div>
                  <div>Walkthroughs are held via Google Meet or Zoom. We will accommodate your preferred time zone within 1 business day.</div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Pre-designed MyFormCapture Booking Widget & Form */}
            <ScrollReveal variant="scale" delay={120}>
              <DemoBookingSection />
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
