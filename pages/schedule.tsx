import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { FC, Fragment } from 'react';
import { Layout } from '../Components/Layout';
import {Event} from '../Components/Event';
import { Header } from '../Components/Header';

export interface EventsData {
  name: string,
  times: string,
  locations: string,
  details: string,
  happened: boolean
}

const eventsData: EventsData[] = [
  {
    name: 'EVENTS NAME',
    times: 'June 28',
    locations: 'Location',
    details: 'This is the details for the event 1',
    happened: false
  },
  {
    name: 'EVENTS NAME',
    times: 'June 28',
    locations: 'Location',
    details: 'This is the details for the event 2',
    happened: false
  },
  {
    name: 'EVENTS NAME',
    times: 'June 28',
    locations: 'Location',
    details: 'This is the details for the event 3',
    happened: false
  },
  {
    name: 'EVENTS NAME',
    times: 'June 28',
    locations: 'Location',
    details: 'This is the details for the event 5',
    happened: false
  },
  {
    name: 'EVENTS NAME',
    times: 'June 28',
    locations: 'Location',
    details: 'This is the details for the event 6',
    happened: false
  },
  {
    name: 'EVENTS NAME',
    times: 'June 28',
    locations: 'Location',
    details: 'This is the details for the event 1',
    happened: true
  },
  {
    name: 'EVENTS NAME',
    times: 'June 28',
    locations: 'Location',
    details: 'This is the details for the event 2',
    happened: true
  },
  {
    name: 'EVENTS NAME',
    times: 'June 28',
    locations: 'Location',
    details: 'This is the details for the event 1',
    happened: true
  },
  {
    name: 'EVENTS NAME',
    times: 'June 28',
    locations: 'Location',
    details: 'This is the details for the event 2',
    happened: true
  },
  {
    name: 'EVENTS NAME',
    times: 'June 28',
    locations: 'Location',
    details: 'This is the details for the event 3',
    happened: true
  },
]

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
       
       <Fragment>
          <Event eventsData={eventsData} 
              headingColumns={['name', 'times', 'locations', 'details']}
          />
        </Fragment>
      </Layout>
    </div>
  )
}
