import React, { Component } from 'react';
import Tile from '../../components/tile.jsx';
import { connect } from 'react-redux';

import '../../css/app/tiles/tiles.css';

class Tiles extends Component {
  	render() {
	    return (
	    	<div className="tiles-container">
		      	{ this.props.tiles.map(tile => <Tile key={tile.id}>{ tile }</Tile>) }
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

	})
)(Tiles);