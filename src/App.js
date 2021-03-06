import React, { useState, useEffect } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "./store/actionCreators/index";
import NewsCard from "./components/NewsCard";
import SearchTermCard from "./components/SearchTermCard";

function App() {
  const [search, setSearch] = useState("");
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleSearchEventDetails = () => {
    dispatch(actionCreators.getSearchResultsByQuery(search));
    setSearch("");
  };

  const searchNewsHandler = (e) => {
    e.preventDefault();
    handleSearchEventDetails();
  };

  useEffect(() => {
    handleSearchEventDetails();
  }, []);

  return (
    <section className='App'>
      <div>
        <form onSubmit={searchNewsHandler}>
          <label>
            <input
              type='Search'
              placeholder='Find something new!'
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </label>
          <button type='submit'>Search</button>
        </form>
        <ul>
          <NewsCard newsResults={store.searchResults} />
        </ul>
      </div>
      <div>
        <ul>
          <SearchTermCard searchTerms={store.searchTerms} />
        </ul>
      </div>
    </section>
  );
}

export default App;
