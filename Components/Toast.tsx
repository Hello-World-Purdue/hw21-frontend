import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Toast: React.FC<{
	title: string;
	message: string;
	comment: string;
	onHide: () => void;
	show?: boolean;
}> = (props) => {
	return (
		<Modal {...props} centered className="text-center">
			<Modal.Header>
				<Modal.Title>{props.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>{props.message}</p>
				<p>
					<small>{props.comment}</small>
				</p>
			</Modal.Body>
			<Modal.Footer className="text-center">
				<Button onClick={props.onHide}>Ok</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default Toast;
