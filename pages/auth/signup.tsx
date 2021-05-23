function Signup() {
	return (
		<div>
			<form>
				<label>Email</label>
				<br />
				<input type="text" name="username" />
				<br />
				<label>Password</label>
				<br />
				<input type="password" name="password" />
                <br />
				<label>Retype Password</label>
				<br />
				<input type="password" name="password" />
				<br />
				<button type="submit">BAM!</button>
			</form>
			<a href="/auth/login">Login</a>
		</div>
	);
}

export default Signup;
