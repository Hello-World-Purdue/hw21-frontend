import React, { useState } from "react";
import axios from "axios";

const initialState = {
	isAuthenticated: false,
	user: null,
	token: null,
};

const AuthContext = React.createContext({
	...initialState,
	login: (user: any) => {},
	logout: () => {},
	signup: (user: any) => {},
	forgot: (email: String) => {},
	reset: (formData: any) => {},
});

export const AuthContextProvider = (props: any) => {
	const [state, setState] = useState(initialState);

	const loginHandler = async (user: any) => {
		try {
			const res = await axios.post("/api/auth/login", user, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			setState({
				isAuthenticated: true,
				user: res.data.user,
				token: res.data.token,
			});
		} catch (err) {
			throw new Error(err.message);
		}
	};

	const logoutHandler = () => {
		setState({
			isAuthenticated: false,
			user: null,
			token: null,
		});
	};

	const signupHandler = async (user: any) => {
		try {
			const res = await axios.post("/api/auth/signup", user, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			setState({
				isAuthenticated: true,
				user: res.data.user,
				token: res.data.token,
			});
		} catch (err) {
			console.log(err);
			throw new Error(err.message);
		}
	};

	const forgotHandler = async (email: String) => {
		const requestBody = {
			email,
		};

		try {
			await axios.post("/api/auth/forgot", requestBody, {
				headers: {
					"Content-Type": "application/json",
				},
			});
		} catch (err) {
			throw new Error(err);
		}
	};

	const resetHandler = async (formData: any) => {
		try {
			await axios.post("/api/auth/reset", formData, {
				headers: {
					"Content-Type": "application/json",
				},
			});
		} catch (err) {
			throw new Error(err);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				user: state.user,
				token: state.token,
				login: loginHandler,
				logout: logoutHandler,
				signup: signupHandler,
				forgot: forgotHandler,
				reset: resetHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
