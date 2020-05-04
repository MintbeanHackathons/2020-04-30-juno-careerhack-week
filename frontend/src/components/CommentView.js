import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Comment = props => {
    return (
      <tr className="commentDetails">
        <td>{props.comment.username}: </td>
        <td>{props.comment.comment}</td>
        <td>
            <Link to={"/edit/" + props.comment._id}>edit</Link> | <a href="#" onClick={() => { props.deleteComment(props.comment._id); }}>
              delete
          </a>
        </td>
      </tr>
    );   
}

class CommentView extends Component {

    constructor(props){
        super(props);

        this.state = {
          comments: []
        }
    }



    componentDidMount(){
        axios
          .get(
            "http://ec2-3-15-40-216.us-east-2.compute.amazonaws.com:5000/comments/"
          )
          .then((response) => {
            console.log('comment', response);
            this.setState({ comments: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
    }


  deleteComment = (id) => {
    axios.delete("http://ec2-3-15-40-216.us-east-2.compute.amazonaws.com:5000/comments/" + id)
      .then(res => console.log(res.data));
    this.setState({
      comments: this.state.comments.filter(el => el._id !== id)
    })
  }

    // for every element in the comments array return a component ( a row of the table)
    commentList(){
        return this.state.comments.map(currentComment => {
            return <Comment comment={currentComment} deleteComment={this.deleteComment} key={currentComment._id}/>;
        })
    }

    render(){
        return (
          <div className="viewComments">
            <h2>comments:</h2>
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                  { this.commentList() }
              </tbody>
            </table>
          </div>
        );
    }
}
export default CommentView;