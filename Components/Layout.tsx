import React, { FC } from "react";

type LayoutProps = {
	children?: React.ReactNode;
};
export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className="body">
			<div className="page-container">
				{children}
			</div>
		</div>
	);
};