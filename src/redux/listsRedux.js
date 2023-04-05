import shortid from "shortid";

// Selectors
export const getListById = ({lists}, listId) => lists.find(list => list.id === listId);
export const getAllLists = ({lists}) => lists;

// Actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

// Action creators
export const addList = payload => ({type: ADD_LIST, payload});

const listsReducer = (statePart = [], action) => {
	switch(action.type){
		case ADD_LIST:
			return [...statePart, {...action.payload, id: shortid()}];
		default:
			return statePart;
	};
};

export default listsReducer;