import React from 'react';
import axios from 'axios';

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}	

	handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
	}

	loginUser = (email, password) => {
		var self = this;
		axios.post("/login", {
			email: email,
			password: password
		})
		.then(function(response) {
			window.location = "/";
		})
		.catch(function(error) {
			console.log(error);
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.loginUser(this.state.email, this.state.password)
	}

	render() {
		return (
			<div>
			  <p>{JSON.stringify(this.props.user)}</p>
				<form onSubmit={this.handleSubmit}>
					<label>
						<input
							placeholder="email"
							name="email"
							type="string"
							onChange={this.handleInputChange}
						/>
					</label>
					<br />
					<label>
						<input
							placeholder="password"
							name="password"
							type="password"
							onChange={this.handleInputChange}
						/>
					</label>
          <br />
          <input type="submit" value="Login"/>
				</form>
			</div>
		);
	}
}