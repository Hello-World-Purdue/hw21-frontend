import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import CustomButton from "./CustomButton";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/forms.module.css";

const LoginForm: React.FC<{}> = (props) => {
	const [response, setResponse] = useState<string>('');

	const [responseClasses, setResponseClasses] = useState<string[]>([]);
	const [responseIssues, setResponseIssues] = useState<boolean>(false);

	function submitForm(event) {
		event.preventDefault();

		const isInvalid = validateResponse();

		if (isInvalid) {
			return;
		}
		
		console.log('Success');
	}

	const validateResponse  = (): boolean => {
		const arr = [...responseClasses];
		const idx = arr.indexOf("is-invalid");

		setResponseIssues(false);

		if (idx !== -1) {
			setResponseClasses(arr.filter((element) => element !== "is-invalid"));
		}

		if (response.length === 0) {
			setResponseIssues(true);

			if (idx === -1) {
				arr.push("is-invalid");
			}

			setResponseClasses(arr);

			return true;
		}

		return false;
	}

	const handleResponseChange = (e: any) => {
		setResponse(e.target.value);
	}

	return (
		<Card className={styles.formContainer}>
			<Form className={styles.applicationForm} onSubmit={submitForm}>
				<Form.Group className={styles.formField}>
					<Form.Label>WHY DO YOU WANT TO ATTEND HELLO WORLD?</Form.Label>
					<Form.Control
						as='textarea'
						rows={3}
						className={responseClasses.join(" ")}
						minLength={100}
						onChange={handleResponseChange}
					/>
					{responseIssues && (
						<div className="invalid-feedback">Field cannot be empty</div>
					)}
				</Form.Group>

				<Form.Group className={styles.formField}>
					<Form.Label>TELL US A LITTLE ABOUT YOURSELF!</Form.Label>
					<Form.Control
						as='textarea'
						rows={3}
						className={responseClasses.join(" ")}
						minLength={100}
						onChange={handleResponseChange}
					/>
					{responseIssues && (
						<div className="invalid-feedback">Field cannot be empty</div>
					)}
				</Form.Group>

				<div className={styles.buttonContainer}>
					<CustomButton>BAM!</CustomButton>
				</div>
			</Form>
		</Card>
	);
};

export default LoginForm;
