import SignupForm from '../../components/SignupForm';

import styles from '../../styles/forms.module.css';

function Signup() {
	function signupUser(user) {
		console.log(user);
	}

	return (
		<div className={styles.formPage}>
			<SignupForm signupUser={signupUser} />
		</div>
	);
}

export default Signup;
