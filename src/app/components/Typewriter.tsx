"use client";

import { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Typewriter({ text, speed = 50, delay = 300, className, style }: TypewriterProps) {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayed('');
    let i = 0;

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          // Blink cursor for a bit then hide
          setTimeout(() => setShowCursor(false), 2000);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return (
    <span className={className} style={style}>
      {displayed}
      <span
        style={{
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 0.1s',
          fontWeight: 100,
          animation: 'blink 0.8s step-end infinite',
        }}
      >
        |
      </span>
    </span>
  );
}
