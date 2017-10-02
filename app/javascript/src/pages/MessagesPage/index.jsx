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
  }

	render() {
		return (
			<h1>hello!</h1>
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
