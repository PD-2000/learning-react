import {legacy_createStore} from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

// Selectors
export const getFilteredCards = ({cards, searchString}, columnId) =>
	cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = state => state.columns;
export const getListById = ({lists}, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);
export const getAllLists = state => state.lists;
//
// Action Creators
export const addColumn = payload => ({type: 'ADD_COLUMN', payload});
export const addCard = payload => ({type: 'ADD_CARD', payload});
export const updateSearchString = payload => ({type: 'UPDATE_SEARCHSTRING', payload});
export const addList = payload => ({type: 'ADD_LIST', payload});
//

const reducer = (state, action) => {
	switch(action.type){
		case 'ADD_COLUMN':
			return {...state, columns: [...state.columns, {id: shortid(), ...action.payload}]};
		case 'ADD_CARD':
			return {...state, cards: [...state.cards, {id: shortid(), ...action.payload}]};
		case 'UPDATE_SEARCHSTRING':
			return {...state, searchString: action.payload};
		case 'ADD_LIST':
			return {...state, lists: [...state.lists, {id: shortid(), ...action.payload}]};
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