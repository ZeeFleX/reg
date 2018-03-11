import React, { Component } from 'react';
import { connect } from 'react-redux';


class TileDetails extends Component {
  	render() {
	    return (
	    	<div>
	    		<img src={this.props.tile.image} alt="" />
	    		<br/>
	    		<h1>{ this.props.tile.title }</h1>
	    		<p>{ this.props.tile.text }</p>
	    	</div>
	    );
  	}
}

export default connect(
	(state, ownProps) => {
		return {
			tile: state.tiles.find( tile => Number(tile.id) === Number(ownProps.params.id) ) || {}
		};
	},
	(dispatch) => ({

	})
)(TileDetails);