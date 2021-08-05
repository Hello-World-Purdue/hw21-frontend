import React, { useState } from 'react';

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null
}

const AuthContext = React.createContext({
    ...initialState,
    login: (user: any) => {},
    logout: () => {},
    signup: (user: any) => {},
    forgot: (user: any) => {},
    reset: (formData: any) => {},
});

export const AuthContextProvider = (props: any) => {
    const [state, setState] = useState(initialState);

    const loginHandler = async (user: any) => {
        try {
            // const res = await fetch('/api/auth/login', {
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     method: 'POST',
            //     body: JSON.stringify(user)
            // })

            // console.log('res', res);
            // const data = await res.json();

            // setState({
            //     isAuthenticated: true,
            //     user: data.user,
            //     token: data.token
            // })
        } catch (err) {
            throw new Error(err.error);
        }
    }

    const logoutHandler = async () => {
        try {
            setState({
                isAuthenticated: false,
                user: null,
                token: null
            })
        } catch (err) {
            throw new Error(err.error);
        }
    }

    const signupHandler = async (user: any) => {
        try {
            // const res = await fetch('/api/auth/signup', {
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     method: 'POST',
            //     body: JSON.stringify(user)
            // })

            // const data = await res.json();

            // setState({
            //     isAuthenticated: true,
            //     user: data.user,
            //     token: data.token
            // })
        } catch (err) {
            throw new Error(err.error);
        }
    }

    const forgotHandler = async (email: String) => {
        const requestBody = {
            email
        }

        try {
            // const res = await fetch('/api/auth/forgot', {
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     method: 'POST',
            //     body: JSON.stringify(requestBody)
            // });
        } catch (err) {
            throw new Error(err);
        }
    }

    const resetHandler = async (formData: any) => {
        try {
            // const res = await fetch('/api/auth/reset', {
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     method: 'POST',
            //     body: JSON.stringify(formData)
            // });
        } catch (err) {
            throw new Error(err);
        }
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            token: state.token,
            login: loginHandler,
            logout: logoutHandler,
            signup: signupHandler,
            forgot: forgotHandler,
            reset: resetHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;