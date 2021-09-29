import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import ApplicationForm from "../Components/Forms/ApplicationForm";

import AlertContext from "../context/AlertContext";
import UserContext from "../context/UserContext";

import styles from "../styles/forms.module.css";
import AuthContext from "../context/AuthContext";

function appPage() {
  const { apply, user } = useContext(UserContext);
  const { setAlert } = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("userdata")) {
      router.push("/auth/login");
    }
    if (typeof window !== "undefined") {
      let userdata = "";
      userdata = localStorage.getItem("userdata");

      if (userdata !== "") {
        return;
      }
    }
  }, []);

  const submitAnswers = async (userData: FormData) => {
    try {
      await apply(user._id, userData);
      setAlert("success", "Application Success", "Thank you for applying!");
      router.push("/profile");
    } catch (err) {
      // console.log(err)
      setAlert("error", "Application Error", err.message);
    }
  };

  return (
    <div className={styles.formPage}>
      <ApplicationForm sendAnswers={submitAnswers} />
    </div>
  );
}

export default appPage;
