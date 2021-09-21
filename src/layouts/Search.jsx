import * as React from "react";

import { SearchBar } from "../components/SearchBar";
import { ImageGallery } from "../components/ImageGallery";
import { AppContext } from "../utils/data";
import { Typography } from "@mui/material";

const Search = () => {
  const {
    state: { gifs, error }
  } = React.useContext(AppContext);

  return (
    <React.Fragment>
      <SearchBar />
      {error ? (
        <Typography variant="p">{error}</Typography>
      ) : gifs.length ? (
        <ImageGallery images={gifs} />
      ) : (
        <Typography variant="p">Enter a search term to get started!</Typography>
      )}
    </React.Fragment>
  );
};

export { Search };
