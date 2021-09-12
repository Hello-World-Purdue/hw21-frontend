import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Header } from "../Components/Header";
import { Layout } from "../Components/Layout";
import { Resource } from "../Components/Resource";
import React, { FC, Fragment } from "react";
import Image from "next/image";

export interface ResourcesData {
  name: string;
  details: string;
  link: string;
}

const resourcesData: ResourcesData[] = [
  {
    name: "RESOURCE NAME",
    details: "This is the details for the resource 1",
    link: "https://google.com",
  },
  {
    name: "RESOURCE NAME",
    details: "This is the details for the resource 2",
    link: "https://google.com",
  },
  {
    name: "RESOURCE NAME",
    details: "This is the details for the resource 3",
    link: "https://google.com",
  },
  {
    name: "RESOURCE NAME",
    details: "This is the details for the resource 4",
    link: "https://google.com",
  },
  {
    name: "RESOURCE NAME",
    details: "This is the details for the resource 5",
    link: "https://google.com",
  },
  {
    name: "RESOURCE NAME",
    details: "This is the details for the resource 6",
    link: "https://google.com",
  },
];

export default function Resources() {
  return (
    <div className={styles.resources}>
      <Head>
        <title>Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Header headerImgClass="resources-header">
          {/* <div className={styles.header_text}>
            <h1 className={styles.header_heading}>RESOURCES</h1>
            <p className={styles.header_description}>
              SEE WHAT OUR SPONSORS HAVE TO OFFER
            </p>
          </div> */}
        </Header>

        <div style={{ textAlign: "center" }}>
          <Image
            className="coming-soon"
            src="/coming_soon.png"
            height={700}
            width={700}
          ></Image>
        </div>

        {/* <Fragment>
          <Resource
            resourcesData={resourcesData}
            headingColumns={["name", "details"]}
          />
        </Fragment> */}
      </Layout>
    </div>
  );
}
