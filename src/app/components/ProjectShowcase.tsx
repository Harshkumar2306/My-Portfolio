"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ProjectShowcase.module.css';

const projects = [
  {
    id: "harshpay",
    title: "Harsh Pay",
    type: "FINTECH SYSTEM",
    image: "/harshpay.jpg", // Placeholder for actual image
    description: "Offline-first P2P payment network utilizing Zero-Trust Escrow Math."
  },
  {
    id: "smartagro",
    title: "SmartAgro",
    type: "AI PLATFORM",
    image: "/smartagro.jpg",
    description: "Precision agriculture dashboard processing live Sentinel-2 satellite data."
  },
  {
    id: "sea-animal-classifier",
    title: "Sea Animal Classifier",
    type: "AI RESEARCH",
    image: "/sea-animal.jpg",
    description: "BioHMSC neural network identifying 23 marine species."
  }
];

export default function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="work" className={styles.showcase}>
      <div className={styles.header}>
        <h2 className={styles.title}>ENGINEERING COLLECTION</h2>
      </div>

      <div className={styles.carouselContainer}>
        <button onClick={prevSlide} className={styles.navButton} aria-label="Previous">
          <ChevronLeft size={48} />
        </button>

        <div className={styles.carouselViewport}>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={styles.activeSlide}
            >
              <Link href={`/projects/${projects[currentIndex].id}`} className={styles.cardLink}>
                <div className={styles.cardImagePlaceholder}>
                  {/* Since we don't have actual images, we'll use a styled div */}
                  <div className={styles.placeholderBlock}>
                    {projects[currentIndex].title.charAt(0)}
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.cardType}>{projects[currentIndex].type}</p>
                  <h3 className={styles.cardTitle}>{projects[currentIndex].title}</h3>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <button onClick={nextSlide} className={styles.navButton} aria-label="Next">
          <ChevronRight size={48} />
        </button>
      </div>
      
      <div className={styles.actions}>
         <Link href={`/projects/${projects[currentIndex].id}`} className="mc-button">
            VIEW CASE STUDY <ChevronRight size={24} style={{ marginLeft: '8px' }} />
         </Link>
      </div>
    </section>
  );
}
