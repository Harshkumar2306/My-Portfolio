"use client";

import Link from 'next/link';
import MermaidDiagram from '@/app/components/MermaidDiagram';

export default function HarshPayCaseStudy() {
  const architectureDiagram = `
graph TD
    A[Flutter Mobile Client] -->|Radio/Optical QR| B(Offline Zero-Trust Escrow)
    B -->|Cryptographic Verification| C{24h TTL Check}
    C -->|Valid| D[Local Hive Storage Ledger]
    C -->|Expired| E[Transaction Rejected]
    
    D -.->|Network Reconnects| F(Riverpod Sync Queue)
    F -->|Clerk Auth| G[Next.js 14 API]
    G --> H[(MongoDB Atlas)]
    
    classDef default fill:#F5F3EC,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A;
    classDef database fill:#E2DFD8,stroke:#1A1A1A,stroke-width:2px;
  `;

  return (
    <main style={{ paddingBottom: 'var(--space-16)', backgroundColor: 'var(--bg-color)', height: '100dvh', overflowY: 'auto' }}>
      <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
        <Link href="/?section=1" className="label" style={{ display: 'inline-block', marginBottom: 'var(--space-8)' }}>
          ← BACK TO PROJECT ARCHIVES
        </Link>
        
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <p className="label label-muted">FINTECH ARCHITECTURE</p>
          <h1 className="title">HarshPay</h1>
          <p className="subtitle" style={{ maxWidth: '800px', marginTop: 'var(--space-2)' }}>
            An offline-first P2P digital payment ecosystem utilizing a zero-trust match-and-settle escrow engine to eliminate double-spend vulnerabilities in zero-connectivity environments.
          </p>
        </div>

        <div className="award-card-container">
          <div className="award-card-offset"></div>
          <div className="award-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 className="label" style={{ marginBottom: 'var(--space-4)' }}>SYSTEM TOPOLOGY</h3>
            <div style={{ width: '100%', overflowX: 'auto' }}>
              <MermaidDiagram chart={architectureDiagram} />
            </div>
          </div>
        </div>

        <div className="grid-2" style={{ marginTop: 'var(--space-12)' }}>
          <div>
            <h4 className="label" style={{ marginBottom: 'var(--space-2)' }}>01. OFFLINE P2P TRANSFER</h4>
            <p className="body-text">
              Utilized Google Nearby Connections to enable secure hardware-agnostic radio and optical QR code transfers without relying on cellular data or Wi-Fi.
            </p>
          </div>
          <div>
            <h4 className="label" style={{ marginBottom: 'var(--space-2)' }}>02. ZERO-TRUST ESCROW</h4>
            <p className="body-text">
              Constructed a zero-trust engine to eliminate double-spend vulnerabilities, settling transactions atomically within a 24-hour TTL upon independent cryptographic verification.
            </p>
          </div>
          <div>
            <h4 className="label" style={{ marginBottom: 'var(--space-2)' }}>03. BACKGROUND SYNC</h4>
            <p className="body-text">
              Implemented a reactive background synchronization queue utilizing Riverpod and Clerk authentication to autonomously push offline ledger payloads to Vercel serverless APIs immediately upon network reconnection.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
