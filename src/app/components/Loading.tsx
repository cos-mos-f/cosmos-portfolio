import React from "react";
import styles from "../styles/loading.module.css";

const Loading: React.FC = () => {
    const base = process.env.GITHUB_PAGES ? '/cosmos-portfolio/' : './';
  return (
    <div className={styles.loadingWrapper}>
      <img src={`${base}/images/star.svg`} alt="Loading" className={styles.spinner} />
    </div>
  );
};

export default Loading;
