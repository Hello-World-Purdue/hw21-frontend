import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import UserContext from "../context/UserContext";
import AlertContext from "../context/AlertContext";

import EditProfileForm from "../Components/Forms/EditProfileForm";
import AuthContext from "../context/AuthContext";

export default function Edit() {
	const router = useRouter();

	const userContext = useContext(UserContext);
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	useEffect(() => {
		if (!localStorage.getItem('userdata')) {
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

	const user = userContext.user;

	const userState = {
		name: user?.name || "",
		email: user?.email || "",
		status: user?.application?.statusPublic || "Not Applied",
	};

	const { name, email, status } = userState;

	const editProfile = async (formData: any) => {
		try {
			await userContext.updateProfile(userContext.user._id, formData);
			alertContext.setAlert(
				"success",
				"Profile Update",
				"You have successfully updated your profile info!"
			);
			router.push("/profile");
		} catch (err) {
			alertContext.setAlert(
				"error",
				"Update Error",
				"Oops! Something went wrong!"
			);
		}
	};

	return (
		<EditProfileForm
			name={name}
			email={email}
			status={status}
			editProfile={editProfile}
		/>
	);
}
