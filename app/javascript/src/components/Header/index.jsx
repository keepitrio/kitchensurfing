import React from 'react';

export default class Header extends React.Component {
	render() {
		if( this.props.user === null ) {
			return (
				<div>
					<a href="/users/new">Register</a>
					<a href="/login">Login</a>
				</div>
			);
		} else {
			return (
				<div>
					<a href="/logout">Logout</a>
					<a href="#">Profile</a>
				</div>
			);
		}
	}
}