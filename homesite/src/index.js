// REACT
import React from 'react';
import ReactDOM from 'react-dom';
//REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// REDUX Persit
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/integration/react';
//import Reducers
import reducers from './reducers';
// React Router
import { BrowserRouter } from 'react-router-dom';
// Import Main App
import App from './components/App';
//CSS Sheet
import './css/emergency_electric.min.css';
//ServiceWorker
import * as serviceWorker from './serviceWorker';
// Creation of the Redux Store
// Redux Persist Config
const persistConfig = {
	key             : 'root',
	storage         : storage,
	stateReconciler : autoMergeLevel2,
	whitelist       : [],
};
const rootReducer = persistReducer(persistConfig, reducers);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));
const persistor = persistStore(store);

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
