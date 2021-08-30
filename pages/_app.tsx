// Import head to add <script> tag to every page for Bootstrap JS and Popper.JS
import Head from 'next/head'

import { AuthContextProvider } from "../context/AuthContext";
import { UserContextProvider } from "../context/UserContext";
import { AlertContextProvider } from "../context/AlertContext";

import Alert from "../Components/Alert";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/index.css";
import "../styles/navbar.css";

import "../styles/index.module.css";
import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
function MyApp({ Component, pageProps }) {
	return (
		<AuthContextProvider>
			<UserContextProvider>
				<AlertContextProvider>
				<Head>
					<title>Hello World 2021</title>
					<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
					<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
					<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
					<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
					<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
					<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
					<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
					<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
					<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
					<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
					<link rel="manifest" href="/manifest.json"/>
					<meta name="msapplication-TileColor" content="#ffffff"/>
					<meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
					<meta name="theme-color" content="#ffffff"/>
					<script async src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossOrigin="anonymous" />
					<script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossOrigin="anonymous" />
				</Head>
					<Navbar/>
					<Component {...pageProps} />
					<Footer/>
					<Alert />
				</AlertContextProvider>
			</UserContextProvider>
		</AuthContextProvider>
	);
}

export default MyApp;
