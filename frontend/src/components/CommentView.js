import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Comment = props => {
    return (
      <tr className="commentDetails">
        <td>{props.comment.username}: </td>
        <td>{props.comment.comment}</td>
        <td>
          <Link to={"/edit/" + props.comment._id}>edit</Link> |{" "}
          <a
            href="#"
            onClick={() => {
              props.deleteComment(props.comment._id);
            }}
          >
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
          .get("http://localhost:5000/comments/")
          .then((response) => {
            this.setState({ comments: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
    }

    deleteComment(id){
        axios.delete("http://localhost:5000/comments/"+id)
        .then(res => console.log(res.data));

        this.setState({
            comments: this.state.comments.filter(el => el._id != id)
        })
    }

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
              <thread>
                <tr>
                  <th>username</th>
                  <th>comment</th>
                </tr>
              </thread>
            </table>
            <body>
                { this.commentList() }
            </body>
          </div>
        );
    }
}
export default CommentView;