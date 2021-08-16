import React from 'react';
import ResetForm from '../../Components/Forms/ResetForm';

import styles from "../../styles/forms.module.css";

const Reset = () => {
    const updatePassword = (password: String) => {

    }

    return (
        <div className={styles.formPage}>
            <ResetForm updatePassword={updatePassword} />
        </div>
    )
}

export default Reset;
