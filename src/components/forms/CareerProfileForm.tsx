'use client';

import React, { useState } from 'react';
import FormAttribution from '../FormAttribution';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  RefreshCw,
  Upload,
  Info,
} from '../Icons';

// ============================================================================
// MyFormConnect Form Action URL for Career Profile / File Upload Form
// Visible for search & direct production integration (no env var required)
// ============================================================================
export const CAREER_PROFILE_FORM_ACTION_URL =
  process.env.NEXT_PUBLIC_MFC_PROFILE_URL ||
  'https://myformcapture.com/f/373ce8f5-0df6-4ca3-82e9-886981a4bb32';

type SubmissionState = 'idle' | 'loading' | 'success' | 'error';

interface CareerProfileFormProps {
  actionUrl?: string;
  hideHeader?: boolean;
}

export default function CareerProfileForm({
  actionUrl = CAREER_PROFILE_FORM_ACTION_URL,
  hideHeader = false,
}: CareerProfileFormProps) {
  const [status, setStatus] = useState<SubmissionState>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [selectedFileName, setSelectedFileName] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      // Golden Rules (MFC Developer Guide):
      // 1. Inputs must have 'name' attributes
      // 2. Body must be FormData (handles binary file uploads automatically)
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
          'Profile packaged and uploaded successfully! Resume binary attachment and career criteria recorded.'
        );
        formElement.reset();
        setSelectedFileName('');
      } else {
        const errorText = await res.text().catch(() => '');
        setStatus('error');
        setStatusMessage(
          `Profile submission failed (${res.status}): ${errorText || res.statusText || 'Unable to process profile'}`
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
    setSelectedFileName('');
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
              CAREER PROFILE — PRIMARY WORKFLOW
            </span>
            <h3
              style={{
                fontSize: '19px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                letterSpacing: '-0.015em',
              }}
            >
              Prepare your career profile
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                marginTop: '4px',
                maxWidth: '540px',
              }}
            >
              Ground your resume, skills, and target job requirements for tailored agent-assisted application preparation.
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
            <span>AI STAGING READY</span>
          </div>
        </div>
      )}

      {/* Workflow disclaimer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '9px 12px',
          borderRadius: 'var(--radius-input)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          fontSize: '12px',
          color: 'var(--text-secondary)',
          marginBottom: '20px',
          lineHeight: 1.45,
        }}
      >
        <Info size={14} color="#FFFFFF" />
        <span>
          Note: This form demonstrates the application preparation workflow and packages your information for review. It does not submit an application to external employers.
        </span>
      </div>

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
            Profile Staged Successfully
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
            <RefreshCw size={13} /> Update or submit another profile
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '14px',
            }}
          >
            <div className="form-group">
              <label className="form-label" htmlFor="profile-name">
                Full name
              </label>
              <input
                id="profile-name"
                className="form-input"
                name="applicant_name"
                type="text"
                placeholder="e.g. Jordan Vance"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="profile-email">
                Email address
              </label>
              <input
                id="profile-email"
                className="form-input"
                name="email"
                type="email"
                placeholder="jordan@domain.io"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="profile-target-role">
                Target job role
              </label>
              <input
                id="profile-target-role"
                className="form-input"
                name="target_role"
                type="text"
                placeholder="e.g. Fullstack Engineer"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="profile-experience">
                Years of experience
              </label>
              <select
                id="profile-experience"
                className="form-select"
                name="experience_years"
                defaultValue="3-5 years"
                required
              >
                <option value="0-2 years">0–2 years</option>
                <option value="3-5 years">3–5 years</option>
                <option value="6-9 years">6–9 years</option>
                <option value="10+ years">10+ years</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="profile-skills">
              Key skills
            </label>
            <input
              id="profile-skills"
              className="form-input"
              name="skills"
              type="text"
              placeholder="e.g. React, Next.js, TypeScript, GraphQL, Node.js"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="profile-resume">
              Resume file <span className="optional">(PDF, DOC, DOCX up to 100MB)</span>
            </label>
            <div
              style={{
                position: 'relative',
                border: '1px dashed var(--border)',
                borderRadius: 'var(--radius-input)',
                padding: '14px',
                backgroundColor: 'var(--surface-navy)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
              }}
            >
              <Upload size={17} color="#FFFFFF" />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: '13px',
                    color: selectedFileName ? 'var(--text-primary)' : 'var(--text-secondary)',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {selectedFileName || 'Select or drop your resume document'}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Direct binary attachment supported by MyFormConnect
                </div>
              </div>
              <input
                id="profile-resume"
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setSelectedFileName(e.target.files[0].name);
                  }
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="profile-job-desc">
              Job description or target role requirements
            </label>
            <textarea
              id="profile-job-desc"
              className="form-textarea"
              name="job_description"
              rows={3}
              placeholder="Paste excerpt from target job post to test skills alignment..."
              required
            />
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
                  <span>Packaging profile...</span>
                </>
              ) : (
                <>
                  <span>Prepare my profile</span>
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
