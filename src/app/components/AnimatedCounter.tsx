"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

export default function AnimatedCounter({ value, suffix = '', prefix = '', decimals = 0, duration = 2 }: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    if (decimals > 0) return v.toFixed(decimals);
    return Math.round(v).toString();
  });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: 'easeOut',
    });

    const unsubscribe = rounded.on('change', (v) => {
      setDisplayValue(v);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, count, rounded, duration]);

  return (
    <span style={{ fontVariantNumeric: 'tabular-nums' }}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
