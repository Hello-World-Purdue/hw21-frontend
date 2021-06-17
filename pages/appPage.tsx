import React from "react";
import ApplicationForm from "../components/ApplicationForm";

import styles from '../styles/forms.module.css';

function appPage() {
	return (
		<div className={styles.formPage}>
			<ApplicationForm
				name="Darren Iyer"
				email="iyerd@purdue.edu"
				status="WAITING"
			/>
		</div>
	);
};

export default appPage;