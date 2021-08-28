import React, { useContext } from "react";
import { useRouter } from 'next/router';
import UserContext from "../context/UserContext";
import AlertContext from "../context/AlertContext";

import EditProfileForm from "../Components/Forms/EditProfileForm";

export default function Edit() {
	const router = useRouter();

	const userContext = useContext(UserContext);
	const alertContext = useContext(AlertContext);

	const editProfile = async (formData: any) => {
		try {
			await userContext.updateProfile(userContext.user._id, formData);
			alertContext.setAlert('success', 'Profile Update', 'You have successfully updated your profile info!');
			router.push('/profile');
		} catch (err) {
			alertContext.setAlert('error', 'Update Error', 'Oops! Something went wrong!');
		}
	}

	const { name, email, application } = userContext.user;

	return (
		<EditProfileForm
			name={name}
			email={email}
			status={application ? application.status : 'Not Applied'}
			editProfile={editProfile}
		/>
	);
}
