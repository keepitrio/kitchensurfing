import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';
import LoginForm from './components/LoginForm';

class LoginPage extends React.Component {
	render() {
		return (
			<div className='login-container'>
				<h3 className='login-title'>Log in to Kitchensurfing</h3>
				<div className='login-form-container'>
					<LoginForm />
				</div>
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
