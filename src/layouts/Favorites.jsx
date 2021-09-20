import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { ImageGallery } from "../components/ImageGallery";

import { AppContext } from "../utils/data";

const Favorites = () => {
  const {
    state: { favorites }
  } = React.useContext(AppContext);

  return (
    <Box>
      <Typography variant="h3">Favorites</Typography>
      {favorites.length ? (
        <ImageGallery images={favorites} />
      ) : (
        <Typography variant="p">
          Add some favorites on the search page!
        </Typography>
      )}
    </Box>
  );
};

export { Favorites };
