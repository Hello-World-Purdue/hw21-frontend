import React, { useState } from 'react'
import Link from "next/link";
import { Form, Card } from "react-bootstrap";
import CustomButton from "../CustomButton";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/forms.module.css";

const ForgotForm: React.FC<{ sendEmail: (email) => void }> = (props) => {
    const [email, setEmail] = useState<string>("");

    const handleChange = (e: any) => {
        setEmail(e.target.value);
    }

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();

        props.sendEmail(email);
    }

    return (
        <Card className={styles.formContainer}>
			<Form className={styles.loginForm} onSubmit={submitForm}>
				<Form.Group className={styles.formField}>
					<Form.Label>ENTER EMAIL</Form.Label>
					<Form.Control						
						onChange={handleChange}
						type="email"
						name="email"
						required
					/>
				</Form.Group>

				<div className={styles.buttonContainer}>
					<CustomButton>BAM!</CustomButton>
				</div>
			</Form>

			<div className={styles.linkContainer}>
				<Link href="/auth/login">
					<a>LOGIN TO YOUR ACCOUNT</a>
				</Link>
			</div>
		</Card>
    )
}

export default ForgotForm
