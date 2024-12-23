import React from 'react';
import styles from '../styles/ArtBoard.module.css';

interface ArtBoardProps {
  image: { title: string; path: string };
}

const ArtBoard: React.FC<ArtBoardProps> = ({ image }) => {
  const base = process.env.GITHUB_PAGES ? '/cosmos-portfolio/' : './';
  
  return (
    <div className={styles.artBoard}>
      <div className={styles.title}>{image.title}</div>
      <div className={styles.artFrame}>
      <img src={base+image.path} alt={image.title} className={styles.image} />
      </div>
    </div>
  );
};

export default ArtBoard;
