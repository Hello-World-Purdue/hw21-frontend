import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import CustomButton from "./CustomButton";

import {
	Gender,
	ethnicities,
	ClassYear,
	gradYears,
	Referral,
	ShirtSize,
	Major,
} from "../util/enums";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/forms.module.css";

const ApplicationForm: React.FC<{ sendAnswers: (userData) => void }> = (
	props
) => {
	const initialState = {
		hackathons: Number,
		dietaryRestrictions: String,
		website: String,
		answer1: String,
		answer2: String,
		classYear: String,
		graduationYear: Number,
		ethnicity: String,
		gender: String,
		major: String,
		referral: String,
		shirtSize: Number,
		resume: String,
	};

	const [state, setState] = useState(initialState);

	const [resumeFile, setResumeFile] = useState<File>();

	function submitForm(event: React.FormEvent) {
		event.preventDefault();

		const userData = {
			...state,
		};

		props.sendAnswers(userData);
		console.log("Success");
	}

	const handleChange = (e: any) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const resumeUploadHandler = (e: any) => {
		console.log(e.target.files);
		setResumeFile(e.target.files[0]);
	};

	return (
		<Card className={styles.formContainer}>
			<Form className={styles.applicationForm} onSubmit={submitForm}>
				{/* Number of hackathons */}
				<Form.Group className={styles.formField}>
					<Form.Label>HOW MANY HACKATHONS HAVE YOU TAKEN PART IN</Form.Label>
					<Form.Control
						type="number"
						name="hackathons"
						onChange={handleChange}
						required
					/>
				</Form.Group>

				{/* Dietary Restrictions */}
				<Form.Group className={styles.formField}>
					<Form.Label>PLEASE TELL US ABOUT ANY DIETARY RESTRICTIONS</Form.Label>
					<Form.Control
						name="dietaryRestrictions"
						onChange={handleChange}
						required
					/>
				</Form.Group>

				{/* Website Link */}
				<Form.Group className={styles.formField}>
					<Form.Label>LINK YOUR WEBSITE HERE IF YOU HAVE ONE</Form.Label>
					<Form.Control type="url" name="website" onChange={handleChange} />
				</Form.Group>

				{/* Answer 1 */}
				<Form.Group className={styles.formField}>
					<Form.Label>QUESTION 1</Form.Label>
					<Form.Control
						name="answer1"
						onChange={handleChange}
						required
						as="textarea"
					/>
				</Form.Group>

				{/* Answer 2 */}
				<Form.Group className={styles.formField}>
					<Form.Label>QUESTION 2</Form.Label>
					<Form.Control
						name="answer2"
						onChange={handleChange}
						required
						as="textarea"
					/>
				</Form.Group>

				{/* Class Year (Freshman, Sophomore) */}
				<Form.Group className={styles.formField}>
					<Form.Label>SELECT YOUR CLASS YEAR</Form.Label>
					<Form.Control
						type="date"
						name="classYear"
						onChange={handleChange}
						required
					/>
					
				</Form.Group>

				{/* Graduation Year */}
				<Form.Group className={styles.formField}>
					<Form.Label>SELECT YOUR GRADUATION YEAR</Form.Label>
					<Form.Control
						type="date"
						name="graduationYear"
						onChange={handleChange}
						required
					/>
				</Form.Group>

				{/* Ethnicity */}
				<Form.Group className={styles.formField}>
					<Form.Label>SELECT YOUR ETHNICITY</Form.Label>
					<Form.Control name="ethnicity" onChange={handleChange} required />
				</Form.Group>

				{/* Gender */}
				<Form.Group className={styles.formField}>
					<Form.Label>SELECT YOUR GENDER</Form.Label>
					<Form.Control name="gender" onChange={handleChange} required />
				</Form.Group>

				{/* Major */}
				<Form.Group className={styles.formField}>
					<Form.Label>SPECIFY YOUR MAJOR</Form.Label>
					<Form.Control name="major" onChange={handleChange} required />
				</Form.Group>

				{/* Referral */}
				<Form.Group className={styles.formField}>
					<Form.Label>HOW DID YOU HEAR ABOUT HELLO WORLD?</Form.Label>
					<Form.Control name="referral" onChange={handleChange} required />
				</Form.Group>

				{/* Shirt Size */}
				<Form.Group className={styles.formField}>
					<Form.Label>WHAT IS YOUR SHIRT SIZE?</Form.Label>
					<Form.Control name="shirtSize" onChange={handleChange} required />
				</Form.Group>

				{/* Resume */}
				<Form.Group className={styles.formField}>
					<Form.Label>LINK YOUR RESUME HERE</Form.Label>
					<br></br>
					<Form.Control
						type="file"
						className=""
						onChange={resumeUploadHandler}
						required
					/>
				</Form.Group>

				<div className={styles.buttonContainer}>
					<CustomButton>BAM!</CustomButton>
				</div>
			</Form>
		</Card>
	);
};

export default ApplicationForm;
