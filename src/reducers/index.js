import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tiles from './tiles';
import tile from './tile';
import errors from './errors';

export default combineReducers({
	routing: routerReducer,
	tiles,
	tile,
	errors
});