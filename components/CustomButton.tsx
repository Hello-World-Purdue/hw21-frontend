import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/forms.module.css";

const CustomButton: React.FC<{ onClick?: () => void }> = (props) => {
	return (
		<button className={styles.formButton} type="submit" onClick={props.onClick}>
			<div></div>
		</button>
	);
};

export default CustomButton;
