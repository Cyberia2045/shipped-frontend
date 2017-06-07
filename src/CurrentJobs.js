import React, { Component } from 'react';

class CurrentJobs extends Component {

	constructor(props) {
		super(props);
		this.currentjobs = props.list;
	}

	render() {


		let currentjobs = this.props.list.map(function(currentjob, index) {

		let ships = this.props.ships.filter(function(ship) {

			return ship.id === currentjob.ship_id

		}) 

		console.log(ships)

		let currentships = ships.map(function(currentship, index) {

			return(
					<div key={index}> 
						<h2>{currentship.name}</h2>
					</div>
				)

		})

			return(
					<div key={index}>
						{currentships}
					</div>
				)

		}.bind(this))

		console.log(currentjobs)

		return(
				<div>{currentjobs}</div>
			)

	}

}

export default CurrentJobs;