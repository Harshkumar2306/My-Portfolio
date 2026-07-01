"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <motion.nav 
        className={styles.navbar}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link href="/" className={styles.logo}>
          Harsh<span style={{ color: 'var(--mc-text-green)' }}>.dev</span>
        </Link>
        
        <div className={styles.links}>
          <Link href="#work" className={styles.link}>Work</Link>
          <Link href="#about" className={styles.link}>About</Link>
          <Link href="#contact" className={styles.cta}>
            Let's Talk
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}
