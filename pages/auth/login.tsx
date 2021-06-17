import { useState } from "react";
import LoginForm from "../../components/LoginForm";
import Toast from "../../components/Toast";

import styles from '../../styles/forms.module.css';

function Login() {
	const [showToast, setShowToast] = useState<boolean>(false);

	function loginUser(user) {
		console.log(user);

		fetch("/api/auth/login", {
			method: "POST",
		})
			.then((data) => {
				console.log(data);
				if (data.status === 404) {
					setShowToast(true);
				}
			})
			.catch((err) => {
				setShowToast(true);
			});
	}

	return (
		<div className={styles.formPage}>
			<LoginForm loginUser={loginUser} />
			<Toast
				show={showToast}
				title="Username does not exist"
				message="The username you have entered does not exist in our database"
				comment="Please check your credentials and try again"
				onHide={() => setShowToast(false)}
			/>
		</div>
	);
}

export default Login;
