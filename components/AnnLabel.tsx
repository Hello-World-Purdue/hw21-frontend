import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/ann.module.css";

const CustomButton: React.FC<{
	annType: "events" | "food" | "judging" | "logistics" | "sponsor" | "misc";
}> = (props) => {
	let labelClass: any;

	switch (props.annType) {
		case "events":
			labelClass = styles.eventsLabel;
			break;
		case "food":
			labelClass = styles.foodLabel;
			break;
		case "judging":
			labelClass = styles.judgingLabel;
			break;
		case "logistics":
			labelClass = styles.logisticsLabel;
			break;
		case "sponsor":
			labelClass = styles.sponsorLabel;
			break;
		case "misc":
			labelClass = styles.miscLabel;
			break;
	}

	return <div className={labelClass}></div>;
};

export default CustomButton;
