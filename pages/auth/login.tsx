import LoginForm from '../../components/LoginForm';

function Login() {
	function loginUser(user) {
		console.log(user);
	}

	return (
		<div
			style={{
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<LoginForm loginUser={loginUser} />
		</div>
	);
}

export default Login;
