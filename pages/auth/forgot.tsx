import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../../context/AuthContext';
import AlertContext from '../../context/AlertContext';

import ForgotForm from '../../Components/Forms/ForgotForm';

import styles from "../../styles/forms.module.css";

const Forgot = () => {
    const { forgot } = useContext(AuthContext);
    const { setError } = useContext(AlertContext);

    const router = useRouter();

    const sendEmail = async (email: String) => {
        try {
            await forgot(email);
            router.push('/auth/reset');
        } catch (err) {
            setError('Email Error', err.message);
        }
    }

    return (
        <div className={styles.formPage}>
            <ForgotForm sendEmail={sendEmail} />
        </div>
    )
}

export default Forgot
