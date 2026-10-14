'use client';

import React, { useState } from 'react';
import { Check, CheckCircle2, ArrowRight, Layers, Sparkles, ShieldCheck, FileCheck } from './Icons';
import ScrollReveal from './ScrollReveal';

type WorkspaceRole = 'frontend' | 'ai-architect' | 'fullstack';
type ViewMode = 'review' | 'match' | 'payload';

interface WorkspaceData {
  id: string;
  roleTitle: string;
  company: string;
  location: string;
  matchScore: number;
  candidateName: string;
  candidateEmail: string;
  experienceHighlight: string;
  coverNote: string;
  skills: { name: string; match: string; status: 'matched' | 'preferred' }[];
  payload: Record<string, string>;
}

const WORKSPACE_ROLES: Record<WorkspaceRole, WorkspaceData> = {
  frontend: {
    id: 'APP-2026-0814',
    roleTitle: 'Senior Frontend Engineer',
    company: 'Acme Interactive Systems',
    location: 'San Francisco, CA (Hybrid / Remote)',
    matchScore: 95,
    candidateName: 'Elena Rostova',
    candidateEmail: 'elena.rostova@domain.io',
    experienceHighlight:
      '4+ years specializing in Next.js 16, React 19 concurrent features, modular design tokens, and high-performance client rendering.',
    coverNote:
      'Excited by Acme’s design velocity. My experience building resilient frontend architecture directly maps to your upcoming component system roadmap.',
    skills: [
      { name: 'React 19 & Next.js App Router', match: '100% Match', status: 'matched' },
      { name: 'TypeScript Strict Mode', match: '100% Match', status: 'matched' },
      { name: 'Async REST & GraphQL Consumption', match: '100% Match', status: 'matched' },
      { name: 'Tailwind / Vanilla CSS Architecture', match: 'Preferred', status: 'preferred' },
    ],
    payload: {
      applicant_name: 'Elena Rostova',
      applicant_email: 'elena.rostova@domain.io',
      target_role: 'Senior Frontend Engineer',
      years_exp: '4+ years',
      resume_attachment: 'Elena_Rostova_Resume_2026.pdf',
      staged_by: 'AutoSubmit Agent v2.4',
      mfc_endpoint: 'https://myformcapture.com/f/373ce8f5-...',
    },
  },
  'ai-architect': {
    id: 'APP-2026-0922',
    roleTitle: 'AI Platform Solutions Architect',
    company: 'Nexus Scale Intelligence',
    location: 'New York, NY (Remote)',
    matchScore: 98,
    candidateName: 'Marcus Vance',
    candidateEmail: 'marcus.vance@domain.io',
    experienceHighlight:
      '5+ years architecting autonomous agent pipelines, streaming LLM completions, and vector database retrieval systems with sub-50ms latency.',
    coverNote:
      'Deep expertise in deterministic prompt grounding and serverless workflow orchestration. Ready to accelerate Nexus’s agentic enterprise deployments.',
    skills: [
      { name: 'Autonomous Agentic Pipelines', match: '100% Match', status: 'matched' },
      { name: 'Vector DBs (pgvector / Pinecone)', match: '100% Match', status: 'matched' },
      { name: 'Python & FastAPI Production Deployments', match: '100% Match', status: 'matched' },
      { name: 'Streaming Telemetry & Evals', match: 'Preferred', status: 'preferred' },
    ],
    payload: {
      applicant_name: 'Marcus Vance',
      applicant_email: 'marcus.vance@domain.io',
      target_role: 'AI Platform Solutions Architect',
      years_exp: '5+ years',
      resume_attachment: 'Marcus_Vance_AI_Profile.pdf',
      staged_by: 'AutoSubmit Agent v2.4',
      mfc_endpoint: 'https://myformcapture.com/f/373ce8f5-...',
    },
  },
  fullstack: {
    id: 'APP-2026-1048',
    roleTitle: 'Fullstack Product Engineer',
    company: 'HyperFlow Studio',
    location: 'Austin, TX (Remote)',
    matchScore: 92,
    candidateName: 'Priya Patel',
    candidateEmail: 'priya.patel@domain.io',
    experienceHighlight:
      '3.5 years shipping full-stack TypeScript applications with PostgreSQL, Edge Functions, automated CI/CD, and accessible UI patterns.',
    coverNote:
      'Passionate about end-to-end product execution from schema design to frontend micro-interactions. Eager to contribute to HyperFlow’s rapid feature cadence.',
    skills: [
      { name: 'TypeScript & Node.js / Serverless', match: '100% Match', status: 'matched' },
      { name: 'PostgreSQL & Prisma ORM', match: '100% Match', status: 'matched' },
      { name: 'Modern React & Component Design', match: '100% Match', status: 'matched' },
      { name: 'Cloudflare Workers / Edge', match: 'Preferred', status: 'preferred' },
    ],
    payload: {
      applicant_name: 'Priya Patel',
      applicant_email: 'priya.patel@domain.io',
      target_role: 'Fullstack Product Engineer',
      years_exp: '3.5 years',
      resume_attachment: 'Priya_Patel_CV.pdf',
      staged_by: 'AutoSubmit Agent v2.4',
      mfc_endpoint: 'https://myformcapture.com/f/373ce8f5-...',
    },
  },
};

