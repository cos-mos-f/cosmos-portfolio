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
  const [currentPositionArtBoard, setCurrentPositionArtBoard] = useState(0); 
  const [currentPositionGallery, setCurrentPositionGallery] = useState(0); 
  const [pageType, setPageType] = useState("Gallery");
  let currentPosition = currentPositionArtBoard;

  const handleScrollChange = (position: number) => {
    if(pageType=="artBoard"){
      setCurrentPositionArtBoard(position);
    }
    else if(pageType=="Gallery"){
      setCurrentPositionGallery(position);
    }
  };

  const currentIndex = Math.round(currentPositionArtBoard * (imageList.length - 1));


  const renderContent = () => {
    if (pageType === "artBoard") {
      currentPosition = currentPositionArtBoard;
      return <ArtBoard image={imageList[currentIndex]} />;
    } else if (pageType === "Gallery") {
      currentPosition = currentPositionGallery;
      return <Gallery imageList={imageList} currentPosition={currentPositionGallery}/>;
    } else if (pageType === "Contact") {
      return <div></div>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <ScrollBar
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
