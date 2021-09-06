import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ProfileInfo from "../Components/profile/ProfileInfo";
import { Layout } from "../Components/Layout";

import UserContext from "../context/UserContext";
import AlertContext from "../context/AlertContext";

import styles from "../styles/Home.module.css";

export default function Profile() {
	const router = useRouter();
	const userContext = useContext(UserContext);
	const alertContext = useContext(AlertContext);

	useEffect(() => {
		if (typeof window !== "undefined") {
			let userdata = "";
			userdata = localStorage.getItem("userdata");

			if (userdata !== "") {
				return;
			}
		} else {
			if (!userContext.user) {
				alertContext.setAlert("error", "Woah There", "You are not logged in.");
				router.push("/auth/login");
			}
		}
	}, [userContext]);

	const user = userContext.user;

	const userState = {
		name: user?.name || "",
		email: user?.email || "",
		status: user?.status || "Not Applied",
	};

	const { name, email, status } = userState;

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
					<button onClick={onEdit} className={styles.profile_button}>
						EDIT PROFILE
					</button>
				</div>
			</div>
		</Layout>
	);
}
