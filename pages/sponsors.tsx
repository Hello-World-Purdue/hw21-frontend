import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { FC, Fragment } from "react";
import { Header } from "../Components/Header";
import { Layout } from "../Components/Layout";
import { sponsors } from "../util/sponsors";
import Image from "next/image";
export default function Sponsors() {
  return (
    <div className={styles.resources}>
      <Head>
        <title>Sponsors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header headerImgClass="sponsor-header">
          {/* <div className={styles.header_text}>
       <h1 className={styles.header_heading}>SPONSORS</h1>
                <p className={styles.header_description}>SEE WHAT OUR SPONSORS HAVE TO OFFER</p>
                </div> */}
        </Header>
        <div>
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className={styles.sponsor_card}
              style={{
                backgroundColor: sponsor.background,
                color:
                  sponsor.background === "rgb(255,230,43)" ? "black" : "white",
              }}
            >
              <h1>{sponsor.name}</h1>
              <div className="" style={{ textAlign: "center" }}>
                <Image
                  src={`/sponsors/${sponsor.name}_logo.png`}
                  layout="intrinsic"
                  width={sponsor.width / 2}
                  height={sponsor.height / 2}
                ></Image>
              </div>
              <p className={styles.faq_questionText}>{sponsor.about}</p>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}
