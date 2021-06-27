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
        {/* header stuff */}
        <div className={styles.schedules_header}>
          <br></br><br></br>
          <h1 className={styles.header_heading}>SCHEDULES</h1>
          <p className={styles.header_text}>SEE WHAT'S COMING UP AND DON'T MISS OUT!</p>
        </div>

        {/* upcoming events */}
        <div>
          <p style={{textAlign:'right', fontWeight:'bold'}}>UPCOMING<br></br>EVENTS</p>
        </div>
        <div style={{
          backgroundColor:'orange', maxWidth:'10%', marginLeft:'auto'
          }}>
          <p>&nbsp;</p>
        </div>
        {/* past events */}
        <div>
          <p style={{textAlign:'left', fontWeight:'bold'}}>PAST<br></br>EVENTS</p>
        </div>
        <div style={{backgroundColor:'skyblue', maxWidth:'10%'}}>
          <p>&nbsp;</p>
        </div>

      </Layout>
    </div>

  )
}