export default function WorkspacePreview() {
  const [selectedRole, setSelectedRole] = useState<WorkspaceRole>('frontend');
  const [viewMode, setViewMode] = useState<ViewMode>('review');
  const [reviewApproved, setReviewApproved] = useState(false);

  const current = WORKSPACE_ROLES[selectedRole];

  const handleScrollToCareerProfile = (e: React.MouseEvent) => {
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

  return (
    <section
      id="workspace"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: 'var(--bg-alt)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <ScrollReveal style={{ maxWidth: '640px', marginBottom: '32px' }}>
          <span className="section-label">03 / YOUR APPLICATION WORKSPACE</span>
          <h2 className="section-title">
            See what your agent is preparing.
          </h2>
          <p className="section-description">
            A real-time workspace where candidates inspect opportunity requirements alongside the agent&apos;s generated application draft prior to confirmation.
          </p>
        </ScrollReveal>

        {/* Realistic Two-Column Application Workspace Panel */}
        <ScrollReveal
          variant="scale"
          delay={100}
          style={{
            backgroundColor: 'var(--surface-navy)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-panel)',
            overflow: 'hidden',
            boxShadow: '0 20px 48px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Workspace Header Bar */}
          <div
            style={{
              padding: '12px 20px',
              borderBottom: '1px solid var(--border)',
              backgroundColor: 'var(--surface-navy)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: 'var(--text-primary)',
                }}
              >
                AUTOSUBMIT / WORKSPACE
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  borderLeft: '1px solid var(--border)',
                  paddingLeft: '10px',
                }}
              >
                {current.id}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: reviewApproved ? 'var(--indicator-success)' : '#FFFFFF',
                  backgroundColor: reviewApproved ? 'var(--indicator-success-bg)' : 'rgba(255, 255, 255, 0.08)',
                  border: `1px solid ${reviewApproved ? 'rgba(74, 222, 128, 0.35)' : 'rgba(255, 255, 255, 0.20)'}`,
                  padding: '3px 9px',
                  borderRadius: 'var(--radius-pill)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 200ms ease',
                }}
              >
                <span
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: reviewApproved ? 'var(--indicator-success)' : 'rgba(255, 255, 255, 0.40)',
                  }}
                />
                {reviewApproved ? 'APPROVED FOR DISPATCH' : 'AWAITING USER REVIEW'}
              </span>
            </div>
          </div>

          {/* Interactive Role Selector Bar */}
          <div
            style={{
              padding: '10px 20px',
              borderBottom: '1px solid var(--border)',
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                EXPLORE ROLE:
              </span>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    setSelectedRole('frontend');
                    setReviewApproved(false);
                  }}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-input)',
                    fontSize: '11px',
                    fontFamily: 'var(--font-sans)',
                    backgroundColor: selectedRole === 'frontend' ? '#38BDF8' : 'rgba(255, 255, 255, 0.04)',
                    color: selectedRole === 'frontend' ? '#060911' : 'var(--text-secondary)',
                    border: `1px solid ${selectedRole === 'frontend' ? '#38BDF8' : 'var(--border)'}`,
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                    fontWeight: selectedRole === 'frontend' ? 600 : 400,
                  }}
                >
                  Frontend (95% Fit)
                </button>
                <button
                  onClick={() => {
                    setSelectedRole('ai-architect');
                    setReviewApproved(false);
                  }}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-input)',
                    fontSize: '11px',
                    fontFamily: 'var(--font-sans)',
                    backgroundColor: selectedRole === 'ai-architect' ? '#38BDF8' : 'rgba(255, 255, 255, 0.04)',
                    color: selectedRole === 'ai-architect' ? '#060911' : 'var(--text-secondary)',
                    border: `1px solid ${selectedRole === 'ai-architect' ? '#38BDF8' : 'var(--border)'}`,
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                    fontWeight: selectedRole === 'ai-architect' ? 600 : 400,
                  }}
                >
                  AI Solutions (98% Fit)
                </button>
                <button
                  onClick={() => {
                    setSelectedRole('fullstack');
                    setReviewApproved(false);
                  }}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-input)',
                    fontSize: '11px',
                    fontFamily: 'var(--font-sans)',
                    backgroundColor: selectedRole === 'fullstack' ? '#38BDF8' : 'rgba(255, 255, 255, 0.04)',
                    color: selectedRole === 'fullstack' ? '#060911' : 'var(--text-secondary)',
                    border: `1px solid ${selectedRole === 'fullstack' ? '#38BDF8' : 'var(--border)'}`,
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                    fontWeight: selectedRole === 'fullstack' ? 600 : 400,
                  }}
                >
                  Fullstack (92% Fit)
                </button>
              </div>
            </div>

            {/* View Mode Switcher */}
            <div style={{ display: 'flex', gap: '4px', backgroundColor: 'rgba(255, 255, 255, 0.04)', padding: '2px', borderRadius: 'var(--radius-input)' }}>
              <button
                onClick={() => setViewMode('review')}
                style={{
                  fontSize: '11px',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: viewMode === 'review' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  color: viewMode === 'review' ? '#FFFFFF' : 'var(--text-muted)',
                  cursor: 'pointer',
                }}
              >
                Review Mode
              </button>
              <button
                onClick={() => setViewMode('payload')}
                style={{
                  fontSize: '11px',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: viewMode === 'payload' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  color: viewMode === 'payload' ? '#FFFFFF' : 'var(--text-muted)',
                  cursor: 'pointer',
                }}
              >
                Payload JSON
              </button>
            </div>
          </div>

          {/* VIEW: Review Mode */}
          {viewMode === 'review' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1px',
                backgroundColor: 'var(--border)',
              }}
            >
              {/* Left Column — Opportunity & Fit Analysis */}
              <div
                style={{
                  backgroundColor: 'var(--surface-navy)',
                  padding: '24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '2px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Target Opportunity
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        color: '#38BDF8',
                        fontWeight: 600,
                      }}
                    >
                      {current.matchScore}% Match
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '2px',
                    }}
                  >
                    {current.roleTitle}
                  </h3>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    {current.company} • {current.location}
                  </div>
                </div>

                {/* Skills Match Breakdown */}
                <div
                  style={{
                    padding: '14px 16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-input)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Required Skills &amp; Fit Overlap
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {current.skills.map((s) => (
                      <div
                        key={s.name}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '12px',
                        }}
                      >
                        <span style={{ color: 'var(--text-primary)' }}>{s.name}</span>
                        <span
                          style={{
                            color: s.status === 'matched' ? 'var(--indicator-success)' : 'var(--text-muted)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '11px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          {s.status === 'matched' && <Check size={11} strokeWidth={2.5} />}
                          {s.match}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preparation Status Bar */}
                <div
                  style={{
                    padding: '12px 14px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-input)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Field Auto-Fill Status</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--indicator-success)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--indicator-success)',
                        }}
                      />
                      100% Staged
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column — Generated Draft */}
              <div
                style={{
                  backgroundColor: 'var(--surface-navy)',
                  padding: '24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Staged Application Draft
                  </span>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    Review candidate details &amp; auto-crafted responses
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '10px',
                  }}
                >
                  <div
                    style={{
                      padding: '10px 12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-input)',
                    }}
                  >
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      CANDIDATE
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 500 }}>
                      {current.candidateName}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '10px 12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-input)',
                    }}
                  >
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      EMAIL
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 500 }}>
                      {current.candidateEmail}
                    </div>
                  </div>
                </div>

                {/* Experience highlight */}
                <div
                  style={{
                    padding: '10px 12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-input)',
                  }}
                >
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '3px' }}>
                    TARGET EXPERIENCE HIGHLIGHT
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {current.experienceHighlight}
                  </div>
                </div>

                {/* Cover note proposal */}
                <div
                  style={{
                    padding: '10px 12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-input)',
                  }}
                >
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '3px' }}>
                    AGENT GENERATED COVER NOTE
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    &ldquo;{current.coverNote}&rdquo;
                  </div>
                </div>

                {/* Review Action Row */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '10px',
                    borderTop: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '10px',
                  }}
                >
                  <button
                    onClick={() => setReviewApproved(!reviewApproved)}
                    className="btn-secondary"
                    style={{
                      fontSize: '12px',
                      padding: '8px 14px',
                      borderColor: reviewApproved ? 'var(--indicator-success)' : 'var(--border)',
                      color: reviewApproved ? 'var(--indicator-success)' : 'var(--text-primary)',
                      backgroundColor: reviewApproved ? 'var(--indicator-success-bg)' : 'transparent',
                    }}
                  >
                    <CheckCircle2 size={13} />
                    <span>{reviewApproved ? 'Approved for Dispatch' : 'Click to Approve Draft (Demo)'}</span>
                  </button>

                  <button
                    onClick={handleScrollToCareerProfile}
                    className="btn-primary"
                    style={{ fontSize: '12px', padding: '8px 14px' }}
                  >
                    <span>Prepare Your Profile</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: Payload JSON Mode */}
          {viewMode === 'payload' && (
            <div style={{ padding: '24px 28px', backgroundColor: 'var(--surface-navy)' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  marginBottom: '10px',
                }}
              >
                STRUCTURED PAYLOAD READY FOR MYFORMCONNECT INGESTION:
              </div>
              <pre
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-input)',
                  padding: '16px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: '#FFFFFF',
                  overflowX: 'auto',
                  lineHeight: 1.6,
                }}
              >
                {JSON.stringify(current.payload, null, 2)}
              </pre>
            </div>
          )}

          {/* Interactive Workspace Footnote */}
          <div
            style={{
              padding: '10px 20px',
              borderTop: '1px solid var(--border)',
              backgroundColor: 'var(--surface-secondary)',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '6px',
            }}
          >
            <span>Click role presets above to test dynamic criteria &amp; payload adaptation</span>
            <span style={{ color: '#38BDF8', fontWeight: 500 }}>MFC Integration Layer Enabled</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
