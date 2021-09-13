import React, { FC } from "react";

import Link from "next/link";
import Image from "next/image";

//import 'bootstrap/dist/css/bootstrap.css';
import styles from "../styles/Home.module.css";

type FooterProps = {};

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <Image src="/logo.png" layout="intrinsic" width={60} height={60}></Image>
      <div className={styles.footerNav}>
        {/* className was previously styles.topNav*/}

        {/* We'll deal with active pages after */}
        <a href="/">Home</a>
        {/* <a className={styles.active} href="/">Home</a> */}
        <a href="/schedule">Schedule</a>
        <a href="/announcements">Announcements</a>

        <a href="/faq">FAQ's</a>
        {/* Find a way to center big old logo img vertically */}
        {/* the issue of vertical alignment only happens when I wrap the img with an <a>*/}

        <a href="/sponsors">Partners</a>
      </div>
      <div className={styles["footer-social-media"]}>
        <a
          href="https://www.facebook.com/helloworldpurdue/"
          target="_blank"
          style={{ margin: "10px" }}
        >
          <Image src="/facebook.png" height={30} width={30}></Image>
        </a>
        <a
          href="https://www.instagram.com/helloworldpurdue/?hl=en"
          target="_blank"
          style={{ margin: "10px" }}
        >
          <Image src="/instagram.png" height={30} width={30}></Image>
        </a>
      </div>
    </footer>
  );
};
