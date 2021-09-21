import * as React from "react";

import { SearchBar } from "../components/SearchBar";
import { ImageGallery } from "../components/ImageGallery";
import { AppContext } from "../utils/data";

//TODO: no results message
const Search = () => {
  const {
    state: { gifs }
  } = React.useContext(AppContext);

  return (
    <React.Fragment>
      <SearchBar />
      {gifs.length ? <ImageGallery images={gifs} /> : null}
    </React.Fragment>
  );
};

export { Search };
