import React, { Component } from 'react';
import Comment from './components/Comment';
import Submit from './components/Submit';
import Thread from './components/Thread';
import Login from './components/Login';
import './App.css';
import NavBar from "./components/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Router basename="/" history={history}>
        <div className="App">
          <NavBar />
          
          <Switch>
            <Route path="/" exact />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>

          <Route
            path="/submit"
            render={() => (
              <Submit />
            )}
          />
          <Route
            path="/login"
            render={() => (
              <Login />
            )}
          />
          <Route
            path="/thread"
            render={() => (
              <Thread />
            )}
          />
          <Comment />
        </div>
      </Router>
    );
  }
}

export default App;