const initialState = [];

export default function tiles(state = initialState, action){
	switch (action.type){
	case 'GET_TILES':
		return [...action.payload];
	default:
		return state;
	}
}