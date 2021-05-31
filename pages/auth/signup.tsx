import { Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../../styles/forms.module.css";

import CustomButton from "../../components/button";

function Signup() {
	return (
		<div
			style={{
				height: '100%',
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Card style={{ width: "30%", padding: "20px", margin: "auto" }}>
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
					<a href="/auth/login">Login</a>
				</div>
			</Card>
		</div>
	);
}

export default Signup;
