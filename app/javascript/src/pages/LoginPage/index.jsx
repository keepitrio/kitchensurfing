import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';
import LoginForm from './components/LoginForm'

class LoginPage extends React.Component {
	render() {
		return (
			<div>
				<h3>Log in to Kitchensurfing</h3>
				<LoginForm />
			</div>
		);
	}
}

export default class LoginPageContainer extends React.Component {
	render() {
		return (
			<App>
				<LoginPage />
			</App>
		);
	}
}