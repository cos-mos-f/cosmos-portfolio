import React from 'react';
import styles from '../styles/ArtBoard.module.css';

type ImageItem = {
  filename:string;
  title: string;
  width: number;
  height:number;
};

interface ArtBoardProps {
  imageList: ImageItem[];
  index: number;
  changeIndex: (index: number) => void;
}

const ArtBoard: React.FC<ArtBoardProps> = ({ imageList, index, changeIndex }) => {
  const base = process.env.GITHUB_PAGES ? '/cosmos-portfolio/' : './';

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, currentTarget } = e;
    const middle = currentTarget.offsetWidth / 2;
    const isRightClick = clientX > middle;

    if (isRightClick) {
      changeIndex(index + 1 < imageList.length ? index + 1 : 0); // 最後の画像なら最初に戻る
    } else {
      changeIndex(index - 1 >= 0 ? index - 1 : imageList.length - 1); // 最初の画像なら最後に戻る
    }
  };

  return (
    <div className={styles.artBoard}>
      <div className={styles.title}>{imageList[index].title}</div>
      <div className={styles.artFrame}  onClick={handleClick}>
        <img
          src={`${base}/images/artWorks/${imageList[index].filename}`}
          alt={imageList[index].title}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default ArtBoard;

