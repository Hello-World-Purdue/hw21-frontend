import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { FC, Fragment } from 'react';
import { Header } from '../Components/Header';
import { Layout } from '../Components/Layout';
export default function Sponsors() {
  return (
    <div className={styles.resources}>
      <Head>
        <title>Sponsors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <Header headerImgClass="sponsor-header">
         {/* <div className={styles.header_text}>
       <h1 className={styles.header_heading}>SPONSORS</h1>
                <p className={styles.header_description}>SEE WHAT OUR SPONSORS HAVE TO OFFER</p>
                </div> */}
       </Header>
    
      </Layout>
    </div>
  )
}
