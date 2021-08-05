import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import { Layout } from "../Components/Layout";

export default function Edit() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
  };
  return (
    <Layout>
      <div className={styles.profile_main}>
        <form onSubmit={handleSubmit} className={styles.profile_box}>
          <div className={styles.profile_account}>
            <Image
              src={require("../images/profile/profile_account.svg")}
              layout="fill"
            />
          </div>

          <div className={styles.profile_info}>
            <img
              alt="full name"
              src={require("../images/profile/profile_face.svg")}
            />
            <div className={styles.profile_container}>
              <div className={styles.profile_header}>
                <h1>Full Name</h1>
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.profile_input}
                placeholder="First Last"
              ></input>
            </div>
          </div>
          <div className={styles.profile_info}>
            <img
              alt="email"
              src={require("../images/profile/profile_email.svg")}
            />
            <div className={styles.profile_container}>
              <div className={styles.profile_header}>
                <h1>Email</h1>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.profile_input}
                placeholder="firstlast@purdue.edu"
              ></input>
            </div>
          </div>
          <div className={styles.profile_info}>
            <img
              className={styles.profile_image}
              alt="status"
              src={require("../images/profile/profile_status.svg")}
            />
            <div className={styles.profile_container}>
              <div className={styles.profile_header}>
                <h1>Application Status</h1>
              </div>
              <div className={styles.profile_data}>
                <h1>Pending</h1>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="SUBMIT"
            className={styles.profile_button}
          />
        </form>
      </div>
    </Layout>
  );
}
