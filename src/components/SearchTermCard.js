import React from "react";

import shortid from "shortid";

export default function SearchTermCard({ searchTerms }) {
  return (
    <>
      {searchTerms.length
        ? searchTerms.map((el) => {
            return <li key={shortid.generate()}>{el}</li>;
          })
        : "No Search Terms Used."}
    </>
  );
}
