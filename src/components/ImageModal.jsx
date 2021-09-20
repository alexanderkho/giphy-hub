import * as React from "react";
import { Modal, Box, Button } from "@mui/material";

import { AppContext } from "../utils/data";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4
};

//TODO: add icons to btns, improve styling, x btn
const ImageModal = ({ open, handleClose, image }) => {
  const {
    dispatch,
    state: { favorites }
  } = React.useContext(AppContext);

  const addToFavorites = () =>
    dispatch({ type: "ADD_TO_FAVORITES", payload: image });

  const removeFromFavorites = () =>
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: image.id });

  const isFavorite = !favorites.includes(image);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      onBackdropClick={handleClose}
      aria-describedby="image modal"
    >
      {open ? (
        <Box sx={style}>
          <img src={image.images.original.url} alt={image.title} />
          <br />
          {isFavorite ? (
            <Button onClick={addToFavorites} variant="contained">
              Add to Favorites
            </Button>
          ) : (
            <Button onClick={removeFromFavorites}>Remove From Favorites</Button>
          )}
        </Box>
      ) : (
        <div></div>
      )}
    </Modal>
  );
};

export { ImageModal };
