import React, { Component } from 'react';
import axios from 'axios';



class Submit extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      author: '',
      contentURL: '',
    }
  }

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  onChangeUrl = (e) => {
    this.setState ({
      contentURL: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault()
    const newArticle = {
      title: this.state.title,
      author: this.state.author,
      contentURL: this.state.contentURL,
    }
    
    axios.post('http://localhost:5000/articles/add', newArticle)
    .then(res => console.log(res.data));

    window.location = '/'
  }

  


  render() {
    return (
      <div className="submit">
        <h2>Submit Articles:</h2>
        <form onSubmit={this.onSubmit}>
          <div className="title">
            <label htmlFor="title">title: </label>
            <input type="text" name="title" id="title"
            value = {this.state.title}
            onChange={this.onChangeTitle} />
          </div>
          <div className="url">
            <label htmlFor="url">url: </label>
            <input type="url" name="url" id="url"
            value={this.state.url}
            onChange={this.onChangeUrl}/>
          </div>
          <div className="submitButton">
            <button>submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Submit;