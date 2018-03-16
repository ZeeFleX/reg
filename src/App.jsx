import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Components*/
import Header from './containers/header.jsx';
import Errors from './containers/errors.jsx';

/* Actions */
import { getTiles } from './actions/tiles';

/* Styles */
import './css/variables.css';
import './css/app/app.css';


class App extends Component {
	componentWillMount(){
		this.props.onGetTiles();
	}

	render() {
		return (
		  <div className="app">
		  	<Errors errors={ this.props.errors }></Errors>
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
			tiles: state.tiles,
			errors: state.errors
		};
	},
	(dispatch) => ({
		onGetTiles: () => {
			dispatch(getTiles());
		}
	})
)(App);
