//import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import './styles/normalize.scss';
import './styles/global.scss';

// ReactDOM.render(
// 	<App />,
// 	document.querySelector('#root')
// );

const container = document.querySelector('#root');
const root = ReactDOMClient.createRoot(container);

root.render(<App />);