import Head from 'next/head'
import React, { Fragment, useContext, useEffect, useState } from 'react';
import Table from '../Components/Table';
import { Layout } from '../Components/Layout';
import styles from '../styles/Home.module.css'
import UserContext from '../context/UserContext';
export interface HackerData {
  name: string,
  email: string,
  // major: string,
  // gender: string,
  // year: string,
  // hackathons: string,
  // diet: string,
  // resume: string,
  // st_int: string,
  // st_ext: string
  rsvp: string,
  checkedIn: string,
  role: string,
  updatedAt: string,

}

export default function Admin_Dashboard() {
  const [allUsers, setAllUsers] = useState([]);
  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext.getUsers()
      .then(users => {
        console.log("USERS: ", users);
        let count = 0;
        users.users.map((user) => {
          if (user.rsvp) {
            count++;
          }
        })
        console.log("COUNT: ", count);
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setAllUsers(users.users.map((user) => {
          return {
            name: user.name,
            email: user.email,
            rsvp: user.rsvp ? "True" : "False",
            checkedIn: user.checkedIn ? "True" : "False",
            role: user.role,
            updatedAt: user.updatedAt.toLocaleString('en-US', options)
          }
        }))
      })
      .catch()
  }, [userContext])

  return (
    <Layout>

      <div className={styles.admin_dashboard}>
        <Head>
          <title>Admin Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.admin_dashboard_header}>
          <div style={{ fontSize: 30, fontStyle: 'italic', paddingTop: 20, paddingBottom: 20 }}>
            APPLICANTS
          </div>
        </div>
        <div style=
          {{
            backgroundColor: 'white',
            width: '100%',
            borderLeft: '2px solid black',
            borderRight: '2px solid black',
            borderBottom: '2px solid black',
            marginBottom: '-2px'
          }}>
          <div style={{ paddingTop: 10, paddingBottom: 10 }}>
          </div>
        </div>

        {/* Hacker data table */}
        <main className={styles.main}>
          <Fragment>
            <Table
              tableData={allUsers}
              headingColumns={['Name', 'Email', 'RSVP', 'Checked In', 'Role', 'Updated At']}
              title="APPLICANTS"
            />
          </Fragment>
        </main>

      </div>
    </Layout>
  )
}
