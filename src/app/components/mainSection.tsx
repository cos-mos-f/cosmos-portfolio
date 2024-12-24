// components/mainSection.tsx
import React from 'react';
import styles from '../styles/mainSection.module.css';

type MainSectionProps = {
  setPageType: (pageType: string) => void;
};

const MainSection: React.FC<MainSectionProps> = ({ setPageType }) => {
  return (
    <div className={styles.mainSection}>
      <button onClick={() => setPageType("artBoard")}>ArtBoard</button>
      <button onClick={() => setPageType("Gallery")}>Gallery</button>
      <button onClick={() => setPageType("Contact")}>Contact</button>
    </div>
  );
};

export default MainSection;
