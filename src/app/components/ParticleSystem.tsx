"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function ParticleSystem() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Don't spawn if clicking empty sky, only on UI elements
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.mc-button') || target.closest('.mc-bouncy') || target.closest('.mc-panel')) {
        
        // Extract color from target or use default dirt/stone colors
        const colors = ['#8B5A2B', '#55FF55', '#2b2b2b', '#C6C6C6'];
        
        // Spawn 8-12 particles
        const numParticles = Math.floor(Math.random() * 5) + 8;
        const newParticles: Particle[] = [];
        
        for (let i = 0; i < numParticles; i++) {
          newParticles.push({
            id: Date.now() + i,
            x: e.clientX,
            y: e.clientY,
            color: colors[Math.floor(Math.random() * colors.length)]
          });
        }
        
        setParticles(prev => [...prev, ...newParticles]);
        
        // Clean up particles after animation (1s)
        setTimeout(() => {
          setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
        }, 1000);
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 10000 }}>
      <AnimatePresence>
        {particles.map(p => (
          <motion.div
            key={p.id}
            initial={{ 
              x: p.x, 
              y: p.y, 
              opacity: 1, 
              scale: 1 
            }}
            animate={{ 
              x: p.x + (Math.random() * 200 - 100), 
              y: p.y + (Math.random() * 200 - 100) + 100, // Gravity effect
              opacity: 0,
              scale: 0,
              rotate: Math.random() * 360
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: 'absolute',
              width: '12px',
              height: '12px',
              backgroundColor: p.color,
              border: '2px solid rgba(0,0,0,0.5)',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
