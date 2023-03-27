import {legacy_createStore} from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, action) => {
	switch(action.type){
		case 'ADD_COLUMN':
			return {...state, columns: [...state.columns, {id: shortid(), ...action.payload}]};
		case 'ADD_CARD':
			return {...state, cards: [...state.cards, {id: shortid(), ...action.payload}]};
		default:
			return state;
	}
};

const store = legacy_createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;