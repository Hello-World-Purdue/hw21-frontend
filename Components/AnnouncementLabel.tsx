import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/announcements.module.css";

const CustomLabel: React.FC<{
	annType: "events" | "food" | "judging" | "logistics" | "sponsor" | "misc";
}> = (props) => {
	const labelClasses = [styles.label];

	switch (props.annType) {
		case "events":
			labelClasses.push(styles.events);
			break;
		case "food":
			labelClasses.push(styles.food);
			break;
		case "judging":
			labelClasses.push(styles.judging);
			break;
		case "logistics":
			labelClasses.push(styles.logistics);
			break;
		case "sponsor":
			labelClasses.push(styles.sponsor);
			break;
		case "misc":
			labelClasses.push(styles.misc);
			break;
	}

	return <div className={labelClasses.join(" ")}>{props.annType.toUpperCase()}</div>;
};

export default CustomLabel;
