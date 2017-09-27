import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';
import RegistrationForm from './components/RegistrationForm'

class RegisterPage extends React.Component {
	render() {
		return (
			<div className='register-container'>
				<h3 className='register-title'>Join Kitchensurfing for free</h3>
				<div className='register-form-container'>
					<RegistrationForm />
				</div>
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
