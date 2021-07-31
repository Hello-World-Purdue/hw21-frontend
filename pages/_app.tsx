import { AuthContextProvider } from '../context/AuthContext';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/index.css'
import '../styles/navbar.css'

import '../styles/index.module.scss'
function MyApp({ Component, pageProps }) {
    return (
        <AuthContextProvider>
            <Component {...pageProps} />
        </AuthContextProvider>
    )
}

export default MyApp
