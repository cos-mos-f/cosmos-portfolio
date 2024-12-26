import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import styles from '../styles/ArtBoard.module.css';

type ImageItem = {
  filename: string;
  title: string;
  width: number;
  height: number;
};

interface ArtBoardProps {
  imageList: ImageItem[];
  index: number;
  changeIndex: (index: number) => void;
}

const ArtBoard: React.FC<ArtBoardProps> = ({ imageList, index, changeIndex }) => {
  const base = process.env.GITHUB_PAGES ? '/cosmos-portfolio/' : './';
  const artFrameRef = useRef<HTMLDivElement | null>(null);
  const [frameSize, setFrameSize] = useState({ width: 0, height: 0 });
  const loadedImages = useRef(new Set<string>());

  const debounce = useCallback((func: () => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }, []);

  useEffect(() => {
    const updateFrameSize = () => {
      if (artFrameRef.current) {
        const rect = artFrameRef.current.getBoundingClientRect();
        setFrameSize({ width: rect.width, height: rect.height });
      }
    };

    const debouncedUpdateFrameSize = debounce(updateFrameSize, 100);
    window.addEventListener('resize', debouncedUpdateFrameSize);

    updateFrameSize();
    return () => window.removeEventListener('resize', debouncedUpdateFrameSize);
  }, [debounce]);

  const scaledImageSize = useMemo(() => {
    if (!frameSize.width || !frameSize.height) return { width: 0, height: 0 };

    const { width, height } = imageList[index];
    const widthRatio = frameSize.width / width;
    const heightRatio = frameSize.height / height;
    const scale = Math.min(widthRatio, heightRatio);

    return {
      width: Math.floor(width * scale),
      height: Math.floor(height * scale),
    };
  }, [index, frameSize.width, frameSize.height, imageList]);

  useEffect(() => {
    const preloadImage = (src: string) => {
      if (loadedImages.current.has(src)) return;
      const img = new Image();
      img.src = src;
      loadedImages.current.add(src);
    };

    const nextIndex = (index + 1) % imageList.length;
    const prevIndex = (index - 1 + imageList.length) % imageList.length;

    preloadImage(`${base}/images/artWorks/${imageList[nextIndex].filename}`);
    preloadImage(`${base}/images/artWorks/${imageList[prevIndex].filename}`);
  }, [index, imageList, base]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = artFrameRef.current!.getBoundingClientRect();
    const isRightClick = e.clientX > rect.left + rect.width / 2;
    changeIndex(isRightClick ? (index + 1) % imageList.length : (index - 1 + imageList.length) % imageList.length);
  };

  return (
    <div className={styles.artBoard}>
      <div className={styles.title}>{imageList[index].title}</div>
      <div
        className={styles.artFrame}
        ref={artFrameRef}
        onClick={handleClick}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <img
          src={`${base}/images/artWorks/${imageList[index].filename}`}
          alt={imageList[index].title}
          className={styles.image}
          style={{
            width: scaledImageSize.width,
            height: scaledImageSize.height,
          }}
        />
      </div>
    </div>
  );
};

export default ArtBoard;

