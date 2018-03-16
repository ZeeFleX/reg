const initialState = [];

export default function errors(state = initialState, action){
	switch (action.type){
	case 'ADD_ERROR':
		return [...state, action.payload];
	case 'CLEAR_ERROR':
		return state.filter( error => error.key !== action.payload.errorKey);
	case 'CLEAR_ERRORS':
		return [];
	default:
		return state;
	}
}