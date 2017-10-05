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
			messageThreads: [],
			notification: false
    }
  }

  componentWillMount = () => {
		var self = this;
		axios.get('/api/messages')
		.then(function(response){
			console.log(response)
			self.setState({
				messageThreads: response.data.messages_to_render,
				notification: response.data.notification
			})
		})
		.catch(function(error) {
			console.log(error)
		})
	}

	render() {
		// TODO: if start_date and end_date are not nil, then display request dates
		// TODO: if(this.state.notification === true), show following as strong. otherwise, don't

		const messageList = this.state.messageThreads.map((message) =>
			<li key={message.message}>
				<div className="inbox-thread-item">
					<a href={'/messages/' + message.id} className="message-link">
						<div className="thread-info">
							<div>
								<p>{message.dates ? "Request dates: " + message.dates : null}</p>
							</div>
							<div className="message-info">
								<div>
									<p><strong>{message.sender}</strong></p>
									<p><strong>{message.sender_location}</strong></p>
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
		)
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
				<MessagesPage user={this.props.user}/>
			</App>
		);
	}
}
