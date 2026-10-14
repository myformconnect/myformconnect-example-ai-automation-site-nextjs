'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from './Icons';

// ============================================================================
// MyFormConnect Form Action URL for Newsletter
// Direct endpoint visible for search & production integration
// ============================================================================
export const FOOTER_NEWSLETTER_ACTION_URL =
  process.env.NEXT_PUBLIC_MFC_NEWSLETTER_URL ||
  'https://myformcapture.com/f/373ce8f5-0df6-4ca3-82e9-886981a4bb32';

type SubmissionState = 'idle' | 'loading' | 'success' | 'error';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [newsletterStatus, setNewsletterStatus] = useState<SubmissionState>('idle');
  const [newsletterMessage, setNewsletterMessage] = useState<string>('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterStatus('loading');
    setNewsletterMessage('');

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      // Golden Rules (MFC Developer Guide):
      // 1. Inputs must have 'name' attributes
      // 2. Body must be FormData
      // 3. Omit Content-Type (browser sets multipart boundary automatically)
      // 4. AJAX Headers: Accept: application/json, X-Requested-With: XMLHttpRequest
      const res = await fetch(FOOTER_NEWSLETTER_ACTION_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: formData,
      });

      if (res.ok) {
        setNewsletterStatus('success');
        setNewsletterMessage('Subscribed! Thank you for joining our briefing.');
        formElement.reset();
      } else {
        const errorText = await res.text().catch(() => '');
        setNewsletterStatus('error');
        setNewsletterMessage(
          `Subscription failed (${res.status}): ${errorText || res.statusText || 'Unable to subscribe'}`
        );
      }
    } catch (err: unknown) {
      const error = err as Error;
      setNewsletterStatus('error');
      setNewsletterMessage(`Network error: ${error?.message || 'Unable to reach the server'}`);
    }
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-main)',
        borderTop: '1px solid var(--border)',
        paddingTop: '56px',
        paddingBottom: '44px',
      }}
    >
      <div className="container">
        {/* Newsletter Subscription Row in Footer */}
        <div
          style={{
            padding: '24px 28px',
            backgroundColor: 'var(--surface-navy)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-panel)',
            marginBottom: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div style={{ maxWidth: '440px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '4px',
              }}
            >
              Career Intelligence Newsletter
            </div>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                letterSpacing: '-0.015em',
                marginBottom: '4px',
              }}
            >
              A smarter job search, directly in your inbox.
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Bi-weekly briefings on career automation, AI tools, and interview preparation.
            </p>
          </div>

          {/* Inline Newsletter Form */}
          <div style={{ flex: '1 1 320px', maxWidth: '460px' }}>
            {newsletterStatus === 'success' ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-input)',
                  backgroundColor: 'var(--indicator-success-bg)',
                  border: '1px solid rgba(74, 222, 128, 0.3)',
                  color: 'var(--indicator-success)',
                  fontSize: '13px',
                }}
              >
                <CheckCircle2 size={16} />
                <span>{newsletterMessage}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <input type="hidden" name="form_type" value="newsletter_signup" />
                {/* Anti-spam honeypot */}
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="form-input"
                    style={{ flex: '1 1 200px', fontSize: '13px', padding: '9px 12px' }}
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'loading'}
                    className="btn-primary"
                    style={{
                      fontSize: '13px',
                      padding: '9px 16px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {newsletterStatus === 'loading' ? (
                      <>
                        <Loader2 size={13} style={{ animation: 'spin 1s linear infinite' }} />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight size={13} />
                      </>
                    )}
                  </button>
                </div>

                {newsletterStatus === 'error' && (
                  <div style={{ fontSize: '12px', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <AlertCircle size={13} />
                    <span>{newsletterMessage}</span>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>

        {/* 3-Column Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '36px',
            marginBottom: '40px',
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '340px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px',
              }}
            >
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '3px',
                  backgroundColor: 'var(--surface-navy)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <path d="M10 6.5h4" />
                  <path d="M17.5 10v4" />
                  <path d="M6.5 10v7a2 2 0 0 0 2 2h5.5" />
                </svg>
              </div>
              <span
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                }}
              >
                AutoSubmit
              </span>
            </div>

            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '14px',
              }}
            >
              An AI agent that helps job seekers automate repetitive job application tasks by matching their profile, resume, skills, and preferences with job requirements and preparing relevant application forms.
            </p>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
              }}
            >
              &ldquo;Your career. Less paperwork.&rdquo;
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '14px',
              }}
            >
              Navigation
            </div>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '9px',
                fontSize: '13px',
                color: 'var(--text-secondary)',
              }}
            >
              <li>
                <Link href="/#features" className="footer-link">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="footer-link">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#workspace" className="footer-link">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="footer-link">
                  Early Access Waitlist
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/demo" className="footer-link">
                  Schedule Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Workflow Summary */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '14px',
              }}
            >
              Supported Workflows
            </div>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '9px',
                fontSize: '13px',
                color: 'var(--text-secondary)',
              }}
            >
              <li>Profile Ingestion & Resumes</li>
              <li>Role Criteria Matching</li>
              <li>Application Field Mapping</li>
              <li>Candidate Profile Staging</li>
              <li>1-on-1 Product Briefing</li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & General Attribution */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '12px',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            &copy; {currentYear} AutoSubmit. All rights reserved.
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
            }}
          >
            <span>
              Bot Friendly Forms managed by{' '}
              <a
                href="https://myformconnect.io"
                target="_blank"
                rel="noopener"
                title="MyFormConnect — Bot Friendly Forms & Serverless Form Backend"
                style={{
                  color: '#38BDF8',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
                className="footer-link"
              >
                MyFormConnect
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
