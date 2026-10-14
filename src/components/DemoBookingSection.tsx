'use client';

import React, { useState } from 'react';
import BookingWidget from './BookingWidget';
import DemoRequestForm, { DEMO_REQUEST_FORM_ACTION_URL } from './forms/DemoRequestForm';
import { Calendar, FileText } from './Icons';

export default function DemoBookingSection() {
  const [activeTab, setActiveTab] = useState<'widget' | 'form'>('widget');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          padding: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-panel)',
          gap: '4px',
        }}
      >
        <button
          type="button"
          onClick={() => setActiveTab('widget')}
          style={{
            flex: 1,
            padding: '9px 12px',
            borderRadius: 'var(--radius-input)',
            backgroundColor: activeTab === 'widget' ? '#38BDF8' : 'transparent',
            border: 'none',
            color: activeTab === 'widget' ? '#060911' : 'var(--text-secondary)',
            fontSize: '12px',
            fontFamily: 'var(--font-sans)',
            fontWeight: activeTab === 'widget' ? 600 : 400,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '7px',
            transition: 'all 150ms ease',
          }}
        >
          <Calendar size={14} />
          <span>Interactive Calendar Booking</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('form')}
          style={{
            flex: 1,
            padding: '9px 12px',
            borderRadius: 'var(--radius-input)',
            backgroundColor: activeTab === 'form' ? '#38BDF8' : 'transparent',
            border: 'none',
            color: activeTab === 'form' ? '#060911' : 'var(--text-secondary)',
            fontSize: '12px',
            fontFamily: 'var(--font-sans)',
            fontWeight: activeTab === 'form' ? 600 : 400,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '7px',
            transition: 'all 150ms ease',
          }}
        >
          <FileText size={14} />
          <span>Direct Inquiry Form</span>
        </button>
      </div>

      {/* Tab content */}
      {activeTab === 'widget' ? (
        <div>
          <BookingWidget />
          <div
            style={{
              marginTop: '12px',
              padding: '10px 14px',
              borderRadius: 'var(--radius-input)',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '8px',
              fontSize: '12px',
              color: 'var(--text-secondary)',
            }}
          >
            <span>Can&apos;t find an open time slot?</span>
            <button
              type="button"
              onClick={() => setActiveTab('form')}
              style={{
                background: 'none',
                border: 'none',
                color: '#38BDF8',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                padding: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              Switch to Direct Form →
            </button>
          </div>
        </div>
      ) : (
        <DemoRequestForm actionUrl={DEMO_REQUEST_FORM_ACTION_URL} />
      )}
    </div>
  );
}
