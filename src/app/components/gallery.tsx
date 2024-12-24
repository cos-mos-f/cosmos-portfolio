import { useEffect, useRef } from "react";
import styles from "../styles/Gallery.module.css";

type ImageItem = {
  title: string;
  path: string;
};

type GalleryProps = {
  imageList: ImageItem[];
  currentPosition: number;
  onScrollChange: (position: number) => void; // 連続量(0~1)を渡す
};

const Gallery: React.FC<GalleryProps> = ({ imageList, currentPosition , onScrollChange}) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const galleryElement = galleryRef.current;

    if (galleryElement) {
      const maxScrollLeft = galleryElement.scrollWidth - galleryElement.clientWidth;
      const scrollLeft = maxScrollLeft * currentPosition;
      galleryElement.scrollTo({
        left: scrollLeft,
        behavior: "smooth", 
      });
    }
  }, [currentPosition]);

  useEffect(() => {
    const galleryElement = galleryRef.current;

    if (galleryElement) {
      let isScrolling = false;
      let scrollDelta = 0;

      // スクロールイベントをスムーズに処理
      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();
        scrollDelta += event.deltaY;

        onScrollChange(galleryElement.scrollLeft/(galleryElement.scrollWidth - galleryElement.clientWidth))
        if (!isScrolling) {
          isScrolling = true;
          smoothScroll();
        }
      };
      const smoothScroll = () => {
        if (!galleryElement) return;

        galleryElement.scrollBy({
          left: scrollDelta / 5, // 分割してスムーズに移動
        });
        scrollDelta *= 0.85; // 減速

        if (Math.abs(scrollDelta) > 0.5) {
          requestAnimationFrame(smoothScroll);
        } else {
          isScrolling = false;
          scrollDelta = 0; // 停止時にリセット
        }
      }

      galleryElement.addEventListener("wheel", handleWheel);

      return () => {
        galleryElement.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  return (
    <div className={styles.galleryWrapper} ref={galleryRef}>
      <div className={styles.space}></div>
      {imageList.map((image, index) => (
        <div key={index} className={styles.imageContainer}>
          <img src={image.path} alt={image.title} className={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

