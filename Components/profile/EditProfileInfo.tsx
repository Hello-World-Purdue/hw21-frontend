import styles from "../../styles/Home.module.css";
import Image from "next/image";

let image;

const setImage = (header) => {
  if (header == "Full Name") {
    image = (
      <Image
        height="80%"
        width="80%"
        src={require("../../images/profile/profile_face.svg")}
      />
    );
  } else if (header == "Email") {
    image = (
      <Image
        height="80%"
        width="80%"
        src={require("../../images/profile/profile_email.svg")}
      />
    );
  } else {
    image = (
      <Image
        height="80%"
        width="80%"
        src={require("../../images/profile/profile_status.svg")}
      />
    );
  }
};

export default function EditProfileInfo(props) {
  setImage(props.header);
  return (
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
  );
}
