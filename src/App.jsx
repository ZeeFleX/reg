import React, { Component } from 'react';
import Header from './containers/header.jsx';
import { connect } from 'react-redux';
import { getTiles } from './actions/tiles';

import './css/variables.css';
import './css/app/app.css';


class App extends Component {
	componentWillMount(){
		this.props.onGetTiles();
	}

	render() {
		return (
		  <div className="app">
		  	<Header></Header>
		  	{ this.props.children }
		  </div>
		);
	}
}

export default connect(
	(state, ownProps) => {
		return {
			ownProps,
			tiles: state.tiles
		};
	},
	(dispatch) => ({
		onGetTiles: () => {
			dispatch(getTiles());
		} 
	})
)(App);
