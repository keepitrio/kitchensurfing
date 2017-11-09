import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';
import axios from 'axios';
import RequestForm from '../ProfilePage/components/RequestForm';

class MessageShowPage extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			request: {},
			messages: [],
			host: '',
			traveler: '',
			initial_sent_at: ''
		};
	}

	componentWillMount = () => {
		var self = this;
		axios.get('/api/' + window.location.pathname)
		.then(function(response) {
			self.setState({
				request: response.data.request,
				messages: response.data.messages,
				requestInitiator: response.data.request_initiator,
				initial_sent_at: response.data.initial_sent_at
			})
		})
		.catch(function(error) {
			console.log(error)
		})
	}

	toggleAcceptance = (e) => {
		e.preventDefault();
		axios.patch('/requests/' + this.state.request.id, {
			method: 'update',
			reason_for_update: "toggle acceptance"
		})
		.then(function(response) {
			location.reload();
		})
		.catch(function(error) {
			console.log(error);
		});
	};

	cancelRequest = (e) => {
		e.preventDefault();
		axios.patch('/requests/' + this.state.request.id, {
			method: 'update',
			reason_for_update: "cancel request"
		})
		.then(function(response) {
			location.reload();
		})
		.catch(function(error) {
			console.log(error);
		});
	};

	render() {
		if(this.props.isLoading){
			return null;
		}

		let { request } = this.state;
		let requestDetails;
		if(request.start_date
			&& !request.accepted
			&& request.host_id === this.props.user.id)
			{requestDetails =
				<div>
					<button onClick={this.toggleAcceptance}>Accept request</button>
					<p>Requested dates: {request.start_date} - {request.end_date}</p>
				</div>
		} else if(request.start_date
			&& request.accepted
			&& request.host_id === this.props.user.id)
			{requestDetails =
				<div>
					<button onClick={this.toggleAcceptance}>Cancel</button>
					<p>Requested dates: {request.start_date} - {request.end_date}</p>
				</div>
		} else if(request.start_date
			&& request.accepted
			&& request.traveler_id === this.props.user.id)
			{requestDetails =
				<div>
					<button onClick={this.cancelRequest}>Cancel Request</button>
					<p>Requested dates: {request.start_date} - {request.end_date}</p>
				</div>
		} else {
			requestDetails = null;
		}

		const messageList = this.state.messages.map((message) =>
		<li key={message.message}>
			<div className="inbox-thread-item">
				<p><strong>{message.sender_name}</strong></p>
				<p>{message.sent_at}</p>
				<p>{message.message}</p>
			</div>
		</li>
		)
		return (
			<div className="message-show">
				{requestDetails}
				<RequestForm datePicker={false} requestID={this.state.request.id} />
				<ul className="message-list-items">
					{messageList}
					<li>
						<div className="inbox-thread-item">
							<p><strong>{this.state.requestInitiator}</strong></p>
							<p>{this.state.initial_sent_at}</p>
							<p>{this.state.request.message}</p>
						</div>
					</li>
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
