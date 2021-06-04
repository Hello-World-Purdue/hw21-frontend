import { Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from '../../components/button';

function SignupForm() {
    return (
        <Card style={{ width: "30%", padding: "20px", margin: "auto" }}>
				<Form>
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
					<a href="/auth/login">ALREADY HAVE AN ACCOUNT?</a>
				</div>
			</Card>
    )
}

export default SignupForm;