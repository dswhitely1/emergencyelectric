// REACT
import React from 'react';
import ReactDOM from 'react-dom';
//REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//import Reducers
import reducers from './reducers';
// React Router
import { BrowserRouter } from 'react-router-dom';
// Import Main App
import App from './components/App';
//CSS Sheet
import './bootstrap.min.css';
//ServiceWorker
import * as serviceWorker from './serviceWorker';
// Creation of the Redux Store
const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(reduxThunk)),
);
// Render the Webpage
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);

serviceWorker.unregister();
