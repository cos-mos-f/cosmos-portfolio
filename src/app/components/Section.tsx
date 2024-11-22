import styles from '../styles/Section.module.css';

type SectionProps = {
  id: string;
  title: string;
  content: string;
};

const Section = ({ id, title, content }: SectionProps) => {
  return (
    <section id={id} className={styles.section}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default Section;
