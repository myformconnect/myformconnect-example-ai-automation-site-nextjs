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
        <BookingWidget />
      ) : (
        <DemoRequestForm actionUrl={DEMO_REQUEST_FORM_ACTION_URL} />
      )}
    </div>
  );
}
