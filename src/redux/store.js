import {legacy_createStore} from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

// export const getFilteredCards = (state, columnId) => state.cards
// 	.filter(card => card.columnId === columnId && card.title.toLowerCase().includes(state.searchString.toLowerCase()));
// export const getFilteredCards = ({cards, searchString}, columnId) => cards
// 	.filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
	.filter(card => card.columnId === columnId && strContains(card.title, searchString));

const reducer = (state, action) => {
	switch(action.type){
		case 'ADD_COLUMN':
			return {...state, columns: [...state.columns, {id: shortid(), ...action.payload}]};
		case 'ADD_CARD':
			return {...state, cards: [...state.cards, {id: shortid(), ...action.payload}]};
		case 'UPDATE_SEARCHSTRING':
			return {...state, searchString: action.payload};
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