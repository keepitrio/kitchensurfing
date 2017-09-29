import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import App from '../../components/App';
import UserHeader from '../../components/UserHeader';
import RequestBar from './components/RequestBar'

class ProfilePage extends React.Component {
	static propTypes = {
		user: PropTypes.object,
	};

	constructor(...args) {
		super(...args)
		this.state = {
			profileUser: {}
		}
	}

	componentWillMount = () => {
		var self = this
		axios.get('/auth/'+window.location.pathname.split("/users/")[1])
		.then(function(response) {
			self.setState({profileUser: response.data})
		})
		.catch(function(error) {
			console.log(error)
		})
	}

	render() {
		const { user } = this.props;
		if(user) {
			if(user.id === parseInt(window.location.pathname.split("/users/")[1])) {
				return (
					<div>
						<UserHeader user={user} />
					</div>
				);
			} else {
				return (
					<div>
						<UserHeader user={this.state.profileUser} />
						<RequestBar profileUser={this.state.profileUser} user={user} />
					</div>
				);
			}
		} else {
			return (
				<div>
					<h4>Welcome to Kitchensurfing. Register to get started! </h4>
				</div>
			)
		}
	}
}

export default class ProfilePageContainer extends React.Component {
	render() {
		return (
			<App>
				<ProfilePage />
			</App>
		);
	}
}
