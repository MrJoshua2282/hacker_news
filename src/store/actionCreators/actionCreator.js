import * as actionTypes from "../actionTypes";

const addingSearchTerms = (searchTerms) => {
  return {
    type: actionTypes.ADD_SEARCH_TERMS,
    searchTerms,
  };
};

const updateSearchResultsOfState = (results) => {
  return {
    type: actionTypes.UPDATE_SEARCH_RESULTS_OF_STATE,
    results,
  };
};

export const getSearchResultsByQuery = (searchTerms) => {
  return async (dispatch) => {
    try {
      const data = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${
          searchTerms.length ? searchTerms : ""
        }`
      );

      const searchResults = await data.json();

      if (searchTerms.length) {
        dispatch(addingSearchTerms(searchTerms));
      }

      dispatch(updateSearchResultsOfState(searchResults.hits));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
};
