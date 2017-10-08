import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';

export default class TravelPlans extends React.Component {
	static propTypes = {
		user: PropTypes.object,
  };

  constructor(...args) {
    super(...args);
    this.state = {
      trips: []
    };
  }

  componentDidMount = () => {
    var self = this
    axios.get('/api/requests', {
      params: {
        type: "trips"
      }
    })
    .then(function(response) {
      self.setState({
        trips: response.data.trips
      })
    })
    .catch(function(error) {
      console.log(error)
    })
  }

	render() {
    const trips = this.state.trips.map((trip) =>
    <li key={trip.id}>
      <a href={"/messages/" + trip.id}>
        <p>{trip.start_date} - {trip.end_date}</p>
        <p>With {trip.host}</p>
        <p>At {trip.location}</p>
      </a>
    </li>
    )
    if(this.state.trips.length > 0) {
      return(
        <div>
          <h3 className="trip-title">MY TRAVEL PLANS</h3>
          <ul>
            {trips}
          </ul>
        </div>
      )
    } else if(this.state.trips.length === 0) {
      return(
        <div>
          <h3 className="trip-title">MY TRAVEL PLANS</h3>
          <p>You have no upcoming trips.</p>
        </div>
      )
    }
	};
}

