import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';
import axios from 'axios';

class MessageShowPage extends React.Component {
	constructor(...args) {
		super(...args)
		this.state = {
			request: {},
			messages: [],
			host: '',
			traveler: ''
		}
	}

	componentWillMount = () => {
		var self = this;
		axios.get('/api/' + window.location.pathname)
		.then(function(response) {
			self.setState({
				request: response.data.request,
				messages: response.data.messages,
				requestInitiator: response.data.request_initiator
			})
		})
		.catch(function(error) {
			console.log(error)
		})
	}

	render() {
		const messageList = this.state.messages.map((message) =>
		<li key={message.message}>
			{message.sender_name}: {message.message}
		</li>
		)

		return (
			<ul>
				<li>{this.state.requestInitiator}: {this.state.request.message}</li>
				{messageList}
			</ul>
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
