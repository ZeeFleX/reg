import React, { Component } from 'react';
import { connect } from 'react-redux';
import Error from '../components/error.jsx';

import { addError, clearErrors, closeError } from '../actions/errors';

import '../css/app/errors.css';

class Errors extends Component {
	closeErrorHandler(errorKey){
		this.props.onCloseError(errorKey);
	}

	render() {
		return (
			<div className="errors-container">
				{
					this.props.errors.map( error => {
						return <Error
							name={ error.name }
							id={ error.key }
							key={ error.key }
							closeError={this.closeErrorHandler.bind(this)}
						>
						{ error.message }
						</Error>
					})
				}			
			</div>
		);
	}
}


export default connect(
	(state, ownProps) => {
		return {
			ownProps,
			errors: state.errors
		};
	},
	(dispatch) => ({
		onAddError: (error) => {
			dispatch(addError(error));
		},
		onCloseError: (errorKey) => {
			dispatch(closeError(errorKey));
		},
		onClearErrors: () => {
			dispatch(clearErrors());
		}
	})
)(Errors);
