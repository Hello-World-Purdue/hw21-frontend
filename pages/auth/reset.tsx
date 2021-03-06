import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../../context/AuthContext';
import AlertContext from '../../context/AlertContext';

import ResetForm from '../../Components/Forms/ResetForm';

import styles from "../../styles/forms.module.css";

const Reset = () => {
    const { reset } = useContext(AuthContext);
    const { setAlert } = useContext(AlertContext);

    const router = useRouter();

    const updatePassword = async (formData: any) => {
        try {
            await reset(formData);
            setAlert('success', 'Verification Success', 'Password updated successfully');
            router.push('/auth/login');
        } catch (err) {
            setAlert('error', 'Verification Error', 'Looks like something went wrong.');
        }
    }

    return (
        <div className={styles.formPage}>
            <ResetForm updatePassword={updatePassword} />
        </div>
    )
}

export default Reset;
