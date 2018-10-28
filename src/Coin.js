import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import capitalize from './utils';

class Coin extends Component {

  render() {

  	let path = `/coin/${this.props.name}`;
  	let	coinName = capitalize(this.props.name)

  	return (
  		<div className="coin">
	  		<Link to={path}>
	  		    <div>{coinName}</div>
		  		<div>${this.props.avg_price}</div>
		  	</Link>	
		</div>
  	);
  }

}

export default Coin;