export const getTiles = () => dispatch => {
	fetch(`http://localhost:3000/api/tiles.json`, {
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
		    console.log('Request failed', error);  
		});
};