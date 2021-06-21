import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFolder, faAt } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/forms.module.css";

const ApplicationForm: React.FC<{
	name: string;
	email: string;
	status: string;
}> = (props) => {
	const [buttonValue, setButtonValue] = useState<string>("EDIT PROFILE");

	const [fullName, setFullName] = useState<string>(props.name);
	const [email, setEmail] = useState<string>(props.email);

	const [emailIssues, setEmailIssues] = useState<boolean>(false);
	const [emailClasses, setEmailClasses] = useState<string[]>([styles.appInput]);

	const handleSubmit = (event) => {
		event.preventDefault();

		switch (buttonValue) {
			case "EDIT PROFILE":
				{
					setButtonValue("SUBMIT");
				}
				break;
			case "SUBMIT": {
				if (validateEmail()) {
					return;
				}

				setButtonValue("EDIT PROFILE");
			}
		}
	};

	function validateEmail(): boolean {
		const em = [...emailClasses];
		const idx = em.indexOf("is-invalid");

		setEmailIssues(false);

		if (idx !== -1) {
			setEmailClasses(em.filter((element) => element !== "is-invalid"));
		}

		if (email.length === 0) {
			return false;
		}

		if (email.toLowerCase().includes("@purdue.edu")) {
			return false;
		}

		setEmailIssues(true);

		if (idx === -1) {
			em.push("is-invalid");
		}

		setEmailClasses(em);

		return true;
	}

	const handleNameChange = (event) => {
		setFullName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	return (
		<Card className={styles.appFormContainer}>
			<Form className={styles.applicationForm} onSubmit={handleSubmit}>
				<div className={styles.appField}>
					<FontAwesomeIcon className={styles.appIcon} size="3x" icon={faUser} />
					<Form.Group>
						<Form.Label className={styles.appLabel}>Full Name</Form.Label>
						{buttonValue === "SUBMIT" && (
							<input
								className={styles.appInput}
								defaultValue={fullName.toUpperCase()}
								onChange={handleNameChange}
								type="text"
								name="fullname"
							/>
						)}
						{buttonValue === "EDIT PROFILE" && (
							<div className={styles.appValue}>
								<strong>{fullName.toUpperCase()}</strong>
							</div>
						)}
					</Form.Group>
				</div>
				<div className={styles.appField}>
					<FontAwesomeIcon className={styles.appIcon} size="3x" icon={faAt} />
					<Form.Group>
						<Form.Label className={styles.appLabel}>Email</Form.Label>
						{buttonValue === "SUBMIT" && (
							<div>
								<input
									className={emailClasses.join(" ")}
									defaultValue={email.toUpperCase()}
									onChange={handleEmailChange}
									type="email"
									name="email"
								/>
								{emailIssues && (
									<div className="invalid-feedback">Must be a purdue email</div>
								)}
							</div>
						)}
						{buttonValue === "EDIT PROFILE" && (
							<div className={styles.appValue}>
								<strong>{email.toUpperCase()}</strong>
							</div>
						)}
					</Form.Group>
				</div>
				<div className={styles.appField}>
					<FontAwesomeIcon
						className={styles.appIcon}
						size="3x"
						icon={faFolder}
					/>
					<Form.Group>
						<Form.Label className={styles.appLabel}>
							Application Status
						</Form.Label>
						<div className={styles.appValue}>
							<strong>{props.status.toUpperCase()}</strong>
						</div>
					</Form.Group>
				</div>

				<div className={styles.buttonContainer}>
					<button className={styles.appButton} type="submit">
						<small>{buttonValue}</small>
					</button>
				</div>
			</Form>
		</Card>
	);
};

export default ApplicationForm;
