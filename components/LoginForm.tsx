import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import CustomButton from "./button";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./forms.module.css";

const LoginForm: React.FC<{ loginUser: (user) => void }> = (props) => {
	const [login, setLogin] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [remember, setRemember] = useState<boolean>(false);

	const [loginIssues, setLoginIssues] = useState<boolean>(false);
	const [passwordIssues, setPasswordIssues] = useState<boolean>(false);

	const [loginClasses, setLoginClasses] = useState<string[]>([]);
	const [passwordClasses, setPasswordClasses] = useState<string[]>([]);

	function submitForm(event) {
		event.preventDefault();

		const loginIsInvalid = validateLogin();
		const passwordIsInvalid = validatePassword();

		if (loginIsInvalid || passwordIsInvalid) {
			return;
		}

		const user = {
			username: login,
			password: password,
			rememberUser: remember,
		};

		props.loginUser(user);
	}

	function validateLogin(): boolean {
		const lgn = [...loginClasses];
		const idx = lgn.indexOf("is-invalid");

		setLoginIssues(false);

		if (idx !== -1) {
			setLoginClasses(lgn.filter((element) => element !== "is-invalid"));
		}

		if (login.length === 0) {
			setLoginIssues(true);

			if (idx === -1) {
				lgn.push("is-invalid");
			}

			setLoginClasses(lgn);

			return true;
		}

		return false;
	}

	function validatePassword(): boolean {
		const pass = [...passwordClasses];
		const idx = pass.indexOf("is-invalid");

		setPasswordIssues(false);

		if (idx !== -1) {
			setPasswordClasses(pass.filter((element) => element !== "is-invalid"));
		}

		if (password.length === 0) {
			setPasswordIssues(true);

			if (idx === -1) {
				pass.push("is-invalid");
			}

			setPasswordClasses(pass);

			return true;
		}

		return false;
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
		<Card className={styles.loginform}>
			<Form onSubmit={submitForm}>
				<Form.Group>
					<Form.Label>LOGIN</Form.Label>
					<Form.Control
						className={loginClasses.join(" ")}
						minLength={3}
						onChange={loginHandler}
						type="text"
						name="username"
					/>
					{loginIssues && (
						<div className="invalid-feedback">Login cannot be empty</div>
					)}
				</Form.Group>

				<Form.Group>
					<Form.Label>PASSWORD</Form.Label>
					<Form.Control
						className={passwordClasses.join(" ")}
						minLength={5}
						onChange={passwordHandler}
						type="password"
						name="password"
					/>
					{passwordIssues && (
						<div className="invalid-feedback">Password cannot be empty</div>
					)}
				</Form.Group>

				<Form.Group>
					<Form.Check
						onChange={rememberHandler}
						type="checkbox"
						label="REMEMBER ME"
					/>
				</Form.Group>

				<div className={styles.buttonContainer}>
					<CustomButton type="submit">BAM!</CustomButton>
				</div>
			</Form>

			<div className={styles.linkContainer}>
				<a href="/forgot">FORGOT PASSWORD</a>
				<a href="/auth/signup">CREATE A NEW ACCOUNT</a>
			</div>
		</Card>
	);
};

export default LoginForm;
