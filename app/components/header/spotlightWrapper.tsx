'use client';
import React, { useRef, useState } from 'react';

interface SpotlightWrapperProps {
  children: React.ReactNode;
}

export const SpotlightWrapper: React.FC<SpotlightWrapperProps> = ({ children }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative overflow-hidden border-slate-800 bg-gradient-to-t from-slate-100 to-slate-50 dark:from-slate-950 dark:to-slate-900 shadow-xl'
    >
      <div
        className='pointer-events-none absolute inset-0 transition-opacity duration-300'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
        }}
      />
      <div className='relative'>{children}</div> {/* Le contenu est ici */}
    </div>
  );
};
