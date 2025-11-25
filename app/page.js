'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './page.module.css';
import BackgroundAnimation from './components/BackgroundAnimation';

export default function Home() {
  const [text, setText] = useState('');
  const fullText = "Hello 👋 I’m Jason";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Typing speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.main}>
      <BackgroundAnimation />
      <h1 className={styles.greeting}>
        {text}
        <span className={styles.cursor}>|</span>
      </h1>
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
