import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.greeting}>Hello 👋 I’m Jason</h1>
      <p className={styles.description}>
        I’m a software developer who loves building practical, human-focused solutions.
        I’m especially interested in health tech, backend systems, and products that make
        everyday experiences simpler and more intuitive.
      </p>
      <Link href="/projects" className={styles.button}>
        Check out my projects
      </Link>
    </div>
  );
}
