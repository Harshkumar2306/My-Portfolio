export default function PixelDivider() {
  return (
    <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, backgroundColor: 'var(--mc-bg)' }}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        style={{ width: '100%', height: '60px', display: 'block' }}
      >
        <path 
          d="M0,0 L0,60 L60,60 L60,40 L120,40 L120,80 L180,80 L180,60 L240,60 L240,100 L300,100 L300,40 L360,40 L360,60 L420,60 L420,80 L480,80 L480,20 L540,20 L540,60 L600,60 L600,40 L660,40 L660,100 L720,100 L720,60 L780,60 L780,80 L840,80 L840,40 L900,40 L900,60 L960,60 L960,20 L1020,20 L1020,60 L1080,60 L1080,40 L1140,40 L1140,80 L1200,80 L1200,0 Z" 
          fill="var(--mc-panel-bg)"
        />
      </svg>
    </div>
  );
}
