import React, { useState } from 'react'
import Link from "next/link";
import { Form, Card } from "react-bootstrap";
import CustomButton from "../CustomButton";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/forms.module.css";

const ResetForm: React.FC<{ updatePassword: (password) => void }> = (props) => {
    const [passOne, setPassOne] = useState<string>("");
	const [passTwo, setPassTwo] = useState<string>("");

    const [passTwoWarning, setPassTwoWarning] = useState<string>("");
    const [passTwoIssues, setPassTwoIssues] = useState<boolean>(false);

    const [passOneClasses, setPassOneClasses] = useState<string[]>([]);
	const [passTwoClasses, setPassTwoClasses] = useState<string[]>([]);

	const handlePassOne = (event: any) => {
		setPassOne(event.target.value);
	};

	const handlePassTwo = (event: any) => {
		setPassTwo(event.target.value);
	};

    function validatePassword(): boolean {
		const p1 = [...passOneClasses];
		const p2 = [...passTwoClasses];

		const idx1 = p1.indexOf("is-invalid");
		const idx2 = p2.indexOf("is-invalid");

		setPassTwoIssues(false);

		if (idx1 !== -1) {
			setPassOneClasses(p1.filter((element) => element !== "is-invalid"));
		}

		if (idx2 !== -1) {
			setPassTwoClasses(p2.filter((element) => element !== "is-invalid"));
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

    function submitForm(event: React.FormEvent) {
		event.preventDefault();

		const passwordIsInvalid = validatePassword();

		if (passwordIsInvalid) {
			return;
		}

		props.updatePassword(passOne);
	}

    return (
        <Card className={styles.formContainer}>
			<Form className={styles.resetForm} onSubmit={submitForm}>
				<Form.Group className={styles.formField}>
					<Form.Label>ENTER NEW PASSWORD</Form.Label>
					<Form.Control
						minLength={5}
						className={passOneClasses.join(" ")}
						onChange={handlePassOne}
						type="password"
						name="password"
						required
					/>
				</Form.Group>

				<Form.Group className={styles.formField}>
					<Form.Label>RETYPE NEW PASSWORD</Form.Label>
					<Form.Control
						className={passTwoClasses.join(" ")}
						onChange={handlePassTwo}
						type="password"
						name="password"
						required
					/>
					{passTwoIssues && (
						<div className="invalid-feedback">{passTwoWarning}</div>
					)}
				</Form.Group>

				<div className={styles.buttonContainer}>
					<CustomButton>BAM!</CustomButton>
				</div>
			</Form>
		</Card>
    )
}

export default ResetForm
