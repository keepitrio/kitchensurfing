import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';
import axios from 'axios';

class MessageShowPage extends React.Component {
	render() {
		return (
			<h1>hello!</h1>
		);
	}
}

export default class MessageShowPageContainer extends React.Component {
	render() {
		return (
			<App>
				<MessageShowPage />
			</App>
		);
	}
}
