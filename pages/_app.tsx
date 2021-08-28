<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'
import '../styles/index.css'
import '../styles/navbar.css'
import '../styles/index.module.scss'
=======
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
>>>>>>> 4d8ec26eaf12a17d7cde866136e0f5e0e308384b
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
