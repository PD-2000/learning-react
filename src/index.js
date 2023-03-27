// import * as ReactDOMClient from 'react-dom/client';
// import App from './App';
// import React from 'react';
// import {Provider} from 'react-redux';
// import store from './redux/store'
// import 'font-awesome/css/font-awesome.min.css';
// import './styles/normalize.scss';
// import './styles/global.scss';

// const container = document.querySelector('#root');
// const root = ReactDOMClient.createRoot(container);

// root.render(
// 	<React.StrictMode>
// 		<Provider store={store}>
// 			<App />
// 		</Provider>
// 	</React.StrictMode>
// );

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.querySelector('#root')
);