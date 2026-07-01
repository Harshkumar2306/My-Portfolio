"use client";

import Link from 'next/link';
import MermaidDiagram from '@/app/components/MermaidDiagram';

export default function SmartAgroCaseStudy() {
  const architectureDiagram = `
graph TD
    A[React Client] -->|Uploads GeoTIFF| B(FastAPI Server)
    B -->|Rasterio Extraction| C{Unsupervised K-Means Pipeline}
    C --> D[NDVI Processing]
    C --> E[SAVI Processing]
    C --> F[NDWI Processing]
    
    D --> G(Multi-Spectral Index Generation)
    E --> G
    F --> G
    
    G -->|Image Output| H[Precision Agriculture Mapping]
    H -->|Analysis Rendered| A
    
    classDef default fill:#F5F3EC,stroke:#1A1A1A,stroke-width:2px,color:#1A1A1A;
  `;

  return (
    <main style={{ paddingBottom: 'var(--space-16)', backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
        <Link href="/?section=1" className="label" style={{ display: 'inline-block', marginBottom: 'var(--space-8)' }}>
          ← BACK TO PROJECT ARCHIVES
        </Link>
        
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <p className="label label-muted">GEOSPATIAL AI</p>
          <h1 className="title">SmartAgro</h1>
          <p className="subtitle" style={{ maxWidth: '800px', marginTop: 'var(--space-2)' }}>
            A precision agriculture intelligence suite utilizing Unsupervised K-Means clustering on multi-spectral satellite imagery indices.
          </p>
        </div>

        <div className="award-card-container">
          <div className="award-card-offset"></div>
          <div className="award-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 className="label" style={{ marginBottom: 'var(--space-4)' }}>IMAGE PROCESSING PIPELINE</h3>
            <div style={{ width: '100%', overflowX: 'auto' }}>
              <MermaidDiagram chart={architectureDiagram} />
            </div>
          </div>
        </div>

        <div className="grid-2" style={{ marginTop: 'var(--space-12)' }}>
          <div>
            <h4 className="label" style={{ marginBottom: 'var(--space-2)' }}>01. SATELLITE IMAGERY</h4>
            <p className="body-text">
              Accelerated heavy GeoTIFF rendering speed by 60% through aggressive multi-threaded raster extraction pipelines utilizing Python.
            </p>
          </div>
          <div>
            <h4 className="label" style={{ marginBottom: 'var(--space-2)' }}>02. K-MEANS CLUSTERING</h4>
            <p className="body-text">
              Engineered Unsupervised K-Means clustering to autonomously generate precision multi-spectral indices (NDVI, SAVI, NDWI) for deep agricultural analysis.
            </p>
          </div>
          <div>
            <h4 className="label" style={{ marginBottom: 'var(--space-2)' }}>03. FRONTEND VISUALIZATION</h4>
            <p className="body-text">
              Built a high-performance React front-end communicating with a FastAPI backend to seamlessly display complex geospatial data maps to the end user.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
