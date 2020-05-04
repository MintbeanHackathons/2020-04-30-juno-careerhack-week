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
    axios.get('http://ec2-3-15-40-216.us-east-2.compute.amazonaws.com:5000/articles')
    .then(response =>{
      console.log(response);
      if (response.data.length > 0){
        this.setState({
          articles: response.data
          // comment: [response.data.map(article => article.comment)],
          // userName: response.data.map(article => article.comment.userName),
          // entryDate: response.data.map(article => article.comment.date),
          // userComment: response.data.map(article => article.comment.comment)
        })
      }
    
    })
    }

  render() {
    return (
      <div className="thread">
        <h3>Articles</h3>
        <ol>
          {this.state.articles.map((article) => {
            return (
              <li key={article._id}>
                <a href={article.contentURL}>{article.title}</a>
                {/* <p>Comment</p> */}
              </li>
            );
          })}
        </ol>
      </div>
    ); 
  }
}

export default ArticleAdd;