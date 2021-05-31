import { Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../../styles/forms.module.css";

import CustomButton from "../../components/button";

function Login() {
	return (
		<div
			style={{
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Card style={{ width: "30%", padding: "20px" }}>
				<Form>
					<Form.Group>
						<Form.Label>Login</Form.Label>
						<Form.Control type="text" name="username" />
					</Form.Group>

					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" name="password" />
					</Form.Group>

					<Form.Group>
						<Form.Check type="checkbox" label="Remember Me" />
					</Form.Group>

					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<CustomButton type="submit">BAM!</CustomButton>
					</div>
				</Form>

				<div
					style={{
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<a href="/forgot">Forgot Password</a>
					<a href="/auth/signup">Create a New Account</a>
				</div>
			</Card>
		</div>
	);
}

export default Login;
