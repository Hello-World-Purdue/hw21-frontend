import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../../context/AuthContext';
import AlertContext from '../../context/AlertContext';

import ForgotForm from '../../Components/Forms/ForgotForm';

import styles from "../../styles/forms.module.css";

const Forgot = () => {
    const { forgot } = useContext(AuthContext);
    const { setAlert } = useContext(AlertContext);

    const router = useRouter();

    const sendEmail = async (email: String) => {
        try {
            await forgot(email);
            setAlert('success', 'Email Sent', `An email with the reset link has been sent to ${email}. Follow the instructions to reset your password`);
        } catch (err) {
            setAlert('error', 'Email Error', 'Looks like something went wrong.');
        }
    }

    return (
        <div className={styles.formPage}>
            <ForgotForm sendEmail={sendEmail} />
        </div>
    )
}

export default Forgot
