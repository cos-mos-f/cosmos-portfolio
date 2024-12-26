import React, { useRef, useState, useEffect } from 'react';
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
  const [imageSize, setImageSize] = useState({width: 100, height: 100});

  useEffect(() => {
    const updateFrameSize = () => {
      if (artFrameRef.current) {
        const rect = artFrameRef.current.getBoundingClientRect();
        setFrameSize({ width: rect.width, height: rect.height });
      }
    };

    // 初期サイズ取得
    updateFrameSize();

    // ウィンドウリサイズ時に再計算
    window.addEventListener('resize', updateFrameSize);
    return () => window.removeEventListener('resize', updateFrameSize);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const middle = rect.width / 2 + rect.left;
    const isRightClick = clientX > middle;

    if (isRightClick) {
      changeIndex(index + 1 < imageList.length ? index + 1 : 0);
      console.log('right');
    } else {
      changeIndex(index - 1 >= 0 ? index - 1 : imageList.length - 1);
      console.log('left');
    }
  };
  // 画像サイズ計算
  useEffect(()=>{
    const { width, height } = imageList[index];
    const { width: frameWidth, height: frameHeight } = frameSize;

    if (frameWidth && frameHeight) {
      const widthRatio = frameWidth / width;
      const heightRatio = frameHeight / height;
      const scale = Math.min(widthRatio, heightRatio);
      setImageSize({
        width:Math.floor(width * scale),
        height: Math.floor(height * scale)
      })
    }
  },[index, frameSize])

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
            width: `${imageSize.width}px`,
            height: `${imageSize.height}px`,
          }}
        />
      </div>
    </div>
  );
};

export default ArtBoard;
