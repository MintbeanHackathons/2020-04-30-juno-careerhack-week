import React, { Component } from 'react';
import CommentAdd from './components/CommentAdd';
import CommentView from './components/CommentView'
import CommentEdit from './components/CommentEdit'
import Submit from './components/Submit';
import Thread from './components/Thread';
import ArticleAdd from './components/ArticleAdd'
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
            <PrivateRoute 
              path="/profile" 
              component={Profile} />
          </Switch>

          <Route
            path="/submit"
            render={() => (
              <Submit />
            )}
          />

          <Route
            path="/" exact
            render={() => (
              <div>
                <Thread />
                <ArticleAdd />
                <CommentAdd />
                <CommentView />
              </div>
            )}
          />
          <Route 
            path="/edit/:id" 
            component={CommentEdit} 
          />

        </div>
      </Router>
    );
  }
}

export default App;