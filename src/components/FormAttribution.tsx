import React from 'react';

export default function FormAttribution() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '16px',
        marginTop: '16px',
        borderTop: '1px solid var(--border)',
        color: 'var(--text-muted)',
        fontSize: '12px',
        fontFamily: 'var(--font-mono)',
        letterSpacing: '0.01em',
      }}
    >
      <span>
        Bot Friendly Forms managed by{' '}
        <a
          href="https://myformconnect.io"
          target="_blank"
          rel="noopener"
          title="MyFormConnect — Bot Friendly Forms & Serverless Form Backend"
          style={{
            color: '#38BDF8',
            textDecoration: 'none',
            fontWeight: 500,
          }}
          className="mfc-attribution-link"
        >
          MyFormConnect
        </a>
      </span>

      <style jsx>{`
        .mfc-attribution-link:hover {
          text-decoration: underline !important;
        }
      `}</style>
    </div>
  );
}
