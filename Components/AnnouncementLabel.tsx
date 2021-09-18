import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/announcements.module.css";

const CustomLabel: React.FC<{
  annType:
    | "Events"
    | "Food"
    | "Judging"
    | "Logistics"
    | "Sponsor"
    | "Miscellaneous";
}> = (props) => {
  const labelClasses = [styles.label];

  switch (props.annType) {
    case "Events":
      labelClasses.push(styles.events);
      break;
    case "Food":
      labelClasses.push(styles.food);
      break;
    case "Judging":
      labelClasses.push(styles.judging);
      break;
    case "Logistics":
      labelClasses.push(styles.logistics);
      break;
    case "Sponsor":
      labelClasses.push(styles.sponsor);
      break;
    case "Miscellaneous":
      labelClasses.push(styles.misc);
      break;
  }

  return (
    <div className={labelClasses.join(" ")}>
      {props.annType === "Miscellaneous"
        ? "MISC"
        : props.annType === "Sponsor"
        ? "Partner"
        : props.annType.toUpperCase()}
    </div>
  );
};

export default CustomLabel;
