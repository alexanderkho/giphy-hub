import * as React from "react";
import { ImageList } from "@mui/material";

import { AppContext } from "../utils/data";
import { PreviewTile } from "./PreviewTile";

const SearchResults = () => {
  const { state } = React.useContext(AppContext);
  const { gifs } = state;
  return gifs.length ? (
    <ImageList cols={5}>
      {gifs.map((image) => (
        <PreviewTile image={image} />
      ))}
    </ImageList>
  ) : null;
};

export { SearchResults };
