import { useEffect, useRef , useState, useLayoutEffect} from "react";
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

type imageProps = {
  data:ImageItem;
  width:number;
  height:number;
  index: number;
}

const Gallery: React.FC<GalleryProps> = ({ imageList, currentPosition , onScrollChange, onClickImage}) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  //画像フレーム
  const GalleryImage: React.FC<imageProps> = ({ data, width , height, index}) => {
    const base = process.env.GITHUB_PAGES ? '/cosmos-portfolio/' : './';
    return (
      <img 
      src={`${base}/images/artWorks/${data.filename}`}
      alt={data.title}
      className={styles.image}
      style={{
        width:width + 'px',
        height:height + 'px'
      }}
      onClick={()=>onClickImage(index)}
      />
    );
  };
  //スクロールバーからの位置変更
  useEffect(() => {
    const galleryElement = galleryRef.current;

    if (galleryElement) {
      const maxScrollLeft = galleryElement.scrollWidth - galleryElement.clientWidth;
      const scrollLeft = maxScrollLeft * currentPosition;
      console.log(scrollLeft);
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
        // event.preventDefault();
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
      _100 = galleryRect.height;
    }
    let i = 0;
    let key = 0;
    while (i < images.length) {
      if(i+1>=images.length){
        const img1 = images[i];
        const width1 = 400;
        const height1 = 400*img1.height/img1.width;
        layout.push(
          <div className={styles.verticalFrame} key={key}>
            <GalleryImage data={img1} width={width1} height={height1} index={i}/>
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
        const base = 1/(
          img1.width*img2.height*img3.height
          +img2.width*img1.height*img3.height
          +img3.width*img2.height*img1.height
        );
        const width_base = ((_100-120)*img1.width/img1.height-40);
        const width2 = img2.width*img1.height*img3.height*base*width_base;
        const width3 = img3.width*img1.height*img2.height*base*width_base;
        const width1 = width2+width3+40;
        const height1 = width1*img1.height/img1.width;
        const height2 = width2*img2.height/img2.width;
        const height3 = width3*img3.height/img3.width;
        layout.push(
          <div className={styles.verticalFrame} key={key}>
            <GalleryImage data={img1} width={width1} height={height1} index={i}/>
            <div className={styles.horizontalFrame}>
            <GalleryImage data={img2} width={width2} height={height2} index={i+1}/>
            <GalleryImage data={img3} width={width3} height={height3} index={i+2}/>
            </div>
          </div>
        );
        i += 3;
        key+=1;
      } else if (WH[0]&&WH[1]&&!WH[2]) {
        // 上2下1
        const base = 1/(
          img1.width*img2.height*img3.height
          +img2.width*img1.height*img3.height
          +img3.width*img2.height*img1.height
        );
        const width_base = ((_100-120)*img3.width/img3.height-40);
        const width2 = img2.width*img1.height*img3.height*base*width_base;
        const width1 = img1.width*img3.height*img2.height*base*width_base;
        const width3 = width2+width1+40;
        const height1 = width1*img1.height/img1.width;
        const height2 = width2*img2.height/img2.width;
        const height3 = width3*img3.height/img3.width;
        layout.push(
          <div className={styles.verticalFrame} key={key}>
            <div className={styles.horizontalFrame}>
            <GalleryImage data={img1} width={width1} height={height1} index={i}/>
            <GalleryImage data={img2} width={width2} height={height2} index={i+1}/>
            </div>
            <GalleryImage data={img3} width={width3} height={height3} index={i+2}/>
          </div>
        )
        i += 3;
        key+=1;
      }else if((WH[0]&&!WH[1]&&WH[2])||(WH[0]&&WH[1]&&WH[2])){
        //2つのみ
        const base = 1/(
          img1.width*img2.height
          +img2.width*img1.height
        );
        const width = (_100-120)*img1.width*img2.width*base;
        const height1 = width*img1.height/img1.width;
        const height2 = width*img2.height/img2.width;
        layout.push(
          <div className={styles.verticalFrame} key={key}>
            <GalleryImage data={img1} width={width} height={height1} index={i}/>
            <GalleryImage data={img2} width={width} height={height2} index={i+1}/>
          </div>
        );
        i += 2;
        key+=1;
      }else{
        //3つ縦
        const base = 1/(
          img1.width*img2.width*img3.height
          +img2.width*img1.height*img3.width
          +img3.width*img2.height*img1.width
        );
        const width_base = _100-160;
        const width = img1.width*img2.width*img3.width*base*width_base;
        const height1 = width*img1.height/img1.width;
        const height2 = width*img2.height/img2.width;
        const height3 = width*img3.height/img3.width;
        layout.push(
          <div className={styles.verticalFrame} key={key}>
            <GalleryImage data={img1} width={width} height={height1} index={i}/>
            <GalleryImage data={img2} width={width} height={height2} index={i+1}/>
            <GalleryImage data={img3} width={width} height={height3} index={i+2}/>
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

