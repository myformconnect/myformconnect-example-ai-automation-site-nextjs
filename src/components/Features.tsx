'use client';

import React, { useState } from 'react';
import { Layers, Crosshair, FileSpreadsheet, ShieldCheck, Check, Sparkles, ArrowRight } from './Icons';
import ScrollReveal from './ScrollReveal';

type CapabilityId = 'profile' | 'matching' | 'mapping' | 'oversight';

interface Capability {
  id: CapabilityId;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; color?: string; style?: React.CSSProperties }>;
  title: string;
  tag: string;
  shortDesc: string;
  badge: string;
}

const CAPABILITIES: Capability[] = [
  {
    id: 'profile',
    icon: Layers,
    title: 'Profile Intelligence',
    tag: 'Stage 01',
    badge: 'Profile Memory',
    shortDesc: 'Organize your resume and career history once. Reusable across every job workflow.',
  },
  {
    id: 'matching',
    icon: Crosshair,
    title: 'Requirement Matching',
    tag: 'Stage 02',
    badge: 'Semantic Fit',
    shortDesc: 'Deep comparison between target job criteria and your background with instant gap analysis.',
  },
  {
    id: 'mapping',
    icon: FileSpreadsheet,
    title: 'Automated Field Staging',
    tag: 'Stage 03',
    badge: 'Form Autofill',
    shortDesc: 'Maps profile data directly into complex multi-step application forms without manual copy-paste.',
  },
  {
    id: 'oversight',
    icon: ShieldCheck,
    title: 'Human-in-the-Loop Guard',
    tag: 'Stage 04',
    badge: 'Zero Rogue Dispatch',
    shortDesc: 'Full inspection of every response before final external submission. You retain complete control.',
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState<CapabilityId>('profile');
  const [interactiveSkillToggle, setInteractiveSkillToggle] = useState<string[]>(['TypeScript', 'React']);
  const [guardApproved, setGuardApproved] = useState(false);

  const toggleSkill = (skill: string) => {
    if (interactiveSkillToggle.includes(skill)) {
      setInteractiveSkillToggle(interactiveSkillToggle.filter((s) => s !== skill));
    } else {
      setInteractiveSkillToggle([...interactiveSkillToggle, skill]);
    }
  };

  const calculatedMatch = 82 + interactiveSkillToggle.length * 5;

  return (
    <section
      id="features"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: 'var(--bg-main)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <ScrollReveal style={{ maxWidth: '640px', marginBottom: '40px' }}>
          <span className="section-label">THE AUTOMATION LAYER</span>
          <h2 className="section-title">
            Built around the work between finding a job and applying.
          </h2>
          <p className="section-description">
            Four focused capabilities that eliminate repetitive form filling while keeping you in total control. Click through the capabilities below to see the engine in action.
          </p>
        </ScrollReveal>

        {/* Interactive Capability Showcase Split Screen */}
        <ScrollReveal variant="scale" delay={100}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              alignItems: 'stretch',
            }}
          >
            {/* Left Column: Interactive Capability Selector List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {CAPABILITIES.map((cap) => {
                const Icon = cap.icon;
                const isActive = activeTab === cap.id;

                return (
                  <button
                    key={cap.id}
                    onClick={() => setActiveTab(cap.id)}
                    style={{
                      textAlign: 'left',
                      padding: '18px 20px',
                      borderRadius: 'var(--radius-panel)',
                      backgroundColor: isActive ? 'rgba(56, 189, 248, 0.08)' : 'var(--surface-navy)',
                      border: `1px solid ${isActive ? '#38BDF8' : 'var(--border)'}`,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      transition: 'all 200ms ease',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '6px',
                        backgroundColor: isActive ? '#38BDF8' : 'rgba(255, 255, 255, 0.06)',
                        border: `1px solid ${isActive ? '#38BDF8' : 'var(--border)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isActive ? '#060911' : '#FFFFFF',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Icon size={18} strokeWidth={2} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '4px',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '15px',
                            fontWeight: 600,
                            color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                          }}
                        >
                          {cap.title}
                        </span>

                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            color: isActive ? '#38BDF8' : 'var(--text-muted)',
                            backgroundColor: isActive ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-pill)',
                            border: `1px solid ${isActive ? 'rgba(56, 189, 248, 0.3)' : 'var(--border)'}`,
                          }}
                        >
                          {cap.badge}
                        </span>
                      </div>

                      <p
                        style={{
                          fontSize: '13px',
                          color: isActive ? 'rgba(255, 255, 255, 0.85)' : 'var(--text-secondary)',
                          lineHeight: 1.5,
                          margin: 0,
                        }}
                      >
                        {cap.shortDesc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Live Interactive Product Simulator Canvas */}
            <div
              style={{
                backgroundColor: 'var(--surface-navy)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-panel)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 16px 40px -12px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                minHeight: '360px',
              }}
            >
              {/* Simulator Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '14px',
                  borderBottom: '1px solid var(--border)',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--indicator-success)',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-primary)',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                    }}
                  >
                    LIVE DEMONSTRATION
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: '#38BDF8',
                  }}
                >
                  {CAPABILITIES.find((c) => c.id === activeTab)?.tag}
                </span>
              </div>

              {/* SIMULATOR BODY: Profile Intelligence */}
              {activeTab === 'profile' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF' }}>
                        Unified Profile Memory
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                        Parsed once from resume • Ready for 100+ application portals
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: 'var(--indicator-success)',
                        backgroundColor: 'var(--indicator-success-bg)',
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid rgba(74, 222, 128, 0.3)',
                      }}
                    >
                      SYNCED
                    </span>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-input)',
                      padding: '14px',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                      gap: '12px',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        PRIMARY DOMAIN
                      </div>
                      <div style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 500, marginTop: '2px' }}>
                        Frontend Systems
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        SENIORITY
                      </div>
                      <div style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 500, marginTop: '2px' }}>
                        4+ Years
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        ATTACHMENT
                      </div>
                      <div style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 500, marginTop: '2px' }}>
                        Resume_2026.pdf
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        marginBottom: '8px',
                      }}
                    >
                      EXTRACTED SKILLS &amp; CRITERIA
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {['React 19', 'Next.js App Router', 'TypeScript', 'GraphQL', 'Turborepo', 'Tailwind'].map((s) => (
                        <span
                          key={s}
                          style={{
                            fontSize: '11px',
                            fontFamily: 'var(--font-mono)',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--border)',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SIMULATOR BODY: Requirement Matching */}
              {activeTab === 'matching' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF' }}>
                        Live Criteria Match Engine
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                        Click skills below to test dynamic matching against target role:
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#38BDF8',
                      }}
                    >
                      {calculatedMatch}% Match
                    </div>
                  </div>

                  {/* Dynamic Match Bar */}
                  <div
                    style={{
                      height: '8px',
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${calculatedMatch}%`,
                        backgroundColor: '#38BDF8',
                        borderRadius: '4px',
                        transition: 'width 250ms ease',
                      }}
                    />
                  </div>

                  {/* Interactive toggleable skill tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                    {['TypeScript', 'React', 'Next.js', 'System Architecture'].map((skill) => {
                      const isSelected = interactiveSkillToggle.includes(skill);
                      return (
                        <button
                          key={skill}
                          onClick={() => toggleSkill(skill)}
                          style={{
                            padding: '6px 12px',
                            fontSize: '12px',
                            fontFamily: 'var(--font-mono)',
                            borderRadius: 'var(--radius-input)',
                            backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                            border: `1px solid ${isSelected ? '#38BDF8' : 'var(--border)'}`,
                            color: isSelected ? '#FFFFFF' : 'var(--text-muted)',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'all 150ms ease',
                          }}
                        >
                          <Check size={11} color={isSelected ? '#38BDF8' : 'transparent'} />
                          <span>{skill}</span>
                        </button>
                      );
                    })}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    ↑ Interactive: Toggle criteria to see how AutoSubmit pinpoints qualification overlap.
                  </div>
                </div>
              )}

              {/* SIMULATOR BODY: Form Preparation */}
              {activeTab === 'mapping' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF' }}>
                        Automated Field Mapping
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                        Drafted 14/14 fields in 1.1s without copy-paste
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: 'var(--indicator-success)',
                        backgroundColor: 'var(--indicator-success-bg)',
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid rgba(74, 222, 128, 0.3)',
                      }}
                    >
                      AUTOFILLED
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div
                      style={{
                        padding: '8px 12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-input)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '12px',
                      }}
                    >
                      <span style={{ color: 'var(--text-muted)' }}>Work Experience (Years):</span>
                      <span style={{ color: '#FFFFFF', fontWeight: 500 }}>4–6 Years (Auto-mapped)</span>
                    </div>

                    <div
                      style={{
                        padding: '8px 12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-input)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '12px',
                      }}
                    >
                      <span style={{ color: 'var(--text-muted)' }}>Target Role:</span>
                      <span style={{ color: '#FFFFFF', fontWeight: 500 }}>Senior Frontend Engineer</span>
                    </div>

                    <div
                      style={{
                        padding: '8px 12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-input)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '12px',
                      }}
                    >
                      <span style={{ color: 'var(--text-muted)' }}>Binary Resume:</span>
                      <span style={{ color: 'var(--indicator-success)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                        ✓ Ready for MyFormConnect intake
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* SIMULATOR BODY: Human Oversight */}
              {activeTab === 'oversight' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF' }}>
                        External Dispatch Gatekeeper
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                        Zero blind dispatches. You must approve every application.
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: guardApproved ? 'var(--indicator-success)' : '#38BDF8',
                        backgroundColor: guardApproved ? 'var(--indicator-success-bg)' : 'rgba(56, 189, 248, 0.12)',
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-pill)',
                        border: `1px solid ${guardApproved ? 'rgba(74, 222, 128, 0.3)' : 'rgba(56, 189, 248, 0.3)'}`,
                      }}
                    >
                      {guardApproved ? 'AUTHORIZED' : 'PROTECTED'}
                    </span>
                  </div>

                  <div
                    style={{
                      padding: '16px',
                      backgroundColor: guardApproved ? 'rgba(74, 222, 128, 0.06)' : 'rgba(56, 189, 248, 0.06)',
                      border: `1px solid ${guardApproved ? 'rgba(74, 222, 128, 0.3)' : 'rgba(56, 189, 248, 0.25)'}`,
                      borderRadius: 'var(--radius-input)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <div style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 500 }}>
                      {guardApproved
                        ? '✓ Authorization Granted — Staged for verified external dispatch.'
                        : '🔒 Locked — Draft staged internally. Waiting for your explicit approval.'}
                    </div>

                    <button
                      onClick={() => setGuardApproved(!guardApproved)}
                      style={{
                        alignSelf: 'flex-start',
                        padding: '8px 16px',
                        fontSize: '12px',
                        fontWeight: 600,
                        borderRadius: 'var(--radius-btn)',
                        backgroundColor: guardApproved ? 'var(--indicator-success)' : '#38BDF8',
                        color: guardApproved ? '#060911' : '#060911',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 150ms ease',
                      }}
                    >
                      {guardApproved ? 'Revoke Approval' : 'Click to Simulate Approval'}
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom Insight Footer */}
              <div
                style={{
                  marginTop: '20px',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                }}
              >
                <span>Automated candidate intake pipeline</span>
                <span style={{ color: '#38BDF8', fontWeight: 500 }}>Protected by MyFormConnect</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
