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

    axios
      .post(
        "http://ec2-3-15-40-216.us-east-2.compute.amazonaws.com/users/add",
        user
      )
      .then((res) => console.log(res.data));

    this.setState({
        username: ''
        
    })
    window.location = "/";
  }

  render(){
      return(
          <div className="addUser">
              <h3>enter username:</h3>
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