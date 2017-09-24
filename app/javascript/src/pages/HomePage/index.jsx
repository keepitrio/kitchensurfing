import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';

class HomePage extends React.Component {
	static propTypes = {
		user: PropTypes.object, 
	};

	render() {
		return (
			<div>
				<p>{JSON.stringify(this.props.user)}</p>
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