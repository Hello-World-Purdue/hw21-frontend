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
       
        {/* upcoming events */}
        <div>
          <p style={{textAlign:'right', fontWeight:'bold'}}>UPCOMING<br></br>EVENTS</p>
        </div>
        <div style={{
          backgroundColor:'orange', maxWidth:'10%', marginLeft:'auto'
          }}>
          <p>&nbsp;</p>
        </div>

        <div className={styles.eventsgrid}>
          <div className={styles.event_container_1r}>
            <div className={styles.event_content}>
              <p style={{color:'white'}}>EVENT NAME</p>
              <p style={{color:'white'}}>June 28</p>
              <p style={{color:'white'}}>Location</p>
              <p style={{color:'yellow'}}>Details</p>
            </div>
          </div>
          <div className={styles.event_container_1r}>
            <div className={styles.event_content}>
              <p style={{color:'white'}}>EVENT NAME</p>
              <p style={{color:'white'}}>June 28</p>
              <p style={{color:'white'}}>Location</p>
              <p style={{color:'yellow'}}>Details</p>
            </div>
          </div>
          <div className={styles.event_container_1r}>
            <div className={styles.event_content}>
              <p style={{color:'white'}}>EVENT NAME</p>
              <p style={{color:'white'}}>June 28</p>
              <p style={{color:'white'}}>Location</p>
              <p style={{color:'yellow'}}>Details</p>
            </div>
          </div>
          <div className={styles.event_container_1b}>
            <div className={styles.event_content}>
              <p style={{color:'white'}}>EVENT NAME</p>
              <p style={{color:'white'}}>June 28</p>
              <p style={{color:'white'}}>Location</p>
              <p style={{color:'yellow'}}>Details</p>
            </div>
          </div>
          <div className={styles.event_container_1b}>
            <div className={styles.event_content}>
              <p style={{color:'white'}}>EVENT NAME</p>
              <p style={{color:'white'}}>June 28</p>
              <p style={{color:'white'}}>Location</p>
              <p style={{color:'yellow'}}>Details</p>
            </div>
          </div>
          <div className={styles.event_container_1b}>
            <div className={styles.event_content}>
              <p style={{color:'white'}}>EVENT NAME</p>
              <p style={{color:'white'}}>June 28</p>
              <p style={{color:'white'}}>Location</p>
              <p style={{color:'yellow'}}>Details</p>
            </div>
          </div>
        </div>

        {/* past events */}
        <div>
          <p style={{textAlign:'left', fontWeight:'bold'}}>PAST<br></br>EVENTS</p>
        </div>
        <div style={{backgroundColor:'skyblue', maxWidth:'10%'}}>
          <p>&nbsp;</p>
        </div>

        <div className={styles.eventsgrid}>
          <div className={styles.event_container_2r}>
            <div className={styles.event_content}>
              <p style={{color:'white'}}>EVENT NAME</p>
              <p style={{color:'white'}}>June 28</p>
              <p style={{color:'white'}}>Location</p>
              <p style={{color:'yellow'}}>Details</p>
            </div>
          </div>
          <div className={styles.event_container_2r}>
            <div className={styles.event_content}>
              <p style={{color:'white'}}>EVENT NAME</p>
              <p style={{color:'white'}}>June 28</p>
              <p style={{color:'white'}}>Location</p>
              <p style={{color:'yellow'}}>Details</p>
            </div>
          </div>
          <div className={styles.event_container_2r}>
            <div className={styles.event_content}>
              <p style={{color:'white'}}>EVENT NAME</p>
              <p style={{color:'white'}}>June 28</p>
              <p style={{color:'white'}}>Location</p>
              <p style={{color:'yellow'}}>Details</p>
            </div>
          </div>
          <div className={styles.event_container_2b}>
            <div className={styles.event_content}>
              <p style={{color:'white'}}>EVENT NAME</p>
              <p style={{color:'white'}}>June 28</p>
              <p style={{color:'white'}}>Location</p>
              <p style={{color:'yellow'}}>Details</p>
            </div>
          </div>
          <div className={styles.event_container_2b}>
            <div className={styles.event_content}>
              <p style={{color:'white'}}>EVENT NAME</p>
              <p style={{color:'white'}}>June 28</p>
              <p style={{color:'white'}}>Location</p>
              <p style={{color:'yellow'}}>Details</p>
            </div>
          </div>
          <div className={styles.event_container_2b}>
            <div className={styles.event_content}>
              <p style={{color:'white'}}>EVENT NAME</p>
              <p style={{color:'white'}}>June 28</p>
              <p style={{color:'white'}}>Location</p>
              <p style={{color:'yellow'}}>Details</p>
            </div>
          </div>
        </div>

      </Layout>
    </div>
  )
}
