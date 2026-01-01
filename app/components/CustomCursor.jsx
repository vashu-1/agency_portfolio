'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { cursorVariant } = useCursor();

  useEffect(() => {
    // Check if screen is small
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Hide cursor below md breakpoint (768px)
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const cursor = document.querySelector('.cursor');

    if (cursor) {
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    }

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const variants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: 'rgba(168, 85, 247, 1)',
      mixBlendMode: 'normal',
    },
    text: {
      height: 150,
      width: 150,
      backgroundColor: '#9333EA',
      mixBlendMode: 'difference',
    },
  };

  // Don't render custom cursor on small screens
  if (isSmallScreen) {
    return null;
  }

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      <motion.div
        className="cursor fixed pointer-events-none z-[9999] rounded-full"
        variants={variants}
        animate={cursorVariant}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
