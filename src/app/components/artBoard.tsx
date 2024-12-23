import React from 'react';
import styles from '../styles/ArtBoard.module.css';

interface ArtBoardProps {
  image: { title: string; path: string };
}

const ArtBoard: React.FC<ArtBoardProps> = ({ image }) => {
  return (
    <div className={styles.artBoard}>
      <img src={image.path} alt={image.title} className={styles.image} />
      <h2 className={styles.title}>{image.title}</h2>
    </div>
  );
};

export default ArtBoard;
