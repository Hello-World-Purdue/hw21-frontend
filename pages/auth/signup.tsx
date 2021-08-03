import React, { useState, useContext } from "react";
import { useRouter } from 'next/router';
import SignupForm from "../../Components/Forms/SignupForm";
import Toast from "../../Components/Toast";

import AuthContext from "../../context/AuthContext";

import styles from "../../styles/forms.module.css";

function Signup() {
	const { signup } = useContext(AuthContext);
	const [showToast, setShowToast] = useState<boolean>(false);
	const [signupError, setSignupError] = useState<string>("");

	const router = useRouter();

	const signupUser = async (user: any) => {
		try {
			signup(user);
			router.push('/');
		} catch (err) {
			setShowToast(true);
			setSignupError(err.message);
		}
	}

	return (
		<div className={styles.formPage}>
			<SignupForm signupUser={signupUser} />
			<Toast
				show={showToast}
				title="Signup Error"
				message={signupError}
				comment="Please check your credentials and try again"
				onHide={() => setShowToast(false)}
			/>
		</div>
	);
}

export default Signup;
