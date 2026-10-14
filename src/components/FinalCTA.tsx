'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from './Icons';
import ScrollReveal from './ScrollReveal';

export default function FinalCTA() {
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

  const handleExploreDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('workspace');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        paddingTop: '88px',
        paddingBottom: '88px',
        backgroundColor: 'var(--bg-main)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <ScrollReveal
          variant="scale"
          delay={80}
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '48px 32px',
            backgroundColor: 'var(--surface-navy)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-panel)',
          }}
        >
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
            <span>STREAMLINE YOUR APPLICATION WORKFLOW</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 38px)',
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              marginBottom: '14px',
            }}
          >
            Make every application a little less repetitive.
          </h2>

          <p
            style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '480px',
              margin: '0 auto 28px',
            }}
          >
            Start with your profile. Let AutoSubmit help prepare the next step.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={handleTryAgent}
              className="btn-primary"
              style={{
                padding: '11px 22px',
                fontSize: '14px',
              }}
            >
              <span>Try the Agent</span>
              <ArrowRight size={15} />
            </button>

            <Link
              href="/waitlist"
              className="btn-secondary"
              style={{
                padding: '10px 20px',
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              <span>Join Early Access</span>
            </Link>

            <button
              onClick={handleExploreDemo}
              style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-sans)',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                cursor: 'pointer',
              }}
            >
              Explore workspace
            </button>
          </div>

          <div
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              marginTop: '22px',
            }}
          >
            Empowering job seekers with structured candidate workflows and complete human oversight.
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
