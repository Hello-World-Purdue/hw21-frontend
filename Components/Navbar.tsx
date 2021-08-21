import React, { FC } from "react";

import Link from "next/link";
import Image from "next/image";

//import 'bootstrap/dist/css/bootstrap.css';
import styles from "../styles/Home.module.css";

type NavbarProps = {};

const onLoginRegisterClicked = () => {
  location.href = "/auth/login";
};

export const Navbar: FC<NavbarProps> = () => {
  return (
    <div className={styles.topNav}>
      {/* className was previously styles.topNav*/}
      <ul>
        {/* We'll deal with active pages after */}
        {/* <a className={styles.active} href="/">Home</a> */}
        <a href="/schedule">Schedule</a>
        <a href="/announcements">Announcements</a>

        <a href="/faq">FAQ's</a>
        {/* Find a way to center big old logo img vertically */}
        {/* the issue of vertical alignment only happens when I wrap the img with an <a>*/}
        <a href="/">
          <Image src="/logo.png" width={50} height={50}></Image>
        </a>

        <Link href="/resources">
          <a>Resources</a>
        </Link>
        <a href="/sponsors">Sponsors</a>

        {/* IF ADMIN */}
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
        {/* ELSE */}
        <button
          className="login-register-button"
          onClick={onLoginRegisterClicked}
        >
          {" "}
          LOGIN/REGISTER
        </button>
      </ul>
    </div>
  );
};
