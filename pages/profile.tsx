import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ProfileInfo from "../Components/profile/ProfileInfo";
import { Layout } from "../Components/Layout";

import UserContext from "../context/UserContext";
import AlertContext from "../context/AlertContext";

import styles from "../styles/Home.module.css";
import AuthContext from "../context/AuthContext";

export default function Profile() {
  const router = useRouter();
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

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
  }, [userContext]);

  const toggleRsvp = () => {
    const { rsvp } = authContext;
    rsvp(user._id)
      .then((isRsvp) => {
        userState.rsvp = isRsvp;
        isRsvp
          ? alertContext.setAlert(
              "success",
              "RSVP Successful",
              "Yay!!! You have successfully RSVPed for HelloWorld 2021"
            )
          : alertContext.setAlert(
              "success",
              "Sorry to see you go...",
              "You have revoked your RSVP for HelloWorld 2021"
            );
      })
      .catch((e) => {
        alertContext.setAlert("error", "Cannot RSVP", e.message);
      });
  };

  const user = userContext.user;

  const userState = {
    name: user?.name || "",
    email: user?.email || "",
    status: user?.application?.statusPublic || "Not Applied",
    rsvp: user?.rsvp || false,
    helpq: user?.helpqToken || "",
  };

  const { name, email, status, rsvp, helpq } = userState;

  const onEdit = () => {
    router.push("/edit");
  };

  return (
    <Layout>
      <div className={styles.profile_main}>
        <div className={styles.profile_box}>
          <div className={styles.profile_account}>
            <Image
              src={require("../images/profile/profile_account.svg")}
              layout="fill"
            />
          </div>
          <ProfileInfo header="Full Name" placeholder={name} />
          <ProfileInfo header="Email" placeholder={email} />
          <ProfileInfo header="Application Status" placeholder={status} />
          <ProfileInfo header="Helpq Credential" placeholder={helpq} />
          <div className="d-flex flex-column">
            <button
              onClick={onEdit}
              style={{ margin: "10px" }}
              className={styles.profile_button}
            >
              EDIT PROFILE
            </button>
            {status === "Accepted" && (
              <button
                onClick={toggleRsvp}
                className={styles.profile_button}
                style={{ margin: "10px", background: "red", color: "white" }}
              >
                {rsvp ? "Withdraw RSVP" : "RSVP"}
              </button>
            )}
            <button
              className={styles.profile_button}
              style={{ margin: "10px", padding: "1px" }}
            >
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "smaller",
                }}
                href="/auth/forgot"
              >
                Change Password
              </a>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
