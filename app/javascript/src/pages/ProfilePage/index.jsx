import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';
import UserHeader from '../../components/UserHeader'

class ProfilePage extends React.Component {
	static propTypes = {
		user: PropTypes.object,
  };

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
						HELLO
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
