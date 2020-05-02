import React, { Component } from 'react';

class Thread extends Component {
  render() {
    return (
      <div className="thread">
        <h3>Thread Component</h3>
        <ol>
          <li>title submitted by the user will display here, on click will bring you to url given by user</li>
        </ol>
      </div>
    );
  }
}

export default Thread;