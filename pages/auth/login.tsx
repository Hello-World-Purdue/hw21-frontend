function Login() {
	return (
		<div>
			<form>
				<label>Login</label>
				<br />
				<input type="text" name="username" />
				<br />
				<label>Password</label>
				<br />
				<input type="password" name="password" />
				<br />
				<input type="checkbox" /> Remember Me
				<br />
				<button type="submit">BAM!</button>
			</form>
			<a href="/forgot">Forgot Password</a>
            <br />
			<a href="/auth/signup">Create a New Account</a>
		</div>
	);
}

export default Login;
