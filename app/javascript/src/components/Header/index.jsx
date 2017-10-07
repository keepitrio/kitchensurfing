import React from 'react';
import SearchBar from './components/SearchBar';
import axios from 'axios';

export default class Header extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			unreadMessages: 0
		}
	}
	componentWillReceiveProps = (nextProps) => {
		var self = this;
		if(nextProps.user) {
			axios.get('/api/unread_messages_count')
			.then(function(response){
				self.setState({unreadMessages: response.data.unread_messages_count})
			})
			.catch(function(error) {
				console.log(error);
			})
		}
	}

	render() {
		if(this.props.isLoading){
			return null
		}
		let messages;
		if(this.state.unreadMessages > 0) {
			messages = <strong>Messages({this.state.unreadMessages})</strong>;
		} else {
			messages = "Messages"
		}

		if(this.props.user) {
			return (
				<div className="header-container">
					<h3 className="logo">
						<a href="/">
							Kitchensurfing
						</a>
					</h3>
					{this.props.user && <SearchBar />}
					<ul className="navigation">
						<li><a className="profile-button" href="/messages">{messages}</a></li>
						<li><a className="logout-button" href="/logout">Logout</a></li>
						<li><a className="profile-button" href="/">Profile</a></li>
					</ul>
				</div>
			);
		} else {
			return (
				<div className="header-container">
					<h3 className="logo">
						<a href="/">
							Kitchensurfing
						</a>
					</h3>
					<ul className="navigation">
						<li><a className="register-button" href="/users/new">Join</a></li>
						<li><a className="login-button" href="/login">Log In</a></li>
					</ul>
				</div>
			);
		}
	}
}
