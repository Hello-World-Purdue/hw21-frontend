import Link from 'next/link'
import Head from 'next/head'

import React, { FC, Fragment } from 'react';

import Table from '../Components/Table';
import { Layout } from '../Components/Layout';

import styles from '../styles/Home.module.css'
export interface HackerData {
  name: string,
  email: string,
  major: string,
  gender: string,
  year: string,
  hackathons: string,
  diet: string,
  resume: string,
  st_int: string,
  st_ext: string
}

const hackerData: HackerData[] = [
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
    email: 'h1yungpark@gmail.com',
    major: 'Computer Science',
    gender: 'Male',
    year: 'Junior',
    hackathons: 'Hello World',
    diet: 'None',
    resume: 'Link',
    st_int: 'Link',
    st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
  email: 'h1yungpark@gmail.com',
  major: 'Computer Science',
  gender: 'Male',
  year: 'Junior',
  hackathons: 'Hello World',
  diet: 'None',
  resume: 'Link',
  st_int: 'Link',
  st_ext: 'Link'
  },
  {
    name: 'Daniel Park',
  email: 'h1yungpark@gmail.com',
  major: 'Computer Science',
  gender: 'Male',
  year: 'Junior',
  hackathons: 'Hello World',
  diet: 'None',
  resume: 'Link',
  st_int: 'Link',
  st_ext: 'Link'
  },
];


export default function Admin_Dashboard() {
    return (
      <Layout>
        <div className={styles.admin_dashboard}>
          <Head>
            <title>Admin Dashboard</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

            <div className={styles.admin_dashboard_header}>
              <div style={{fontSize:30, fontStyle:'italic', paddingTop:20, paddingBottom:20}}>
                APPLICANTS
              </div>
            </div>
            <div style=
            {{
              backgroundColor:'white', 
              width:'100%', 
              borderLeft: '2px solid black',
              borderRight: '2px solid black',
              borderBottom: '2px solid black',
              marginBottom: '-2px'
            }}>
              <div style={{paddingTop:10, paddingBottom:10}}>
              </div>
            </div>
          
          {/* Hacker data table */}
          <main className={styles.main}>
            <Fragment>
              <Table
                tableData={hackerData}
                headingColumns={['Name', 'Email', 'Major', 'Gender', 'Year', 'Hackathons', 'Diet Restrictions', 'Resume', 'States Internal', 'States External']}
                title="APPLICANTS"
              />
            </Fragment>
          </main>
    
        </div>
        </Layout>
      )
}
