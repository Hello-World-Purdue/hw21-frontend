import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <div className={styles.topNav}>
            <a className={styles.active} href="#home">Home</a>
            <a href="#schedule">Schedule</a>
            <a href="#faq">FAQ</a>
            <a href="#sponsors">Sponsors</a>
            <Link href="/"><a>Resources</a></Link>
            <a href="#announcements">Announcements</a>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>Manage 
              </button>
              <div className={styles.dropdownContent}>
                <Link href="/admin_dashboard"><a>Admin Dashboard</a></Link>
                <Link href="#"><a>Announcements</a></Link>
                <Link href="#"><a>Link 3</a></Link>
              </div>
            </div> 
          </div>
        </header>


        <h1 className={styles.title}>
          Resources
        </h1>

        <p className={styles.description}>
          resources from workshops as well as other materials
        </p>

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

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World 2021
        </a>
      </footer>
    </div>
  )
}
