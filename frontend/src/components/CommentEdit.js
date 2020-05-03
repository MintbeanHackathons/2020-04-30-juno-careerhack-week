import React, { Component } from "react";
import axios from "axios";

class CommentEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      users: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/comments/"+this.props.match.params.id)
    .then(response => {
        this.setState({
            username: response.data.username,
            comment: response.data.comment
        })
    })
    .catch = (error) =>{
        console.log(error);
    }

    axios.get("http://localhost:5000/users/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map((user) => user.username),
          username: response.data[0].username,
        });
      }
    });
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangeComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userComment = {
      username: this.state.username,
      comment: this.state.comment,
    };

    axios
      .post("http://localhost:5000/comments/update/"+this.props.match.params.id, userComment)
      .then((res) => console.log(res.data));
  };

  render() {
    return (
      <div className="comment">
        <h3>edit comment</h3>
        <form onSubmit={this.onSubmit}>
          <label> username: </label>
          <select
            ref="userInput"
            required
            value={this.state.username}
            onChange={this.onChangeUsername}
          >
            {this.state.users.map((user) => {
              return (
                <option key={user} value={user}>
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
            onChange={this.onChangeComment}
          />
          <button type="submit">edit comment</button>
        </form>
      </div>
    );
  }
}

export default CommentEdit;
