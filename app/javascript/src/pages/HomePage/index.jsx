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

	render() {
		const { user } = this.props;
		if(user) {
			return (
				<div className="dashboard">
					<div className="user-header">
						<UserHeader user={user} />
						{this.props.user && <UserGuestPreference user={ this.props.user }/>}
					</div>
					<div className="upcoming">
						<div className="upcoming-trips">
							{this.props.user && <TravelPlans user={user}/>}
						</div>
						<div className="upcoming-guests">
							{this.props.user && <UpcomingGuests user={user} />}
						</div>
					</div>
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
