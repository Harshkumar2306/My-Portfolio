"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>
          ENGINEERING ARCHITECTURE
        </h1>
        
        <p className={styles.subtitle}>
          Whether you create, explore, or survive (or dig straight down), there's always a tale to tell from your coding sessions. Put that story on display with these deep-dive engineering case studies!
        </p>
        
        <div className={styles.actions}>
          <Link href="#work" className="mc-button">
            EXPLORE WORK <ChevronRight size={24} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
