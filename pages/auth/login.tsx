import { useContext } from "react";
import { useRouter } from 'next/router';
import LoginForm from "../../Components/Forms/LoginForm";

import AuthContext from "../../context/AuthContext";
import AlertContext from "../../context/AlertContext";

import styles from "../../styles/forms.module.css";

function Login() {
	const { login } = useContext(AuthContext);
	const { setAlert } = useContext(AlertContext);

	const router = useRouter();

	const loginUser = async (user: any) => {
		try {
			await login(user);
			router.push('/profile');
		} catch (err) {
			setAlert('error', 'Login Error', err.message);
		}
	}

	return (
		<div className={styles.formPage}>
			<LoginForm loginUser={loginUser} />
		</div>
	);
}

export default Login;
