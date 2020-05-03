import React, { Component } from 'react';
import Comment from './components/Comment';
import Submit from './components/Submit';
import Nav from './components/Nav';
import Thread from './components/Thread';
import Login from './components/Login';
import './App.css';
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
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

          <Nav />

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

// submit - component 
//  this is a form with
//    title:
//    url: (leave url blank to submit a question)
//    or
//    text:
//    submit

// questions - component
// if url is blank submit as question
// question as link when clicked brings up question with text input for comments and with submitted comments listed below

// articles - component 
//  this is a list of all submitted articles
//    if no url, the text will be title
// title that when clicked goes to url

//log-in component 
//  username:
// password:
// button
