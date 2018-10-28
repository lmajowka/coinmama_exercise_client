import React, { Component } from 'react';
import capitalize from './utils'


class CoinHistory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }


  render() {
    const { error, isLoaded, items } = this.state;
  	return (
  			<div>
  				{capitalize(this.props.name)}
          <div className='Quotes'>
          {items.map(item => (
            <div key={item.created_at}>
              {item.created_at} - ${item.avg_price} 
            </div>
          ))}
          </div>
  			</div>
  			)
	}

  componentDidMount() {
    fetch(`http://localhost:3001/coin/${this.props.name}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

}

export default CoinHistory;