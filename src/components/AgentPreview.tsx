'use client';

import React, { useState } from 'react';
import { Check, CheckCircle2, Sparkles, Layers, ShieldCheck, ArrowRight } from './Icons';

type TabView = 'draft' | 'match' | 'log';
type RoleType = 'frontend' | 'ai-engineer';

interface RoleData {
  roleTitle: string;
  company: string;
  matchScore: number;
  experience: string;
  skills: string[];
  matchedCriteria: { name: string; status: 'matched' | 'review' }[];
  draftNote: string;
}

const ROLES: Record<RoleType, RoleData> = {
  frontend: {
    roleTitle: 'Senior Frontend Engineer',
    company: 'Acme Interactive',
    matchScore: 94,
    experience: '4 years',
    skills: ['React 19', 'Next.js', 'TypeScript', 'Tailwind', 'REST/GraphQL'],
    matchedCriteria: [
      { name: 'Component Architecture & State', status: 'matched' },
      { name: 'Production Next.js / SSR Systems', status: 'matched' },
      { name: 'TypeScript Strict Mode', status: 'matched' },
      { name: 'Performance Budget Optimization', status: 'review' },
    ],
    draftNote:
      'Engineered high-scale frontend systems with React 19, reducing bundle size by 38% and optimizing core web vitals across client-facing apps.',
  },
  'ai-engineer': {
    roleTitle: 'AI Platform Systems Engineer',
    company: 'Nexus Automation Labs',
    matchScore: 96,
    experience: '5 years',
    skills: ['Python', 'Next.js', 'LangChain', 'Vector DBs', 'FastAPI'],
    matchedCriteria: [
      { name: 'Agentic Workflow Pipelines', status: 'matched' },
      { name: 'LLM Prompt Grounding & Evals', status: 'matched' },
      { name: 'Streaming API Integration', status: 'matched' },
      { name: 'Distributed Caching & Redis', status: 'matched' },
    ],
    draftNote:
      'Architected autonomous agentic intake pipelines handling 50k+ daily payload submissions with streaming telemetry and zero-data-loss guarantees.',
  },
};

