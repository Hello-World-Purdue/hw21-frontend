import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Header } from '../Components/Header';
import { Layout } from '../Components/Layout';
export default function Resources() {
  return (
    <div className={styles.resources}>
      <Head>
        <title>Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
 
        <div className={styles.resources}>
        <Head>
          <title>Resources</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <body style={{width:'100%'}}>
              <div className={styles.resources_header}>
                <br></br><br></br>
                <h1 className={styles.header_heading}>RESOURCES</h1>
                <p className={styles.header_text}>SEE WHAT OUR SPONSORS HAVE TO OFFER</p>
              </div>
        </body>

        <footer className={styles.footer}>
        </footer>
        </div>
      </Layout>
</div>
    
  )
}
