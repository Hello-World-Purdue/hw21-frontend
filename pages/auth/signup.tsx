import React, { useState, useContext, Fragment } from "react";
import SignupForm from "../../Components/Forms/SignupForm";
import Toast from "../../Components/Toast";

import AuthContext from "../../context/AuthContext";

import styles from "../../styles/forms.module.css";

function Signup({ history }) {
	const { signup } = useContext(AuthContext);
	const [showToast, setShowToast] = useState<boolean>(false);
	const [signupError, setSignupError] = useState<string>("");

	function signupUser(user: any) {
		try {
			signup(user);
			history.push("/");
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
