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
    signup: (user: any) => {}
});

export const AuthProvider = (props: any) => {
    const [state, setState] = useState(initialState);

    const loginHandler = async (user: any) => {
        try {
            const res = await fetch('/api/auth/login', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(user)
            })

            const data = await res.json();

            setState({
                isAuthenticated: true,
                user: data.user,
                token: data.token
            })
        } catch (err) {
            throw new Error(err.message);
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
            throw new Error(err.message);
        }
    }

    const signupHandler = async (user: any) => {
        try {
            const res = await fetch('/api/auth/signup', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(user)
            })

            const data = await res.json();

            setState({
                isAuthenticated: true,
                user: data.user,
                token: data.token
            })
        } catch (err) {
            throw new Error(err.message);
        }
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            token: state.token,
            login: loginHandler,
            logout: logoutHandler,
            signup: signupHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;