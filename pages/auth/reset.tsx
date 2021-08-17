import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../../context/AuthContext';
import AlertContext from '../../context/AlertContext';

import ResetForm from '../../Components/Forms/ResetForm';

import styles from "../../styles/forms.module.css";

const Reset = () => {
    const { reset } = useContext(AuthContext);
    const { setAlert } = useContext(AlertContext);

    const router = useRouter();

    const updatePassword = (password: String) => {
        try {
            reset(password);
            setAlert('success', 'Verification Success', 'Password updated successfully');
            router.push('/auth/login');
        } catch (err) {
            setAlert('error', 'Verification Error', err.message);
        }
    }

    return (
        <div className={styles.formPage}>
            <ResetForm updatePassword={updatePassword} />
        </div>
    )
}

export default Reset;
