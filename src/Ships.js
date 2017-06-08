import React, { Component } from 'react';

class Ships extends Component {

	constructor(props) {
		super(props);
		this.ships = props.list;
		this.state = {
			name: "",
			capacity: "",
			picture:"",
			location: ""
		}
	}

	render() {

		let ships = this.ships.map(function(ship, index) {

				return(
						<div className="ships-container" key={index}>
							<div className="ship-header-container">
								<h2 className="ship-name">{ship.name}</h2>
								<img className="ship-image" src={ship.picture} />
							</div>
							
							<div className="ship-info-container">
								<p className="ship-info-header">Port of Call:</p>
								<p className="ship-info">{ship.location}</p>
								<p className="ship-info-header">Max-Capacity:</p>
								<p className="ship-info">{ship.capacity}</p>
							</div>
						</div>
					)

		})

		return(
				<div>{ships}</div>
			)

	}

}

export default Ships;