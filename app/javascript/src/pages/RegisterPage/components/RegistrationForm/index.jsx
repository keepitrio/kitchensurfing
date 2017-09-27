import React from 'react';
import axios from 'axios';
import PlacesAutocomplete from 'react-places-autocomplete'

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      location: '',
    }
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  locationOnChange = (location) => {
    this.setState({ location });
  }

  createUser(firstName, lastName, email, password, location){
    axios.post("/users", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        location: location
      })
    .then(function(response) {
    	window.location="/";
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.createUser(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password,
      this.state.location
    )
  }

  render() {
    const locationInputProps = {
      value: this.state.location,
      onChange: this.locationOnChange,
      placeholder: 'Enter a city',
    }
    const locationOptions = {
      types: ['(cities)']
    }
    return (
      <form onSubmit={this.handleSubmit} className='register-form'>
        <label>
          <input
            placeholder="First name"
            name="firstName"
            type="string"
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          <input
            placeholder="Last name"
            name="lastName"
            type="string"
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          <input
            placeholder="Email"
            name="email"
            type="string"
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          <input
            placeholder="Password"
            name="password"
            type="password"
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <div className='register-input'>
          <PlacesAutocomplete
            inputProps={locationInputProps}
            options={locationOptions}
          />
        </div>
        <br />
        <input type="submit" value="Register"/>
      </form>
    );
  }
}
