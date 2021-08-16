import React, { useState, useContext } from "react";
import { useRouter } from 'next/router';
import ApplicationForm from "../Components/Forms/ApplicationForm";
import Toast from "../Components/Toast";
import AuthContext from "../context/AuthContext";

import styles from '../styles/forms.module.css';

function appPage() {
	const { user } = useContext(AuthContext);
	const [showToast, setShowToast] = useState<boolean>(false);
	const [applicationError, setApplicationError] = useState<string>("");

	const router = useRouter();

	const submitAnswers = (userData) => {
		try {
			console.log(userData);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className={styles.formPage}>
			<ApplicationForm  sendAnswers={submitAnswers} />
			<Toast
				show={showToast}
				title="Application Error"
				message={applicationError}
				comment="Please check your answers and try again"
				onHide={() => setShowToast(false)}
			/>
		</div>
	);
};

export default appPage;