import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const ApplicationForm: React.FC<{
	name: string;
	email: string;
	status: string;
}> = (props) => {
	const [buttonValue, setButtonValue] = useState<string>("EDIT PROFILE");
	const [fullNameField, setFullNameField] = useState<any>(
        <div>
            <strong>{props.name.toUpperCase()}</strong>
        </div>
    );
	const [emailField, setEmailField] = useState<any>(
        <div>
            <strong>{props.email.toUpperCase()}</strong>
        </div>
    );

	const [fullName, setFullName] = useState<string>(props.name);
	const [email, setEmail] = useState<string>(props.email);

	const [emailIssues, setEmailIssues] = useState<boolean>(false);
	const [emailClasses, setEmailClasses] = useState<string[]>([]);

	const handleSubmit = (event) => {
		event.preventDefault();

		switch (buttonValue) {
			case "EDIT PROFILE":
				{
					setFullNameField(
						<Form.Control
							placeholder={fullName.toUpperCase()}
							onChange={handleNameChange}
							type="text"
							name="fullname"
						/>
					);

					setEmailField(
						<div>
							<Form.Control
								className={emailClasses.join(" ")}
								placeholder={email.toUpperCase()}
								onChange={handleEmailChange}
								type="email"
								name="email"
							/>
							{emailIssues && (
								<div className="invalid-feedback">Must be a purdue email</div>
							)}
						</div>
					);

					setButtonValue("SUBMIT");
				}
				break;
			case "SUBMIT": {
                
				if (validateEmail()) {
					return;
				}

				setFullNameField(
					<div>
						<strong>{fullName.toUpperCase()}</strong>
					</div>
				);

				setEmailField(
					<div>
						<strong>{email.toUpperCase()}</strong>
					</div>
				);

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
		<Card>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Full Name</Form.Label>
					{fullNameField}
				</Form.Group>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					{emailField}
				</Form.Group>
				<Form.Group>
					<Form.Label>Application Status</Form.Label>
					<div>ACCEPTED</div>
				</Form.Group>
				<Button type="submit">{buttonValue}</Button>
			</Form>
		</Card>
	);
};

export default ApplicationForm;
