import React from 'react';
import Header from '../Header';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {};
  }

	componentWillMount() {
		axios.get("/api/auth")
		.then((response) => {
			this.setState({ user: response.data });
		});
	}

	render() {
		const { user } = this.state;
		const modifiedChild = React.cloneElement(this.props.children, { user });

		return (
			<div className="body">
				<Header user={ user } />
				{modifiedChild}
			</div>
		);
	}
}
