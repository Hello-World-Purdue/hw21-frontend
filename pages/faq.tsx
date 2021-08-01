import React, { FC } from "react";
import styles from "../styles/Home.module.css";

import Link from "next/link";
<<<<<<< HEAD
import faqList from "../assets/questions";

const submitHandler = (e) => {
  e.preventDefault();
};
=======
import { Layout } from "../Components/Layout";
import { Header } from '../Components/Header';
>>>>>>> 12ff6382d95d84e5967fb7b6d21b339505d14581

export default function Faq() {
<<<<<<< HEAD
  return (
    <div className={styles.faq_main}>
      <div className={styles.faq_header}>
        <h1 className={styles.faq_heading}>FAQ</h1>
        <h3 className={styles.faq_description}>FREQUENTLY ASKED QUESTIONS</h3>
      </div>
      <div className={styles.faq_content}>{faqList}</div>
      <div className={styles.faq_other}>
        <div className={styles.faq_otherHeader}>
          <p className={styles.faq_otherHeading}>HAVE ANY OTHER QUESTIONS?</p>
          <p className={styles.faq_otherDescription}>
            ASK IT HERE OR CONTACT US ON OUR SOCIAL MEDIA
          </p>
        </div>
        <form>
          <div className={styles.faq_formContainer}>
            <div className={styles.faq_inputContainer}>
              <input
                className={styles.faq_input}
                type="text"
                name="name"
                id="name"
                placeholder="YOUR NAME"
              />
              <input
                className={styles.faq_input}
                type="email"
                name="email"
                id="email"
                placeholder="EMAIL ADDRESS"
              />
            </div>
            <textarea className={styles.faq_textArea}></textarea>
          </div>
          <div className={styles.faq_submitContainer}>
            <button
              onClick={submitHandler}
              className={styles.faq_submit}
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
=======
  return(
    <Layout>
           <Header headerImgClass="index-header">
         <div className={styles.header_text}>
       <h1 className={styles.header_heading}>FAQ</h1>
                <p className={styles.header_description}>FREQUENTLY ASKED QUESTIONS</p>
                </div>
       </Header>
    
    </Layout>
  )
>>>>>>> 12ff6382d95d84e5967fb7b6d21b339505d14581
}
