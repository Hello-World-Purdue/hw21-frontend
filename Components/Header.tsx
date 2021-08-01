import React, { FC } from "react";

import Link from "next/link";

//import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import styles from "../styles/Home.module.css";

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <div className={styles.topNav}>
        <a className={styles.active} href="#home">
          Home
        </a>
        <a href="/schedule">Schedule</a>
        <a href="/faq">FAQ</a>
        <a href="/profile">Profile</a>
        <a href="/sponsors">Sponsors</a>
        <Link href="/resources">
          <a>Resources</a>
        </Link>
        <a href="/announcements">Announcements</a>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Manage</button>
          <div className={styles.dropdownContent}>
            <Link href="/admin_dashboard">
              <a>Admin Dashboard</a>
            </Link>
            <Link href="#">
              <a>Announcements</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
=======
import styles from '../styles/Home.module.css'

import { Navbar } from './Navbar';
import { ImageHeader } from './ImageHeader';
type HeaderProps = {
  headerImgClass: string,
  }
  
  export const Header: FC<HeaderProps & React.HTMLAttributes<HTMLDivElement>> = ({ headerImgClass, children }) => {
    return (
      
      <ImageHeader headerImgClass={headerImgClass}>
        <Navbar></Navbar>
        {children}
        </ImageHeader>

      
    );
  }
>>>>>>> 12ff6382d95d84e5967fb7b6d21b339505d14581
