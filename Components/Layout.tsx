import React, { FC } from "react";

import Link from "next/link";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

//import 'bootstrap/dist/css/bootstrap.css';
import styles from "../styles/Home.module.css";

type LayoutProps = {
  children?: React.ReactNode;
};
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="body" >
    <div className="page-container">
      <Header></Header>
  
      {children}
      <Footer></Footer>
    </div>
    </div>

  );
};
