import React, { FC } from "react";

import Link from "next/link";
import Image from "next/image";

import $ from 'jquery';
import Popper from 'popper.js';

import styles from "../styles/Home.module.css";



type NavbarProps = {};

export const Navbar: FC<NavbarProps> = () => {
  function toggleNavbar() {
    
  }


  return (
    <div className={styles.topNav}>
      <nav className="navbar navbar-expand-lg navbar-dark">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
      {/* className was previously styles.topNav*/}
     
      {/* We'll deal with active pages after */}
      {/* <a className={styles.active} href="/">Home</a> */}
      <div className="collapse navbar-collapse" id="navbar">
      <ul className="navbar-nav">
      <li className="nav-item"><a className="nav-link" href="/schedule">Schedule</a></li>
      <li className="nav-item"><a className="nav-link" href="/announcements">Announcements</a></li>
      <li className="nav-item"><a className="nav-link" href="/faq">FAQ's</a></li>
      </ul>
      </div>
      {/* Find a way to center big old logo img vertically */}
      {/* the issue of vertical alignment only happens when I wrap the img with an <a>*/}
     
      <a className="navbar-brand d-flex" href="/">
        
        <Image
          src="/logo.png"
          layout="intrinsic"
          width={50}
          height={50}
        ></Image>
      </a>

      
      <div className="collapse navbar-collapse" id="navbar">
      <ul className="navbar-nav">
      <li className="nav-item"> <a  className="nav-link" href="/resources">Resources
       </a></li>
       <li className="nav-item"><a  className="nav-link" href="/sponsors">Sponsors</a></li>
      {/* IF ADMIN */}
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>Manage</button>
        <div className={styles.dropdownContent}>
        <li className="nav-item">  <a  className="nav-link" href="/admin_dashboard">Admin Dashboard</a></li>
        <li className="nav-item"> <a className="nav-link" href="#">
            Announcements
            </a> </li>
         
        </div>
      </div>
      {/* ELSE */}
      </ul>
      </div>
      <button className="login-register-button "> LOGIN/REGISTER</button>
   
      </nav>
    </div>

  );
};