import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';

let store = createStore(reducers, composeWithDevTools(applyMiddleware(Thunk)));

export default store;