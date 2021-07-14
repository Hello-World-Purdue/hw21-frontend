import React from "react";
import ApplicationForm from "../Components/ApplicationForm";

import styles from '../styles/forms.module.css';

function appPage() {
	const submitAnswers = (userData) => {
		console.log(userData);
	}

	return (
		<div className={styles.formPage}>
			<ApplicationForm  sendAnswers={submitAnswers} />
		</div>
	);
};

export default appPage;