import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import CustomButton from "./CustomButton";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/forms.module.css";

const ApplicationForm: React.FC<{ sendAnswers: (userData) => void }> = (props) => {
	const [response, setResponse] = useState<string>('');
	const [resumeFile, setResumeFile] = useState<File>();

	const [responseClasses, setResponseClasses] = useState<string[]>([]);
	const [responseIssues, setResponseIssues] = useState<boolean>(false);

	const [resumeClasses, setResumeClasses] = useState<string[]>([]);
	const [resumeIsuues, setResumeIssues] = useState<boolean>(false);

	function submitForm(event) {
		event.preventDefault();

		const responseIsInvalid = validateResponse();
		const resumeIsInvalid = validateFile();

		if (responseIsInvalid || resumeIsInvalid) {
			return;
		}

		const userData = {
			response: response,
			resume: resumeFile
		};

		props.sendAnswers(userData);
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

	const validateFile = (): boolean => {
		const arr = [...resumeClasses];
		const idx = arr.indexOf("is-invalid");

		if (idx !== -1) {
			setResumeClasses(arr.filter((element) => element !== "is-invalid"));
		}

		if (!resumeFile) {
			setResumeIssues(true);

			if (idx === -1) {
				arr.push("is-invalid");
			}

			setResumeClasses(arr);

			return true;
		}

		return false;
	}

	const handleResponseChange = (e: any) => {
		setResponse(e.target.value);
	}

	const resumeUploadHandler = (e: any) => {
		console.log(e.target.files);
		setResumeFile(e.target.files[0]);
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
					<Form.Label>UPLOAD YOUR RESUME</Form.Label>
					<br></br>
					<Form.Control 
					type='file' 
					className={resumeClasses.join(" ")}
					onChange={resumeUploadHandler} />
					{resumeIsuues && (
						<div className="invalid-feedback">Please upload a file!</div>
					)}
				</Form.Group>

				<div className={styles.buttonContainer}>
					<CustomButton>BAM!</CustomButton>
				</div>
			</Form>
		</Card>
	);
};

export default ApplicationForm;
