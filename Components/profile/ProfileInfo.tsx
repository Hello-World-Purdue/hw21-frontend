import styles from "../../styles/Home.module.css";

export default function ProfileInfo(props) {
  return (
    <div className={styles.profile_info}>
      <div className={styles.profile_image}>Image</div>
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
