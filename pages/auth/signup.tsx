import SignupForm from '../../components/SignupForm';

function Signup() {
	function signupUser(user) {
		console.log(user);
	}

	return (
		<div
			style={{
				height: '100%',
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<SignupForm signupUser={signupUser} />
		</div>
	);
}

export default Signup;
