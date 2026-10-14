'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Upload, CheckCircle2, AlertCircle, Loader2 } from './Icons';

export const SUPPORT_FORM_ACTION_URL =
  process.env.NEXT_PUBLIC_MFC_SUPPORT_URL ||
  'https://myformcapture.com/f/373ce8f5-0df6-4ca3-82e9-886981a4bb32';

type SubmissionState = 'idle' | 'loading' | 'success' | 'error';

export default function SupportBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<SubmissionState>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [selectedFileName, setSelectedFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleReset = () => {
    setStatus('idle');
    setStatusMessage('');
    setSelectedFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (status === 'success') {
      handleReset();
    }
  };

  const handleToggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      if (status === 'success') {
        handleReset();
      }
      setIsOpen(true);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, status]);

  // Close on click outside popup
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        popupRef.current &&
        !popupRef.current.contains(e.target as Node)
      ) {
        const bubbleBtn = document.getElementById('support-bubble-btn');
        if (bubbleBtn && bubbleBtn.contains(e.target as Node)) {
          return;
        }
        handleClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      const res = await fetch(SUPPORT_FORM_ACTION_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        setStatusMessage('Your support request has been received. Our team will review your message shortly.');
        formElement.reset();
        setSelectedFileName('');
      } else {
        const errorText = await res.text().catch(() => '');
        setStatus('error');
        setStatusMessage(
          `Unable to send request (${res.status}): ${errorText || res.statusText || 'Please try again later'}`
        );
      }
    } catch (err: unknown) {
      const error = err as Error;
      setStatus('error');
      setStatusMessage(`Network error: ${error?.message || 'Unable to connect to support server'}`);
    }
  };


  return (
    <aside
      aria-label="Customer Support"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
      }}
    >
      {/* Support Popup Modal */}
      {isOpen && (
        <div
          ref={popupRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="support-popup-title"
          className="support-popup"
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 18px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#4ADE80',
                }}
              />
              <div>
                <h3
                  id="support-popup-title"
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    margin: 0,
                  }}
                >
                  Support & Feedback
                </h3>
                <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.55)' }}>
                  We usually respond within a few hours
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close support dialog"
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.6)',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 150ms ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)')}
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="support-popup-body">
            {/* Success View */}
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(74, 222, 128, 0.15)',
                    color: '#4ADE80',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px',
                  }}
                >
                  <CheckCircle2 size={24} />
                </div>
                <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', margin: '0 0 6px' }}>
                  Request Received
                </h4>
                <p
                  style={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: 1.5,
                    margin: '0 0 16px',
                  }}
                >
                  {statusMessage}
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn-primary"
                  style={{ fontSize: '13px', padding: '8px 20px', width: '100%', justifyContent: 'center' }}
                >
                  Done
                </button>
              </div>
            ) : (
              /* Support Form */
              <form onSubmit={handleSubmit}>
                {/* Honeypot & Subject */}
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <input type="hidden" name="_subject" value="AutoSubmit Support Request" />

                {/* Error Banner */}
                {status === 'error' && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 12px',
                      backgroundColor: 'rgba(239, 68, 68, 0.12)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: '8px',
                      marginBottom: '12px',
                      color: '#fca5a5',
                      fontSize: '12px',
                    }}
                  >
                    <AlertCircle size={16} />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Name Field */}
                <div style={{ marginBottom: '12px' }}>
                  <label
                    htmlFor="support-name"
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.85)',
                      marginBottom: '4px',
                    }}
                  >
                    Name <span style={{ color: '#38BDF8' }}>*</span>
                  </label>
                  <input
                    id="support-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="form-input"
                    style={{ fontSize: '13px', padding: '8px 12px' }}
                  />
                </div>

                {/* Email Field */}
                <div style={{ marginBottom: '12px' }}>
                  <label
                    htmlFor="support-email"
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.85)',
                      marginBottom: '4px',
                    }}
                  >
                    Email <span style={{ color: '#38BDF8' }}>*</span>
                  </label>
                  <input
                    id="support-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@domain.com"
                    className="form-input"
                    style={{ fontSize: '13px', padding: '8px 12px' }}
                  />
                </div>

                {/* Issue Category Dropdown */}
                <div style={{ marginBottom: '12px' }}>
                  <label
                    htmlFor="support-category"
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.85)',
                      marginBottom: '4px',
                    }}
                  >
                    Issue Category <span style={{ color: '#38BDF8' }}>*</span>
                  </label>
                  <select
                    id="support-category"
                    name="issue_category"
                    required
                    defaultValue="Technical issue / Bug"
                    className="form-select"
                    style={{ fontSize: '13px', padding: '8px 36px 8px 12px' }}
                  >
                    <option value="Technical issue / Bug" style={{ backgroundColor: '#0c0f17', color: '#FFFFFF' }}>
                      Technical issue / Bug
                    </option>
                    <option value="Form submission problem" style={{ backgroundColor: '#0c0f17', color: '#FFFFFF' }}>
                      Form submission problem
                    </option>
                    <option value="Account / Access" style={{ backgroundColor: '#0c0f17', color: '#FFFFFF' }}>
                      Account / Access
                    </option>
                    <option value="Feature suggestion" style={{ backgroundColor: '#0c0f17', color: '#FFFFFF' }}>
                      Feature suggestion
                    </option>
                    <option value="General question" style={{ backgroundColor: '#0c0f17', color: '#FFFFFF' }}>
                      General question
                    </option>
                  </select>
                </div>

                {/* Description Field */}
                <div style={{ marginBottom: '12px' }}>
                  <label
                    htmlFor="support-description"
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.85)',
                      marginBottom: '4px',
                    }}
                  >
                    Description <span style={{ color: '#38BDF8' }}>*</span>
                  </label>
                  <textarea
                    id="support-description"
                    name="description"
                    rows={3}
                    required
                    placeholder="Describe what happened or what you need help with..."
                    className="form-textarea"
                    style={{ fontSize: '13px', padding: '8px 12px', resize: 'vertical' }}
                  />
                </div>

                {/* Optional Screenshot / File Attachment */}
                <div style={{ marginBottom: '16px' }}>
                  <label
                    htmlFor="support-attachment"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.85)',
                      marginBottom: '4px',
                    }}
                  >
                    <span>Screenshot / File</span>
                    <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)' }}>
                      Optional
                    </span>
                  </label>

                  <div
                    style={{
                      position: 'relative',
                      border: '1px dashed rgba(255, 255, 255, 0.18)',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      cursor: 'pointer',
                      transition: 'border-color 150ms ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                      <Upload size={14} color="#38BDF8" />
                      <span
                        style={{
                          fontSize: '12px',
                          color: selectedFileName ? '#FFFFFF' : 'rgba(255, 255, 255, 0.55)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {selectedFileName || 'Attach screenshot or document'}
                      </span>
                    </div>

                    {selectedFileName ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFileName('');
                          if (fileInputRef.current) {
                            fileInputRef.current.value = '';
                          }
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'rgba(255, 255, 255, 0.5)',
                          cursor: 'pointer',
                          padding: '2px',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        aria-label="Remove attached file"
                      >
                        <X size={12} />
                      </button>
                    ) : (
                      <span
                        style={{
                          fontSize: '11px',
                          color: '#38BDF8',
                          fontWeight: 500,
                          flexShrink: 0,
                        }}
                      >
                        Browse
                      </span>
                    )}

                    <input
                      ref={fileInputRef}
                      id="support-attachment"
                      type="file"
                      name="attachment"
                      accept="image/*,.pdf,.doc,.docx,.txt"
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

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '10px 16px',
                    fontSize: '13px',
                    justifyContent: 'center',
                  }}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={14} className="spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Submit Support Request</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating Bubble Button */}
      <button
        id="support-bubble-btn"
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close support dialog' : 'Open support dialog'}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#38BDF8',
          color: '#060911',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 150ms ease, background-color 150ms ease, box-shadow 150ms ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.06)';
          e.currentTarget.style.backgroundColor = '#7DD3FC';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = '#38BDF8';
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'scale(0.96)';
        }}
      >
        {isOpen ? <X size={20} strokeWidth={2.5} /> : <MessageSquare size={20} strokeWidth={2.2} />}
      </button>

      {/* Styles for left-positioned popup and hidden scrollbars */}
      <style jsx>{`
        .support-popup {
          position: absolute;
          right: 64px;
          bottom: 0;
          width: 400px;
          max-width: calc(100vw - 100px);
          max-height: calc(100vh - 48px);
          background-color: #0c0f17;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 16px;
          box-shadow: 0 20px 48px -8px rgba(0, 0, 0, 0.75), 0 0 1px 1px rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: supportSlideLeft 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .support-popup-body {
          padding: 18px 20px;
          overflow-y: auto;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }

        .support-popup-body::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Edge */
        }

        @keyframes supportSlideLeft {
          from {
            opacity: 0;
            transform: translateX(12px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @media (max-width: 540px) {
          .support-popup {
            right: 0;
            bottom: 64px;
            width: calc(100vw - 32px);
            max-width: calc(100vw - 32px);
            max-height: calc(100vh - 100px);
            animation: supportSlideUpMobile 200ms cubic-bezier(0.16, 1, 0.3, 1);
          }

          @keyframes supportSlideUpMobile {
            from {
              opacity: 0;
              transform: translateY(12px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        }
      `}</style>
    </aside>
  );
}
