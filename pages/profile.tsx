import styles from "../styles/Home.module.css";
import ProfileInfo from "../Components/profile/ProfileInfo";
import Image from "next/image";

const onEditButtonClicked = () => {
  location.href = "/edit";
};

export default function Profile() {
  return (
    <div className={styles.profile_main}>
      <div className={styles.profile_box}>
        <Image
          src={require("../images/profile/profile_account.svg")}
          className={styles.profile_account}
          width="90%"
          height="90%"
        ></Image>
        <ProfileInfo
          image="../../images/profile/profile_face.svg"
          header="Full Name"
          placeholder="First Last"
        />
        <ProfileInfo
          image="../../images/profile/profile_email.svg"
          header="Email"
          placeholder="firstlast@purdue.edu"
        />
        <ProfileInfo
          image="../../images/profile/profile_status.svg"
          header="Application Status"
          placeholder="Pending"
        />
        <button onClick={onEditButtonClicked} className={styles.profile_button}>
          EDIT PROFILE
        </button>
      </div>
    </div>
  );
}
