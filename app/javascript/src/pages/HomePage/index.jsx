import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';
import UserGuestPreference from './components/UserGuestPreference'
import UserHeader from '../../components/UserHeader'
import TravelPlans from './components/TravelPlans'
import UpcomingGuests from './components/UpcomingGuests'


class HomePage extends React.Component {
	static propTypes = {
		user: PropTypes.object,
	};

	constructor(...args) {
		super(...args)
		this.state = {

		}
	}

	render() {
		const { user, isLoading } = this.props;
		if(isLoading) {
			return null
		}

		if(user) {
			return (
				<div className="dashboard">
					<div className="user-header">
						<UserHeader user={user} />
						{user && <UserGuestPreference user={ user }/>}
					</div>
					<div className="upcoming">
						<div className="upcoming-trips">
							{user && <TravelPlans user={user}/>}
						</div>
						<div className="upcoming-guests">
							{user && <UpcomingGuests user={user} />}
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="homepage-logged-out">
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
