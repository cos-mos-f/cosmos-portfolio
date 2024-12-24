import React, { useEffect, useState } from 'react';
import styles from '../styles/subSection.module.css';
import LineText from './lineText';
type subSectionProps = {
  pageType: string;
  galleryType: string;
  setGalleryType: (galleryType: string) => void;
};

const SubSection: React.FC<subSectionProps> = ({ pageType, galleryType, setGalleryType }) => {
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

  const renderContent = () => {
    if (pageType === "artBoard") {
      return <div/>;
    } else if (pageType === "Gallery") {
      return <div/>
    ;
    } else if (pageType === "Contact") {
      return <div></div>;
    }
  };
  return (
    <div className={styles.subSection}>
        <LineText 
        onClick={() => setGalleryType("all")}
        isActive={isGallery}
          >all</LineText>
        <LineText 
        onClick={() => setGalleryType("Contact")}
        isActive={isContact}
          >fan art</LineText>
        <LineText 
        onClick={() => setGalleryType("Contact")}
        isActive={isContact}
          >original</LineText>
        <LineText 
        onClick={() => setGalleryType("Contact")}
        isActive={isContact}
          >work</LineText>
    </div>
  );
};

export default SubSection;