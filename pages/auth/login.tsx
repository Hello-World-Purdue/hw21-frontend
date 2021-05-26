import { Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
	return (
		<Card style={{ width: "30%", padding: '20px' }}>
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

				<Button type="submit">BAM!</Button>
			</Form>

			<div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
				<a href="/forgot">Forgot Password</a>
				<a href="/auth/signup">Create a New Account</a>
			</div>
		</Card>
	);
}

export default Login;
