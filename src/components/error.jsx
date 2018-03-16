import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import '../css/app/errors.css';

class Error extends Component {
	onCloseErrorHandler(errorKey){
		this.props.closeError({
			errorKey
		});
	}

	render() {
		return (
			<div className={`errors-container__error ${ this.props.name }`}>
				<p>
					{ this.props.children }		
				</p>	
				<i 
					className="errors-container__close-button fa fa-times"
					onClick={this.onCloseErrorHandler.bind(this, this.props.id)}></i>		
			</div>
		);
	}
}

Error.propTypes = {
	name: PropTypes.string.isRequired,
	message: PropTypes.string
};

export default Error;