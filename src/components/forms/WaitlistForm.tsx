'use client';

import React, { useState } from 'react';
import FormAttribution from '../FormAttribution';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, RefreshCw } from '../Icons';

// ============================================================================
// MyFormConnect Form Action URL for Waitlist Form
// Visible for search & direct production integration (no env var required)
// ============================================================================
export const WAITLIST_FORM_ACTION_URL =
  process.env.NEXT_PUBLIC_MFC_WAITLIST_URL ||
  'https://myformcapture.com/f/373ce8f5-0df6-4ca3-82e9-886981a4bb32';

type SubmissionState = 'idle' | 'loading' | 'success' | 'error';

interface WaitlistFormProps {
  actionUrl?: string;
  hideHeader?: boolean;
}

export default function WaitlistForm({
  actionUrl = WAITLIST_FORM_ACTION_URL,
  hideHeader = false,
}: WaitlistFormProps) {
  const [status, setStatus] = useState<SubmissionState>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [stage, setStage] = useState<string>('Experienced professional');
  const [role, setRole] = useState<string>('');

  const handleAutofillDemo = () => {
    setName('Elena Rostova');
    setEmail('elena.rostova@domain.io');
    setStage('Experienced professional');
    setRole('Senior Frontend Architect');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      // Golden Rules (MFC Developer Guide):
      // 1. Inputs must have 'name' attributes
      // 2. Body must be FormData
      // 3. Omit Content-Type (browser sets multipart boundary automatically)
      // 4. AJAX Headers: Accept: application/json, X-Requested-With: XMLHttpRequest
      const res = await fetch(actionUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        setStatusMessage(
          'You are on the waitlist! We will notify you as soon as early access slots open.'
        );
        formElement.reset();
        setName('');
        setEmail('');
        setRole('');
      } else {
        const errorText = await res.text().catch(() => '');
        setStatus('error');
        setStatusMessage(
          `Submission failed (${res.status}): ${errorText || res.statusText || 'Unable to process your request'}`
        );
      }
    } catch (err: unknown) {
      const error = err as Error;
      setStatus('error');
      setStatusMessage(`Network error: ${error?.message || 'Unable to reach the server'}`);
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setStatusMessage('');
    setName('');
    setEmail('');
    setRole('');
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--surface-navy)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-panel)',
        padding: '28px',
        position: 'relative',
      }}
    >
      {!hideHeader && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '16px',
            marginBottom: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <span className="section-label" style={{ marginBottom: '6px' }}>
              02 / EARLY ACCESS WAITLIST
            </span>
            <h3
              style={{
                fontSize: '19px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                letterSpacing: '-0.015em',
              }}
            >
              Get early access
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                marginTop: '4px',
                maxWidth: '540px',
              }}
            >
              Join forward-thinking job seekers securing early access to AutoSubmit career automation tools.
            </p>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--surface-navy)',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--indicator-success)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--indicator-success)',
              }}
            />
            <span>APPLICATIONS OPEN</span>
          </div>
        </div>
      )}

      {/* Success View */}
      {status === 'success' && (
        <div
          style={{
            padding: '32px 20px',
            textAlign: 'center',
            backgroundColor: 'var(--surface-navy)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            borderRadius: 'var(--radius-input)',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              padding: '10px',
              borderRadius: '50%',
              backgroundColor: 'var(--indicator-success-bg)',
              color: 'var(--indicator-success)',
              marginBottom: '12px',
            }}
          >
            <CheckCircle2 size={26} />
          </div>
          <h4
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: 'var(--text-primary)',
              marginBottom: '6px',
            }}
          >
            Waitlist Registration Received
          </h4>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              maxWidth: '460px',
              margin: '0 auto 18px',
              lineHeight: 1.5,
            }}
          >
            {statusMessage}
          </p>
          <button onClick={handleReset} className="btn-secondary" style={{ fontSize: '13px' }}>
            <RefreshCw size={13} /> Submit another response
          </button>
        </div>
      )}

      {/* Active Form */}
      {status !== 'success' && (
        <form action={actionUrl} method="POST" onSubmit={handleSubmit}>
          {/* Quick Demo Autofill Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
              padding: '10px 14px',
              backgroundColor: 'rgba(56, 189, 248, 0.10)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: 'var(--radius-input)',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#38BDF8',
                }}
              />
              <span style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: 500 }}>
                Waitlist Intake Demo
              </span>
            </div>

            <button
              type="button"
              onClick={handleAutofillDemo}
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-sans)',
                padding: '5px 12px',
                borderRadius: 'var(--radius-btn)',
                backgroundColor: '#38BDF8',
                border: 'none',
                color: '#060911',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontWeight: 600,
              }}
            >
              <span>⚡ Autofill Demo Candidate</span>
            </button>
          </div>

          {/* Golden Rule: Anti-spam honeypot (hidden from real users) */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '14px',
            }}
          >
            <div className="form-group">
              <label className="form-label" htmlFor="waitlist-name">
                Full name
              </label>
              <input
                id="waitlist-name"
                className="form-input"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Elena Rostova"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="waitlist-email">
                Email address
              </label>
              <input
                id="waitlist-email"
                className="form-input"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@work.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="waitlist-stage">
                Career stage
              </label>
              <select
                id="waitlist-stage"
                className="form-select"
                name="career_stage"
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                required
              >
                <option value="Student">Student</option>
                <option value="Early career">Early career (0-3 yrs)</option>
                <option value="Experienced professional">
                  Experienced professional (4+ yrs)
                </option>
                <option value="Career Transitioner">Career transitioner</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="waitlist-role">
                Preferred role <span className="optional">(optional)</span>
              </label>
              <input
                id="waitlist-role"
                className="form-input"
                name="preferred_role"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Senior Frontend Engineer"
              />
            </div>
          </div>

          {/* Action Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              marginTop: '20px',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary"
              style={{
                opacity: status === 'loading' ? 0.75 : 1,
                cursor: status === 'loading' ? 'wait' : 'pointer',
              }}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} />
                  <span>Submitting to waitlist...</span>
                </>
              ) : (
                <>
                  <span>Join the waitlist</span>
                  <ArrowRight size={14} />
                </>
              )}
            </button>
          </div>

          {/* Error Message */}
          {status === 'error' && (
            <div
              style={{
                marginTop: '16px',
                padding: '12px 14px',
                borderRadius: 'var(--radius-input)',
                backgroundColor: 'var(--indicator-error-bg)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                fontSize: '12px',
                color: '#FFFFFF',
                lineHeight: 1.5,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <AlertCircle size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Submission Notice:</strong> {statusMessage}
                </div>
              </div>
            </div>
          )}
        </form>
      )}

      {/* Mandatory Attribution Component Directly Beneath Form */}
      <FormAttribution />
    </div>
  );
}
