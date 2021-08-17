import { AuthContextProvider } from "../context/AuthContext";
import { UserContextProvider } from "../context/UserContext";
import { AlertContextProvider } from "../context/AlertContext";

import Alert from "../Components/Alert";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/index.css";
import "../styles/navbar.css";

import "../styles/index.module.css";
function MyApp({ Component, pageProps }) {
	return (
		<AuthContextProvider>
			<UserContextProvider>
				<AlertContextProvider>
					<Component {...pageProps} />
					<Alert />
				</AlertContextProvider>
			</UserContextProvider>
		</AuthContextProvider>
	);
}

export default MyApp;
