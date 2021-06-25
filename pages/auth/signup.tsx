import React, { useState } from 'react';
import SignupForm from '../../components/SignupForm';
import Toast from '../../components/Toast';

import styles from '../../styles/forms.module.css';

interface User {
	email: string,
	password: string,
	passwordConfirm: string
};

function Signup() {
	const [showToast, setShowToast] = useState<boolean>(false);
	const [signupError, setSignupError] = useState<string>('');

	function signupUser(user: User) {
		const requestBody = user;

		fetch("/api/auth/signup", {
			method: "POST",
			body: JSON.stringify(requestBody),
		})
			.then((data) => {
				console.log(data);
				if (!data.redirected) {
					setShowToast(true);
					setSignupError("A 404 Error Occured");
				}
			})
			.catch((err) => {
				setShowToast(true);
				setSignupError(err.message);
			});
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
