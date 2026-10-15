'use client';

import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, ShieldCheck } from './Icons';
import ScrollReveal from './ScrollReveal';

export default function HowItWorks() {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    {
      num: 1,
      id: 'source-profile',
      label: 'STAGE 01',
      tag: 'Source Data',
      title: 'Ground in your Profile',
      subtitle: 'Resume & background ingested once',
      bullets: [
        'Parses experience, projects & skills from PDF',
        'Stores unified career memory for cross-form reuse',
        'Zero hallucination: only verified history is used',
      ],
      previewLabel: 'Parsed Profile Entity',
      badge: 'Grounded Data',
    },
    {
      num: 2,
      id: 'role-matching',
      label: 'STAGE 02',
      tag: 'Role Analysis',
      title: 'Analyze Requirements',
      subtitle: 'Semantic comparison with job criteria',
      bullets: [
        'Scores qualifications overlap against target roles',
        'Identifies exact matching skills and optional gaps',
        'Highlights your strongest differentiators',
      ],
      previewLabel: 'Criteria Alignment',
      badge: '94% Overlap',
    },
    {
      num: 3,
      id: 'draft-preparation',
      label: 'STAGE 03',
      tag: 'Draft Staging',
      title: 'Prepare & Review Draft',
      subtitle: 'Ready for human inspection before dispatch',
      bullets: [
        'Pre-fills complex multi-step ATS fields automatically',
        'Drafts tailored cover note highlighting target overlap',
        'Requires 1-click explicit human authorization',
      ],
      previewLabel: 'Application Payload',
      badge: 'Human Controlled',
    },
  ];

  return (
    <section
      id="how-it-works"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: 'var(--bg-alt)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <ScrollReveal style={{ maxWidth: '640px', marginBottom: '36px' }}>
          <span className="section-label">HOW AUTOSUBMIT WORKS</span>
          <h2 className="section-title">
            From profile to application, with less repetition.
          </h2>
          <p className="section-description">
            Information moves through a three-stage structured pipeline. Select each stage below to explore how AutoSubmit handles the heavy lifting while keeping you in total command.
          </p>
        </ScrollReveal>

        {/* Interactive Step Navigator */}
        <ScrollReveal delay={60} style={{ marginBottom: '28px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--surface-navy)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-panel)',
              padding: '6px',
              maxWidth: '680px',
            }}
          >
            {stages.map((stg) => {
              const isActive = activeStage === stg.num;
              return (
                <button
                  key={stg.num}
                  onClick={() => setActiveStage(stg.num)}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-input)',
                    backgroundColor: isActive ? '#38BDF8' : 'transparent',
                    border: 'none',
                    color: isActive ? '#060911' : 'var(--text-secondary)',
                    fontSize: '12px',
                    fontWeight: isActive ? 600 : 400,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 150ms ease',
                  }}
                >
                  <span
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    0{stg.num}
                  </span>
                  <span>{stg.tag}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* 3 Connected Workflow Stage Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {stages.map((stg) => {
            const isSelected = activeStage === stg.num;

            return (
              <div
                key={stg.num}
                onClick={() => setActiveStage(stg.num)}
                style={{
                  backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.06)' : 'var(--surface-navy)',
                  border: `1px solid ${isSelected ? '#38BDF8' : 'var(--border)'}`,
                  borderRadius: 'var(--radius-panel)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isSelected ? '0 12px 32px -8px rgba(56, 189, 248, 0.18)' : 'none',
                  transition: 'all 200ms ease',
                  cursor: 'pointer',
                }}
              >
                <div>
                  {/* Top Bar of Card */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: isSelected ? '#38BDF8' : 'var(--text-primary)',
                      }}
                    >
                      {stg.label}
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${isSelected ? 'rgba(56, 189, 248, 0.35)' : 'var(--border)'}`,
                        color: isSelected ? '#38BDF8' : 'var(--text-muted)',
                      }}
                    >
                      {stg.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '4px',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {stg.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      marginBottom: '18px',
                    }}
                  >
                    {stg.subtitle}
                  </div>

                  {/* Concise Bullet Points */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    {stg.bullets.map((b, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          fontSize: '12px',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.45,
                        }}
                      >
                        <Check
                          size={13}
                          color={isSelected ? '#38BDF8' : 'var(--indicator-success)'}
                          style={{ marginTop: '2px', flexShrink: 0 }}
                        />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage Micro Visual Preview */}
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-input)',
                    padding: '12px 14px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{stg.previewLabel}</span>
                    <span style={{ color: isSelected ? '#38BDF8' : 'var(--text-muted)' }}>
                      {isSelected ? '● Active View' : 'Click to inspect'}
                    </span>
                  </div>

                  {stg.num === 1 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {['Alex Rivera', 'Frontend Lead', 'TypeScript', 'Next.js 16', 'React 19'].map((s) => (
                        <span
                          key={s}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            padding: '2px 6px',
                            borderRadius: '3px',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--border)',
                            color: 'var(--text-primary)',
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {stg.num === 2 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Component Systems</span>
                        <span style={{ color: 'var(--indicator-success)', fontFamily: 'var(--font-mono)', fontSize: '10px' }}>
                          ✓ Exact Match
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Next.js App Router</span>
                        <span style={{ color: 'var(--indicator-success)', fontFamily: 'var(--font-mono)', fontSize: '10px' }}>
                          ✓ Exact Match
                        </span>
                      </div>
                    </div>
                  )}

                  {stg.num === 3 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>12 Form Fields Mapped</span>
                        <span style={{ color: '#38BDF8', fontFamily: 'var(--font-mono)', fontSize: '10px' }}>
                          Complete
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Dispatched Externally</span>
                        <span style={{ color: 'var(--indicator-success)', fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 600 }}>
                          Blocked until user clicks
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
