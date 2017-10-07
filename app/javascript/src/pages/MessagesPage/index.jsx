import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';
import axios from 'axios';

class MessagesPage extends React.Component {
	static propTypes = {
		user: PropTypes.object,
  };

  constructor(...args) {
    super(...args);

    this.state = {
			messageThreads: []
    }
  }

  componentWillMount = () => {
		var self = this;
		axios.get('/api/messages')
		.then(function(response){
			console.log(response)
			self.setState({
				messageThreads: response.data.messages_to_render
			})
		})
		.catch(function(error) {
			console.log(error)
		})
	}

	readMessage = (e) => {
		e.preventDefault();
		let requestId = e.currentTarget.getAttribute('href').split('/messages/')[1]
		axios.patch('/messages/' + requestId, {
			method: 'update'
		})
		.then(function(response) {
			window.location.href = '/messages/' + requestId;
		})
		.catch(function(error) {
			console.log(error)
		})
	}

	render() {
		const messageList = this.state.messageThreads.map((message) => {
		 let senderName;
		 let senderLocation;

		 if (message.read) {
			senderName = message.sender;
			senderLocation = message.sender_location;
		} else {
			senderName = <strong>{message.sender}</strong>;
			senderLocation = <strong>{message.sender_location}</strong>;
		 }

		return <li key={message.message}>
				<div className="inbox-thread-item">
					<a href={'/messages/' + message.id} className="message-link" onClick={this.readMessage}>
						<div className="thread-info">
							<div>
								<p>{message.dates ? "Request dates: " + message.dates : null}</p>
							</div>
							<div className="message-info">
								<div>
									<p>{senderName}</p>
									<p>{senderLocation}</p>
								</div>
								<div className="message-details">
									<p>{message.message}</p>
									<p className="time-ago">{message.sent_time}</p>
								</div>
							</div>
						</div>
					</a>
				</div>
			</li>
		});

		return (
			<div>
				<ul>
					{messageList}
				</ul>
			</div>
		);
	}
}

export default class MessagesPageContainer extends React.Component {
	render() {
		return (
			<App>
				<MessagesPage user={this.props.user} isLoading={this.props.isLoading}/>
			</App>
		);
	}
}
