import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';
import axios from 'axios';

class PlacesPage extends React.Component {
	static propTypes = {
		user: PropTypes.object,
  };

  constructor(...args) {
    super(...args);

    this.state = {
      hosts: []
    }
  }

  componentWillMount = () => {
    var self = this
    if(location.search.substring(1)) {
      var url = '/api/users?search='+location.search.substring(1)
    } else {
      url = '/api/users'
    }
    axios.get(url)
    .then(function(response) {
      self.setState({hosts: response.data})
    })
    .catch(function(error) {
      console.log(error);
    })
  }

	render() {
    const acceptingGuests = {
      true: "Accepting Guests",
      null: "Maybe Accepting Guests",
      false: "Not Accepting Guests"
    }
    const renderedHosts = this.state.hosts.map((host) =>
    <li>
      <a href={"/users/" + host.id}>
        <div className="user-details">
          <p>{host.first_name} {host.last_name}</p>
          <p>{acceptingGuests[host.accepting_guests]}</p>
        </div>
      </a>
    </li>
    );
		return (
      <ul className="host-list">
        <div className="place-host">
          {renderedHosts}
        </div>
      </ul>
		);
	}
}

export default class PlacesPageContainer extends React.Component {
	render() {
		return (
			<App>
				<PlacesPage />
			</App>
		);
	}
}
