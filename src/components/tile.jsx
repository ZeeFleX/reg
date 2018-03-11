import React, { Component } from 'react';
import { Link } from 'react-router';

import '../css/app/tiles/tiles__tile.css';
import '../css/app/tiles/tiles__tile_double.css';
import '../css/app/tiles/tile-content/tile-content.css';
import '../css/app/tiles/tile-content/tile-content__image.css';
import '../css/app/tiles/tile-content/tile-content__short-description.css';
import '../css/app/tiles/tile-content/tile-content__short-description_dark-theme.css';

class Tile extends Component {
	render() {
		return (
			<Link to={`/tiles/${this.props.children.id}`} className={ this.props.children.type === 'double' ? 'tiles__tile tiles__tile_double' : 'tiles__tile' }>
				<div className="tile-content">
					<div className="tile-content__image" style={{backgroundImage: `url(${this.props.children.image})` }}></div>
					<div className="tile-content__short-description-container">
						<div className="tile-content__short-description-wrapper">
							<div className="tile-content__short-description tile-content__short-description_dark">
								<h3 className="tile-content__short-description-header">{ this.props.children.title }</h3>
								<p className="tile-content__description">
									{ this.props.children.description }
								</p>
							</div>
						</div>
					</div>
		      	</div>
			</Link>
		);
	}
}

export default Tile;