import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";

let image;

const setImage = (header) => {
  if (header == "Full Name") {
    image = <img src={require("../../images/profile/profile_face.svg")} />;
  } else if (header == "Email") {
    image = <img src={require("../../images/profile/profile_email.svg")} />;
  } else {
    image = <img src={require("../../images/profile/profile_status.svg")} />;
  }
};

export default function ProfileInfo(props) {
  const [email, setEmail] = useState(props.email);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  setImage(props.header);
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.profile_info}>
        {image}
        <div className={styles.profile_container}>
          <div className={styles.profile_header}>
            <h1> {props.header} </h1>
          </div>
          <div className={styles.profile_data}>
            <h1>{props.placeholder}</h1>
          </div>
        </div>
      </div>
    </form>
  );
}
