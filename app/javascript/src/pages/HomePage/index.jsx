import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';
import UserGuestPreference from './components/UserGuestPreference'
import UserHeader from '../../components/UserHeader'

class HomePage extends React.Component {
	static propTypes = {
		user: PropTypes.object,
	};

	render() {
		const { user } = this.props;
		if(user) {
			return (
				<div>
					<UserHeader user={user} />
					{this.props.user && <UserGuestPreference user={ this.props.user }/>}
				</div>
			);
		} else {
			return (
				<div className="homepage">
					<h4>Welcome to Kitchensurfing. Register to get started! </h4>
				</div>
			)
		}
	}
}

export default class HomePageContainer extends React.Component {
	render() {
		return (
			<App>
				<HomePage />
			</App>
		);
	}
}
