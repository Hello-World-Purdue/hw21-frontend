import { useState } from "react";
import { Form, Card } from "react-bootstrap";
import CustomButton from "./button";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/forms.module.css";

const SignupForm: React.FC<{ signupUser: (user) => void }> = (props) => {
	const [username, setUsername] = useState<string>("");
	const [passOne, setPassOne] = useState<string>("");
	const [passTwo, setPassTwo] = useState<string>("");

	const [usernameWarning, setUsernameWarning] = useState<string>("");
	const [passOneWarning, setPassOneWarning] = useState<string>("");
	const [passTwoWarning, setPassTwoWarning] = useState<string>("");

	const [usernameIssues, setUsernameIssues] = useState<boolean>(false);
	const [passOneIssues, setPassOneIssues] = useState<boolean>(false);
	const [passTwoIssues, setPassTwoIssues] = useState<boolean>(false);

	const [usernameClasses, setUsernameClasses] = useState<string[]>([]);
	const [passOneClasses, setPassOneClasses] = useState<string[]>([]);
	const [passTwoClasses, setPassTwoClasses] = useState<string[]>([]);

	function submitForm(event) {
		event.preventDefault();

		const usernameIsInvalid = validateUsername();
		const passwordIsInvalid = validatePassword();

		if (usernameIsInvalid || passwordIsInvalid) {
			return;
		}

		const user = {
			username: username,
			password: passOne,
		};

		props.signupUser(user);
	}

	const handleUsername = (event) => {
		setUsername(event.target.value);
	};

	const handlePassOne = (event) => {
		setPassOne(event.target.value);
	};

	const handlePassTwo = (event) => {
		setPassTwo(event.target.value);
	};

	function validateUsername(): boolean {
		const usr = [...usernameClasses];
		const idx = usr.indexOf("is-invalid");

		setUsernameIssues(false);

		if (idx !== -1) {
			setUsernameClasses(usr.filter((element) => element !== "is-invalid"));
		}

		if (username.length === 0) {
			setUsernameIssues(true);

			if (idx === -1) {
				usr.push("is-invalid");
			}

			setUsernameClasses(usr);
			setUsernameWarning("Username cannot be empty");

			return true;
		}

		return false;
	}

	function validatePassword(): boolean {
		const p1 = [...passOneClasses];
		const p2 = [...passTwoClasses];

		const idx1 = p1.indexOf("is-invalid");
		const idx2 = p2.indexOf("is-invalid");

		setPassOneIssues(false);
		setPassTwoIssues(false);

		if (idx1 !== -1) {
			setPassOneClasses(p1.filter((element) => element !== "is-invalid"));
		}

		if (idx2 !== -1) {
			setPassTwoClasses(p2.filter((element) => element !== "is-invalid"));
		}

		if (passOne.length === 0 || passTwo.length === 0) {
			if (passOne.length === 0) {
				setPassOneIssues(true);
				setPassOneWarning("Password cannot be empty");

				if (idx1 === -1) {
					p1.push("is-invalid");
				}

				setPassOneClasses(p1);
			}

			if (passTwo.length === 0) {
				setPassTwoIssues(true);
				setPassTwoWarning("Password cannot be empty");

				if (idx2 === -1) {
					p2.push("is-invalid");
				}

				setPassTwoClasses(p2);
			}

			return true;
		}

		if (passOne !== passTwo) {
			setPassTwoIssues(true);
			setPassTwoWarning("Passwords do not match");

			if (idx1 === -1) {
				p1.push("is-invalid");
			}
			if (idx2 === -1) {
				p2.push("is-invalid");
			}

			setPassOneClasses(p1);
			setPassTwoClasses(p2);

			return true;
		}

		return false;
	}

	return (
		<Card className={styles.signupForm}>
			<Form onSubmit={submitForm}>
				<Form.Group>
					<Form.Label>LOGIN</Form.Label>
					<Form.Control
						className={usernameClasses.join(" ")}
						minLength={3}
						onChange={handleUsername}
						type="text"
						name="username"
					/>
					{usernameIssues && (
						<div className="invalid-feedback">{usernameWarning}</div>
					)}
				</Form.Group>

				<Form.Group>
					<Form.Label>PASSWORD</Form.Label>
					<Form.Control
						minLength={5}
						className={passOneClasses.join(" ")}
						onChange={handlePassOne}
						type="password"
						name="password"
					/>
					{passOneIssues && (
						<div className="invalid-feedback">{passOneWarning}</div>
					)}
				</Form.Group>

				<Form.Group>
					<Form.Label>RETYPE PASSWORD</Form.Label>
					<Form.Control
						className={passTwoClasses.join(" ")}
						onChange={handlePassTwo}
						type="password"
						name="password"
					/>
					{passTwoIssues && (
						<div className="invalid-feedback">{passTwoWarning}</div>
					)}
				</Form.Group>

				<div className={styles.buttonContainer}>
					<CustomButton type="submit">BAM!</CustomButton>
				</div>
			</Form>

			<div className={styles.linkContainer}>
				<a href="/auth/login">ALREADY HAVE AN ACCOUNT?</a>
			</div>
		</Card>
	);
};

export default SignupForm;