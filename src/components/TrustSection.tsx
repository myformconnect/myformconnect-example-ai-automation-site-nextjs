'use client';

import React, { useState } from 'react';
import { Eye, FileCheck2, UserCheck, ShieldCheck, Check } from './Icons';
import ScrollReveal from './ScrollReveal';

export default function TrustSection() {
  const [activeCheck, setActiveCheck] = useState<number>(0);

  const safeguards = [
    {
      title: 'Explicit Human Authorization',
      tag: '100% User Controlled',
      desc: 'AutoSubmit formats and stages drafts into form endpoints, but will never click the final external submission button without your manual confirmation.',
      metric: 'Zero Rogue Dispatches',
    },
    {
      title: 'Zero Hallucination Grounding',
      tag: 'Grounded Resume Truth',
      desc: 'Information mapped to application fields is strictly derived from your uploaded resume and stated criteria. The system never fabricates skills.',
      metric: 'Deterministic Extraction',
    },
    {
      title: 'Encrypted Serverless Intake',
      tag: 'MyFormConnect Protected',
      desc: 'All candidate uploads and field payloads are ingested through spam-protected serverless endpoints with direct binary attachment encryption.',
      metric: 'Enterprise Encryption',
    },
  ];

  return (
    <section
      id="trust"
      style={{
        paddingTop: '88px',
        paddingBottom: '88px',
        backgroundColor: 'var(--bg-alt)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        {/* Header */}
        <ScrollReveal style={{ maxWidth: '640px', marginBottom: '40px' }}>
          <span className="section-label">BUILT FOR YOUR OVERSIGHT</span>
          <h2 className="section-title">
            Automation does the heavy lifting. You retain full authority.
          </h2>
          <p className="section-description">
            Career decisions are too consequential for rogue bot submissions. AutoSubmit acts strictly as your preparer and copilot with immutable safety rails.
          </p>
        </ScrollReveal>

        {/* 3 Trust Pillars Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '32px',
          }}
        >
          {safeguards.map((item, idx) => {
            const isSelected = activeCheck === idx;
            return (
              <ScrollReveal key={item.title} delay={idx * 90}>
                <div
                  onClick={() => setActiveCheck(idx)}
                  style={{
                    backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.06)' : 'var(--surface-navy)',
                    border: `1px solid ${isSelected ? '#38BDF8' : 'var(--border)'}`,
                    borderRadius: 'var(--radius-panel)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    boxShadow: isSelected ? '0 10px 28px -6px rgba(56, 189, 248, 0.15)' : 'none',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '14px',
                      }}
                    >
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '5px',
                          backgroundColor: isSelected ? '#38BDF8' : 'rgba(255, 255, 255, 0.06)',
                          border: `1px solid ${isSelected ? '#38BDF8' : 'var(--border)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isSelected ? '#060911' : '#FFFFFF',
                        }}
                      >
                        <ShieldCheck size={15} />
                      </div>

                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          color: isSelected ? '#38BDF8' : 'var(--text-muted)',
                          backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.14)' : 'rgba(255, 255, 255, 0.04)',
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-pill)',
                          border: `1px solid ${isSelected ? 'rgba(56, 189, 248, 0.35)' : 'var(--border)'}`,
                        }}
                      >
                        {item.metric}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '8px',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: '20px',
                      paddingTop: '12px',
                      borderTop: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <span style={{ color: isSelected ? '#38BDF8' : 'var(--text-muted)' }}>
                      {item.tag}
                    </span>
                    <span style={{ color: 'var(--indicator-success)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Check size={11} strokeWidth={2.5} /> Active Rail
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
