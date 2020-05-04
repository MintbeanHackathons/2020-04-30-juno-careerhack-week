// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div className="navigation">
            <nav className="wrapper">
                <ul>
                    <li>
                        <NavLink to="/" exact>SHLCNews</NavLink>
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

            <div className = "linkContainer">
                <p className="links"><a href="https://youtu.be/0dcRlnB4FiA" target="_blank">Video Explanation</a></p>
                <p className="links"><a href="https://github.com/teamSHL/2020-04-30-juno-careerhack-week-day-1-teamshl" target="_blank">Github Link</a></p>
            </div>
            
        </div>
    );
};

export default NavBar;