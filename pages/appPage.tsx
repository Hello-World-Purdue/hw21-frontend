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
		fetch(`/api/users/${user._id}/apply`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		}).then(res => {
			console.log(res.json());
			router.push('/');
		}).catch(err => {
			setApplicationError(err.message);
			setShowToast(true);
		})
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