import React, { Component } from 'react';
import { Link } from 'react-router';

import { PropTypes } from 'prop-types';

import '../css/app/404.css';

class NotFound extends Component {
	render() {
		return (
			<div className="not-found">
				<h1>404</h1>
				<h2>{ !!this.props.message ? this.props.message : 'Похоже, что здесь ничего нет :(' }</h2>
				<Link to="/">Вернуться на главную</Link>
				<div className="not-found__image">
					<img src="/images/404.gif" alt="Not found" />
				</div>
				
			</div>
		);
	}
}

NotFound.propTypes = {
	message: PropTypes.string
};

export default NotFound;