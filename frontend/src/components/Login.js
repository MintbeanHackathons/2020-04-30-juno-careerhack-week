import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <h3>Login Component</h3>
        <label htmlFor="email">email: </label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">password: </label>
        <input type="password" name="password" id="password"/>
        <button>login</button>
      </div>
    );
  }
}

export default Login;