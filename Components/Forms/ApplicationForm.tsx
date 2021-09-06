import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import CustomButton from "../CustomButton";

import {
	Gender,
	ethnicities,
	ClassYear,
	gradYears,
	Referral,
	ShirtSize,
	Major,
} from "../../util/enums";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/forms.module.css";

const initialState = {
	hackathons: 0,
	dietaryRestrictions: "None",
	website: "",
	answer1: "",
	answer2: "",
	classYear: Object.values(ClassYear)[0],
	graduationYear: gradYears[0],
	ethnicity: ethnicities[0],
	gender: Object.values(Gender)[0],
	major: Object.values(Major)[0],
	referral: Object.values(Referral)[0],
	shirtSize: Object.values(ShirtSize)[0],
	resume: null,
};

const ApplicationForm: React.FC<{ sendAnswers: (userData) => void }> = (
	props
) => {
	const [state, setState] = useState(initialState);

	const [resumeFile, setResumeFile] = useState<File>();

	function submitForm(event: React.FormEvent) {
		event.preventDefault();

		const userData = {
			...state,
			resume: resumeFile,
		};

		props.sendAnswers(userData);
		console.log("Success");
	}

	const handleChange = (e: any) => {
		console.log(e.target.name, e.target.value)
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
		console.log(state)
	};

	const resumeUploadHandler = (e: any) => {
		console.log(e.target.files);
		setResumeFile(e.target.files[0]);
	};

	return (
		<Card className={[styles.formContainer, styles.appFormContainer].join(" ")}>
			<div className={styles.appFormTitle}>APPLICATION FORM</div>
			<Form className={styles.applicationForm} onSubmit={submitForm}>
				{/* Number of hackathons */}
				<Form.Group className={styles.formField}>
					<Form.Label>HOW MANY HACKATHONS HAVE YOU TAKEN PART IN</Form.Label>
					<Form.Control
						type="number"
						name="hackathons"
						min={0}
						onChange={handleChange}
						required
					/>
				</Form.Group>

				{/* Dietary Restrictions */}
				<Form.Group className={styles.formField}>
					<Form.Label>PLEASE TELL US ABOUT ANY DIETARY RESTRICTIONS</Form.Label>
					<Form.Control
						placeholder="None"
						name="dietaryRestrictions"
						onChange={handleChange}
						required
					/>
				</Form.Group>

				{/* Answer 1 */}
				<Form.Group className={styles.formField}>
					<Form.Label>What do you hope to gain from participating in Hello World?</Form.Label>
					<Form.Control
						name="answer1"
						onChange={handleChange}
						required
						as="textarea"
					/>
				</Form.Group>

				{/* Answer 2 */}
				<Form.Group className={styles.formField}>
					<Form.Label>What part of hackathons are you looking most forward to?</Form.Label>
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
					<br></br>
					<select className="form-control" onChange={handleChange} name="classYear" required>
						{Object.values(ClassYear).map(classYear => (
							<option value={classYear} key={classYear}>{classYear}</option>
						))}
					</select>
				</Form.Group>

				{/* Graduation Year */}
				<Form.Group className={styles.formField}>
					<Form.Label>SELECT YOUR GRADUATION YEAR</Form.Label>
					<br></br>
					<select className="form-control" name="graduationYear" onChange={handleChange}>
						{gradYears.map(gradYear => (
							<option value={gradYear} key={gradYear}>{gradYear}</option>
						))}
					</select>
				</Form.Group>

				{/* Ethnicity */}
				<Form.Group className={styles.formField}>
					<Form.Label>SELECT YOUR ETHNICITY</Form.Label>
					<br></br>
					<select className="form-control" name="ethnicity" onChange={handleChange}>
						{ethnicities.map((ethnicity) => (
							<option value={ethnicity} key={ethnicity}>
								{ethnicity}
							</option>
						))}
					</select>
				</Form.Group>

				{/* Gender */}
				<Form.Group className={styles.formField}>
					<Form.Label>SELECT YOUR GENDER</Form.Label>
					<br></br>
					<select className="form-control" name="gender" onChange={handleChange}>
						{Object.values(Gender).map(gender => (
							<option value={gender} key={gender}>{gender}</option>
						))}
					</select>
				</Form.Group>

				{/* Major */}
				<Form.Group className={styles.formField}>
					<Form.Label>SPECIFY YOUR MAJOR</Form.Label>
					<br></br>
					<select className="form-control" name="major" onChange={handleChange}>
						{Object.values(Major).map(major => (
							<option value={major} key={major}>{major}</option>
						))}
					</select>
				</Form.Group>

				{/* Referral */}
				<Form.Group className={styles.formField}>
					<Form.Label>HOW DID YOU HEAR ABOUT HELLO WORLD?</Form.Label>
					<br></br>
					<select className="form-control" name="referral" onChange={handleChange}>
						{Object.values(Referral).map(referral => (
							<option value={referral} key={referral}>{referral}</option>
						))}
					</select>
				</Form.Group>

				{/* Shirt Size */}
				<Form.Group className={styles.formField}>
					<Form.Label>WHAT IS YOUR SHIRT SIZE?</Form.Label>
					<br></br>
					<select className="form-control" name="shirtSize" onChange={handleChange}>
						{Object.values(ShirtSize).map(shirtSize => (
							<option value={shirtSize} key={shirtSize}>{shirtSize}</option>
						))}
					</select>
				</Form.Group>

				{/* Website Link */}
				<Form.Group className={styles.formField}>
					<Form.Label>LINK YOUR WEBSITE HERE IF YOU HAVE ONE</Form.Label>
					<Form.Control type="url" name="website" onChange={handleChange} />
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
