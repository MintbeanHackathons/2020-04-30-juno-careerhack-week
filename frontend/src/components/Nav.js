import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="navigation">
        <h3>Navigation Component</h3>
        <nav>
          <h1>SHLC News</h1>
          <ul>
            <li>articles</li>
            <li>submit</li>
            <li>login</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;