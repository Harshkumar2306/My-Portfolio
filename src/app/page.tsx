"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaInstagram, FaXTwitter, FaLocationDot, FaGlobe, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import IndiaMapComponent from '../components/IndiaMapComponent';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sec = params.get('section');
    if (sec) {
      setCurrentSection(parseInt(sec, 10));
    }
  }, []);
  const totalSections = 5;

  const nextSection = () => setCurrentSection((prev) => (prev + 1) % totalSections);
  const prevSection = () => setCurrentSection((prev) => (prev - 1 + totalSections) % totalSections);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrentSection((prev) => (prev + 1) % totalSections);
      if (e.key === 'ArrowLeft') setCurrentSection((prev) => (prev - 1 + totalSections) % totalSections);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const projects = [
    { title: "HarshPay", tech: ["Flutter", "Next.js", "WebRTC"], desc: "Offline-first P2P payment ecosystem with zero-trust match-and-settle escrow engine.", id: "harshpay", status: "Production", github: "https://github.com/Harshkumar2306/Harsh-Pay-App", live: "https://harsh-bank.vercel.app/" },
    { title: "TalkToMe", tech: ["MERN", "Socket.io", "WebRTC"], desc: "Real-time communication platform supporting 500+ connections via WebRTC Mesh.", id: "talktome", status: "Production", github: "https://github.com/Harshkumar2306/talk-to-me", live: "https://talk-to-me-pied.vercel.app/" },
    { title: "Sea Animal Classifier", tech: ["PyTorch", "FastAPI", "React"], desc: "PyTorch classification model achieving 94.16% accuracy across 23 marine species.", id: "sea-animal-classifier", status: "Research Architecture", github: "https://github.com/Harshkumar2306/Sea-Animal-Classifier", live: "https://sea-animal-classifier.vercel.app/" },
    { title: "SmartAgro", tech: ["React", "FastAPI", "Scikit-Learn"], desc: "Precision agriculture via Unsupervised K-Means clustering on multi-spectral indices.", id: "smartagro", status: "Production", github: "https://github.com/Harshkumar2306/SmartAgro", live: "https://smart-agro-eight.vercel.app/" }
  ];

  const slideVariants: any = {
    initial: { opacity: 0, x: 100 },
    enter: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <main style={{ overflow: 'hidden', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Floating Edge Navigation */}
      <motion.button 
        className="nav-btn nav-btn-prev"
        whileHover={{ scale: 1.1, backgroundColor: '#1A1A1A', color: '#F5F3EC' }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSection} 
        style={{ transition: 'all 0.2s ease' }}
      >
        <FaChevronLeft size={20} />
      </motion.button>
      
      <motion.button 
        className="nav-btn nav-btn-next"
        whileHover={{ scale: 1.1, backgroundColor: '#1A1A1A', color: '#F5F3EC' }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSection} 
        style={{ transition: 'all 0.2s ease' }}
      >
        <FaChevronRight size={20} />
      </motion.button>

      {/* Navigation Bar */}
      <nav className="navbar">
          {/* Logo */}
          <div className="logo" style={{ cursor: 'pointer', zIndex: 10, position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setCurrentSection(0)}>
            <img src="/me.JPEG" alt="Harsh Kumar" style={{ width: '32px', height: '32px', borderRadius: '6px', objectFit: 'cover', border: '1px solid rgba(0,0,0,0.1)' }} />
            <div className="logo-text">
              HARSH<span style={{ fontWeight: 400 }}>KUMAR</span>
            </div>
          </div>
          
          <div className="nav-actions">
            <span className="label" style={{ display: 'none' }}>PORTFOLIO</span>
            <button onClick={() => setCurrentSection(4)} className="submit-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontFamily: 'inherit' }}>
              CONTACT <FaArrowRight size={14} />
            </button>
          </div>
      </nav>

      {/* Main Slider Content */}
      <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          
          {/* SECTION 0: HERO & ABOUT */}
          {currentSection === 0 && (
            <motion.div key="sec0" variants={slideVariants} initial="initial" animate="enter" exit="exit" className="slide-content slide-content-hero">
              <section className="section" style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '0px' }}>
                <div className="container">
                  <h1 className="title" style={{ marginBottom: 0 }}>Engineering Folio</h1>
                  <p className="subtitle" style={{ marginBottom: 'var(--space-4)' }}>Harsh Kumar | India</p>
                  
                  <div className="grid-2" style={{ borderTop: '1px solid rgba(0,0,0,0.1)', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: 'var(--space-4) 0', textAlign: 'left', gap: 'var(--space-6)' }}>
                    <div>
                      <span className="label label-muted">01 — ORIGIN</span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: 'var(--space-1)', marginBottom: 'var(--space-2)' }}>Why I engineer?</h3>
                      <div className="body-text" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                        <p>I was that kid who didn't just use software—I broke it, reverse-engineered it, and rebuilt it to run offline.</p>
                        <p>I quickly realized the world's hardest problems aren't solved by standard frameworks. They’re solved by architecting resilient systems and training models that see what we can't. I exist to be one of those people.</p>
                        <p>I build decentralized networks and train high-dimensional AI. I stay up until 3AM optimizing WebRTC meshes because nobody else will. That's the short version.</p>
                      </div>
                    </div>
                    <div>
                      <span className="label label-muted">02 — THE WORK</span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: 'var(--space-1)', marginBottom: 'var(--space-2)' }}>What do I actually build?</h3>
                      <div className="body-text" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                        <p>Honestly? The hard stuff. And that's exactly how I like it.</p>
                        <p>Whether it's training 50-million parameter PyTorch models to classify marine life, engineering zero-trust offline payment escrows, or deploying decentralized real-time meshes capable of supporting hundreds of concurrent nodes.</p>
                        <p>If it is complex, highly-concurrent, and requires pushing systems and servers to their absolute architectural limits—that is my domain.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* SECTION 1: PROJECTS (AWARDS GRID) */}
          {currentSection === 1 && (
            <motion.div key="sec1" variants={slideVariants} initial="initial" animate="enter" exit="exit" className="slide-content">
              <section className="section" style={{ paddingTop: '20px' }}>
                <div className="container project-scroll-area" style={{ paddingBottom: 'var(--space-8)' }}>
                  <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
                    <h2 className="title" style={{ marginBottom: 0 }}>PROJECT ARCHIVES</h2>
                    <p className="label label-muted">DEEP DIVE ENGINEERING CASE STUDIES</p>
                  </div>

                  <div className="grid-2">
                    {projects.map((proj) => (
                      <div className="award-card-container" key={proj.id}>
                        <div className="award-card-offset"></div>
                        <motion.div className="award-card" whileHover={{ x: 4, y: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                           <div className="project-card-header">
                             <div>
                               <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>{proj.title}</h3>
                               <p className="label label-muted">{proj.status}</p>
                             </div>
                             <div className="project-card-actions">
                               <motion.a whileHover={{ y: -2, backgroundColor: '#1A1A1A', color: '#F5F3EC' }} href={proj.github} target="_blank" className="label" style={{ border: '1px solid rgba(0,0,0,0.1)', padding: '4px 8px', display: 'flex', alignItems: 'center', gap: '4px', transition: 'all 0.2s', textDecoration: 'none', color: 'inherit' }}><FaGithub size={12}/> GITHUB</motion.a>
                               <motion.a whileHover={{ y: -2, backgroundColor: '#1A1A1A', color: '#F5F3EC' }} href={proj.live} target="_blank" className="label" style={{ border: '1px solid rgba(0,0,0,0.1)', padding: '4px 8px', display: 'flex', alignItems: 'center', gap: '4px', transition: 'all 0.2s', textDecoration: 'none', color: 'inherit' }}><FaGlobe size={12}/> LIVE</motion.a>
                             </div>
                           </div>
                           <p className="body-text" style={{ marginBottom: 'var(--space-3)', fontSize: '0.85rem' }}>{proj.desc}</p>
                           
                           <div className="project-card-footer">
                              <div className="project-card-tech">
                                {proj.tech.map((t, idx) => (
                                  <motion.span key={idx} whileHover={{ scale: 1.05, backgroundColor: '#1A1A1A', color: '#F5F3EC' }} className="label label-muted" style={{ border: '1px solid rgba(0,0,0,0.1)', padding: '4px 10px', cursor: 'pointer', transition: 'background-color 0.2s, color 0.2s' }}>{t}</motion.span>
                                ))}
                              </div>
                              <motion.div whileHover={{ x: 6 }}>
                                <Link href={`/projects/${proj.id}?from=1`} className="submit-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
                                  DEEP DIVE <FaArrowRight size={14} />
                                </Link>
                              </motion.div>
                           </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* SECTION 2: ARCHITECTURE */}
          {currentSection === 2 && (
            <motion.div key="sec2" variants={slideVariants} initial="initial" animate="enter" exit="exit" className="slide-content">
              <section className="section" style={{ paddingTop: '20px' }}>
                 <div className="container project-scroll-area architecture-container" style={{ maxWidth: '1000px', paddingBottom: 'var(--space-4)' }}>
                   <p className="label label-muted" style={{ textAlign: 'center', marginBottom: 'var(--space-3)' }}>TECHNICAL ARCHITECTURE MAP</p>
                   <div className="grid-3" style={{ gap: 'var(--space-3)' }}>
                     
                     {[
                       { category: "LANGUAGES", items: ["Java", "C++", "Python", "JavaScript", "TypeScript", "SQL", "Dart"] },
                       { category: "FRONT-END", items: ["React", "React Native", "Next.js 14", "Flutter", "Tailwind CSS", "Vite", "Framer Motion"] },
                       { category: "BACK-END", items: ["Node.js", "Express", "REST APIs", "GraphQL", "Socket.io", "WebRTC"] },
                       { category: "DATABASES & STORAGE", items: ["MongoDB Atlas", "MySQL", "PostgreSQL", "Hive", "Redis"] },
                       { category: "ARTIFICIAL INTELLIGENCE", items: ["PyTorch", "FastAi", "Scikit-Learn", "Pandas", "LLM Agents", "Prompt Engineering", "HuggingFace"] },
                       { category: "CLOUD & DEVOPS", items: ["AWS", "Vercel Serverless", "Docker", "Git", "Linux", "CI/CD pipelines"] }
                     ].map((stack, idx) => (
                        <div className="award-card-container" key={idx}>
                          <div className="award-card-offset" style={{ top: '6px', left: '6px' }}></div>
                          <motion.div className="award-card" style={{ padding: 'var(--space-3)', minHeight: '120px' }} whileHover={{ x: 3, y: 3 }}>
                            <h4 className="label" style={{ marginBottom: 'var(--space-2)' }}>{stack.category}</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                              {stack.items.map((item, i) => (
                                <motion.span 
                                  key={i}
                                  animate={{ y: [0, -4, 0] }}
                                  transition={{ duration: 2.5 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
                                  whileHover={{ scale: 1.1, backgroundColor: '#1A1A1A', color: '#F5F3EC' }}
                                  className="label label-muted" 
                                  style={{ border: '1px solid rgba(0,0,0,0.1)', padding: '4px 8px', fontSize: '0.8rem', cursor: 'default', transition: 'background-color 0.2s, color 0.2s' }}
                                >
                                  {item}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                     ))}
                     
                   </div>
                 </div>
              </section>
            </motion.div>
          )}

          {/* SECTION 3: EXPERIENCE & EDU */}
          {currentSection === 3 && (
            <motion.div key="sec3" variants={slideVariants} initial="initial" animate="enter" exit="exit" className="slide-content">
              <section className="section" style={{ paddingTop: 0 }}>
                 <div className="container">
                   <div className="grid-3" style={{ alignItems: 'stretch' }}>
                     <div>
                       <p className="label label-muted" style={{ marginBottom: 'var(--space-4)' }}>INDUSTRY EXPERIENCE</p>
                       <div className="award-card-container" style={{ height: 'calc(100% - 40px)' }}>
                          <div className="award-card-offset"></div>
                          <motion.div className="award-card" style={{ height: '100%' }} whileHover={{ x: 4, y: 4 }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>EduBot Technologies</h3>
                            <p className="label label-muted" style={{ marginBottom: 'var(--space-2)' }}>GenAI & Prompt Eng. Intern | 2025</p>
                            <p className="body-text" style={{ fontSize: '0.85rem' }}>Spearheaded the AutoPrompt Builder utilizing Python and Cohere APIs. Accelerated prompt iteration speed by 2x via multi-step chaining and automated evaluation metrics.</p>
                          </motion.div>
                       </div>
                     </div>
                     <div>
                       <p className="label label-muted" style={{ marginBottom: 'var(--space-4)' }}>ACADEMICS</p>
                       <div className="award-card-container" style={{ height: 'calc(100% - 40px)' }}>
                          <div className="award-card-offset"></div>
                          <motion.div className="award-card" style={{ height: '100%' }} whileHover={{ x: 4, y: 4 }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>SRM University AP</h3>
                            <p className="label label-muted" style={{ marginBottom: 'var(--space-2)' }}>B.Tech in CSE (AI/ML) | 2023 - 2027</p>
                            <a href="https://www.google.com/maps/place/SRM+University,+AP" target="_blank" style={{ display: 'block', position: 'relative', width: '100%', height: '160px', marginTop: 'var(--space-2)', cursor: 'pointer', backgroundColor: 'transparent' }}>
                              <IndiaMapComponent />
                            </a>
                          </motion.div>
                       </div>
                     </div>
                     <div>
                       <p className="label label-muted" style={{ marginBottom: 'var(--space-4)' }}>CERTIFICATIONS</p>
                       <div className="award-card-container" style={{ height: 'calc(100% - 40px)' }}>
                          <div className="award-card-offset"></div>
                          <motion.div className="award-card" style={{ height: '100%' }} whileHover={{ x: 4, y: 4 }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Global Badges</h3>
                            <p className="label label-muted" style={{ marginBottom: 'var(--space-2)' }}>Cloud, Systems & AI</p>
                            <ul className="body-text" style={{ fontSize: '0.85rem', paddingLeft: 'var(--space-2)' }}>
                              <li style={{ marginBottom: '8px' }}><strong>AWS</strong> Certified Cloud Practitioner</li>
                              <li style={{ marginBottom: '8px' }}><strong>Oracle</strong> Java SE 17 Developer</li>
                              <li style={{ marginBottom: '8px' }}><strong>Oracle</strong> OCI Generative AI Professional</li>
                              <li><strong>Coursera</strong> Linux Bash Shell Scripting</li>
                            </ul>
                          </motion.div>
                       </div>
                     </div>
                   </div>
                 </div>
              </section>
            </motion.div>
          )}

          {/* SECTION 4: CONTACT */}
          {currentSection === 4 && (
            <motion.div key="sec4" variants={slideVariants} initial="initial" animate="enter" exit="exit" className="slide-content slide-content-contact">
              <section className="section contact-section">
                 <div className="container contact-container">
                   <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
                      <h2 className="title" style={{ marginBottom: 0 }}>LET'S TALK</h2>
                     <p className="label label-muted">LET'S MAKE SOMETHING REAL.</p>
                     <p className="body-text" style={{ marginTop: 'var(--space-1)' }}>Ready to collaborate on the next big innovation? Drop me a line.</p>
                   </div>
                   
                   <div className="grid-2 contact-grid">
                     {/* Contact Info */}
                     <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                       <div style={{ marginBottom: 'var(--space-2)' }}>
                         <p className="label label-muted" style={{ marginBottom: 'var(--space-1)' }}>CONNECT</p>
                         <div className="contact-links">
                           <motion.a whileHover={{ y: -2, backgroundColor: '#1A1A1A', color: '#F5F3EC' }} href="https://linkedin.com/in/harsh-kumar-17b839291" target="_blank" className="body-text contact-link">
                             <FaLinkedin /> LinkedIn
                           </motion.a>
                           <motion.a whileHover={{ y: -2, backgroundColor: '#1A1A1A', color: '#F5F3EC' }} href="https://www.instagram.com/har_sh0o23/" target="_blank" className="body-text contact-link">
                             <FaInstagram /> Instagram
                           </motion.a>
                           <motion.a whileHover={{ y: -2, backgroundColor: '#1A1A1A', color: '#F5F3EC' }} href="https://x.com/harsh0o23" target="_blank" className="body-text contact-link">
                             <FaXTwitter /> X
                           </motion.a>
                         </div>
                       </div>
                       
                       <div>
                         <p className="label label-muted" style={{ marginBottom: 'var(--space-1)' }}>LOCATION</p>
                         <p className="body-text" style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                           <FaLocationDot size={14} /> SRM University AP
                         </p>
                         <p className="body-text" style={{ paddingLeft: '22px', opacity: 0.7 }}>Andhra Pradesh, India</p>
                         
                         <p className="body-text" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 'var(--space-2)', fontSize: '0.85rem', fontWeight: 600 }}>
                           <FaGlobe size={14} /> Available for remote collaborations worldwide.
                         </p>
                       </div>
                     </div>
                     
                     {/* Contact Form */}
                     <div>
                       <div className="award-card-container" style={{ marginBottom: 0 }}>
                          <div className="award-card-offset" style={{ top: '8px', left: '8px' }}></div>
                          <div className="award-card" style={{ padding: 'var(--space-4)' }}>
                            <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully! I will get back to you soon.'); (e.target as HTMLFormElement).reset(); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                              <div>
                                <label className="label" style={{ display: 'block', marginBottom: '4px' }}>NAME_</label>
                                <input type="text" required placeholder="Enter your name" style={{ width: '100%', padding: '10px', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'transparent', fontFamily: 'inherit', fontSize: '0.9rem' }} />
                              </div>
                              <div>
                                <label className="label" style={{ display: 'block', marginBottom: '4px' }}>EMAIL_</label>
                                <input type="email" required placeholder="your.email@example.com" style={{ width: '100%', padding: '10px', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'transparent', fontFamily: 'inherit', fontSize: '0.9rem' }} />
                              </div>
                              <div>
                                <label className="label" style={{ display: 'block', marginBottom: '4px' }}>MESSAGE_</label>
                                <textarea required placeholder="Tell me about your project..." rows={2} style={{ width: '100%', padding: '10px', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'transparent', fontFamily: 'inherit', fontSize: '0.9rem', resize: 'none' }}></textarea>
                              </div>
                              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="submit-btn" style={{ marginTop: 'var(--space-1)', alignSelf: 'flex-start' }}>SEND_MESSAGE</motion.button>
                            </form>
                          </div>
                       </div>
                     </div>
                   </div>
                 </div>
              </section>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="footer-layout">
        <div className="label">BUILD BEYOND.</div>
        <div className="footer-center">
           <a href="https://www.linkedin.com/in/harsh-kumar-17b839291" target="_blank" className="label" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
             <FaLinkedin size={18} /> LINKEDIN
           </a>
           <a href="https://github.com/Harshkumar2306" target="_blank" className="label" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
             <FaGithub size={18} /> GITHUB
           </a>
           <a href="mailto:kumarharsh2306@gmail.com" className="label" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
             <FaEnvelope size={18} /> GMAIL
           </a>
        </div>
        <div className="label">BE INSPIRED. BE INSPIRING.</div>
      </footer>
    </main>
  );
}
