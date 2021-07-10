
import React, { FC } from 'react';

import Link from 'next/link'


//import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/Home.module.css'

import { Navbar } from './Navbar';
import { ImageHeader } from './ImageHeader';
type HeaderProps = {
  headerImgClass: string,
  }
  
  export const Header: FC<HeaderProps & React.HTMLAttributes<HTMLDivElement>> = ({ headerImgClass }) => {
console.log("is Header run twice?");
    return (
      
      <ImageHeader headerImgClass={headerImgClass}>
        <Navbar></Navbar>
        </ImageHeader>

      
    );
  }
