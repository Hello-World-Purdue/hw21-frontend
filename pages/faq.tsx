import React, { FC, useState } from "react";
import styles from "../styles/Home.module.css";

import { Header } from "../Components/Header";
import { faqList } from "../assets/questions";
import { Layout } from "../Components/Layout";

export default function Faq() {
  const [state, setState] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleChange = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    location.href = `mailto:helloworldpurdue@gmail.com?subject=Query%20About%20Hello%20World&body=${state.question}`
  };


  return (
    <Layout>
      <div className="faq">
        <Header headerImgClass="faq-header">
          {/* <div className={styles.header_text}>
            <h1 className={styles.header_heading}>FAQ</h1>
            <p className={styles.header_description}>
              FREQUENTLY ASKED QUESTIONS
            </p>
          </div> */}
        </Header>
        <div className={styles.faq_main}>
          <div className={styles.faq_content}>{faqList}</div>
          <div className={styles.faq_other}>
            <div className={styles.faq_otherHeader}>
              <p className={styles.faq_otherHeading}>
                HAVE ANY OTHER QUESTIONS?
              </p>
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
                    onChange={handleChange}
                  />
                  <input
                    className={styles.faq_input}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="EMAIL ADDRESS"
                    onChange={handleChange}
                  />
                </div>
                <textarea name='question' onChange={handleChange} className={styles.faq_textArea} />
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
      </div>
    </Layout>
  );
}
