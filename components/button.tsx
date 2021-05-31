import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const CustomButton: React.FC<{ type: string }> = (props) => {
	return (
		<Button type={props.type}>
			{props.children}
		</Button>	
	);
}

export default CustomButton;
