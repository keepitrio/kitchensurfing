import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';

export default class UserGuestPreference extends React.Component {
	static propTypes = {
		user: PropTypes.object,
  };

  constructor(...args) {
    super(...args);
    this.state = {
      acceptingGuests: ''
    };
  }

  componentDidMount = () => {
    if(this.props.user.accepting_guests === null) {
      var acceptingGuests = "null"
    } else {
      acceptingGuests = this.props.user.accepting_guests
    }
    this.setState({acceptingGuests: acceptingGuests})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.patch('/users/'+this.props.user.id,{
      accepting_guests: this.state.acceptingGuests
    })
    .then(function(response) {
      console.log("success");
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  handleChange = (e) => {
    const value = e.target.value;

    this.setState({
      acceptingGuests: value
    });
  };

	render() {
		return(
    <div>
      <form className="preference-form-container" onSubmit={this.handleSubmit}>
        <select value={this.state.acceptingGuests} onChange={this.handleChange}>
          <option value="true">Accepting Guests</option>
          <option value="null">Maybe Accepting Guests</option>
          <option value="false">Not Accepting Guests</option>
        </select>
        <input type="submit" value="Save" />
      </form>
    </div>
    )
	}
}
