'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileCheck, Layers, Cpu, ArrowRight, Sparkles, Mail, Eye } from './Icons';
import ScrollReveal from './ScrollReveal';
import CareerProfileForm, { CAREER_PROFILE_FORM_ACTION_URL } from './forms/CareerProfileForm';

export default function FormsLab() {
  return (
    <section
      id="forms-lab"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: 'var(--bg-main)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <ScrollReveal style={{ maxWidth: '640px', marginBottom: '36px' }}>
          <span className="section-label">04 / INTERACTIVE DEMO</span>
          <h2 className="section-title">
            Candidate profile staging, built into the workflow.
          </h2>
          <p className="section-description">
            Experience how AutoSubmit packages candidate criteria, matches target role expectations, and stages career profile applications.
          </p>
        </ScrollReveal>

        {/* Integration Architecture Specs bar */}
        <ScrollReveal
          delay={80}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              padding: '12px 14px',
              backgroundColor: 'var(--surface-navy)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-panel)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <ShieldCheck size={16} color="#FFFFFF" />
            <div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                VERIFICATION
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-primary)', fontWeight: 500 }}>
                Automated Spam Protection
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '12px 14px',
              backgroundColor: 'var(--surface-navy)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-panel)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <FileCheck size={16} color="#FFFFFF" />
            <div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                DOCUMENTS
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-primary)', fontWeight: 500 }}>
                Resume Attachments (up to 100MB)
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '12px 14px',
              backgroundColor: 'var(--surface-navy)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-panel)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Cpu size={16} color="#FFFFFF" />
            <div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                INTELLIGENCE
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-primary)', fontWeight: 500 }}>
                Target Role Skill Alignment
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '12px 14px',
              backgroundColor: 'var(--surface-navy)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-panel)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Layers size={16} color="#FFFFFF" />
            <div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                PROCESSING
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-primary)', fontWeight: 500 }}>
                Instant Profile Staging
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Primary Interactive Demo: Career Profile Preparation */}
        <ScrollReveal variant="scale" delay={140} style={{ marginBottom: '32px' }}>
          <CareerProfileForm actionUrl={CAREER_PROFILE_FORM_ACTION_URL} />
        </ScrollReveal>

        {/* Integration Insights / Form Infrastructure Overview */}
        <ScrollReveal delay={160} style={{ marginBottom: '40px' }}>
          <div
            style={{
              padding: '20px 24px',
              backgroundColor: 'var(--surface-navy)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-panel)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                INTEGRATION INSIGHTS
              </span>
            </div>
            <h3
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
                marginBottom: '6px',
              }}
            >
              Form Management &amp; Capture Powered by MyFormConnect
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              All interactive applicant workflows, career profile submissions, and intake forms across AutoSubmit are form managed via{' '}
              <a
                href="https://myformconnect.io"
                target="_blank"
                rel="noopener"
                title="MyFormConnect — Bot Friendly Forms & Serverless Form Backend"
                style={{ color: '#38BDF8', textDecoration: 'none', fontWeight: 500 }}
              >
                MyFormConnect
              </a>
              . By leveraging serverless endpoints and spam-protected intake routing, candidate data is captured securely with bot friendly forms by MyFormConnect designed for automated pipelines.
            </p>
          </div>
        </ScrollReveal>

        {/* Dedicated Forms Routing Directory */}
        <ScrollReveal delay={180}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              SPECIALIZED INTAKE PORTALS
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              All endpoints powered by MyFormConnect
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              marginBottom: '36px',
            }}
          >
            {/* Portal Card 1: Waitlist */}
            <div
              style={{
                backgroundColor: 'var(--surface-navy)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-panel)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '5px',
                      backgroundColor: 'rgba(74, 222, 128, 0.12)',
                      border: '1px solid rgba(74, 222, 128, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--indicator-success)',
                    }}
                  >
                    <Sparkles size={14} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--indicator-success)',
                      backgroundColor: 'var(--indicator-success-bg)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    EARLY ACCESS
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                  }}
                >
                  Priority Waitlist
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: 'var(--indicator-success)' }}>•</span>
                    Weekly candidate onboarding cohorts
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: 'var(--indicator-success)' }}>•</span>
                    Priority token allocation &amp; beta features
                  </div>
                </div>
              </div>

              <Link
                href="/waitlist"
                className="btn-secondary"
                style={{
                  justifyContent: 'center',
                  fontSize: '13px',
                  padding: '9px 16px',
                }}
              >
                <span>Join Waitlist</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Portal Card 2: Contact */}
            <div
              style={{
                backgroundColor: 'var(--surface-navy)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-panel)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '5px',
                      backgroundColor: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38BDF8',
                    }}
                  >
                    <Mail size={14} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: '#38BDF8',
                      backgroundColor: 'rgba(56, 189, 248, 0.12)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    SUPPORT
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                  }}
                >
                  Direct Inquiries
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#38BDF8' }}>•</span>
                    Technical assistance &amp; ATS integration
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#38BDF8' }}>•</span>
                    Custom enterprise team endpoints
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="btn-secondary"
                style={{
                  justifyContent: 'center',
                  fontSize: '13px',
                  padding: '9px 16px',
                }}
              >
                <span>Contact Team</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Portal Card 3: Demo Walkthrough */}
            <div
              style={{
                backgroundColor: 'var(--surface-navy)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-panel)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '5px',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                    }}
                  >
                    <Eye size={14} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    1-ON-1
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                  }}
                >
                  Live Walkthrough
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#FFFFFF' }}>•</span>
                    Inspect prompt grounding &amp; parsing live
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#FFFFFF' }}>•</span>
                    Human-in-the-loop compliance review
                  </div>
                </div>
              </div>

              <Link
                href="/demo"
                className="btn-secondary"
                style={{
                  justifyContent: 'center',
                  fontSize: '13px',
                  padding: '9px 16px',
                }}
              >
                <span>Schedule Walkthrough</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
