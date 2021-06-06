import Link from 'next/link'
import Head from 'next/head'

import React, { FC, Fragment } from 'react';


import Table from '../components/Table';
import { Header } from '../components/Header';

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
        <div className={styles.container}>
          <Head>
            <title>Admin Dashboard</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
        <Header></Header>
    
  
    
            <p className={styles.description}>
              admin dashboard
            </p>
    
            <Fragment>
              <Table 
                tableData={hackerData}
                headingColumns={['Name', 'Email', 'Major', 'Gender', 'Year', 'Hackathons', 'Diet Restrictions', 'Resume', 'States Internal', 'States External']}
                title="Hackers Data"
                
              />
            </Fragment>
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
