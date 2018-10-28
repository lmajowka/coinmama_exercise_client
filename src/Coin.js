import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

class Coin extends Component {

  render() {

  	let path = `/coin/${this.props.name}`;
  	let	coinName = this.capitalize(this.props.name)

  	return (
  		<div className="coin">
	  		<Link to={path}>
	  		    <div>{coinName}</div>
		  		<div>${this.props.avg_price}</div>
		  	</Link>	
		</div>
  	);
  }

  capitalize(name){
  	return name.charAt(0).toUpperCase() + name.slice(1)
  }

}

export default Coin;