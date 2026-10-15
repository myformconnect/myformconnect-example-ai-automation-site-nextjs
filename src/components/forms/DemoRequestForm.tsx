'use client';

import React, { useState } from 'react';
import FormAttribution from '../FormAttribution';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, RefreshCw } from '../Icons';

// ============================================================================
// MyFormConnect Form Action URL for Demo Request Form
// Visible for search & direct production integration (no env var required)
// ============================================================================
export const DEMO_REQUEST_FORM_ACTION_URL =
  process.env.NEXT_PUBLIC_MFC_DEMO_URL ||
  'https://myformcapture.com/f/373ce8f5-0df6-4ca3-82e9-886981a4bb32';

type SubmissionState = 'idle' | 'loading' | 'success' | 'error';

interface DemoRequestFormProps {
  actionUrl?: string;
  hideHeader?: boolean;
}

export default function DemoRequestForm({
  actionUrl = DEMO_REQUEST_FORM_ACTION_URL,
  hideHeader = false,
}: DemoRequestFormProps) {
  const [status, setStatus] = useState<SubmissionState>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

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
          'Demo request received! A product specialist will contact you to confirm calendar availability.'
        );
        formElement.reset();
      } else {
        const errorText = await res.text().catch(() => '');
        setStatus('error');
        setStatusMessage(
          `Demo request failed (${res.status}): ${errorText || res.statusText || 'Unable to book demo'}`
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
              PRODUCT DEMONSTRATION WALKTHROUGH
            </span>
            <h3
              style={{
                fontSize: '19px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                letterSpacing: '-0.015em',
              }}
            >
              See AutoSubmit in action
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                marginTop: '4px',
                maxWidth: '540px',
              }}
            >
              Schedule a tailored walkthrough of the career agent workflow and form automation features.
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
            <span>1-ON-1 SESSIONS AVAILABLE</span>
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
            Walkthrough Scheduled
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
            <RefreshCw size={13} /> Request another session
          </button>
        </div>
      )}

      {/* Active Form */}
      {status !== 'success' && (
        <form action={actionUrl} method="POST" onSubmit={handleSubmit}>
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
              <label className="form-label" htmlFor="demo-name">
                Full name
              </label>
              <input
                id="demo-name"
                className="form-input"
                name="name"
                type="text"
                placeholder="e.g. Alex Thorne"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="demo-email">
                Work email
              </label>
              <input
                id="demo-email"
                className="form-input"
                name="work_email"
                type="email"
                placeholder="alex@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="demo-company">
                Company / Organization <span className="optional">(optional)</span>
              </label>
              <input
                id="demo-company"
                className="form-input"
                name="company"
                type="text"
                placeholder="e.g. Vertex Systems"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="demo-time">
                Meeting preference
              </label>
              <select
                id="demo-time"
                className="form-select"
                name="meeting_preference"
                defaultValue="Next available morning"
              >
                <option value="Next available morning">Next available morning (PT/ET)</option>
                <option value="Next available afternoon">Next available afternoon (PT/ET)</option>
                <option value="Flexible / Asynchronous briefing">Flexible / Asynchronous video</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="demo-message">
              Message / Specific interests <span className="optional">(optional)</span>
            </label>
            <textarea
              id="demo-message"
              className="form-textarea"
              name="message"
              rows={3}
              placeholder="What would you like us to highlight during the walkthrough?"
            />
          </div>

          <p
            style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
              marginBottom: '14px',
            }}
          >
            Live walkthroughs are conducted 1-on-1 by product specialists. No automated bot calendar or third-party tracking required.
          </p>

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
                  <span>Requesting demo...</span>
                </>
              ) : (
                <>
                  <span>Request a demo</span>
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
