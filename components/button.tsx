import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomButton: React.FC<{ type: string; onClick?: () => void }> = (
	props
) => {
	return (
		<Button type={props.type} onClick={props.onClick}>
			{props.children}
		</Button>
	);
};

export default CustomButton;
