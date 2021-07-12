import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Header } from '../Components/Header';
import { Layout } from '../Components/Layout';
import Resource from '../Components/Resource';
import React, { FC, Fragment } from 'react';

export interface ResourcesData {
  name: string,
  details: string
}

const resourcesData: ResourcesData[] = [
  {
    name: 'RESOURCE NAME',
    details: 'This is the details for the resource 1'
  },
  {
    name: 'RESOURCE NAME',
    details: 'This is the details for the resource 2'
  },
  {
    name: 'RESOURCE NAME',
    details: 'This is the details for the resource 3'
  },
  {
    name: 'RESOURCE NAME',
    details: 'This is the details for the resource 4'
  },
  {
    name: 'RESOURCE NAME',
    details: 'This is the details for the resource 5'
  },
  {
    name: 'RESOURCE NAME',
    details: 'This is the details for the resource 6'
  },
]

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

        <Fragment>
          <Resource resourcesData={resourcesData} 
              headingColumns={['name', 'details']}
          />
        </Fragment>

        </div>
      </Layout>
</div>
    
  )
}
