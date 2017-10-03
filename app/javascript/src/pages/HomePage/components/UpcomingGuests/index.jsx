import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';

export default class UpcomingGuests extends React.Component {
	static propTypes = {
		user: PropTypes.object,
  };

  constructor(...args) {
    super(...args)
    this.state = {
      hosting: []
    }
  }

  componentDidMount = () => {
    var self = this;
    axios.get('/api/requests', {
      params: {
        type: "hosting"
      }
    })
    .then(function(response) {
      self.setState({
        hosting: response.data.hosting
      })
    })
    .catch(function(error) {
      console.log(error)
    })
  }

	render() {
    const hosting = this.state.hosting.map((request) =>
      <li key={request.id}>
        <a href={"/messages/" + request.id}>
          <p>{request.start_date} - {request.end_date}</p>
          <p>{request.traveler}</p>
          <p>{request.location}</p>
        </a>
      </li>
    )
    if(this.state.hosting.length > 0) {
      return(
        <div>
          <h3 className="hosting-title">MY UPCOMING GUESTS</h3>
          <ul>
            {hosting}
          </ul>
        </div>
      )
    } else if(this.state.hosting.length === 0) {
      return(
        <div>
          <h3 className="hosting-title">MY UPCOMING GUESTS</h3>
          <p>You have no upcoming guests.</p>
        </div>
      )
    }
	}
}

