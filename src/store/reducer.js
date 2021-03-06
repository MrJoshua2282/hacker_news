import * as actionTypes from "./actionTypes/index";
const initialState = {
  searchTerms: [],
  searchResults: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SEARCH_TERMS:
      return {
        ...state,
        searchTerms: [...state.searchTerms, ...action.searchTerms.split(" ")], // IN CASE OF MULTIPLE SEARCH WORDS, REMOVE THE SPACE
      };
    case actionTypes.UPDATE_SEARCH_RESULTS_OF_STATE:
      return {
        ...state,
        searchResults: action.results,
      };
    default:
      return state;
  }
};

export default reducer;
