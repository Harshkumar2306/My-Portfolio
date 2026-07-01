"use client";

import { motion } from 'framer-motion';
import styles from './InventoryBar.module.css';

export default function InventoryBar() {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Flutter", icon: "📱" },
    { name: "Python", icon: "🐍" },
    { name: "Node", icon: "🟩" },
    { name: "Mongo", icon: "🍃" },
    { name: "PyTorch", icon: "🔥" },
    { name: "CSS", icon: "🎨" },
    { name: "Git", icon: "🐙" }
  ];

  return (
    <div className={styles.inventoryWrapper}>
      <div className={styles.hotbar}>
        {skills.map((skill, i) => (
          <div key={i} className={styles.slot} title={skill.name}>
            <motion.div 
              className={styles.icon}
              drag
              dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
              dragElastic={0.2}
              whileDrag={{ scale: 1.5, zIndex: 100 }}
              whileHover={{ scale: 1.1 }}
            >
              {skill.icon}
            </motion.div>
            <span className={styles.number}>{i + 1}</span>
          </div>
        ))}
      </div>
      <p className={styles.label}>Drag items from inventory!</p>
    </div>
  );
}
