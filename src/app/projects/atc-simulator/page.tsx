"use client";

import Link from 'next/link';
import MermaidDiagram from '@/app/components/MermaidDiagram';

export default function ATCSimulatorCaseStudy() {
  const architectureDiagram = `
graph TD
    A[Node.js / GameServer.js] -->|Calculates Physics at 20Hz| B(Socket.io Broadcaster)
    B -->|Emits JSON State Payload| C[React Frontend]
    C -->|Bypasses React State| D[useRef Data Sink]
    D -->|2 FPS Throttle| E[React UI Components]
    D -->|60 FPS requestAnimationFrame| F[HTML5 Canvas Radar]
    A -->|5s Snapshot Interval| G[(MongoDB Storage)]
    G -->|Node.js Streams| H[PDF/CSV Export Engine]
    
    classDef default fill:#F5F3EC,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A;
  `;

  return (
    <main style={{ paddingBottom: 'var(--space-16)', backgroundColor: 'var(--bg-color)', height: '100dvh', overflowY: 'auto' }}>
      <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
        <Link href="/?section=1" className="label" style={{ display: 'inline-block', marginBottom: 'var(--space-8)' }}>
          ← BACK TO PROJECT ARCHIVES
        </Link>
        
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <p className="label label-muted">MERN STACK • WEBSOCKETS • CANVAS API</p>
          <h1 className="title-massive" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: 'var(--space-4)' }}>ATC Simulator</h1>
          <p className="body-text" style={{ fontSize: '1.2rem', maxWidth: '800px' }}>
            A high-performance, real-time web application built using the MERN stack and WebSockets. It successfully decouples a 20Hz backend physics engine from a 60Hz frontend rendering loop, solving complex browser-based rendering bottlenecks to deliver a buttery-smooth, mathematically accurate simulation of a live airspace.
          </p>
        </div>

        <div className="brutalist-border" style={{ marginBottom: 'var(--space-12)' }}>
          <div className="label" style={{ borderBottom: '2px solid var(--text-main)', paddingBottom: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
            SYSTEM ARCHITECTURE (AUTHORITATIVE SERVER)
          </div>
          <div style={{ width: '100%', overflowX: 'auto', backgroundColor: '#F5F3EC', padding: 'var(--space-4)' }}>
            <MermaidDiagram chart={architectureDiagram} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
          
          <div>
            <h2 className="title-section" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-3)' }}>01. PHYSICS ENGINE</h2>
            <p className="body-text" style={{ marginBottom: 'var(--space-2)' }}>
              <strong>The 20Hz Loop & Delta-Time (dt)</strong><br />
              The Node.js server runs a headless loop ticking 20 times per second. By calculating Delta-Time `(currentTime - lastTime) / 1000`, aircraft move exactly at their assigned vectors regardless of server CPU lag.
            </p>
            <p className="body-text">
              <strong>Vector Translation</strong><br />
              Movement is calculated via Trigonometry. Heading is converted to radians, and Cartesian positions are translated via <code>Math.cos(rad) * speed * dt</code> and <code>Math.sin(rad)</code>.
            </p>
          </div>

          <div>
            <h2 className="title-section" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-3)' }}>02. TCAS COLLISION SYSTEM</h2>
            <p className="body-text" style={{ marginBottom: 'var(--space-2)' }}>
              <strong>3D Geometry Sweep</strong><br />
              The `ConflictDetector.js` module runs on every server tick. It first checks vertical separation (Z-axis). If planes share the same altitude strata, it calculates absolute 2D distance using the Pythagorean Theorem.
            </p>
            <p className="body-text">
              <strong>Resolution Advisories</strong><br />
              Alert thresholds immediately trigger UI warnings. A Traffic Advisory (TA) is issued at &lt; 12 units, and a critical Resolution Advisory (RA) at &lt; 5 units requiring Controller intervention.
            </p>
          </div>

          <div>
            <h2 className="title-section" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-3)' }}>03. FRONTEND PIPELINE</h2>
            <p className="body-text" style={{ marginBottom: 'var(--space-2)' }}>
              <strong>React Throttling & DOM Thrashing</strong><br />
              To prevent browser freezing from 20Hz Socket.io payloads, data bypasses `useState` entirely and dumps into a `useRef`. A separate timer updates React at 2 FPS, keeping text UI CPU usage below 5%.
            </p>
            <p className="body-text">
              <strong>Canvas 60 FPS Client-Side Extrapolation</strong><br />
              The `RadarView.jsx` hooks into `requestAnimationFrame`. It mathematically guesses where the plane is moving <i>between</i> the 20Hz server updates, achieving buttery-smooth 60 FPS graphics.
            </p>
          </div>

          <div>
            <h2 className="title-section" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-3)' }}>04. ZERO-DISK EXPORT PIPELINE</h2>
            <p className="body-text" style={{ marginBottom: 'var(--space-2)' }}>
              <strong>MongoDB Flight Recorder</strong><br />
              Every 5 seconds, a snapshot of every plane's X/Y coordinates, altitude, heading, and fuel is written to a MongoDB NoSQL cluster, acting as a historical "black box" audit trail.
            </p>
            <p className="body-text">
              <strong>Node.js Streams</strong><br />
              When exporting PDF reports via `PDFKit`, the file is <i>never</i> saved to the server's hard drive. Instead, the raw binary data is piped (`doc.pipe(res)`) directly from server RAM into the user's browser, preventing out-of-storage crashes.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
