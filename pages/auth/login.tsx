import { useState, useContext } from "react";
import LoginForm from "../../Components/Forms/LoginForm";
import Toast from "../../Components/Toast";

import AuthContext from "../../context/AuthContext";

import styles from "../../styles/forms.module.css";

function Login({ history }) {
	const { login } = useContext(AuthContext);
	const [showToast, setShowToast] = useState<boolean>(false);
	const [loginError, setLoginError] = useState<string>("");

	function loginUser(user: any) {
		try {
			login(user);
			history.push("/");
		} catch (err) {
			setShowToast(true);
			setLoginError(err.message);
		}
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
