import React from 'react';
import styles from '../styles/ArtBoard.module.css';

interface ArtBoardProps {
  image: { title: string; path: string };
}

const ArtBoard: React.FC<ArtBoardProps> = ({ image }) => {
  return (
    <div className={styles.artBoard}>
      <div className={styles.title}>{image.title}</div>
      <div className={styles.artFrame}>
      <img src={image.path} alt={image.title} className={styles.image} />
      </div>
    </div>
  );
};

export default ArtBoard;
