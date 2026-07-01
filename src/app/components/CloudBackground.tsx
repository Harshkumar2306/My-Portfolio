"use client";

import { useEffect, useState } from 'react';
import styles from './CloudBackground.module.css';

export default function CloudBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Create an array of clouds with random starting positions and speeds
  const clouds = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    top: `${Math.floor(Math.random() * 70)}%`,
    duration: `${Math.floor(Math.random() * 40) + 40}s`,
    delay: `-${Math.floor(Math.random() * 100)}s`,
    scale: Math.random() * 0.5 + 0.5,
    opacity: Math.random() * 0.4 + 0.4
  }));

  return (
    <div className={styles.sky}>
      {clouds.map((cloud) => (
        <div 
          key={cloud.id} 
          className={styles.cloudContainer}
          style={{ 
            top: cloud.top, 
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
            transform: `scale(${cloud.scale})`,
            opacity: cloud.opacity
          }}
        >
          {/* A simple blocky cloud made of 3 divs */}
          <div className={styles.cloudPart} style={{ width: '120px', height: '40px', top: '20px', left: '0px' }} />
          <div className={styles.cloudPart} style={{ width: '80px', height: '40px', top: '0px', left: '40px' }} />
          <div className={styles.cloudPart} style={{ width: '160px', height: '40px', top: '40px', left: '20px' }} />
        </div>
      ))}
    </div>
  );
}
