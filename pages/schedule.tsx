import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { FC, Fragment } from 'react';
import { Header } from '../Components/Header';
import { Layout } from '../Components/Layout';
export default function Schedule() {
  return (
    <div className={styles.resources}>
      <Head>
        <title>Schedules</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* nav bar and header*/}
      
      {/* nav bar */}
      <Layout>
      <Header headerImgClass="schedule-header">
         <div className={styles.header_text}>
       <h1 className={styles.header_heading}>SCHEDULE</h1>
                <p className={styles.header_description}>SEE WHAT OUR SPONSORS HAVE TO OFFER</p>
                </div>
       </Header>
            <div >
              <br></br><br></br>
              <h1 className={styles.header_heading}>SCHEDULES</h1>
              <p className={styles.header_description}>SEE WHAT'S COMING UP AND DON'T MISS OUT!</p>
            </div>
            </Layout>
            </div>

  )
}
