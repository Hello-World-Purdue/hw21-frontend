import React, { useState } from 'react';
import axios from 'axios';

const initialState = {
    application: null,
    profile: null,
    user: null
};

const UserContext = React.createContext({
    ...initialState,
    getUsers: () => {},
    getUser: (id: String) => {},
    getUserApp: (id: String) => {},
    getAuthApp: () => {},
    editProfile: (formData: any) => {},
    apply: (appData: any) => {}
});

export const UserContextProvider = (props: any) => {
    const [state, setState] = useState(initialState);

    // Get all users
    const getUsers = () => {

    }
    
    // Get the user by id
    const getUser = (id: String) => {

    }

    // Get application (user id)
    const getUserApp = (id: String) => {

    }

    // Get application (authorized user)
    const getAuthApp = () => {

    }
    
    // Edit profile
    const editProfile = (formData: any) => {
    
    }

    // Apply for application
    const apply = (appData: any) => {

    }

    return (
        <UserContext.Provider value={{
            user: state.user,
            application: state.application,
            profile: state.profile,
            getUsers,
            getUser,
            getUserApp,
            getAuthApp,
            editProfile,
            apply
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;