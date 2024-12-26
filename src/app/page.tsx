"use client"
import React, { useState, useEffect } from 'react';
import styles from './styles/Home.module.css';
import ScrollBar from './components/scrollBar';
import ArtBoard from './components/artBoard';
import Gallery from './components/gallery';
import MainSection from './components/mainSection';
import SubSection from './components/subSection';
import imageList from './imageList.json';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPositionArtBoard, setCurrentPositionArtBoard] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPositionGallery, setCurrentPositionGallery] = useState(0);
  const [pageType, setPageType] = useState("artBoard");
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isScrollBarHovered, setIsScrollBarHovered] = useState(false);
  const [galleryType, setGalleryType] = useState('All');

  // 全ての画像をプリロードする関数
  const preloadImages = async (images: string[]) => {
    const base = process.env.GITHUB_PAGES ? '/cosmos-portfolio/' : './';
    const promises = images.map((filename) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = `${base}/images/artWorks/${filename}`;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });
    await Promise.all(promises);
  };

  useEffect(() => {
    // 全ての画像をプリロードし終わったらローディングを解除
    const imageFilenames = imageList.map((image) => image.filename);
    preloadImages(imageFilenames).then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (pageType === "artBoard") {
      setCurrentPosition(currentPositionArtBoard);
    } else if (pageType === "Gallery") {
      setCurrentPosition(currentPositionGallery);
    }
  }, [pageType, currentPositionArtBoard, currentPositionGallery]);

  const handleScrollChange = (position: number) => {
    if (pageType === "artBoard") {
      setCurrentPositionArtBoard(position);
    } else if (pageType === "Gallery") {
      setCurrentPositionGallery(position);
    }
    setCurrentPosition(position);
  };

  const handleGalleryScrollChange = (position: number) => {
    setCurrentPositionGallery(position);
  };

  const changeIndex = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const index = Math.round(currentPositionArtBoard * (imageList.length - 1));
    if (currentIndex !== index) {
      changeIndex(index);
    }
  }, [currentPositionArtBoard]);

  useEffect(() => {
    if (!isScrollBarHovered) {
      setCurrentPositionArtBoard(currentIndex / (imageList.length - 1));
    }
  }, [currentIndex]);

  const ChangeImage = (index: number) => {
    setPageType("artBoard");
    setCurrentIndex(index);
  };

  const renderContent = () => {
    if (pageType === "artBoard") {
      return (
        <ArtBoard
          imageList={imageList}
          index={currentIndex}
          changeIndex={changeIndex}
        />
      );
    } else if (pageType === "Gallery") {
      return (
        <Gallery
          imageList={imageList}
          currentPosition={currentPositionGallery}
          onScrollChange={handleGalleryScrollChange}
          onClickImage={ChangeImage}
        />
      );
    } else if (pageType === "Contact") {
      return <div></div>;
    }
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>; // ローディング画面
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <ScrollBar
          currentPosition={currentPosition}
          onScrollChange={handleScrollChange}
          setIsHovered={setIsScrollBarHovered}
        />
        <MainSection
          pageType={pageType}
          setPageType={setPageType}
        />
        <SubSection
          pageType={pageType}
          galleryType={galleryType}
          setGalleryType={setGalleryType}
        />
      </div>
      <div className={styles.back}>{renderContent()}</div>
    </div>
  );
}

