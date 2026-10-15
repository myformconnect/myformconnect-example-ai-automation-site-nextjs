'use client';

import React from 'react';
import { ShieldCheck, FileCheck, Layers, Cpu } from './Icons';
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
          <span className="section-label">INTERACTIVE DEMO</span>
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
        <ScrollReveal delay={160}>
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
      </div>
    </section>
  );
}
