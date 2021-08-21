import React, { useState, useContext } from "react";
import { useRouter } from 'next/router';
import ApplicationForm from "../Components/Forms/ApplicationForm";

import AlertContext from "../context/AlertContext";
import UserContext from "../context/UserContext";

import styles from '../styles/forms.module.css';

function appPage() {	
	const { apply } = useContext(UserContext);
	const { setAlert } = useContext(AlertContext);

	const router = useRouter();

	const submitAnswers = async (userData) => {
		try {
			await apply("id", userData);
			setAlert('success', 'Application Success', 'Thank you for applying!');
			router.push('/profile');
		} catch (err) {
			setAlert('error', 'Application Error', err.message);
		}
	}

	return (
		<div className={styles.formPage}>
			<ApplicationForm  sendAnswers={submitAnswers} />
		</div>
	);
};

export default appPage;