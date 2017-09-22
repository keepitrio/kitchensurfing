import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<a href="/users/new">Register</a>
				<a href="/login">Login</a>
			</div>
		);
	}
}