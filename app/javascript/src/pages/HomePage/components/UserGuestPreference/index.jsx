import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios'

export default class UserGuestPreference extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      acceptingGuests: "null"
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.patch('/users/'+this.props.user.id,{
      accepting_guests: this.state.acceptingGuests
    })
    .then(function(response) {
      console.log("success")
    })
    .catch(function(error) {
      console.log("error")
    })
  }

  handleChange = (e) => {
    const value = e.target.value;

    this.setState({
      acceptingGuests: value
    })
  }

	render() {
		return(
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.acceptingGuests} onChange={this.handleChange}>
          <option value="true">Accepting Guests</option>
          <option value="null">Maybe Accepting Guests</option>
          <option value="false">Not Accepting Guests</option>
        </select>
        <br />
        <input type="submit" value="Save" />
      </form>
    )
	}
}
