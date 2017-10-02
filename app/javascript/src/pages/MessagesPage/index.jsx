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
			self.setState({
				messageThreads: response.data.messages_to_render
			})
		})
		.catch(function(error) {
			console.log(error)
		})
	}

	render() {
		const messageList = this.state.messageThreads.map((message) =>
			<li key={message.message}>
				<a href={'/messages/' + message.id}>
					{message.sender}: {message.message}
				</a>
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
