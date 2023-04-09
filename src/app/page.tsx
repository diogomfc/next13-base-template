import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.thirteen}>
          <h1 className={inter.className}>
            Base Template Next, TypeScript, Prettier e Eslint
          </h1>
        </div>
      </div>
    </main>
  );
}
