import React from 'react';

export default class App extends React.Component {
  constructor(...args) {
  	super(...args);

  	this.state = {};
  }

	componentWillMount() {
		// call endpoint to fetch current user
		console.log('component will mount');
		setTimeout(() => {
			console.log('setting the user');
			this.setState({ user: 'rio' });
		}, 3000);
	}

	render() {
		const { user } = this.state; 
		const modifiedChild = React.cloneElement(this.props.children, { user });

		return (
			<div>
				<h1>This is the temp banner</h1>
				{modifiedChild}
			</div>
		);
	}
}