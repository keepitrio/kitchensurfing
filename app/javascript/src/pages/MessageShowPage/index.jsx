import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';
import axios from 'axios';
import RequestForm from '../ProfilePage/components/RequestForm'

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
			<div className="inbox-thread-item">
				<p><strong>{message.sender_name}</strong></p>
				<p>{message.message}</p>
			</div>
		</li>
		)

		return (
			<div className="message-show">
				<RequestForm datePicker={false} requestID={this.state.request.id} />
				<ul className="message-list-items">
					<li>
						<div className="inbox-thread-item">
							<p><strong>{this.state.requestInitiator}</strong></p>
							<p>{this.state.request.message}</p>
						</div>
					</li>
						{messageList}
				</ul>
			</div>
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
