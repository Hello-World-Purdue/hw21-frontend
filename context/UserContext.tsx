import React, { useState, useContext, useEffect } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";

axios.defaults.baseURL = (process.env.NODE_ENV === 'production') ? 'https://helloworldpurdue-api.herokuapp.com': ''

const initialState = {
    application: null,
    user: null,
};

const UserContext = React.createContext({
    ...initialState,
    getUsers: () => { },
    getUser: (id: String) => { },
    getUserApp: (id: String) => { },
    getAuthApp: () => { },
    updateProfile: (id: String, formData: any) => { },
    apply: (id: String, appData: any) => { },
});

export const UserContextProvider = (props: any) => {
    const authContext = useContext(AuthContext);

    const [state, setState] = useState(initialState);

    useEffect(() => {
        setState({
            ...state,
            user: authContext.user,
        });
    }, [authContext]);

    // Get all users
    const getUsers = () => { };

    // Get the user by id
    const getUser = async (id: String) => {
        try {
            const res = await axios.get(`/api/users/${id}`);

            setState({
                ...state,
                user: res.data,
            });
        } catch (err) {
            if (err.response) {
				return Promise.reject(err.response.data.error)
			}
			return Promise.reject(err.message)
        }
    };

    // Get application (user id)
    const getUserApp = async (id: String) => {
        try {
            const res = await axios.get(`/api/users/${id}/application`);

            setState({
                ...state,
                application: res.data,
            });
        } catch (err) {
            if (err.response) {
				return Promise.reject(err.response.data.error)
			}
			return Promise.reject(err.message)
        }
    };

    // Get application (authorized user)
    const getAuthApp = async () => {
        try {
            const res = await axios.get("/api/users/application");

            setState({
                ...state,
                application: res.data,
            });
        } catch (err) {
            if (err.response) {
				return Promise.reject(err.response.data.error)
			}
			return Promise.reject(err.message)
        }
    };

    // Edit profile
    const updateProfile = async (id: String, formData: any) => {
        try {
            const res = await axios.put(`/api/users/${id}`, formData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authContext.token}`,
                },
            });

            authContext.update(res.data.user);

            setState({
                ...state,
                user: res.data.user,
            });
        } catch (err) {
            if (err.response) {
				return Promise.reject(err.response.data.error)
			}
			return Promise.reject(err.message)
        }
    };

    // Apply for hackathon
    const apply = async (id: String, appData: any) => {

        try {
            //appending as form data
            let data = new FormData();
            for (let key of Object.keys(appData)) {
                data.append(`${key}`, appData[key])
            }

            const res = await axios.post(`/api/users/${id}/apply`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${authContext.token}`,
                },
            });

            setState({
                ...state,
                application: res.data.app,
            });
        } catch (err) {
            if (err.response) {
				return Promise.reject(err.response.data.error)
			}
			return Promise.reject(err.message)
        }
    };

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                application: state.application,
                getUsers,
                getUser,
                getUserApp,
                getAuthApp,
                updateProfile,
                apply,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContext;
