import React, { useContext } from "react";
import { useRouter } from 'next/router';
import SignupForm from "../../Components/Forms/SignupForm";

import AuthContext from "../../context/AuthContext";
import AlertContext from "../../context/AlertContext";

import styles from "../../styles/forms.module.css";

function Signup() {
	const { signup } = useContext(AuthContext);
	const { setError } = useContext(AlertContext);

	const router = useRouter();

	const signupUser = async (user: any) => {
		try {
			await signup(user);
			router.push('/');
		} catch (err) {
			setError('Signup Error', err.message);
		}
	}

	return (
		<div className={styles.formPage}>
			<SignupForm signupUser={signupUser} />
		</div>
	);
}

export default Signup;
