import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

import React, { FC, Fragment } from 'react';
import Table from './Components/Table';

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
            <header>
              <div className={styles.topNav}>
                <a className={styles.active} href="#home">Home</a>
                <a href="#schedule">Schedule</a>
                <a href="#faq">FAQ</a>
                <a href="#sponsors">Sponsors</a>
                <Link href="/"><a>Resources</a></Link>
                <a href="#announcements">Announcements</a>
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}>Manage 
                  </button>
                  <div className={styles.dropdownContent}>
                    <Link href="/admin_dashboard"><a>Admin Dashboard</a></Link>
                    <Link href="#"><a>Announcements</a></Link>
                    <Link href="#"><a>Link 3</a></Link>
                  </div>
                </div> 
              </div>
            </header>
    
    
            <h1 className={styles.title}>
              Admin Dashboard
            </h1>
    
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
