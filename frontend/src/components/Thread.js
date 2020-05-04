import React, { Component } from 'react';
import ArticleAdd from './ArticleAdd';

// hard coded an array to create basic logic for thread component, this array would be replaced with array from database
const arrayOfArticles = [
  { title: 'google', url: 'https://www.google.ca/'},
  { title: 'medium', url: 'https://medium.com/'},
  { title: 'github', url: 'https://github.com/'},
]

class Thread extends Component {
  render() {
    return (
      <div className="thread">
        <h3>Thread Component</h3>
        <ArticleAdd />
        <ol>
          {arrayOfArticles.map(article => {
            return (
              <li>
                <a href={article.url}>{article.title}</a>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Thread;


