import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ContactForm, { CONTACT_FORM_ACTION_URL } from '@/components/forms/ContactForm';
import { Mail, Clock, ShieldCheck, ArrowRight } from '@/components/Icons';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact & Support — AutoSubmit',
  description:
    'Have questions about AutoSubmit, custom ATS form endpoints, or enterprise partnerships? Get in touch with our team directly.',
};

export default function ContactPage() {
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
            {/* Left Column: Direct Channels & Guidance */}
            <div>
              <ScrollReveal>
                <span className="section-label" style={{ marginBottom: '14px' }}>
                  GET IN TOUCH
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
                  We are here to assist with your automation workflow.
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
                  Whether you have questions regarding candidate data privacy, custom ATS endpoints, or enterprise team deployments, reach out directly.
                </p>
              </ScrollReveal>

              {/* Direct channels cards */}
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
                      <Mail size={16} />
                    </div>
                    <div>
                      <h2 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '4px' }}>
                        Direct Inquiries
                      </h2>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '6px' }}>
                        Email us directly for technical support and partnership requests.
                      </p>
                      <a
                        href="mailto:support@autosubmit.work"
                        style={{
                          fontSize: '13px',
                          fontFamily: 'var(--font-mono)',
                          color: '#FFFFFF',
                          textDecoration: 'underline',
                          textUnderlineOffset: '3px',
                        }}
                      >
                        support@autosubmit.work
                      </a>
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
                      <Clock size={16} />
                    </div>
                    <div>
                      <h2 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '4px' }}>
                        Guaranteed SLA Response
                      </h2>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        Our engineering support team responds to all verified submissions within 24 business hours.
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
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <h2 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '4px' }}>
                        Want a Live Product Walkthrough?
                      </h2>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '6px' }}>
                        Prefer a 1-on-1 walkthrough tailored to your job search or hiring workflow?
                      </p>
                      <Link
                        href="/demo"
                        style={{
                          fontSize: '13px',
                          color: '#FFFFFF',
                          textDecoration: 'underline',
                          textUnderlineOffset: '3px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <span>Schedule a demo session</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Support channel note */}
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
                    Enterprise Security & Compliance
                  </div>
                  <div>For custom security questionnaires or bespoke ATS integration requirements, contact <code>security@autosubmit.work</code>.</div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Working Contact Form */}
            <ScrollReveal variant="scale" delay={120}>
              <ContactForm actionUrl={CONTACT_FORM_ACTION_URL} />
            </ScrollReveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
