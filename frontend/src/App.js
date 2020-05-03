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


function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router history={history}>
        <header className="App-header">
          <NavBar />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
        <Submit />
        <Comment />
        <Thread />
        <Login />
      </Router>
    </div>
  );
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
