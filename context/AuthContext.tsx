import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = (process.env.NODE_ENV == 'production') ? 'https://helloworldpurdue-api.herokuapp.com': ''

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
	update: (user: any) => {},
});

export const AuthContextProvider = (props: any) => {
	let userdatastring = "";
	let userData = null;

	const [state, setState] = useState(initialState);

	useEffect(() => {
		console.log("page reloaded");
		if (typeof window !== "undefined") {
			userdatastring = localStorage.getItem("userdata");
		}

		if (userdatastring !== "") {
			userData = JSON.parse(userdatastring);
		}

		console.log("userData", userData);
		setState({
			isAuthenticated: userData ? true : false,
			user: userData ? userData.user : null,
			token: userData ? userData.token : null,
		});

		console.log("state set");
	}, []);

	const loginHandler = async (user: any) => {
		try {
			const res = await axios.post("/api/auth/login", user, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			localStorage.setItem("userdata", JSON.stringify(res.data));

			setState({
				isAuthenticated: true,
				user: res.data.user,
				token: res.data.token,
			});
		} catch (err) {
			if (err.response) {
				return Promise.reject(err.response.data.error)
			}
			return Promise.reject(err.message)
		}
	};

	const logoutHandler = () => {
		localStorage.removeItem("userdata");
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

			localStorage.setItem("userdata", JSON.stringify(res.data));

			setState({
				isAuthenticated: true,
				user: res.data.user,
				token: res.data.token,
			});
		} catch (err) {
			if (err.response) {
				return Promise.reject(err.response.data.error)
			}
			return Promise.reject(err.message)
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
			if (err.response) {
				return Promise.reject(err.response.data.error)
			}
			return Promise.reject(err.message)
		}
	};

	const updateUser = (user: any) => {
		setState({
			...state,
			user: user,
		});
	};

	const resetHandler = async (formData: any) => {
		try {
			await axios.post("/api/auth/reset", formData, {
				headers: {
					"Content-Type": "application/json",
				},
			});
		} catch (err) {
			if (err.response) {
				return Promise.reject(err.response.data.error)
			}
			return Promise.reject(err.message)
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
				update: updateUser,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
