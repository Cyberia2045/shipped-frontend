import React, { Component } from 'react';

class Jobs extends Component {

	constructor(props) {
		super(props);
		this.jobs = props.list;
		this.state = {
			name: "",
			description: "",
			origin: "",
			destination: "",
			cost: "",
			containers: ""
		}
	}

	render() {

		let jobs = this.jobs.map(function(job, index) {

				return(
						<div key={index}>
							<h2>{job.name}</h2>
							<p>{job.description}</p>
							<p>{job.origin}</p>
							<p>{job.destination}</p>
							<p>{job.cost}</p>
							<p>{job.containers}</p>
						</div>
					)

		})

		return(
				<div>{jobs}</div>
			)

	}

}

export default Jobs;