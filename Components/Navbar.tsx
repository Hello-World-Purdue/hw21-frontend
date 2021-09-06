import React, { FC, useContext } from 'react';
import AuthContext from "../context/AuthContext";

import Image from 'next/image';

import styles from '../styles/Home.module.css';

import { useRouter } from 'next/router';
import AlertContext from '../context/AlertContext';

type NavbarProps = {};

export const Navbar: FC<NavbarProps> = () => {

  const {isAuthenticated, user, logout} = useContext(AuthContext);
  const {setAlert} = useContext(AlertContext)
  const router = useRouter();

	function toggleNavbar() {}

	const onLoginRegisterClicked = () => {
    router.push('/auth/login');
	};

	const onLogoutClicked = () => {
		logout()
		setAlert('success', 'Logout Successful', 'You have been successfully logged out!');
		router.push('/')		
	}

	return (
		<div className={styles.topNav}>
			<nav className="navbar navbar-expand-lg navbar-dark  ">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbar"
					aria-controls="navbar"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon "></span>
				</button>
				{/* className was previously styles.topNav*/}

				{/* We'll deal with active pages after */}
				{/* <a className={styles.active} href="/">Home</a> */}
				<div className="collapse navbar-collapse" style={{justifyContent: 'flex-end'}} id="navbar">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="/schedule">
								Schedule
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/announcements">
								Announcements
							</a>
						</li>
						{
							isAuthenticated &&
							<li className="nav-item">
							<a className="nav-link" href="/profile">
								Profile
							</a>
							</li>
						}
					</ul>
				</div>
				{/* Find a way to center big old logo img vertically */}
				{/* the issue of vertical alignment only happens when I wrap the img with an <a>*/}

				<a className="navbar-brand d-flex" style={{marginRight: '0px'}} href="/">
					<Image
						src="/logo.png"
						layout="intrinsic"
						width={50}
						height={50}
					></Image>
				</a>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/sponsors">
                Sponsors
              </a>
            </li>
			<li className="nav-item">
				<a className="nav-link" href="/faq">
					FAQ's
				</a>
			</li>
            {isAuthenticated && user.role === "ADMIN" && <li className="nav-item">
              <a className="nav-link" href="/admin_dashboard">
                Admin
              </a>
            </li>}
            
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link href="/admin_dashboard">
                    <a className="dropdown-item">Admin Dashboard</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="dropdown-item">Announcements</a>
                  </Link>
                </li>
              </ul>
            </li> */}
            {/* ELSE */}
          </ul>
        </div>
        {!isAuthenticated && <button onClick={onLoginRegisterClicked} className="login-register-button"> LOGIN/REGISTER</button>}
		{isAuthenticated && <button onClick={onLogoutClicked} className="login-register-button"> LOGOUT</button>}
      </nav>
    </div>
  );
};
