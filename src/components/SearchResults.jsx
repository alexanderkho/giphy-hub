import * as React from "react";

import { AppContext } from "../utils/data";

const SearchResults = () => {
  const { gifs } = React.useContext(AppContext);
  return (
    <div>
      Search Results
      {gifs && <pre>{JSON.stringify(gifs, null, 2)}</pre>}
    </div>
  );
};

export { SearchResults };
