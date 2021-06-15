import React from "react";
import ApplicationForm from "../components/ApplicationForm";

function appPage() {
	return (
		<div
			style={{
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<ApplicationForm
				name="Darren Iyer"
				email="iyerd@purdue.edu"
				status="WAITING"
			/>
		</div>
	);
};

export default appPage;