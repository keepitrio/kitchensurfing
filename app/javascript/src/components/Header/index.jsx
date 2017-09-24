import React from 'react';

export default class Header extends React.Component {
	render() {
		if (this.props.user === null) {
			return (
				<div className="header-container">
					<h3 className="logo">Kitchensurfing</h3>
					<ul className="navigation">
						<li><a className="register-button" href="/users/new">Join</a></li>
						<li><a className="login-button" href="/login">Log In</a></li>
					</ul>
				</div>
			);
		} else {
			return (
				<div className="header-container">
					<h3 className="logo">Kitchensurfing</h3>
					<ul className="navigation">
						<li><a className="logout-button" href="/logout">Logout</a></li>
						<li><a className="profile-button" href="/">Profile</a></li>
					</ul>
				</div>
			);
		}
	}
}
