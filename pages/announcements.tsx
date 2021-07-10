import React, { FC } from "react";

import Link from "next/link";
import { Layout } from "../Components/Layout";
import { Header } from '../Components/Header';

//import 'bootstrap/dist/css/bootstrap.css';
import styles from "../styles/Home.module.css";
export default function Faq() {
  return(
    <Layout>
           <Header headerImgClass="announcements-header">
         <div className={styles.header_text}>
       <h1 className={styles.header_heading}>ANNOUNCEMENTS</h1>
                <p className={styles.header_description}>KEEP YOURSELF UPDATED WITH WHAT'S HAPPENING</p>
                </div>
       </Header>
    
    </Layout>
  )
}
