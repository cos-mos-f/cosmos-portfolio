import React, { useEffect, useState } from 'react';
import styles from '../styles/mainSection.module.css';
import LineText from './lineText';
type MainSectionProps = {
  pageType: string;
  setPageType: (pageType: string) => void;
};

const MainSection: React.FC<MainSectionProps> = ({ pageType, setPageType }) => {
  const [isGallery, setIsGallery] = useState(false);
  const [isContact, setIsContact] = useState(false);
  useEffect(()=>{
    if(pageType=="Gallery"){
      setIsContact(false);
      setIsGallery(true);
    }
    if(pageType=="Contact"){
      setIsContact(true);
      setIsGallery(false);
    }
  },[pageType])
  return (
    <div className={styles.mainSection}>
      <div className={styles.Title}>cosmos<br/>gallery</div>
      <LineText 
      onClick={() => setPageType("Gallery")}
      isActive={isGallery}
        >works</LineText>
      <LineText 
      onClick={() => setPageType("Contact")}
      isActive={isContact}
        >contact</LineText>
    </div>
  );
};

export default MainSection;
