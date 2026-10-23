import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor if pointer is fine (desktop mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Central dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-sand mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - (isHovered ? 16 : 4),
          y: mousePosition.y - (isHovered ? 16 : 4),
          width: isHovered ? 32 : 8,
          height: isHovered ? 32 : 8,
          opacity: isHovered ? 0.8 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 250,
          mass: 0.1,
        }}
      />
      {/* Outer subtle ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-sand/40 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          width: 40,
          height: 40,
          scale: isHovered ? 1.4 : 1,
          opacity: isHovered ? 0.4 : 0.6,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 150,
          mass: 0.2,
        }}
      />
    </>
  );
};

export default CustomCursor;
