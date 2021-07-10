import React, { FC } from "react";
import styles from "../styles/Home.module.css";

import Link from "next/link";
import faqList from "../assets/questions";

export default function Faq() {
  return (
    <div className={styles.faq_main}>
      <div className={styles.faq_header}>
        <h1 className={styles.faq_heading}>FAQ</h1>
        <h3 className={styles.faq_description}>FREQUENTLY ASKED QUESTIONS</h3>
      </div>
      <div className={styles.faq_content}>{faqList}</div>
    </div>
  );
}
