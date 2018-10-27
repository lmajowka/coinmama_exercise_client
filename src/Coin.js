import React, { Component } from 'react';

class Coin extends Component {
  render() {
  	return (
  		<div>
	  		<div>{this.props.name}</div>
	  		<div>${this.props.avg_price}</div>
	  	</div>	
  	);
  }
}

export default Coin;