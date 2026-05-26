import React from 'react';

/* ══════════════════════════════════════════════════════════
   DECORATIONS — Warisan Bugis Autentik
   Motif: Sulapa Eppa, Pallullungang, Lontara, Lipa'Sabbe
   ══════════════════════════════════════════════════════════ */

/* ── Sulapa Eppa (belah ketupat Bugis) + garis gold ── */
export function BotanicalDivider() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center',
      gap: '12px', margin: '16px 0', width: '100%', maxWidth: '360px',
    }}>
      <div style={{
        flex: 1, height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(201,146,42,0.5))',
      }} />
      <svg viewBox="0 0 44 44" width="28" height="28" fill="none">
        <polygon points="22,3 41,22 22,41 3,22"
          stroke="rgba(201,146,42,0.7)" strokeWidth="1" fill="none"/>
        <polygon points="22,10 34,22 22,34 10,22"
          stroke="rgba(201,146,42,0.4)" strokeWidth="0.8" fill="none"/>
        <circle cx="22" cy="22" r="2.5" fill="rgba(201,146,42,0.6)"/>
      </svg>
      <div style={{
        flex: 1, height: '1px',
        background: 'linear-gradient(to left, transparent, rgba(201,146,42,0.5))',
      }} />
    </div>
  );
}

/* ── Label uppercase kecil ── */
export function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily:    "'Cinzel Decorative', serif",
      fontSize:      '9px',
      letterSpacing: '0.45em',
      textTransform: 'uppercase',
      fontWeight:    400,
      color:         'rgba(201,146,42,0.85)',
      textAlign:     'center',
      marginBottom:  '14px',
    }}>
      {children}
    </p>
  );
}

export function HeadingRule() {
  return (
    <div style={{
      width: '48px', height: '1px',
      background: 'rgba(201,146,42,0.3)',
      margin: '16px auto 0',
    }} />
  );
}

/* ── Ornamen sudut Bugis geometrik ── */
export function BugisCornerAccent({ style }) {
  return (
    <svg viewBox="0 0 120 120" fill="none"
      style={{ position: 'absolute', pointerEvents: 'none', ...style }}
      aria-hidden="true">
      <path d="M8 8 L8 52" stroke="rgba(201,146,42,0.3)" strokeWidth="1" />
      <path d="M8 8 L52 8" stroke="rgba(201,146,42,0.3)" strokeWidth="1" />
      <path d="M16 16 L16 44" stroke="rgba(201,146,42,0.15)" strokeWidth="0.7" />
      <path d="M16 16 L44 16" stroke="rgba(201,146,42,0.15)" strokeWidth="0.7" />
      <polygon points="8,8 14,8 8,14" fill="rgba(201,146,42,0.25)" />
      <circle cx="8" cy="8" r="2" fill="rgba(201,146,42,0.5)" />
    </svg>
  );
}

export function CornerAccent({ style }) {
  return <BugisCornerAccent style={style} />;
}

/* ── Sulapa Eppa besar (dekorasi background) ── */
export function SulapaEppa({ style }) {
  return (
    <svg viewBox="0 0 200 200" fill="none"
      style={{ position: 'absolute', pointerEvents: 'none', ...style }}
      aria-hidden="true">
      <polygon points="100,10 190,100 100,190 10,100"
        stroke="rgba(201,146,42,0.07)" strokeWidth="0.8" fill="none" />
      <polygon points="100,30 170,100 100,170 30,100"
        stroke="rgba(201,146,42,0.05)" strokeWidth="0.6" fill="none" />
      <polygon points="100,60 140,100 100,140 60,100"
        stroke="rgba(201,146,42,0.04)" strokeWidth="0.5" fill="none" />
      <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(201,146,42,0.03)" strokeWidth="0.5" />
      <line x1="10"  y1="100" x2="190" y2="100" stroke="rgba(201,146,42,0.03)" strokeWidth="0.5" />
    </svg>
  );
}

/* ── Divider Sulapa Eppa 3x ── */
export function BugisDividerLine() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center',
      justifyContent: 'center', gap: '8px',
      margin: '20px 0', width: '100%', maxWidth: '400px',
    }}>
      <div style={{ flex:1, height:'1px', background:'linear-gradient(to right,transparent,rgba(201,146,42,0.4))' }} />
      {[0,1,2].map(i => (
        <svg key={i} viewBox="0 0 16 16" width="10" height="10" fill="none">
          <polygon points="8,1 15,8 8,15 1,8"
            stroke={`rgba(201,146,42,${0.65 - i * 0.15})`}
            strokeWidth="1" fill="none" />
        </svg>
      ))}
      <div style={{ flex:1, height:'1px', background:'linear-gradient(to left,transparent,rgba(201,146,42,0.4))' }} />
    </div>
  );
}

/* ── Pulse rings (cover) ── */
export function PulseRings() {
  return (
    <>
      {[520, 380, 240].map((size, i) => (
        <div key={size} className="cover-pulse-ring" style={{
          width: size, height: size,
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          border: `1px solid rgba(201,146,42,${0.07 - i * 0.01})`,
          animationDelay: `${i * 1.2}s`,
        }} />
      ))}
    </>
  );
}

/* ── Floating gold particles ── */
export function FloatingParticles() {
  const particles = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    left: `${5 + (i * 5.8) % 90}%`,
    delay: `${(i * 0.7) % 8}s`,
    duration: `${8 + (i % 5) * 1.5}s`,
    size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1.5,
  }));

  return (
    <div style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:0, overflow:'hidden' }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          bottom: '-5%',
          left: p.left,
          width: `${p.size}px`,
          height: `${p.size}px`,
          borderRadius: '50%',
          background: p.id % 2 === 0
            ? 'rgba(201,146,42,0.65)'
            : 'rgba(245,223,160,0.4)',
          animation: `particleDrift ${p.duration} linear ${p.delay} infinite`,
        }} />
      ))}
    </div>
  );
}

/* ── Pallullungang ornamen kecil ── */
export function PallullunganSmall({ scale = 1 }) {
  const s = scale;
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'2px', opacity:0.8 }}>
      <div style={{ width: 14*s, height: 4*s, background:'linear-gradient(90deg,#7A2828,#C9922A,#7A2828)', borderRadius:1 }} />
      <div style={{ width: 24*s, height: 5*s, background:'linear-gradient(90deg,#5C1A1A,#E8B84B,#5C1A1A)', borderRadius:1 }} />
      <div style={{ width: 34*s, height: 7*s, background:'linear-gradient(90deg,#3A0A0A,#C9922A,#3A0A0A)', borderRadius:1 }} />
      <div style={{ width: 2*s, height: 14*s, background:'linear-gradient(to bottom,rgba(201,146,42,0.8),rgba(201,146,42,0.2))' }} />
    </div>
  );
}

/* ── Lontara text dekoratif ── */
export function LontaraPattern({ style }) {
  const chars = 'ᨊᨀᨔᨒᨆᨕᨒᨕᨓᨑᨔᨆᨈᨒᨒᨕᨓᨅᨑᨀᨈᨕᨕᨅᨔᨆᨒᨒᨕᨑᨔᨆᨊᨑᨔᨆᨕᨀᨊᨆᨊᨀᨕ';
  return (
    <div className="lontara-bg-pattern" style={style}>
      {[0,1,2,3].map(row => (
        <div key={row} style={{ marginBottom: 4 }}>
          {chars.slice(row * 10, row * 10 + 18)}
        </div>
      ))}
    </div>
  );
}

/* ── Stub (agar tidak error) ── */
export function LeafDeco()      { return null; }
export function BotanicalCurve(){ return null; }