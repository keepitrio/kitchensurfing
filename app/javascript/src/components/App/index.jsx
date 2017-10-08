import React from 'react';
import Header from '../Header';
import axios from 'axios';

axios.defaults.headers.common['X-CSRF-Token'] = document
	.querySelector('meta[name="csrf-token"]')
	.getAttribute('content');

export default class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
			isLoading: false
		};
  }

	componentWillMount() {
		this.setState({isLoading: true});
		axios.get("/api/auth")
		.then((response) => {
			this.setState({
				user: response.data,
				isLoading: false
			});
		});
	}

	render() {
		const { user, isLoading } = this.state;
		const modifiedChild = React.cloneElement(this.props.children, {
			user,
			isLoading,
		});

		return (
			<div className="body">
				<Header user={ user } isLoading={ isLoading }/>
				<div className="body-container">
					{modifiedChild}
				</div>
			</div>
		);
	}
}
