import React, { Component } from 'react';
import axios from 'axios';

class ArticleAdd extends Component {

  constructor(props){
    super(props);

    this.state ={
      // empty array for the articles data
      articles : [],
      // handlers for the articles data
      id: '',
      title: '',
      author: '',
      contentURL: '',
      // empty array for all the comment data
      comment: [],
      // handlers for the comments data
      userName: "",
      userComment: ""
    }

    console.log(this.state);
  }

  componentDidMount(){
    axios.get('http://localhost:5000/ArticleDB/')
    .then(response =>{
      console.log(response);
      if (response.data.length > 0){
        this.setState({
          id: response.data.map(article => article.id),
          title: response.data.map(article => article.title),
          author: response.data.map(article => article.author),
          contentURL: response.data.map(article => article.contentURL),
          comment: [response.data.map(article => article.comment)],
          userName: response.data.map(article => article.comment.userName),
          entryDate: response.data.map(article => article.comment.date),
          userComment: response.data.map(article => article.comment.comment)
        })
      }
    
    })
    }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangeComment = (e) => {
    this.setState({
      comment: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault()
    const userComment = {
      username: this.state.username,
      comment: this.state.comment
    }

    axios.post('http://localhost:5000/comments/add', userComment)
    .then(res => console.log(res.data));
  }


  render() {
    return (
      <div className="comment">
        <h3>add comment</h3>
        <form onSubmit={this.onSubmit}>
          <label> username: </label>
          <select 
          ref="userInput"
            required
            value = {this.state.username}
            onChange={this.onChangeUsername}>
              {this.state.users.map( (user) =>{
                  return (
                    <option 
                    key={user} 
                    value={user}>
                      {user}
                    </option>
                  ); 
                })} 
            </select>

            <label>Comment: </label>
            <input 
            type="textarea" 
            name="comment" 
            id="comment"
            value={this.state.comment}
            onChange={this.onChangeComment} />
            <button type="submit">add comment</button>
        </form>
        
      </div>
    ); 
  }
}

export default ArticleAdd;