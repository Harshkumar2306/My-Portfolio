"use client";

import Link from 'next/link';
import MermaidDiagram from '@/app/components/MermaidDiagram';

export default function SeaAnimalClassifierCaseStudy() {
  const architectureDiagram = `
graph LR
    A[React/Vite SPA on Vercel] <-->|JSON over HTTP| B(FastAPI Container on HF Spaces)
    B --> C{PyTorch Model}
    C -->|Images| D[EfficientNetV2-M]
    D -->|Predictions| E[94.16% Accuracy]
    B <-->|External Data| F((Wikipedia Action API))
    F -->|Autonomous Summaries| A
    
    classDef default fill:#F5F3EC,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A;
    classDef external fill:#E2DFD8,stroke:#1A1A1A,stroke-width:2px;
  `;

  return (
    <main style={{ paddingBottom: 'var(--space-16)', backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
        <Link href="/?section=1" className="label" style={{ display: 'inline-block', marginBottom: 'var(--space-8)' }}>
          ← BACK TO PROJECT ARCHIVES
        </Link>
        
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <p className="label label-muted">AI & MACHINE LEARNING</p>
          <h1 className="title">Sea Animal Classifier</h1>
          <p className="subtitle" style={{ maxWidth: '800px', marginTop: 'var(--space-2)' }}>
            A 53.5M parameter dual-head PyTorch classification model trained to identify fine-grained marine species with autonomous Wikipedia integration.
          </p>
        </div>

        <div className="award-card-container">
          <div className="award-card-offset"></div>
          <div className="award-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 className="label" style={{ marginBottom: 'var(--space-4)' }}>DECOUPLED CLOUD ARCHITECTURE</h3>
            <div style={{ width: '100%', overflowX: 'auto' }}>
              <MermaidDiagram chart={architectureDiagram} />
            </div>
          </div>
        </div>

        <div className="grid-2" style={{ marginTop: 'var(--space-12)' }}>
          <div>
            <h4 className="label" style={{ marginBottom: 'var(--space-2)' }}>01. MODEL TRAINING</h4>
            <p className="body-text">
              Trained a PyTorch classification model (EfficientNetV2-M) incorporating a custom taxonomy-aware penalty loss, achieving 94.16% top-1 accuracy and 0.99 ROC-AUC.
            </p>
          </div>
          <div>
            <h4 className="label" style={{ marginBottom: 'var(--space-2)' }}>02. ACCURACY OPTIMIZATION</h4>
            <p className="body-text">
              Improved baseline accuracy by executing Exponential Moving Average, Test-Time Augmentation, and Temperature Scaling while mitigating class imbalance.
            </p>
          </div>
          <div>
            <h4 className="label" style={{ marginBottom: 'var(--space-2)' }}>03. DEPLOYMENT & AGENTS</h4>
            <p className="body-text">
              Deployed a decoupled platform featuring a CPU-optimized FastAPI Docker container and a React SPA, integrating an autonomous AI Research Agent via the Wikipedia API.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
