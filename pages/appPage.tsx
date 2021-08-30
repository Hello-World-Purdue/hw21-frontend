import React, { useContext } from "react";
import { useRouter } from 'next/router';
import ApplicationForm from "../Components/Forms/ApplicationForm";

import AlertContext from "../context/AlertContext";
import UserContext from "../context/UserContext";

import styles from '../styles/forms.module.css';

function appPage() {	
	const { apply, user } = useContext(UserContext);
	const { setAlert } = useContext(AlertContext);

	const router = useRouter();

	const submitAnswers = async (userData: FormData) => {
		try {
			await apply(user._id, userData);
			setAlert('success', 'Application Success', 'Thank you for applying!');
			router.push('/profile');
		} catch (err) {
			setAlert('error', 'Application Error', 'Looks like something went wrong.');
		}
	}

	return (
		<div className={styles.formPage}>
			<ApplicationForm  sendAnswers={submitAnswers} />
		</div>
	);
};

export default appPage;