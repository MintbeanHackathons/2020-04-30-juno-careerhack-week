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


  render() {
    return (
      <div className="articleContent">
        <h3>Articles</h3>
        
        
      </div>
    ); 
  }
}

export default ArticleAdd;