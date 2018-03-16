export const addError = (error) => dispatch => {
	dispatch({ type: 'ADD_ERROR', payload: error });
};

export const closeError = (errorKey) => dispatch => {
	dispatch({ type: 'CLEAR_ERROR', payload: errorKey });
};

export const clearErrors = () => dispatch => {
	dispatch({ type: 'CLEAR_ERRORS' });
};