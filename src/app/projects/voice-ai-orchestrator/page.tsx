"use client";

import Link from 'next/link';
import MermaidDiagram from '@/app/components/MermaidDiagram';

export default function VoiceAIOrchestratorCaseStudy() {
  const architectureDiagram = `
graph TD
    A[React/Vite Frontend] -->|API Request| B(FastAPI Backend)
    B -->|Triggers Background Task| C{Execution Pipeline}
    C -->|Fetch Dynamic Prompt| D[(MongoDB)]
    C -->|HTTP Request| E[Vapi.ai Telephony]
    E -->|Dials User| F((Customer))
    E -->|End-of-Call Webhook| B
    B -->|Spawns Graph| G[LangGraph AI Engine]
    G -->|Node 1: Sentiment Analysis| H[LLM Llama-3.1]
    G -->|Node 2: Scoring & Reasoning| H
    G -->|Node 3: Confidence Override| H
    G -->|Final Evaluation| D
    B -->|WebSocket Push| A
    
    classDef default fill:#F5F3EC,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A;
  `;

  return (
    <main style={{ paddingBottom: 'var(--space-16)', backgroundColor: 'var(--bg-color)', height: '100dvh', overflowY: 'auto' }}>
      <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
        <Link href="/?section=1" className="label" style={{ display: 'inline-block', marginBottom: 'var(--space-8)' }}>
          ← BACK TO PROJECT ARCHIVES
        </Link>
        
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <p className="label label-muted">FASTAPI • LANGGRAPH • VAPI.AI • MONGODB</p>
          <h1 className="title-massive" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: 'var(--space-4)' }}>Voice AI Orchestrator</h1>
          <p className="body-text" style={{ fontSize: '1.2rem', maxWidth: '800px' }}>
            A modern, highly-scalable Multi-Agent voice AI platform. It utilizes FastAPI for asynchronous event processing, Vapi for seamless WebRTC telephony, and a complex LangGraph pipeline to execute structured evaluations on raw transcripts without blocking the UI.
          </p>
        </div>

        <div className="brutalist-border" style={{ marginBottom: 'var(--space-12)' }}>
          <div className="label" style={{ borderBottom: '2px solid var(--text-main)', paddingBottom: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
            END-TO-END PIPELINE ARCHITECTURE
          </div>
          <div style={{ width: '100%', overflowX: 'auto', backgroundColor: '#F5F3EC', padding: 'var(--space-4)' }}>
            <MermaidDiagram chart={architectureDiagram} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
          
          <div>
            <h2 className="title-section" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-3)' }}>01. ASYNCHRONOUS BACKEND</h2>
            <p className="body-text" style={{ marginBottom: 'var(--space-2)' }}>
              <strong>FastAPI & Background Tasks</strong><br />
              The system is entirely event-driven. Campaign triggers return immediate HTTP responses while spawning Python <code>BackgroundTasks</code>. This allows a single worker to manage thousands of simultaneous Vapi.ai API calls via `async/await` without blocking threads.
            </p>
          </div>

          <div>
            <h2 className="title-section" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-3)' }}>02. TELEPHONY & WEBHOOKS</h2>
            <p className="body-text" style={{ marginBottom: 'var(--space-2)' }}>
              <strong>Dynamic Vapi Ingestion</strong><br />
              Prompts are dynamically built by querying tenant configs from MongoDB and sent to Vapi.ai. Upon call completion, Vapi triggers an asynchronous webhook passing the raw transcript and summary back to FastAPI for evaluation.
            </p>
          </div>

          <div>
            <h2 className="title-section" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-3)' }}>03. LANGGRAPH AI PIPELINE</h2>
            <p className="body-text" style={{ marginBottom: 'var(--space-2)' }}>
              <strong>Multi-Node Directed Acyclic Graph</strong><br />
              Instead of a single prompt, transcripts pass through a DAG. Node 1 extracts emotional context. Node 2 enforces strict JSON `with_structured_output` to mathematically score the lead. A Conditional Node intelligently overrides outputs if the `confidence_score` falls below 60%.
            </p>
          </div>

          <div>
            <h2 className="title-section" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-3)' }}>04. FRONTEND REACTIVITY</h2>
            <p className="body-text" style={{ marginBottom: 'var(--space-2)' }}>
              <strong>WebSocket Sync & Flexbox Clamping</strong><br />
              Finalized LangGraph data is saved to MongoDB and broadcasted via WebSockets. The React UI instantly patches state without refreshing. The layout utilizes strict <code>h-screen overflow-hidden</code> with internal flex-scrolling to simulate a compiled desktop application.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
