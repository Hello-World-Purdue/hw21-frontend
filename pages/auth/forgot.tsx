import React from 'react';
import ForgotForm from '../../Components/Forms/ForgotForm';

import styles from "../../styles/forms.module.css";

const Forgot = () => {
    const sendEmail = (email) => {

    }

    return (
        <div className={styles.formPage}>
            <ForgotForm sendEmail={sendEmail} />
        </div>
    )
}

export default Forgot
