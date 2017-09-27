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
    axios.get('/users?search='+location.search.substring(1))
    .then(function(response) {
      self.setState({hosts: response.data})
    })
    .catch(function(error) {
      console.log(error);
    })
  }

	render() {
    const renderedHosts = this.state.hosts.map((host) =>
    <li>{host.first_name} {host.last_name}</li>
    );
		return (
			<ul>
        {renderedHosts}
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
