import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <h1>SHLC News</h1>
            <ul>
              <li>articles</li>
              <li>submit</li>
              <li>login</li>
            </ul>
          </nav>
        </header>

        <section className="submit">
          {/* this section will not have full header */}
          <h1>Submit</h1>
          <form>
            <label htmlFor="title">title</label>
            <input type="text" name="title" id="title"/>
            <label htmlFor="url">url</label>
            <input type="text" name="url" id="url"/>
            <label htmlFor="text">text</label>
            <input type="textarea" name="text" id="text"/>
            <input type="submit" name="submit" id="submit"/>
          </form>
          <p>Leave url blank to submit a question for discussion.</p>
        </section>

        <section className="questions-thread">
          {/* this section will have full header and can use same component in articles-thread*/}
          <ol>
            <li>user question will appear here, on click will bring you to question page</li>
          </ol>
        </section>

        <section className="question-discussion">
          <h2>user question is listed here</h2>
          <input type="textarea" name="comment" id="comment"/>
          <button>add comment</button>
          <p>comment from user number 1</p>
          <p>comment from user number 2</p>
        </section>

        <section className="articles-thread">
          <ol>
            <li>title submitted by the user will display here, on click will bring you to url given by user</li>
          </ol>
        </section>
      </div>
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
