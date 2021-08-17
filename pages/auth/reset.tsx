import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../../context/AuthContext';
import AlertContext from '../../context/AlertContext';

import ResetForm from '../../Components/Forms/ResetForm';

import styles from "../../styles/forms.module.css";

const Reset = () => {
    const { reset } = useContext(AuthContext);
    const { setError } = useContext(AlertContext);

    const router = useRouter();

    const updatePassword = (password: String) => {
        try {
            reset(password);
            router.push('/auth/login');
        } catch (err) {
            setError('Verification Error', err.message);
        }
    }

    return (
        <div className={styles.formPage}>
            <ResetForm updatePassword={updatePassword} />
        </div>
    )
}

export default Reset;