export default function AgentPreview() {
  const [activeTab, setActiveTab] = useState<TabView>('draft');
  const [activeRole, setActiveRole] = useState<RoleType>('frontend');
  const [isApproved, setIsApproved] = useState(false);

  const current = ROLES[activeRole];

  return (
    <div
      style={{
        backgroundColor: 'var(--surface-navy)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-panel)',
        overflow: 'hidden',
        boxShadow: '0 20px 48px -12px rgba(0, 0, 0, 0.35)',
        position: 'relative',
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 18px',
          borderBottom: '1px solid var(--border)',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: 'var(--text-primary)',
            }}
          >
            AUTOSUBMIT / AGENT
          </span>
          <span
            style={{
              fontSize: '10px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              borderLeft: '1px solid var(--border)',
              paddingLeft: '8px',
            }}
          >
            INTERACTIVE PREVIEW
          </span>
        </div>

        {/* Live Status Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '10px',
            fontFamily: 'var(--font-mono)',
            color: isApproved ? 'var(--indicator-success)' : '#FFFFFF',
            backgroundColor: isApproved ? 'var(--indicator-success-bg)' : 'rgba(255, 255, 255, 0.08)',
            border: `1px solid ${isApproved ? 'rgba(74, 222, 128, 0.35)' : 'rgba(255, 255, 255, 0.20)'}`,
            padding: '3px 9px',
            borderRadius: 'var(--radius-pill)',
            transition: 'all 200ms ease',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: isApproved ? 'var(--indicator-success)' : '#38BDF8',
              boxShadow: isApproved ? '0 0 6px var(--indicator-success)' : '0 0 6px #38BDF8',
            }}
          />
          {isApproved ? 'READY FOR DISPATCH' : 'AWAITING YOUR REVIEW'}
        </div>
      </div>

      {/* Role Preset Switcher */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 18px',
          borderBottom: '1px solid var(--border)',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
          }}
        >
          TARGET ROLE PRESET:
        </span>
        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            onClick={() => {
              setActiveRole('frontend');
              setIsApproved(false);
            }}
            style={{
              fontSize: '11px',
              padding: '4px 10px',
              borderRadius: 'var(--radius-input)',
              backgroundColor:
                activeRole === 'frontend' ? 'rgba(56, 189, 248, 0.20)' : 'rgba(255, 255, 255, 0.04)',
              border: `1px solid ${activeRole === 'frontend' ? '#38BDF8' : 'var(--border)'}`,
              color: activeRole === 'frontend' ? '#FFFFFF' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontWeight: activeRole === 'frontend' ? 600 : 400,
              transition: 'all 150ms ease',
            }}
          >
            Frontend Lead
          </button>
          <button
            onClick={() => {
              setActiveRole('ai-engineer');
              setIsApproved(false);
            }}
            style={{
              fontSize: '11px',
              padding: '4px 10px',
              borderRadius: 'var(--radius-input)',
              backgroundColor:
                activeRole === 'ai-engineer' ? 'rgba(56, 189, 248, 0.20)' : 'rgba(255, 255, 255, 0.04)',
              border: `1px solid ${activeRole === 'ai-engineer' ? '#38BDF8' : 'var(--border)'}`,
              color: activeRole === 'ai-engineer' ? '#FFFFFF' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontWeight: activeRole === 'ai-engineer' ? 600 : 400,
              transition: 'all 150ms ease',
            }}
          >
            AI Platform Lead
          </button>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid var(--border)',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
        }}
      >
        <button
          onClick={() => setActiveTab('draft')}
          style={{
            flex: 1,
            padding: '10px 14px',
            fontSize: '12px',
            fontFamily: 'var(--font-sans)',
            fontWeight: activeTab === 'draft' ? 600 : 400,
            color: activeTab === 'draft' ? '#FFFFFF' : 'var(--text-secondary)',
            borderBottom: activeTab === 'draft' ? '2px solid #38BDF8' : '2px solid transparent',
            backgroundColor: activeTab === 'draft' ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 150ms ease',
          }}
        >
          <Layers size={13} />
          <span>Application Draft</span>
        </button>

        <button
          onClick={() => setActiveTab('match')}
          style={{
            flex: 1,
            padding: '10px 14px',
            fontSize: '12px',
            fontFamily: 'var(--font-sans)',
            fontWeight: activeTab === 'match' ? 600 : 400,
            color: activeTab === 'match' ? '#FFFFFF' : 'var(--text-secondary)',
            borderBottom: activeTab === 'match' ? '2px solid #38BDF8' : '2px solid transparent',
            backgroundColor: activeTab === 'match' ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 150ms ease',
          }}
        >
          <Sparkles size={13} />
          <span>Role Match ({current.matchScore}%)</span>
        </button>

        <button
          onClick={() => setActiveTab('log')}
          style={{
            flex: 1,
            padding: '10px 14px',
            fontSize: '12px',
            fontFamily: 'var(--font-sans)',
            fontWeight: activeTab === 'log' ? 600 : 400,
            color: activeTab === 'log' ? '#FFFFFF' : 'var(--text-secondary)',
            borderBottom: activeTab === 'log' ? '2px solid #38BDF8' : '2px solid transparent',
            backgroundColor: activeTab === 'log' ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 150ms ease',
          }}
        >
          <ShieldCheck size={13} />
          <span>Safety Audit</span>
        </button>
      </div>

      {/* Main Tab Content */}
      <div style={{ padding: '18px 20px', minHeight: '260px' }}>
        {/* TAB 1: APPLICATION DRAFT */}
        {activeTab === 'draft' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {current.roleTitle}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {current.company} • {current.experience} experience
                </div>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--indicator-success)',
                  backgroundColor: 'var(--indicator-success-bg)',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid rgba(74, 222, 128, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Check size={11} strokeWidth={2.5} /> 12 Fields Pre-Filled
              </span>
            </div>

            {/* Generated Highlight Note */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
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
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                  letterSpacing: '0.04em',
                }}
              >
                AI Generated Target Cover Note (Editable)
              </div>
              <p
                style={{
                  fontSize: '12px',
                  color: 'var(--text-primary)',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                &ldquo;{current.draftNote}&rdquo;
              </p>
            </div>

            {/* Candidate Skills Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {current.skills.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    padding: '2px 7px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Review Action */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '10px',
                borderTop: '1px solid var(--border)',
                marginTop: '4px',
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                {isApproved ? '✓ Staged for submission' : 'Requires explicit human confirmation'}
              </span>

              <button
                onClick={() => setIsApproved(!isApproved)}
                style={{
                  padding: '7px 14px',
                  fontSize: '12px',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-btn)',
                  backgroundColor: isApproved ? 'var(--indicator-success-bg)' : '#38BDF8',
                  color: isApproved ? 'var(--indicator-success)' : '#060911',
                  border: isApproved ? '1px solid var(--indicator-success)' : 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 150ms ease',
                }}
              >
                {isApproved ? (
                  <>
                    <CheckCircle2 size={13} />
                    <span>Approved &amp; Staged</span>
                  </>
                ) : (
                  <>
                    <span>Confirm &amp; Stage Draft</span>
                    <ArrowRight size={13} />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: ROLE MATCH ANALYSIS */}
        {activeTab === 'match' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
                Criteria Alignment vs {current.company}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  color: '#38BDF8',
                }}
              >
                {current.matchScore}% Overlap
              </div>
            </div>

            {/* Progress Bar */}
            <div
              style={{
                height: '6px',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '3px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${current.matchScore}%`,
                  backgroundColor: '#38BDF8',
                  borderRadius: '3px',
                  transition: 'width 300ms ease',
                }}
              />
            </div>

            {/* Criteria Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
              {current.matchedCriteria.map((crit) => (
                <div
                  key={crit.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-input)',
                    fontSize: '12px',
                  }}
                >
                  <span style={{ color: 'var(--text-secondary)' }}>{crit.name}</span>
                  {crit.status === 'matched' ? (
                    <span
                      style={{
                        color: 'var(--indicator-success)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Check size={11} strokeWidth={2.5} /> EXACT MATCH
                    </span>
                  ) : (
                    <span
                      style={{
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                      }}
                    >
                      NEUTRAL / OPTIONAL
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SAFETY AUDIT */}
        {activeTab === 'log' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                marginBottom: '4px',
              }}
            >
              AUDIT LOG &amp; PERMISSION BARRIERS
            </div>

            <div
              style={{
                padding: '10px 12px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-input)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--indicator-success)',
                }}
              />
              <div style={{ flex: 1, fontSize: '12px', color: 'var(--text-secondary)' }}>
                Profile memory grounded from verified resume (no AI hallucination)
              </div>
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                VERIFIED
              </span>
            </div>

            <div
              style={{
                padding: '10px 12px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-input)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--indicator-success)',
                }}
              />
              <div style={{ flex: 1, fontSize: '12px', color: 'var(--text-secondary)' }}>
                Form submission endpoint secured with MyFormConnect bot protection
              </div>
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                ENCRYPTED
              </span>
            </div>

            <div
              style={{
                padding: '10px 12px',
                backgroundColor: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: 'var(--radius-input)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#38BDF8',
                }}
              />
              <div style={{ flex: 1, fontSize: '12px', color: '#FFFFFF' }}>
                External dispatch lock active: auto-dispatch blocked without user click
              </div>
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#38BDF8', fontWeight: 600 }}>
                LOCKED
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div
        style={{
          padding: '8px 18px',
          borderTop: '1px solid var(--border)',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          fontSize: '11px',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>Try clicking tabs or role presets above</span>
        <span>AutoSubmit Core v2.4</span>
      </div>
    </div>
  );
}
