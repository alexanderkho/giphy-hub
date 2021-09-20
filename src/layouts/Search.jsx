import * as React from "react";

import { SearchBar } from "../components/SearchBar";
import { SearchResults } from "../components/SearchResults";

const Search = () => {
  return (
    <React.Fragment>
      <SearchBar />
      <SearchResults />
    </React.Fragment>
  );
};

export { Search };
