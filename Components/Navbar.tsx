import React, { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import $ from 'jquery';
import Popper from 'popper.js';

import styles from '../styles/Home.module.css';

type NavbarProps = {};

const onLoginRegisterClicked = () => {
  location.href = '/auth/login';
};

export const Navbar: FC<NavbarProps> = () => {
  function toggleNavbar() {}

  return (
    <div className={styles.topNav}>
      <nav className="navbar navbar-expand-lg navbar-dark  ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        {/* className was previously styles.topNav*/}

        {/* We'll deal with active pages after */}
        {/* <a className={styles.active} href="/">Home</a> */}
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/schedule">
                Schedule
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/announcements">
                Announcements
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/faq">
                FAQ's
              </a>
            </li>
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
            <li className="nav-item">
              {' '}
              <a className="nav-link" href="/resources">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sponsors">
                Sponsors
              </a>
            </li>
            {/* IF ADMIN */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link href="/admin_dashboard">
                    <a className="dropdown-item">Admin Dashboard</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="dropdown-item">Announcements</a>
                  </Link>
                </li>
              </ul>
            </li>
            {/* ELSE */}
          </ul>
        </div>
        <button className="login-register-button"> LOGIN/REGISTER</button>
      </nav>
    </div>
  );
};
