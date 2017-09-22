import React from 'react';
import axios from 'axios';

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      gender: '',
      birthday: '',
      city: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.createUser = this.createUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  createUser(first_name, last_name, email, password, gender, birthday, city){
    axios.post("/users", {
        first_name: first_name,
        last_name: last_name,
        email: email, 
        password: password,
        gender: gender, 
        birthday: birthday, 
        city: city
      })
    .then(function(response) {
    	window.location="/";
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.createUser(this.state.first_name, this.state.last_name, this.state.email, this.state.password, this.state.gender, this.state.birthday, this.state.city)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              placeholder="first name"
              name="first_name"
              type="string"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            <input
              placeholder="last name"
              name="last_name"
              type="string"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            <input
              placeholder="email"
              name="email"
              type="string"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            <input
              placeholder="password"
              name="password"
              type="password"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            <input
              placeholder="gender"
              name="gender"
              type="string"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            <input
              placeholder="birthday"
              name="birthday"
              type="date"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            <input
              placeholder="city"
              name="city"
              type="string"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <input type="submit" value="Register"/>
        </form>
      </div>
    );
  }
}
