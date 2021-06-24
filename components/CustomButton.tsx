import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/forms.module.css";

const CustomButton: React.FC<{ onClick?: () => void }> = (props) => {
	return (
		<button className={styles.formButton} type="submit" onClick={props.onClick}>
			<div className={styles.formButton} />
		</button>
	);
};

export default CustomButton;
