// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
    const { loading, user } = useAuth0();

    if (loading || !user) {
        return <div>Loading...</div>;
    }

    return (
        <Fragment>
            <div className="profileDetails">
                <div className="imgContainer">
                    <img src={user.picture} alt="Profile" />
                </div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <code>{JSON.stringify(user, null, 2)}</code>
            </div>
        </Fragment>
    );
};

export default Profile;