import { useEffect, useRef } from "react";
import styles from "../styles/Gallery.module.css";

type ImageItem = {
  filename:string;
  title: string;
  width: number;
  height:number;
};

type GalleryProps = {
  imageList: ImageItem[];
  currentPosition: number;
  onScrollChange: (position: number) => void; // 連続量(0~1)を渡す
  onClickImage:(index:number)=>void;
};

const Gallery: React.FC<GalleryProps> = ({ imageList, currentPosition , onScrollChange, onClickImage}) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const base = process.env.GITHUB_PAGES ? '/cosmos-portfolio/' : './';

  //スクロールバーからの位置変更
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

  //マウスホイールからの位置変更
  useEffect(() => {
    const galleryElement = galleryRef.current;

    if (galleryElement) {
      let isScrolling = false;
      let scrollDelta = 0;

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

      document.addEventListener("wheel", handleWheel);

      return () => {
        document.removeEventListener("wheel", handleWheel);
      };
    } 
  }, []);
  //レイアウトの作成
  const layoutImages = (images: ImageItem[]) => {
    const layout: JSX.Element[] = [];
    let _100 = 0;
    if(galleryRef.current){
      const galleryRect = galleryRef.current?.getBoundingClientRect();
      _100 = galleryRect.width;
    }
    let i = 0;
    let key = 0;
    while (i < images.length) {
      if(i+1>=images.length){
        const img1 = images[i];
        const width1 = 100;
        const height1 = 100;
        layout.push(
          <div className={styles.verticalFrame} key={key}>
            <img 
              src={`${base}/images/artWorks/${img1.filename}`}
              alt={img1.title}
              className={styles.image}
              style={{
                width:width1 + 'px',
                height:height1 + 'px'
              }}/>
          </div>
        )
        return layout;
      }
      const img1 = images[i];
      const img2 = images[i + 1];
      const img3 = images[i + 2];
      let WH = [img1.height>img1.width,img2.height>img2.width,img3.height>img3.width]
      if(i+1>=images.length){
        WH = [true, true, true];
      }
      if (!WH[0]&&WH[1]&&WH[2]) {
        // 上1下2
        const width1 = 100;
        const height1 = 100;
        const width2 = 100;
        const height2 = 100;
        const width3 = 100;
        const height3 = 100;
        layout.push(
          <div className={styles.verticalFrame} key={key}>
              <img 
                src={`${base}/images/artWorks/${img1.filename}`}
                alt={img1.title}
                className={styles.image}
                style={{
                  width:width1 + 'px',
                  height:height1 + 'px'
                }}/>
            <div className={styles.horizontalFrame}>
              <img 
                  src={`${base}/images/artWorks/${img2.filename}`}
                  alt={img2.title}
                  className={styles.image}
                  style={{
                    width:width2 + 'px',
                    height:height2 + 'px'
                  }}/>
                <img 
                src={`${base}/images/artWorks/${img3.filename}`}
                alt={img3.title}
                className={styles.image}
                style={{
                  width:width3 + 'px',
                  height:height3 + 'px'
                }}/>
            </div>
          </div>
        );
        i += 3;
        key+=1;
      } else if (WH[0]&&WH[1]&&!WH[2]) {
        // 上1下2
        const width1 = 100;
        const height1 = 100;
        const width2 = 100;
        const height2 = 100;
        const width3 = 100;
        const height3 = 100;
        layout.push(
          <div className={styles.verticalFrame} key={key}>
            <div className={styles.horizontalFrame}>
              <img 
                src={`${base}/images/artWorks/${img1.filename}`}
                alt={img1.title}
                className={styles.image}
                style={{
                  width:width1 + 'px',
                  height:height1 + 'px'
                }}/>
              <img 
                src={`${base}/images/artWorks/${img2.filename}`}
                alt={img2.title}
                className={styles.image}
                style={{
                  width:width2 + 'px',
                  height:height2 + 'px'
                }}/>
            </div>
            <img 
                src={`${base}/images/artWorks/${img3.filename}`}
                alt={img3.title}
                className={styles.image}
                style={{
                  width:width3 + 'px',
                  height:height3 + 'px'
                }}/>
          </div>
        )
        i += 3;
        key+=1;
      }else if((WH[0]&&!WH[1]&&WH[2])||(WH[0]&&WH[1]&&WH[2])){
        //2つのみ
        const width1 = 100;
        const height1 = 100;
        const width2 = 100;
        const height2 = 100;
        const width3 = 100;
        const height3 = 100;
        layout.push(
          <div className={styles.verticalFrame} key={key}>
            <img 
              src={`${base}/images/artWorks/${img1.filename}`}
              alt={img1.title}
              className={styles.image}
              style={{
                width:width1 + 'px',
                height:height1 + 'px'
              }}/>
            <img 
              src={`${base}/images/artWorks/${img2.filename}`}
              alt={img2.title}
              className={styles.image}
              style={{
                width:width2 + 'px',
                height:height2 + 'px'
              }}/>
          </div>
        );
        i += 2;
        key+=1;
      }else{
        //3つ縦
        const width1 = 100;
        const height1 = 100;
        const width2 = 100;
        const height2 = 100;
        const width3 = 100;
        const height3 = 100;
        layout.push(
          <div className={styles.verticalFrame} key={key}>
            <img 
              src={`${base}/images/artWorks/${img1.filename}`}
              alt={img1.title}
              className={styles.image}
              style={{
                width:width1 + 'px',
                height:height1 + 'px'
              }}/>
            <img 
                src={`${base}/images/artWorks/${img2.filename}`}
                alt={img2.title}
                className={styles.image}
                style={{
                  width:width2 + 'px',
                  height:height2 + 'px'
                }}/>
            <img 
              src={`${base}/images/artWorks/${img3.filename}`}
              alt={img3.title}
              className={styles.image}
              style={{
                width:width3 + 'px',
                height:height3 + 'px'
              }}/>
          </div>
        );
        i += 3;
        key+=1;
      };
    };
    return layout;
  };

  return (
    <div className={styles.galleryWrapper} ref={galleryRef}>
      <div className={styles.space}>
      </div>
      {layoutImages(imageList)}
    </div>
  );
};

export default Gallery;

