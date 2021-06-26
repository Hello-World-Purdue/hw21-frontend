
import React, { FC } from 'react';

import Link from 'next/link'


//import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/Home.module.css'


type FooterProps = {
 
  }
  
  export const Footer: FC<FooterProps> = () => {


  
    return (
        <footer className={styles.footer}>
        </footer>
      
    );
  }
