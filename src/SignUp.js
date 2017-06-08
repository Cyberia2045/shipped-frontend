import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		}

		this.updateUserName = this.updateUserName.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.createUser = this.createUser.bind(this);

	}

	render() {

		return(
				<div>
					<input type="text" placeholder="username" onChange={this.updateUserName} required />
					<input type="password" placeholder="password" onChange={this.updatePassword} required />
					<div><button onClick={this.createUser}>Create User</button></div>
				</div>
			)

	}

	updateUserName(event) {
		this.setState({username: event.target.value})
	}

	updatePassword(event) {
		this.setState({password: event.target.value})
	}

	createUser() {
		axios.post("/users", {
			user: {
				username: this.state.username,
				password: this.state.password
			}
		}).then(
			function(response) {
				console.log(response);
			}
		);
	}

}

export default SignUp;