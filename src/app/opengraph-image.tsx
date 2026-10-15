import { ImageResponse } from 'next/og';

export const alt = 'AutoSubmit — AI-Powered Career Application Automation';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#060911',
          padding: '72px',
          fontFamily: 'sans-serif',
          position: 'relative',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Subtle grid pattern & glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(6, 9, 17, 0) 70%)',
          }}
        />

        {/* Top Header Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              backgroundColor: '#0c1322',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38BDF8',
              fontSize: '18px',
              fontWeight: 700,
            }}
          >
            AS
          </div>
          <span
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#F8FAFC',
              letterSpacing: '-0.02em',
            }}
          >
            AutoSubmit
          </span>
          <span
            style={{
              fontSize: '12px',
              color: '#4ADE80',
              backgroundColor: 'rgba(74, 222, 128, 0.12)',
              border: '1px solid rgba(74, 222, 128, 0.3)',
              padding: '4px 12px',
              borderRadius: '999px',
              letterSpacing: '0.05em',
              fontWeight: 600,
            }}
          >
            CAREER COPILOT
          </span>
        </div>

        {/* Hero Title & Description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '960px' }}>
          <div
            style={{
              fontSize: '54px',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
            }}
          >
            AI-Powered Career Application Automation
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#94A3B8',
              lineHeight: 1.45,
            }}
          >
            Ground candidate qualifications, score target role overlap, and eliminate repetitive form filling with 100% human oversight.
          </div>
        </div>

        {/* Footer Meta */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '28px',
          }}
        >
          <div style={{ display: 'flex', gap: '28px' }}>
            <span style={{ fontSize: '15px', color: '#64748B' }}>
              • Resume PDF Ingestion
            </span>
            <span style={{ fontSize: '15px', color: '#64748B' }}>
              • Semantic Fit Scoring
            </span>
            <span style={{ fontSize: '15px', color: '#64748B' }}>
              • Zero Rogue Dispatch
            </span>
          </div>

          <span
            style={{
              fontSize: '16px',
              fontFamily: 'monospace',
              color: '#38BDF8',
              letterSpacing: '0.02em',
            }}
          >
            autosubmitagent.vercel.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
