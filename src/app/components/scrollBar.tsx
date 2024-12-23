import React, { useRef, useEffect } from 'react';
import styles from '../styles/scrollBar.module.css';

interface ScrollBarProps {
  length: number;
  currentIndex: number;
  onScrollChange: (index: number) => void;
}

const ScrollBar: React.FC<ScrollBarProps> = ({ length, currentIndex, onScrollChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: React.WheelEvent) => {
    const delta = event.deltaY > 0 ? 1 : -1;
    const newIndex = Math.min(Math.max(currentIndex + delta, 0), length - 1);
    onScrollChange(newIndex);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const clickY = event.clientY - rect.top;
      const newIndex = Math.round((clickY / rect.height) * (length - 1));
      onScrollChange(newIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll as unknown as EventListener);
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll as unknown as EventListener);
      }
    };
  }, [currentIndex, length]);

  return (
    <div
      className={styles.scrollBarContainer}
      ref={containerRef}
      onClick={handleClick}
    >
      <div className={styles.bar}></div>
      <img
        src="../images/star.svg"
        alt="Star"
        className={styles.indicator}
        style={{ top: `${((currentIndex) / (length-1)) * 80 + 10}%` }}
      />
    </div>
  );
};

export default ScrollBar;
