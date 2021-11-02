import React from "react";
import { Hits } from "react-instantsearch-dom";
import ProgramPunktPageEventSearchResult from "./ProgramPunktPageEventSearchResult";

const SearchResults = () => (
  <div className="w-full min-h-screen">
    <Hits hitComponent={ProgramPunktPageEventSearchResult} />
  </div>
);

export default SearchResults;
