"use client";
import React, { useState } from 'react';
import styles from './styles/Home.module.css';
import ScrollBar from './components/scrollBar';
import ArtBoard from './components/artBoard';

const imageList = [
  { title: 'Image 1', path: '../images/fan_arts/main/2024.12.63.02.jpg' },
  { title: 'Image 2', path: '../images/fan_arts/main/2024.12.64.1.jpg' },
  { title: 'Image 3', path: '../images/fan_arts/main/2024.12.65.1.jpg' },
  { title: 'Image 4', path: '../images/fan_arts/main/2024.12.86.jpg' },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.container}>
      <ArtBoard image={imageList[currentIndex]} />
      <ScrollBar
        length={imageList.length}
        currentIndex={currentIndex}
        onScrollChange={(index) => setCurrentIndex(index)}
      />
    </div>
  );
}
