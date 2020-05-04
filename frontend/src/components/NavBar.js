// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>SHLCNews</NavLink>
                    </li>
                    <li>
                        <NavLink to="/submit">submit</NavLink>
                    </li>
                    <li>
                        <div className="loginButton">
                            {!isAuthenticated && (
                                <button onClick={() => loginWithRedirect({})}>log in</button>
                            )}
                            {isAuthenticated && <button onClick={() => logout()}>log out</button>}
                            {isAuthenticated && (
                                <span> |
                                    <Link to="/profile"> profile</Link>
                                </span>
                            )}
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;