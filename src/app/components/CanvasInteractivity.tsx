"use client";

import { useEffect, useRef } from 'react';

export default function CanvasInteractivity() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };
    let time = 0;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseX: number;
      baseY: number;
      phase: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.phase = Math.random() * Math.PI * 2;
      }

      update(w: number, h: number, t: number) {
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
        
        this.x += this.vx;
        this.y += this.vy;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const interactionRadius = 180;
        if (distance < interactionRadius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (interactionRadius - distance) / interactionRadius;
          this.x -= forceDirectionX * force * 4;
          this.y -= forceDirectionY * force * 4;
        } else {
          if (this.x !== this.baseX) this.x += (this.baseX - this.x) * 0.008;
          if (this.y !== this.baseY) this.y += (this.baseY - this.y) * 0.008;
        }
      }

      draw(ctx: CanvasRenderingContext2D, t: number) {
        // Subtle pulsing opacity
        const pulse = 0.08 + Math.sin(t * 0.002 + this.phase) * 0.04;
        ctx.fillStyle = `rgba(0, 0, 0, ${pulse})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Optimized: fewer particles, still looks great
      const area = canvas.width * canvas.height;
      const numberOfParticles = Math.min(Math.floor(area / 15000), 120);
      particles = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      time++;
      ctx.fillStyle = '#F5F3EC'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height, time);
        particles[i].draw(ctx, time);

        // Connect nearby particles — optimized distance check
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 14400) { // 120^2
            const distance = Math.sqrt(distSq);
            const pulse = 0.06 + Math.sin(time * 0.001 + i * 0.1) * 0.03;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 0, 0, ${pulse - distance / 2400})`;
            ctx.lineWidth = 0.4;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => init();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
