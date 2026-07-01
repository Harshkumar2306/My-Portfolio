"use client";

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  themeVariables: {
    fontFamily: 'Inter',
    primaryColor: '#F5F3EC',
    primaryTextColor: '#1A1A1A',
    primaryBorderColor: '#1A1A1A',
    lineColor: '#1A1A1A',
    secondaryColor: '#E2DFD8',
    tertiaryColor: '#FFFFFF'
  }
});

export default function MermaidDiagram({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      mermaid.render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, chart)
        .then((result) => {
          if (containerRef.current) {
            containerRef.current.innerHTML = result.svg;
          }
        })
        .catch((error) => console.error(error));
    }
  }, [chart]);

  return <div ref={containerRef} className="mermaid-container" style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }} />;
}
