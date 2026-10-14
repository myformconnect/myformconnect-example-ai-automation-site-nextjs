'use client';

import React, { useState } from 'react';
import { Check, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from './Icons';

export default function AgentPreview() {
  const [isApproved, setIsApproved] = useState(false);

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
            LIVE STAGING
          </span>
        </div>

        {/* Status Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: isApproved ? 'var(--indicator-success)' : '#38BDF8',
            backgroundColor: isApproved ? 'var(--indicator-success-bg)' : 'rgba(56, 189, 248, 0.10)',
            border: `1px solid ${isApproved ? 'rgba(74, 222, 128, 0.35)' : 'rgba(56, 189, 248, 0.30)'}`,
            padding: '3px 10px',
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
            }}
          />
          {isApproved ? 'DISPATCHED VIA WEBHOOK' : 'READY FOR YOUR APPROVAL'}
        </div>
      </div>

      {/* Main Preview Card Body */}
      <div style={{ padding: '20px 22px' }}>
        {/* Target Job Opportunity Banner */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '18px',
            paddingBottom: '16px',
            borderBottom: '1px solid var(--border)',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Target Opportunity
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '10px' }}>•</span>
              <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Linear</span>
            </div>
            <h3
              style={{
                fontSize: '17px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                margin: 0,
              }}
            >
              Lead UI Systems Engineer
            </h3>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              San Francisco, CA • Remote Friendly
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(74, 222, 128, 0.12)',
              border: '1px solid rgba(74, 222, 128, 0.30)',
              color: 'var(--indicator-success)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            <Sparkles size={13} />
            <span>96% Match</span>
          </div>
        </div>

        {/* Prepared Application Details */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
            marginBottom: '16px',
          }}
        >
          {/* Candidate Profile */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '12px 14px',
            }}
          >
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>
              Candidate Profile
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
              Alex Rivera
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
              5+ yrs Frontend & React SSR
            </div>
          </div>

          {/* Form Fields Mapped */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '12px 14px',
            }}
          >
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>
              Prepared Form Fields
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
              12 Fields Extracted
            </div>
            <div style={{ fontSize: '11px', color: 'var(--indicator-success)' }}>
              ✓ 0% Data Hallucination
            </div>
          </div>
        </div>

        {/* Tailored Cover Note Preview */}
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '12px 14px',
            marginBottom: '18px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '6px',
            }}
          >
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 500 }}>
              Tailored Screening Note
            </span>
            <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              AUTO-GENERATED
            </span>
          </div>
          <p
            style={{
              fontSize: '12px',
              lineHeight: 1.5,
              color: 'var(--text-secondary)',
              margin: 0,
            }}
          >
            &ldquo;Engineered high-scale frontend systems with React 19 and Next.js SSR, reducing client bundle size by 38% and optimizing Core Web Vitals across production apps.&rdquo;
          </p>
        </div>

        {/* Human Confirmation Callout & Action */}
        <div
          style={{
            backgroundColor: isApproved ? 'rgba(74, 222, 128, 0.06)' : 'rgba(56, 189, 248, 0.05)',
            border: `1px solid ${isApproved ? 'rgba(74, 222, 128, 0.25)' : 'rgba(56, 189, 248, 0.20)'}`,
            borderRadius: '8px',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: isApproved ? 'rgba(74, 222, 128, 0.15)' : 'rgba(56, 189, 248, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isApproved ? 'var(--indicator-success)' : '#38BDF8',
                flexShrink: 0,
              }}
            >
              {isApproved ? <Check size={16} /> : <ShieldCheck size={16} />}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)' }}>
                {isApproved ? 'Application Successfully Submitted' : 'Human Approval Required'}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                {isApproved
                  ? 'Confirmed & dispatched to Linear via MyFormConnect'
                  : 'AutoSubmit will never submit without your 1-click consent'}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {isApproved ? (
              <button
                type="button"
                onClick={() => setIsApproved(false)}
                className="btn-secondary"
                style={{ fontSize: '12px', padding: '6px 12px' }}
              >
                Reset Demo
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsApproved(true)}
                className="btn-primary"
                style={{ fontSize: '12px', padding: '8px 16px' }}
              >
                <span>Approve & Submit</span>
                <ArrowRight size={13} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Footer Meta Row */}
      <div
        style={{
          padding: '10px 18px',
          borderTop: '1px solid var(--border)',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '11px',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <span>INGESTION: MyFormConnect Webhook</span>
        <span>LATENCY: 142ms</span>
      </div>
    </div>
  );
}
