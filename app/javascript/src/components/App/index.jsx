import React from 'react';
import Header from '../Header';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {};
  }

	componentWillMount() {
		axios.get("/auth")
		.then((response) => {
			this.setState({ user: response.data });
		});
	}

	render() {
		const { user } = this.state; 
		const modifiedChild = React.cloneElement(this.props.children, { user });

		return (
			<div>
				<Header user={ user } />
				{modifiedChild}
			</div>
		);
	}
}