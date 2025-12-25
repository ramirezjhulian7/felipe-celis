import { useEffect, useState, type RefObject } from 'react';

export const useParallax = (ref: RefObject<HTMLElement | null>, speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const distance = scrolled - elementTop;
      
      // Calculate parallax offset
      const parallaxOffset = distance * speed;
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);

  return offset;
};
