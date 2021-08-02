import styles from "../styles/Home.module.css";
import ProfileInfo from "../Components/profile/ProfileInfo";
import Image from "next/image";
import { Layout } from "../Components/Layout";

const onEditButtonClicked = () => {
  location.href = "/edit";
};

export default function Profile() {
  return (
    <Layout>
      <div className={styles.profile_main}>
        <div className={styles.profile_box}>
          <div className={styles.profile_account}>
            <Image
              src={require("../images/profile/profile_account.svg")}
              layout="fill"
            />
          </div>
          <ProfileInfo header="Full Name" placeholder="First Last" />
          <ProfileInfo header="Email" placeholder="firstlast@purdue.edu" />
          <ProfileInfo header="Application Status" placeholder="Pending" />
          <button
            onClick={onEditButtonClicked}
            className={styles.profile_button}
          >
            EDIT PROFILE
          </button>
        </div>
      </div>
    </Layout>
  );
}
