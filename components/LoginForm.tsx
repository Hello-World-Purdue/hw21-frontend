import { Form, Card } from "react-bootstrap";
import CustomButton from './button';

import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm() {
	const onSubmitHandler = (e: any) => {
		e.preventDefault();
		console.log(e);
	}

    return (
        <Card className="loginForm">
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
						<Form.Check type="checkbox" label="REMEMBER ME" />
					</Form.Group>

					<div className="buttonContainer">
						<CustomButton type="submit">BAM!</CustomButton>
					</div>
				</Form>

				<div className="linkContainer">
					<a href="/forgot">FORGOT PASSWORD</a>
					<a href="/auth/signup">CREATE A NEW ACCOUNT</a>
				</div>
			</Card>
    )
}

export default LoginForm;