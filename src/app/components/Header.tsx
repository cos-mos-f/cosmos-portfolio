import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>My Portfolio</div>
      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
