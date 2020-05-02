import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <h3>Comment Component</h3>
        <input type="textarea" name="comment" id="comment" />
        <button>add comment</button>
      </div>
    ); 
  }
}

export default Comment;