// Import head to add <script> tag to every page for Bootstrap JS and Popper.JS
import Head from "next/head";

import { AuthContextProvider } from "../context/AuthContext";
import { UserContextProvider } from "../context/UserContext";
import { AlertContextProvider } from "../context/AlertContext";

import Alert from "../Components/Alert";

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
					<Head>
						<script
							async
							src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"
							integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp"
							crossOrigin="anonymous"
						/>
						<script
							async
							src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js"
							integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/"
							crossOrigin="anonymous"
						/>
					</Head>
					<Component {...pageProps} />
					<Alert />
				</AlertContextProvider>
			</UserContextProvider>
		</AuthContextProvider>
	);
}

export default MyApp;
