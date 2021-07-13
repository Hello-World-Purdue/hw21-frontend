import React from "react";
import ApplicationForm from "../Components/ApplicationForm";

import styles from '../styles/forms.module.css';

function appPage() {
	return (
		<div className={styles.formPage}>
			<ApplicationForm />
		</div>
	);
};

export default appPage;