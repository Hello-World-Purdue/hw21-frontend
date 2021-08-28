import React, { FC } from "react";

import Link from "next/link";
import Image from "next/image";

//import 'bootstrap/dist/css/bootstrap.css';
import styles from "../styles/Home.module.css";

type FooterProps = {};

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <Image src="/logo.png" layout="intrinsic" width={50} height={50}></Image>
      <div className={styles.topNav}>
        {/* className was previously styles.topNav*/}

        {/* We'll deal with active pages after */}
        <a href="/schedule">Home</a>
        {/* <a className={styles.active} href="/">Home</a> */}
        <a href="/schedule">Schedule</a>
        <a href="/announcements">Announcements</a>

        <a href="/faq">FAQ's</a>
        {/* Find a way to center big old logo img vertically */}
        {/* the issue of vertical alignment only happens when I wrap the img with an <a>*/}

        <a href="/sponsors">Sponsors</a>
      </div>
      <div className="footer-social-media">
        <a href="https://www.facebook.com/helloworldpurdue/">
          <Image src="/facebook.png" height={30} width={30}></Image>
        </a>
        <a href="https://www.instagram.com/helloworldpurdue/?hl=en">
          <Image src="/instagram.png" height={30} width={30}></Image>
        </a>
      </div>
    </footer>
  );
};
