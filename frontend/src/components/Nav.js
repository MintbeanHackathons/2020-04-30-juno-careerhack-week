import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="navigation">
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>SHLC News (home)</NavLink>
            </li>
            <li>
              <NavLink to="/thread">articles</NavLink>
            </li>
            <li>
              <NavLink to="/submit">submit</NavLink>
            </li>
            <li>
              <NavLink to="/login">login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;