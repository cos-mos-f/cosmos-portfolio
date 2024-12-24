"use client";
import React, { useState } from 'react';
import styles from './styles/Home.module.css';
import ScrollBar from './components/scrollBar';
import ArtBoard from './components/artBoard';
import Gallery from './components/gallery';
import MainSection from './components/mainSection';

const imageList = [
  { title: 'Image 1', path: '/images/fan_arts/main/2024.12.63.02.jpg' },
  { title: 'Image 2', path: '/images/fan_arts/main/2024.12.64.1.jpg' },
  { title: 'Image 3', path: '/images/fan_arts/main/2024.12.65.1.jpg' },
  { title: 'Image 4', path: '/images/fan_arts/main/2024.12.86.jpg' },
];

export default function Home() {
  const [currentPosition, setCurrentPosition] = useState(0); // 0~1の連続量

  const handleScrollChange = (position: number) => {
    setCurrentPosition(position);
  };

  const currentIndex = Math.round(currentPosition * (imageList.length - 1));

  const [pageType, setPageType] = useState("Gallery");

  const renderContent = () => {
    if (pageType === "artBoard") {
      return <ArtBoard image={imageList[currentIndex]} />;
    } else if (pageType === "Gallery") {
      return <Gallery imageList={imageList} />;
    } else if (pageType === "Contact") {
      return <div></div>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <ScrollBar
          length={imageList.length}
          currentPosition={currentPosition}
          onScrollChange={handleScrollChange}
        />
        <MainSection setPageType={setPageType} />
      </div>
      <div className={styles.back}>
        {renderContent()}
      </div>
    </div>
  );
}
