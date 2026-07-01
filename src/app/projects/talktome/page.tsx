"use client";

import Link from 'next/link';
import MermaidDiagram from '@/app/components/MermaidDiagram';

export default function TalkToMeCaseStudy() {
  const architectureDiagram = `
graph LR
    A[Client 1] -->|WebSocket| B(Socket.io Signaling Server)
    C[Client 2] -->|WebSocket| B
    B -->|SDP Offer/Answer| A
    B -->|ICE Candidates| C
    A <-->|Direct WebRTC Data/Media| C
    
    classDef default fill:#F5F3EC,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A;
  `;

  return (
    <main style={{ paddingBottom: 'var(--space-16)', backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
        <Link href="/?section=1" className="label" style={{ display: 'inline-block', marginBottom: 'var(--space-8)' }}>
          ← BACK TO PROJECT ARCHIVES
        </Link>
        
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <p className="label label-muted">REAL-TIME COMMUNICATIONS</p>
          <h1 className="title">TalkToMe</h1>
          <p className="subtitle" style={{ maxWidth: '800px', marginTop: 'var(--space-2)' }}>
            A high-performance real-time communication platform utilizing a decentralized WebRTC Mesh architecture for true peer-to-peer audio and video transmission.
          </p>
        </div>

        <div className="award-card-container">
          <div className="award-card-offset"></div>
          <div className="award-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 className="label" style={{ marginBottom: 'var(--space-4)' }}>WEBRTC MESH SIGNALING</h3>
            <div style={{ width: '100%', overflowX: 'auto' }}>
              <MermaidDiagram chart={architectureDiagram} />
            </div>
          </div>
        </div>

        <div className="grid-2" style={{ marginTop: 'var(--space-12)' }}>
          <div>
            <h4 className="label" style={{ marginBottom: 'var(--space-2)' }}>01. SIGNALING SERVER</h4>
            <p className="body-text">
              Engineered a highly optimized Socket.io signaling layer in Node.js/Express to handle rapid SDP offer/answer exchanges and ICE candidate routing.
            </p>
          </div>
          <div>
            <h4 className="label" style={{ marginBottom: 'var(--space-2)' }}>02. WEBRTC MESH</h4>
            <p className="body-text">
              Implemented a decentralized WebRTC Mesh topology, enabling true peer-to-peer data and media streams, significantly reducing server bandwidth costs while supporting up to 500 concurrent connections.
            </p>
          </div>
          <div>
            <h4 className="label" style={{ marginBottom: 'var(--space-2)' }}>03. FRONTEND INTEGRATION</h4>
            <p className="body-text">
              Built a responsive React interface utilizing state-driven connection hooks to seamlessly manage dynamic peer connections and rendering logic.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
