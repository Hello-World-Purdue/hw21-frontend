import React, { FC, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import AlertContext from "../context/AlertContext";

type NavbarProps = {};

export const Navbar: FC<NavbarProps> = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);
  const router = useRouter();

  const onProfileClicked = () => {
    router.push("/profile");
  };

  const onLoginRegisterClicked = () => {
    router.push("/auth/login");
  };

  const onLogoutClicked = () => {
    logout();
    setAlert(
      "success",
      "Logout Successful",
      "You have been successfully logged out!"
    );
    router.push("/");
  };

  return (
    <div className={styles.topNav}>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ padding: "0px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <Image
              src="/logo.png"
              layout="intrinsic"
              width={45}
              height={45}
            ></Image>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav me-auto">
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
              <li className="nav-item">
                <a className="nav-link" href="/sponsors">
                  Sponsors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/resources">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/faq">
                  FAQ's
                </a>
              </li>
              {isAuthenticated && user?.role === "ADMIN" && (
                <li className="nav-item">
                  <a className="nav-link" href="/admin_dashboard">
                    Admin
                  </a>
                </li>
              )}
              {/* {isAuthenticated && <li className="nav-item">
								<a className="nav-link" href="/profile">
									Profile
								</a>
							</li>} */}
            </ul>
            <div className="d-flex">
              {isAuthenticated && (
                <button
                  onClick={onProfileClicked}
                  className="login-register-button"
                  style={{ marginRight: "10px", marginBottom: "4px" }}
                >
                  {" "}
                  PROFILE
                </button>
              )}
              {!isAuthenticated && (
                <button
                  onClick={onLoginRegisterClicked}
                  className="login-register-button "
                  style={{ marginBottom: "4px" }}
                >
                  {" "}
                  LOGIN/REGISTER
                </button>
              )}
              {isAuthenticated && (
                <button
                  onClick={onLogoutClicked}
                  className="login-register-button"
                  style={{ marginBottom: "4px" }}
                >
                  {" "}
                  LOGOUT
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
