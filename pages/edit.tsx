import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Edit() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.profile_main}>
      <form onSubmit={handleSubmit} className={styles.profile_box}>
        <Image
          src={require("../images/profile/profile_account.svg")}
          className={styles.profile_account}
          width="90%"
          height="90%"
        ></Image>

        <div className={styles.profile_info}>
          <Image
            height="80%"
            width="80%"
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
              className={styles.profile_data}
              placeholder="First Last"
            ></input>
          </div>
        </div>
        <div className={styles.profile_info}>
          <Image
            height="80%"
            width="80%"
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
              className={styles.profile_data}
              placeholder="firstlast@purdue.edu"
            ></input>
          </div>
        </div>
        <div className={styles.profile_info}>
          <Image
            height="80%"
            width="80%"
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
        <button className={styles.profile_button}>SUBMIT</button>
      </form>
    </div>
  );
}
