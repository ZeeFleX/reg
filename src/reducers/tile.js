const initialState = null;

export default function tiles(state = initialState, action){
	switch (action.type){
	case 'GET_TILE':
		return action.payload || state;
	default:
		return state;
	}
}