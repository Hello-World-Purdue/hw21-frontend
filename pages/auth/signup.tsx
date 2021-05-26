import { Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
	return (
		<Card style={{ width: "30%", padding: '20px', margin: 'auto' }}>
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
					<Form.Label>Retype Password</Form.Label>
					<Form.Control type="password" name="password" />
				</Form.Group>
				
				<Button type="submit">BAM!</Button>
			</Form>

			<div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
				<a href="/auth/login">Login</a>
			</div>
		</Card>
	);
}

export default Signup;
