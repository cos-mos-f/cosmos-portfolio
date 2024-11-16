import styles from './styles/Layout.module.css';

export default function Home() {
  return (
    <div>
      {/* ヘッダー */}
      <header className={styles.header}>
        <div>My Portfolio</div>
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my works and experiences</p>
      </section>

      {/* セクション */}
      <section id="about" className={styles.section}>
        <h2>About Me</h2>
        <p>Here is a brief introduction about myself.</p>
      </section>

      <section id="works" className={styles.section}>
        <h2>Works</h2>
        <p>Explore my latest projects and designs.</p>
      </section>

      <section id="contact" className={styles.section}>
        <h2>Contact</h2>
        <p>Feel free to reach out through my social links.</p>
      </section>

      {/* フッター */}
      <footer className={styles.footer}>
        <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}


