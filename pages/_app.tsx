import { AuthContextProvider } from "../context/AuthContext";
import { UserContextProvider } from "../context/UserContext";
import { Navbar } from "../Components/Navbar";

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
				<Component {...pageProps} />
			</UserContextProvider>
		</AuthContextProvider>
	);
}

export default MyApp;
