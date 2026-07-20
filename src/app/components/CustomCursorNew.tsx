"use client";

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch devices
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    if (isTouchDevice) return;

    const mouse = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };
    let raf: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detect hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('award-card') ||
        target.classList.contains('submit-btn') ||
        target.classList.contains('contact-link') ||
        target.classList.contains('nav-btn')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const animate = () => {
      // Smooth trailing for ring
      ring.x += (mouse.x - ring.x) * 0.15;
      ring.y += (mouse.y - ring.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x - 4}px, ${mouse.y - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x - 20}px, ${ring.y - 20}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(raf);
    };
  }, [isTouchDevice, isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#1A1A1A',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease',
          mixBlendMode: 'difference',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '60px' : '40px',
          height: isHovering ? '60px' : '40px',
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? '#1A1A1A' : 'rgba(26,26,26,0.3)'}`,
          backgroundColor: isHovering ? 'rgba(26,26,26,0.05)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.3s ease, height 0.3s ease, opacity 0.2s ease, border-color 0.3s ease, background-color 0.3s ease',
          marginLeft: isHovering ? '-10px' : '0px',
          marginTop: isHovering ? '-10px' : '0px',
        }}
      />
    </>
  );
}
