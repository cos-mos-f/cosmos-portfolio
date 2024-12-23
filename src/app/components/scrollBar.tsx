import React from 'react';
import styles from '../styles/scrollBar.module.css';

interface ScrollBarProps {
  length: number;
  currentIndex: number;
  onScrollChange: (index: number) => void;
}

const ScrollBar: React.FC<ScrollBarProps> = ({ length, currentIndex, onScrollChange }) => {
  const handleScroll = (event: React.ChangeEvent<HTMLInputElement>) => {
    onScrollChange(Number(event.target.value));
  };

  return (
    <div className={styles.scrollBarContainer}>
      <input
        type="range"
        min="0"
        max={length - 1}
        value={currentIndex}
        onChange={handleScroll}
        className={styles.scrollBar}
      />
    </div>
  );
};

export default ScrollBar;
