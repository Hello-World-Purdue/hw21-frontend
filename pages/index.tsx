import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Header } from "../Components/Header";
import { Layout } from "../Components/Layout";
import { Row } from "react-bootstrap";
import { sponsors } from "../util/sponsors";
import { aboutUs } from "../util/about";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { useRouter } from "next/router";
export default function Index() {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();
  return (
    <div className={styles.resources}>
      <Layout>
        <Header headerImgClass="index-header">
          {/* <img src="../images/logo.png"></img> */}
          {/* <button className="apply-now-button">
            <a style={{ textDecoration: 'none', color: 'white' }} href={isAuthenticated ? "/appPage": "/auth/login"}>Apply now!</a>
          </button> */}
          {/* TODO: Add Helloworld img , rocket img and apply now button  */}
        </Header>
        {/* <LandingPage /> */}

        <div className="date-and-why-us-section">
          <div className="date-section ">
            <div className="container">
              <h1 className="date-h1">
                SEPTEMBER <br></br>18TH-19TH
              </h1>
              <Row style={{ width: "100%" }}>
                <p className="date-paragraph">
                  <div className={styles["orange-rectangle"]}></div>Meet us
                  there.
                </p>
              </Row>
              <br />
              <button
                className="date-button"
                onClick={() => {
                  router.push("/schedule");
                }}
              >
                VIEW SCHEDULE
              </button>
              {/* <Image src="/planet.png"layout='fill'
             objectFit='contain'></Image> */}
            </div>
          </div>

          <div className="why-us-section">
            <div className="container">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <div className="about-us-container">
                <div className="description">
                  <div>
                    <h1 className="why-us-h1">ABOUT US</h1>
                    <p className="why-us-paragraph">
                      <a className="why-us-a" href="/faq">
                        Have questions? Check out some FAQ's
                        <span>
                          <Image
                            src="/arrow_button.png"
                            width={20}
                            height={20}
                          ></Image>
                        </span>
                      </a>
                    </p>
                  </div>
                  <div className="about-us-paragraph">{aboutUs}</div>
                </div>
                <Image
                  className="sponsors-sec-img"
                  src="/about-us.png"
                  height={650}
                  width={650}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="sponsors-section">
          <h1 className="sponsors-h1">PARTNERS</h1>
          <div className="container sponsors-sec-container">
            {/* List of sponsors */}
            {sponsors.map((sponsor) => {
              return (
                <Image
                  className="sponsors-sec-img"
                  key={sponsor.name}
                  src={`/sponsors/${sponsor.name}_logo.png`}
                  height={sponsor.height}
                  width={sponsor.width}
                ></Image>
              );
            })}
            <br />
            <br />
            <button className="learn-more-button">
              <a
                href="/sponsors"
                style={{ textDecoration: "none", fontFamily: "BackIssuesBB" }}
              >
                LEARN MORE
              </a>
            </button>
          </div>
        </div>
      </Layout>

      {/* <main className={styles.main}>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Resource &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

      </main> */}
    </div>
  );
}
