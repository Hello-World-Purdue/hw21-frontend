import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Header } from '../Components/Header';
import { Layout } from '../Components/Layout';

export default function Index() {
  return (
    <div className={styles.resources}>
      <Head>
        <title>Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <Header headerImgClass="index-header">

        {/* <img src="../images/logo.png"></img> */}
        <div className="logo">
      <Image src='/title.png' width={400} height={400}></Image>
      </div>
    {/* TODO: Add Helloworld img , rocket img and apply now button  */}
       </Header>
      <div style={{width:'100%'}}>
        <div className="index-container">
        <div className="title-img">
        <Image src='/title.png'layout='intrinsic' width={100} height={100}></Image></div>
        <div className="date-img">
        <Image src='/date.png'layout='intrinsic'  width={100} height={100}></Image>
        </div>
</div>
      </div>
      </Layout>

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

    </div>
  )
}
