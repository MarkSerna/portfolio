import { ImageResponse } from 'next/og';

export const alt = 'Marco Eduar Serna López | Full Stack & RPA Developer';
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
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#07090e',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle grid pattern background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle at 25px 25px, rgba(6, 182, 212, 0.15) 2%, transparent 0%)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Brand tag top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #06b6d4, #2563eb)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#07090e',
              fontSize: '24px',
              fontWeight: 800,
            }}
          >
            MS
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{ color: '#06b6d4', fontSize: '18px', fontWeight: 700, letterSpacing: '2px' }}>
              PORTFOLIO // 2026
            </span>
            <span style={{ color: '#94a3b8', fontSize: '14px' }}>
              Manizales, Colombia
            </span>
          </div>
        </div>

        {/* Center Name & Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 900,
              color: '#ffffff',
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '-1px',
            }}
          >
            Marco Eduar Serna López
          </h1>
          <p
            style={{
              fontSize: '28px',
              color: '#38bdf8',
              margin: 0,
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            Full Stack Developer • RPA Automation • Real-Time Systems
          </p>
          <p
            style={{
              fontSize: '20px',
              color: '#cbd5e1',
              margin: 0,
              maxWidth: '900px',
            }}
          >
            TypeScript, Node.js, Python, React, WebSockets, PostGIS, MariaDB, Docker & .NET 8
          </p>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #1e293b',
            paddingTop: '24px',
          }}
        >
          <div style={{ display: 'flex', gap: '24px' }}>
            <span style={{ color: '#10b981', fontSize: '16px', fontWeight: 600 }}>
              ● Disponible para proyectos
            </span>
            <span style={{ color: '#94a3b8', fontSize: '16px' }}>
              github.com/MarkSerna
            </span>
          </div>
          <span style={{ color: '#38bdf8', fontSize: '16px', fontWeight: 700 }}>
            portfolio-markserna.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
