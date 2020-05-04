import React, { Component } from 'react';

class Submit extends Component {
  render() {
    return (
      <div className="submit">
        <h2>Submit Articles:</h2>
        <form>
          <div className="title">
            <label htmlFor="title">title: </label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="url">
            <label htmlFor="url">url: </label>
            <input type="url" name="url" id="url" />
          </div>
          {/* <p>or</p>
          <div className="text">
            <label htmlFor="text">text: </label>
            <input type="textarea" name="text" id="text" />
          </div> */}
          <div className="submitButton">
            <button>submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Submit;