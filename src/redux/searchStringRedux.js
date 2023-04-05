// Selectors
export const getSearchString = state => state.searchString;

// Action
const createActionName = actionName => `app/lists/${actionName}`;
const FILTER_SEARCHSTRING = createActionName('FILTER_SEARCHSTRING');

// Action creators
export const updateSearchString = payload => ({type: FILTER_SEARCHSTRING, payload});

const searchStringReducer = (statePart = '', action) => {
	switch(action.type){
		case FILTER_SEARCHSTRING:
			return action.payload;
		default:
			return statePart;
	};
};

export default searchStringReducer;