import React from 'react';
import SearchBar from './components/SearchBar'

export default class Header extends React.Component {
	render() {
		if (this.props.user === null) {
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
		} else {
			return (
				<div className="header-container">
					<h3 className="logo">
						<a href="/">
							Kitchensurfing
						</a>
					</h3>
					{this.props.user && <SearchBar />}
					<ul className="navigation">
						<li><a className="messages" href="/messages">Messages</a></li>
						<li><a className="logout-button" href="/logout">Logout</a></li>
						<li><a className="profile-button" href="/">Profile</a></li>
					</ul>
				</div>
			);
		}
	}
}
