import React, { Component } from 'react';

class Ships extends Component {

	constructor(props) {
		super(props);
		this.ships = props.list;
		this.state = {
			name: "",
			capacity: "",
			location: ""
		}
	}

	render() {

		let ships = this.ships.map(function(ship, index) {

				return(
						<div key={index}>
							<h2>{ship.name}</h2>
							<p>{ship.location}</p>
							<p>{ship.capacity}</p>
						</div>
					)

		})

		return(
				<div>{ships}</div>
			)

	}

}

export default Ships;