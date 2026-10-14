'use client';

import React from 'react';
import AgentPreview from './AgentPreview';
import { ArrowRight, ArrowDownRight } from './Icons';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  const handleTryAgent = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('autosubmit-select-form', { detail: 'career-profile' })
      );
      const el = document.getElementById('forms-lab');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSeeHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        paddingTop: '80px',
        paddingBottom: '88px',
        position: 'relative',
        backgroundColor: 'var(--bg-main)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '52px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Copy & Actions */}
          <ScrollReveal delay={50} style={{ maxWidth: '580px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
              }}
            >
              <span className="section-label" style={{ marginBottom: 0 }}>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--indicator-success)',
                    boxShadow: '0 0 6px var(--indicator-success)',
                  }}
                />
                AI-POWERED CAREER AUTOMATION
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(34px, 4.8vw, 54px)',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '18px',
              }}
            >
              Your next application shouldn&apos;t start from scratch.
            </h1>

            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '30px',
                maxWidth: '520px',
              }}
            >
              AutoSubmit matches your profile with job requirements, prepares relevant application details, and helps you move through repetitive forms with less effort.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '22px',
              }}
            >
              <button
                onClick={handleTryAgent}
                className="btn-primary"
                style={{ padding: '11px 22px', fontSize: '14px' }}
              >
                <span>Try the Agent</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={handleSeeHowItWorks}
                className="btn-secondary"
                style={{ padding: '11px 20px', fontSize: '14px' }}
              >
                <span>See how it works</span>
                <ArrowDownRight size={15} />
              </button>
            </div>

            {/* Scannable Value Badges */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                fontSize: '12px',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ color: 'var(--indicator-success)' }}>✓</span> Explicit Human Approval
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ color: 'var(--indicator-success)' }}>✓</span> 0% Data Hallucination
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ color: 'var(--indicator-success)' }}>✓</span> MyFormConnect Ingestion
              </span>
            </div>
          </ScrollReveal>

          {/* Right Column: Realistic Agent UI Dashboard */}
          <ScrollReveal delay={180} variant="scale">
            <AgentPreview />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
