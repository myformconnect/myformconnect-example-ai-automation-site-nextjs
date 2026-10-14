'use client';

import React from 'react';
import { FormConfig } from '@/lib/form-config';
import { Sparkles, UserCheck, Mail, MessageSquare, Presentation } from './Icons';

interface FormSelectorProps {
  forms: FormConfig[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function FormSelector({
  forms,
  activeId,
  onSelect,
}: FormSelectorProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'career-profile':
        return <Sparkles size={13} />;
      case 'waitlist':
        return <UserCheck size={13} />;
      case 'newsletter':
        return <Mail size={13} />;
      case 'contact':
        return <MessageSquare size={13} />;
      case 'demo':
        return <Presentation size={13} />;
      default:
        return null;
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Interactive Demo form types"
      style={{
        display: 'flex',
        gap: '4px',
        padding: '4px',
        backgroundColor: 'var(--surface-navy)',
        borderRadius: 'var(--radius-panel)',
        border: '1px solid var(--border)',
        overflowX: 'auto',
        scrollbarWidth: 'none',
      }}
    >
      {forms.map((f) => {
        const isActive = f.id === activeId;
        const isPrimary = f.id === 'career-profile';

        return (
          <button
            key={f.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${f.id}`}
            id={`tab-${f.id}`}
            onClick={() => onSelect(f.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              padding: '8px 14px',
              borderRadius: 'var(--radius-btn)',
              fontSize: '12px',
              fontWeight: isActive ? 500 : 400,
              whiteSpace: 'nowrap',
              color: isActive
                ? 'var(--text-primary)'
                : 'var(--text-secondary)',
              backgroundColor: isActive
                ? 'var(--surface-elevated)'
                : 'transparent',
              border: isActive
                ? '1px solid var(--border)'
                : '1px solid transparent',
              cursor: 'pointer',
              transition: 'background-color 150ms ease, color 150ms ease',
            }}
          >
            <span
              style={{
                color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {getIcon(f.id)}
            </span>
            <span>
              {f.id === 'career-profile'
                ? 'Career Profile (Primary)'
                : f.title.split(' ')[0] + ' ' + (f.title.split(' ')[1] || '')}
            </span>
            {isPrimary && (
              <span
                style={{
                  fontSize: '9px',
                  fontFamily: 'var(--font-mono)',
                  padding: '1px 5px',
                  borderRadius: '3px',
                  backgroundColor: 'rgba(255, 255, 255, 0.10)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                Workflow
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
