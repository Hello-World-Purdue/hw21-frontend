import React, { useState } from 'react';

const initialState = {
    title: null, // What the error corresponds to (Login error, Application error)
    message: null, // The error message to display
}

const AlertContext = React.createContext({
    ...initialState,
    setError: (title: string, message: string) => {},
    clearError: () => {}
});

export const AlertContextProvider = (props: any) => {
    const [state, setState] = useState(initialState);

    // Set error
    const setError = (title: string, message: string) => {
        setState({
            title,
            message
        });
    }

    // Clear error
    const clearError = () => {
        setState({
            title: null,
            message: null
        })
    }

    return (
        <AlertContext.Provider value={{
            title: state.title,
            message: state.message,
            setError,
            clearError
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertContext;