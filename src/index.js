import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:3001');

socket.on('price_change', data => {
	ReactDOM.render(<App coindata={[data.results]}/>, document.getElementById('root'));
});


ReactDOM.render(<App coindata={[]}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
