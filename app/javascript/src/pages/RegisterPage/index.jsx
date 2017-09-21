import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';
import RegistrationForm from './components/RegistrationForm'

class RegisterPage extends React.Component {
	render() {
		return (
			<div>
				<h3>Join Kitchensurfing for free</h3>
				<RegistrationForm />
			</div>
		);
	}
}

export default class RegisterPageContainer extends React.Component {
	render() {
		return (
			<App>
				<RegisterPage />
			</App>
		);
	}
}