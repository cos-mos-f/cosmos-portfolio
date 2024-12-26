import React, { useRef, useState, useEffect, useMemo } from 'react';
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
  const [isImageLoaded, setIsImageLoaded] = useState(false); // 画像ロード状態

  useEffect(() => {
    const updateFrameSize = () => {
      if (artFrameRef.current) {
        const rect = artFrameRef.current.getBoundingClientRect();
        setFrameSize({ width: rect.width, height: rect.height });
      }
    };

    window.addEventListener('resize', updateFrameSize);
    updateFrameSize();
    return () => window.removeEventListener('resize', updateFrameSize);
  }, []);

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
    setIsImageLoaded(false); // 画像切り替え時にローディング状態に設定
    const img = new Image();
    img.src = `${base}/images/artWorks/${imageList[index].filename}`;
    img.onload = () => setIsImageLoaded(true); // 画像がロードされたら更新
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
        {!isImageLoaded && (
          <div
            className={`${styles.skeleton}`}
            style={{ width: scaledImageSize.width, height: scaledImageSize.height }}
          />
        )}
        <img
          src={`${base}/images/artWorks/${imageList[index].filename}`}
          alt={imageList[index].title}
          className={styles.image}
          style={{
            display: isImageLoaded ? 'block' : 'none',
            width: scaledImageSize.width,
            height: scaledImageSize.height,
          }}
        />
      </div>
    </div>
  );
};

export default ArtBoard;

