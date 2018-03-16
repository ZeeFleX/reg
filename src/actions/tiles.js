import OPTIONS from '../config.js';

/* Helpers */
import generateKey from '../helpers/generateKey';

export const getTiles = () => dispatch => {
	fetch(`${OPTIONS.host}/api/tiles.json`, {
		method: 'GET',
		headers: {  
	      "Content-type": "application/json; charset=UTF-8"  
	    }
	})
		.then(response => {
			return response.json();
		})
		.then(response => {
			dispatch({ type: 'GET_TILES', payload: response.tiles });
		})
		.catch(function (error) {
			dispatch({ type: 'ADD_ERROR', payload: {
				name: 'warning',
				message: error.toString(),
				key: generateKey()
			}});
		});
};

export const getTile = (id) => dispatch => {
	fetch(`${OPTIONS.host}/api/tiles.json`, {
		method: 'GET',
		headers: {  
	      "Content-type": "application/json; charset=UTF-8"  
	    }
	})
		.then(response => {
			return response.json();
		})
		.then(response => {
			let tile = response.tiles.find( tile => Number(tile.id) === id) || null

			if (!!!tile) {
				dispatch({ type: 'ADD_ERROR', payload: {
					name: 'warning',
					message: 'Такой статьи не найдено',
					key: generateKey()
				}});
			}
			
			dispatch({ type: 'GET_TILE', payload: tile });
		})
		.catch(function (error) {
			dispatch({ type: 'ADD_ERROR', payload: {
				name: 'warning',
				message: error.toString(),
				key: generateKey()
			}});
		});
};