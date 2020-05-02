import React, { Component } from 'react';

class Submit extends Component {
  render() {
    return (
      <div className="submit">
        <h3>Submit Component</h3>
        <h2>Submit</h2>
        <form>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" />
          <label htmlFor="url">url</label>
          <input type="text" name="url" id="url" />
          <label htmlFor="text">text</label>
          <input type="textarea" name="text" id="text" />
          <input type="submit" name="submit" id="submit" />
        </form>
        <p>Leave url blank to submit a question for discussion.</p>
      </div>
    );
  }
}

export default Submit;