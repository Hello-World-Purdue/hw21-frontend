import { useState } from "react";
import LoginForm from "../../components/LoginForm";
import Toast from "../../components/Toast";

import styles from '../../styles/forms.module.css';

interface User {
	email: string,
	password: string,
	rememberUser?: boolean
}

function Login() {
	const [showToast, setShowToast] = useState<boolean>(false);
	const [loginError, setLoginError] = useState<string>('');

	function loginUser(user: User) {
		const requestBody = user;

		fetch("/api/auth/login", {
			method: "POST",
			body: JSON.stringify(requestBody),
		})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				setShowToast(true);
				setLoginError(err.message);
			});
	}

	return (
		<div className={styles.formPage}>
			<LoginForm loginUser={loginUser} />
			<Toast
				show={showToast}
				title="Login Error"
				message={loginError}
				comment="Please check your credentials and try again"
				onHide={() => setShowToast(false)}
			/>
		</div>
	);
}

export default Login;
