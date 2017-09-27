import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';
import UserGuestPreference from './components/UserGuestPreference'

class HomePage extends React.Component {
	static propTypes = {
		user: PropTypes.object,
	};

	render() {
		const { user } = this.props;

		return (
			<div>
				<div className='user-header'>
					<p>{user && user.first_name} {user && user.last_name}</p>
					<p>{user && user.location}</p>
				</div>
				{ this.props.user && <UserGuestPreference user={ this.props.user }/> }
			</div>
		);
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
