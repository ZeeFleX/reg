import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotFound from '../../../components/404.jsx';

import { addError } from '../../../actions/errors';
import { getTile } from '../../../actions/tiles';

class TileDetails extends Component {
	componentWillMount(){
		this.props.onGetTile(Number(this.props.params.id));
	}
  	render() {
  		let content;
  		
  		if (!!this.props.tile) {
  			content = <div><img src={ this.props.tile.image } alt={ this.props.tile.title }/><br/><h1>{ this.props.tile.title }</h1><p>{ this.props.tile.text }</p></div>;
  		} else{		
  			content = <NotFound message="Такой статьи не существует"></NotFound>
  		}
	    return (
	    	<div>
	    		{ content }
	    	</div>
	    );
  	}
}

export default connect(
	(state, ownProps) => {
		return {
			tile: state.tile
		};
	},
	(dispatch) => ({
		onGetTile: (id) => {
			dispatch(getTile(id));
		},
		onAddError: (error) => {
			dispatch(addError(error));
		}
	})
)(TileDetails);