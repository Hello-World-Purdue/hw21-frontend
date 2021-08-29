import React, { useState } from "react";
import Image from "next/image";
import { Layout } from "../Layout";

import styles from "../../styles/Home.module.css";

const EditProfileForm: React.FC<{
	name: string;
	email: string;
	status: string;
	editProfile: (formData: any) => void;
}> = (props) => {
	const [name, setName] = useState(props.name);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const formData = {
			name,
		};

		props.editProfile(formData);
	};

	return (
		<Layout>
			<div className={styles.profile_main}>
				<form onSubmit={handleSubmit} className={styles.profile_box}>
					<div className={styles.profile_account}>
						<Image
							src={require("../../images/profile/profile_account.svg")}
							layout="fill"
						/>
					</div>

					<div className={styles.profile_info}>
						<img
							alt="full name"
							src={require("../../images/profile/profile_face.svg")}
						/>
						<div className={styles.profile_container}>
							<div className={styles.profile_header}>
								<h1>Full Name</h1>
							</div>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className={styles.profile_input}
								placeholder="First Last"
							></input>
						</div>
					</div>
					<div className={styles.profile_info}>
						<img
							alt="email"
							src={require("../../images/profile/profile_email.svg")}
						/>
						<div className={styles.profile_container}>
							<div className={styles.profile_header}>
								<h1>Email</h1>
							</div>
							<div className={styles.profile_data}>
								<h1>{props.email}</h1>
							</div>
						</div>
					</div>
					<div className={styles.profile_info}>
						<img
							className={styles.profile_image}
							alt="status"
							src={require("../../images/profile/profile_status.svg")}
						/>
						<div className={styles.profile_container}>
							<div className={styles.profile_header}>
								<h1>Application Status</h1>
							</div>
							<div className={styles.profile_data}>
								<h1>{props.status}</h1>
							</div>
						</div>
					</div>
					<input
						type="submit"
						value="SUBMIT"
						className={styles.profile_button}
					/>
				</form>
			</div>
		</Layout>
	);
};

export default EditProfileForm;
