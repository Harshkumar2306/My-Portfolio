'use client';
import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function IndiaMapComponent() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', cursor: 'pointer', overflow: 'hidden' }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 950, center: [80, 22] }}
        style={{ width: '100%', height: '100%', opacity: 0.15 }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              if (geo.properties.name !== "India") return null;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1A1A1A"
                  stroke="#F5F3EC"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: "#000" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>
        <motion.div 
          animate={{ y: [0, -4, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#1A1A1A',
            padding: '6px 14px',
            borderRadius: '24px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            border: '2px solid rgba(245, 243, 236, 0.8)'
          }}
        >
          <span className="label" style={{ fontSize: '0.65rem', fontWeight: 800, color: '#F5F3EC', letterSpacing: '1px' }}>VIEW MAP</span>
          <FaArrowRight size={10} color="#F5F3EC" style={{ transform: 'rotate(-45deg)' }} />
        </motion.div>
      </div>
    </div>
  );
}
