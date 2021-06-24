import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/custombtn.module.css";

const CustomButton: React.FC<{ onClick?: () => void }> = (props) => {
	return (
		<button className={styles.customBtn} type="submit" onClick={props.onClick} />
	);
};

export default CustomButton;
