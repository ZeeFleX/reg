import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tiles from './tiles';

export default combineReducers({
	routing: routerReducer,
	tiles
});