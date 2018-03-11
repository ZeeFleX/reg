import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';


//Basic components
import App from './App.jsx';
import Tiles from './containers/tiles/index.jsx';
import TileDetails from './containers/tiles/tileDetails/index.jsx';
import About from './containers/about/index.jsx';
import Contacts from './containers/contacts/index.jsx';

//Styles
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './css/global.css';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute component={Tiles}></IndexRoute>
				<Route path="/tiles/:id" component={TileDetails} />
				<Route path='about' component={About} />
				<Route path='contacts' component={Contacts} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
