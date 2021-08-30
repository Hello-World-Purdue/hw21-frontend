import React, { useState } from "react";
import Link from "next/link";
import { Form, Card } from "react-bootstrap";
import CustomButton from "../CustomButton";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/forms.module.css";

const LoginForm: React.FC<{ loginUser: (user) => void }> = (props) => {
	const [login, setLogin] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [remember, setRemember] = useState<boolean>(false);

	function submitForm(event: React.FormEvent) {
		event.preventDefault();

		const user = {
			email: login,
			password: password,
			rememberUser: remember,
		};

		props.loginUser(user);
	}

	const loginHandler = (event) => {
		setLogin(event.target.value);
	};

	const passwordHandler = (event) => {
		setPassword(event.target.value);
	};

	const rememberHandler = (event) => {
		setRemember(event.target.checked);
	};

	return (
		<Card className={styles.formContainer}>
			<Form className={styles.form} onSubmit={submitForm}>
				<Form.Group className={styles.formField}>
					<Form.Label>LOGIN</Form.Label>
					<Form.Control
						onChange={loginHandler}
						type="text"
						name="username"
						required
					/>
				</Form.Group>

				<Form.Group className={styles.formField}>
					<Form.Label>PASSWORD</Form.Label>
					<Form.Control
						onChange={passwordHandler}
						type="password"
						name="password"
						required
					/>
				</Form.Group>

				<Form.Group className={styles.formField}>
					<small>
						<Form.Check
							className={styles.formCheck}
							onChange={rememberHandler}
							type="checkbox"
							label="REMEMBER ME"
						/>
					</small>
				</Form.Group>

				<div className={styles.buttonContainer}>
					<CustomButton>BAM!</CustomButton>
				</div>
			</Form>

			<div className={styles.linkContainer}>
				<Link href="/auth/forgot">
					<a>FORGOT PASSWORD</a>
				</Link>
				<Link href="/auth/signup">
					<a>CREATE A NEW ACCOUNT</a>
				</Link>
			</div>
		</Card>
	);
};

export default LoginForm;
