import styles from "../styles/Home.module.css";
import ProfileInfo from "../Components/profile/ProfileInfo";

export default function Profile() {
  return (
    <div className={styles.profile_main}>
      <div className={styles.profile_box}>
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
        <div className={styles.profile_button}>
          <a href="/edit">EDIT PROFILE</a>
        </div>
        <img
          src={require("../images/profile/profile_background.png")}
          alt="W3Schools.com"
        ></img>
      </div>
    </div>
  );
}