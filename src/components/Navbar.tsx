'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from './Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTryAgent = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      const el = document.getElementById('forms-lab');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#forms-lab';
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="container"
        style={{
          height: '62px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Wordmark & Abstract Workflow Icon */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          {/* Abstract Automation Symbol */}
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '4px',
              backgroundColor: 'var(--surface-navy)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <path d="M10 6.5h4" />
              <path d="M17.5 10v4" />
              <path d="M6.5 10v7a2 2 0 0 0 2 2h5.5" />
            </svg>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span
              style={{
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}
            >
              AutoSubmit
            </span>
            <span
              style={{
                fontSize: '10px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em',
              }}
            >
              AGENT
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
          <Link
            href="/#features"
            className="nav-link"
            style={{ fontSize: '13px', fontWeight: 500 }}
          >
            Product
          </Link>
          <Link
            href="/#how-it-works"
            className="nav-link"
            style={{ fontSize: '13px', fontWeight: 500 }}
          >
            How it works
          </Link>
          <Link
            href="/#workspace"
            className="nav-link"
            style={{ fontSize: '13px', fontWeight: 500 }}
          >
            Applications
          </Link>
          <Link
            href="/waitlist"
            className="nav-link"
            style={{ fontSize: '13px', fontWeight: 500 }}
          >
            Waitlist
          </Link>
          <Link
            href="/demo"
            className="nav-link"
            style={{ fontSize: '13px', fontWeight: 500 }}
          >
            Demo
          </Link>
          <Link
            href="/contact"
            className="nav-link"
            style={{ fontSize: '13px', fontWeight: 500 }}
          >
            Contact
          </Link>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={handleTryAgent}
            className="btn-primary"
            style={{
              fontSize: '13px',
              padding: '8px 15px',
            }}
          >
            Try the Agent
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="mobile-toggle"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '34px',
              height: '34px',
              borderRadius: 'var(--radius-btn)',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--surface-navy)',
              color: 'var(--text-primary)',
            }}
          >
            {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--bg-main)',
            padding: '18px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <Link
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              padding: '6px 0',
            }}
          >
            Product
          </Link>
          <Link
            href="/#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              padding: '6px 0',
            }}
          >
            How it works
          </Link>
          <Link
            href="/#workspace"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              padding: '6px 0',
            }}
          >
            Applications
          </Link>
          <Link
            href="/waitlist"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              padding: '6px 0',
            }}
          >
            Waitlist
          </Link>
          <Link
            href="/demo"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              padding: '6px 0',
            }}
          >
            Demo
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              padding: '6px 0',
            }}
          >
            Contact
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          :global(.desktop-nav) {
            display: flex !important;
          }
          :global(.mobile-toggle) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
