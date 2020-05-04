import React, { Component } from 'react';
import axios from 'axios';

class UserAdd extends Component {

  constructor(props){
    super(props);

    this.state ={
      username: ''
    }
  }


  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault()
    const user = {
      username: this.state.username,
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));

    this.setState({
        username: ''
        
    })
    window.location = "/";
  }

  render(){
      return(
          <div>
              <h3>enter user name</h3>
              <form onSubmit={this.onSubmit}>
                  <label>username: </label>
                  <input type="text"
                  value={this.state.username}
                  onChange={this.onChangeUsername}>
                  </input>
                  <input type="submit" value="create user"></input>

              </form>

          </div>
      )
  }
}

  export default UserAdd;