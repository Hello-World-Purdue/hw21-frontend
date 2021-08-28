import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import UserContext from "../context/UserContext";
import ProfileInfo from "../Components/profile/ProfileInfo";
import { Layout } from "../Components/Layout";

import styles from "../styles/Home.module.css";

export default function Profile() {
	const router = useRouter();
	const userContext = useContext(UserContext);

	const { name, email, application } = userContext.user;

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
					<ProfileInfo
						header="Application Status"
						placeholder={application ? application.status : "Not Applied"}
					/>
					<button
						onClick={onEdit}
						className={styles.profile_button}
					>
						EDIT PROFILE
					</button>
				</div>
			</div>
		</Layout>
	);
}
