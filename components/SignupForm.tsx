import { Form, Card } from "react-bootstrap";
import CustomButton from './button';

import "bootstrap/dist/css/bootstrap.min.css";

function SignupForm() {
	const onSubmitHandler = (e: any) => {
		e.preventDefault();
		console.log(e);
	}

    return (
        <Card className="signupForm">
				<Form onSubmit={onSubmitHandler}>
					<Form.Group>
						<Form.Label>LOGIN</Form.Label>
						<Form.Control type="text" name="username" />
					</Form.Group>

					<Form.Group>
						<Form.Label>PASSWORD</Form.Label>
						<Form.Control type="password" name="password" />
					</Form.Group>

					<Form.Group>
						<Form.Label>RETYPE PASSWORD</Form.Label>
						<Form.Control type="password" name="password" />
					</Form.Group>

					<div className="buttonContainer">
						<CustomButton type="submit">BAM!</CustomButton>
					</div>
				</Form>

				<div className="linkContainer">
					<a href="/auth/login">ALREADY HAVE AN ACCOUNT?</a>
				</div>
			</Card>
    )
}

export default SignupForm;