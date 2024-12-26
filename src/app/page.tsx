"use client";
import React, { useState, useEffect } from 'react';
import styles from './styles/Home.module.css';
import ScrollBar from './components/scrollBar';
import ArtBoard from './components/artBoard';
import Gallery from './components/gallery';
import MainSection from './components/mainSection';
import SubSection from './components/subSection';

import imageList from './imageList.json';


export default function Home() {
  const [currentPositionArtBoard, setCurrentPositionArtBoard] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPositionGallery, setCurrentPositionGallery] = useState(0);
  const [pageType, setPageType] = useState("artBoard");
  const [currentPosition, setCurrentPosition] = useState(0); // 現在のポジションを管理するステート
  const [isScrollBarHovered, setIsScrollBarHovered] = useState(false);
  const [galleryType, setGalleryType] = useState('All');
  // pageTypeが変わった時にcurrentPositionを更新
  useEffect(() => {
    if (pageType === "artBoard") {
      setCurrentPosition(currentPositionArtBoard);
    } else if (pageType === "Gallery") {
      setCurrentPosition(currentPositionGallery);
    }
  }, [pageType, currentPositionArtBoard, currentPositionGallery]);
  //スクロールバーの紐づけ
  const handleScrollChange = (position: number) => {
    if (pageType === "artBoard") {
      setCurrentPositionArtBoard(position);
    } else if (pageType === "Gallery") {
      setCurrentPositionGallery(position);
    }
    setCurrentPosition(position); // 
  };
  const handleGalleryScrollChange = (position: number)=>{
    setCurrentPositionGallery(position);
  }

  const changeIndex = (index:number) =>{
    setCurrentIndex(index);
  }
  //スクロールをインデックスと紐づけ
  useEffect(()=>{
    const index = Math.round(currentPositionArtBoard * (imageList.length - 1));
    if(currentIndex!=index){
      changeIndex(index);
    }
  },[currentPositionArtBoard]);
  useEffect(()=>{
    if(!isScrollBarHovered){
      setCurrentPositionArtBoard(currentIndex/(imageList.length-1));
    }
  },[currentIndex])

  const ChangeImage = (index:number)=>{
    setPageType("artBoard");
    setCurrentIndex(index);
  }

  const renderContent = () => {
    if (pageType === "artBoard") {
      return <ArtBoard 
      imageList={imageList} 
      index={currentIndex}
      changeIndex={changeIndex}
      />;
    } else if (pageType === "Gallery") {
      return <Gallery
      imageList={imageList}
      currentPosition={currentPositionGallery}
      onScrollChange={handleGalleryScrollChange}
      onClickImage={ChangeImage}
    />
    ;
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
      <div className={styles.back}>
        {renderContent()}
      </div>
    </div>
  );
}

