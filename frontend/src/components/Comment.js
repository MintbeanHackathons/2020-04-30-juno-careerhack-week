import React, { Component } from 'react';

class Comment extends Component {

  constructor(props){
    super(props);

    this.state ={
      username: '',
      comment: '',
      users: []
    }
  }

  componentDidMount(){
    this.setState({
      users: ['test user'],
      username: 'test user'
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
    const comment = {
      username: this.state.username,
      comment: this.state.comment
    }
    console.log(comment);
  }


  render() {
    return (
      <div className="comment">
        <h3>add comment</h3>
        <form>
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
            <button>add comment</button>
        </form>
        
      </div>
    ); 
  }
}

export default Comment;