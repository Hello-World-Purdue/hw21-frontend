import React, { useState } from 'react';

const initialState = {
    isAuthenticated: false,
    user: null,
}

const AuthContext = React.createContext({
    isAuthenticated: false,
    user: null,
    login: (user: any) => {},
    logout: () => {},
    signup: (user: any) => {}
});

export const AuthProvider = (props: any) => {
    const [state, setState] = useState(initialState);

    const loginHandler = async (user: any) => {
        try {

        } catch (err) {

        }
    }

    const logoutHandler = async () => {
        try {
            const res = await fetch('/api/logout');
        } catch (err) {
            console.error(err.message);
        }
    }

    const signupHandler = async (user: any) => {
        try {

        } catch (err) {

        }
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            login: loginHandler,
            logout: logoutHandler,
            signup: signupHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}