'use client';

import React, { useState } from 'react';
import { Check, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, FileCheck, Layers } from './Icons';
import ScrollReveal from './ScrollReveal';

interface ApplicationCard {
  id: string;
  company: string;
  role: string;
  location: string;
  matchScore: number;
  status: 'ready' | 'dispatched' | 'drafting';
  statusLabel: string;
  mappedFieldsCount: number;
  keySkills: string[];
  submissionNote: string;
  timestamp: string;
}

const APPLICATIONS: ApplicationCard[] = [
  {
    id: 'APP-1042',
    company: 'Linear',
    role: 'Lead UI Systems Engineer',
    location: 'San Francisco, CA (Remote)',
    matchScore: 96,
    status: 'ready',
    statusLabel: 'Ready for Review',
    mappedFieldsCount: 12,
    keySkills: ['React 19', 'Next.js SSR', 'Design Systems', 'TypeScript'],
    submissionNote: 'Application drafted and validated. Awaiting your 1-click confirmation before dispatching.',
    timestamp: 'Prepared 5 mins ago',
  },
  {
    id: 'APP-1039',
    company: 'Vercel',
    role: 'AI Platform Specialist',
    location: 'Remote (Global)',
    matchScore: 98,
    status: 'dispatched',
    statusLabel: 'Dispatched via MyFormConnect',
    mappedFieldsCount: 14,
    keySkills: ['Autonomous Agents', 'Next.js', 'Python', 'FastAPI'],
    submissionNote: 'Successfully submitted directly through MyFormConnect webhook. Confirmation receipt logged.',
    timestamp: 'Submitted today at 2:15 PM',
  },
  {
    id: 'APP-1048',
    company: 'Stripe',
    role: 'Fullstack Product Engineer',
    location: 'Seattle, WA (Hybrid)',
    matchScore: 94,
    status: 'drafting',
    statusLabel: 'Drafting in Progress',
    mappedFieldsCount: 10,
    keySkills: ['TypeScript', 'Node.js', 'PostgreSQL', 'APIs'],
    submissionNote: 'Agent is extracting application questions and tailoring custom portfolio highlights.',
    timestamp: 'In progress (~30s remaining)',
  },
];

export default function WorkspacePreview() {
  const [approvedIds, setApprovedIds] = useState<Record<string, boolean>>({});

  const toggleApproval = (id: string) => {
    setApprovedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
        <ScrollReveal style={{ maxWidth: '640px', marginBottom: '40px' }}>
          <span className="section-label">03 / YOUR APPLICATION WORKSPACE</span>
          <h2 className="section-title">
            See what your agent is preparing.
          </h2>
          <p className="section-description">
            A clean, transparent command center where you review matched job opportunities, inspect extracted form fields, and approve submissions with full confidence.
          </p>
        </ScrollReveal>

        {/* Workspace Applications Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
            marginBottom: '32px',
          }}
        >
          {APPLICATIONS.map((app, index) => {
            const isApproved = approvedIds[app.id] || app.status === 'dispatched';

            return (
              <ScrollReveal
                key={app.id}
                delay={index * 80}
                style={{
                  backgroundColor: 'var(--surface-navy)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-panel)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
                  position: 'relative',
                }}
              >
                {/* Card Top: Company & Status */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {app.company} • {app.id}
                    </span>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 9px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor:
                          isApproved
                            ? 'var(--indicator-success-bg)'
                            : app.status === 'drafting'
                            ? 'rgba(255, 255, 255, 0.06)'
                            : 'rgba(56, 189, 248, 0.10)',
                        border: `1px solid ${
                          isApproved
                            ? 'rgba(74, 222, 128, 0.35)'
                            : app.status === 'drafting'
                            ? 'rgba(255, 255, 255, 0.15)'
                            : 'rgba(56, 189, 248, 0.30)'
                        }`,
                        color:
                          isApproved
                            ? 'var(--indicator-success)'
                            : app.status === 'drafting'
                            ? 'var(--text-secondary)'
                            : '#38BDF8',
                      }}
                    >
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor:
                            isApproved
                              ? 'var(--indicator-success)'
                              : app.status === 'drafting'
                              ? 'var(--text-muted)'
                              : '#38BDF8',
                        }}
                      />
                      {isApproved ? 'Dispatched' : app.statusLabel}
                    </span>
                  </div>

                  {/* Role Title & Location */}
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      margin: '0 0 4px 0',
                    }}
                  >
                    {app.role}
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 16px 0' }}>
                    {app.location}
                  </p>

                  {/* Match Score & Extracted Fields Stats */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px',
                      marginBottom: '16px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: 'rgba(74, 222, 128, 0.10)',
                        border: '1px solid rgba(74, 222, 128, 0.25)',
                        borderRadius: '6px',
                        padding: '6px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--indicator-success)',
                      }}
                    >
                      <Sparkles size={12} />
                      <span>{app.matchScore}% Match</span>
                    </div>

                    <div
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        padding: '6px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <FileCheck size={12} />
                      <span>{app.mappedFieldsCount} Form Fields</span>
                    </div>
                  </div>

                  {/* Key Skills Matched */}
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                      Verified Matching Skills:
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {app.keySkills.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            fontSize: '11px',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--border)',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Summary Note */}
                  <div
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.20)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      padding: '10px 12px',
                      fontSize: '12px',
                      lineHeight: 1.5,
                      color: 'var(--text-secondary)',
                      marginBottom: '20px',
                    }}
                  >
                    {isApproved
                      ? '✓ Dispatched to employer ATS via MyFormConnect ingestion webhook with receipt verification.'
                      : app.submissionNote}
                  </div>
                </div>

                {/* Card Bottom: Simple Action */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '14px',
                    borderTop: '1px solid var(--border)',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span>{app.timestamp}</span>

                  {app.status === 'ready' && (
                    <button
                      type="button"
                      onClick={() => toggleApproval(app.id)}
                      className={isApproved ? 'btn-secondary' : 'btn-primary'}
                      style={{ fontSize: '12px', padding: '6px 14px' }}
                    >
                      {isApproved ? 'Cancel Submission' : 'Approve & Submit'}
                    </button>
                  )}

                  {app.status === 'dispatched' && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: 'var(--indicator-success)',
                        fontWeight: 500,
                      }}
                    >
                      <CheckCircle2 size={13} />
                      Verified
                    </span>
                  )}

                  {app.status === 'drafting' && (
                    <span style={{ color: 'var(--text-muted)' }}>
                      Analyzing Schema...
                    </span>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Clean Workspace Principles Row */}
        <ScrollReveal
          delay={150}
          style={{
            backgroundColor: 'var(--surface-navy)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-panel)',
            padding: '24px 28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                backgroundColor: 'rgba(56, 189, 248, 0.12)',
                color: '#38BDF8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <ShieldCheck size={18} />
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                Human-in-the-Loop Sign-off
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                You retain complete control. No resume or screening answer is dispatched without your explicit approval.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                backgroundColor: 'rgba(74, 222, 128, 0.12)',
                color: 'var(--indicator-success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FileCheck size={18} />
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                Zero Data Hallucination
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Form fields are deterministically mapped to your verified profile and work experience data.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Layers size={18} />
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                Direct Webhook Ingestion
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Submissions flow straight through MyFormConnect endpoints with cryptographic delivery verification.
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
