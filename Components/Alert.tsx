import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../context/AlertContext';
import Toast from './Toast';

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (alertContext.title && alertContext.message) {
            setShowToast(true);
        } else {
            setShowToast(false);
        }
    }, [alertContext]);

    const { title, message, type, clearAlert } = alertContext;

    const handleClose = () => {
        clearAlert();
        setShowToast(false);
    }

    return (
        <Toast
				show={showToast}
				title={title}
				message={message}
				comment={type === 'error' ? 'Please try again' : null}
				onHide={handleClose}
			/>
    )
}

export default Alert;