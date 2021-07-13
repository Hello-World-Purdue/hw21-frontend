import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Header } from '../Components/Header';

export default function Home() {
  return (
    <div className={styles.resources}>
      <Head>
        <title>Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* nav bar and header*/}
      {/* nav bar */}
      <Header></Header>
      {/* header stuff */}
      <body style={{width:'100%'}}>
            <div className={styles.resources_header}>
              <br></br><br></br>
              <h1 className={styles.header_heading}>RESOURCES</h1>
              <p className={styles.header_text}>SEE WHAT OUR SPONSORS HAVE TO OFFER</p>
            </div>
      </body>

      {/* <main className={styles.main}>

        <div className={styles.grid}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h3>Resource &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>
    
              <a href="https://nextjs.org/docs" className={styles.card}>
                 <h3>Documentation &rarr;</h3>
                 <p>Find in-depth information about Next.js features and API.</p>
              </a>
    
              <a href="https://nextjs.org/docs" className={styles.card}>
                 <h3>Documentation &rarr;</h3>
                 <p>Find in-depth information about Next.js features and API.</p>
              </a>
    
              <a href="https://nextjs.org/learn" className={styles.card}>
                <h3>Learn &rarr;</h3>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>
    
              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className={styles.card}
              >
                <h3>Examples &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>
    
              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
              >
                <h3>Deploy &rarr;</h3>
                <p>
                  Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
              </a>
            </div>

      </main> */}

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
