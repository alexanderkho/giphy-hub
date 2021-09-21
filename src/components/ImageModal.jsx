import * as React from "react";
import { Modal, Box, Button, Grid, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

import { AppContext } from "../utils/data";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#b6d8fc",
  boxShadow: 24,
  padding: "0 2em 2em 2em",
  borderRadius: "8px"
};

const ImageModal = ({ open, handleClose, image }) => {
  const {
    dispatch,
    state: { favorites }
  } = React.useContext(AppContext);

  const addToFavorites = () =>
    dispatch({ type: "ADD_TO_FAVORITES", payload: image });

  const removeFromFavorites = () =>
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: image.id });

  const isFavorite = favorites.includes(image);

  return (
    <Modal
      open={open}
      onBackdropClick={handleClose}
      aria-describedby="image modal"
    >
      <React.Fragment>
        {open && (
          <Box sx={style}>
            <Grid container justifyContent="flex-end">
              <Grid item xs={1}>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
            <img
              src={image.images.original.url}
              alt={image.title}
              style={{ marginBottom: "0.5em" }}
            />
            <br />
            {isFavorite ? (
              <Button
                onClick={removeFromFavorites}
                variant="outlined"
                startIcon={<DeleteIcon />}
              >
                Remove From Favorites
              </Button>
            ) : (
              <Button
                onClick={addToFavorites}
                variant="contained"
                startIcon={<FavoriteIcon />}
              >
                Add to Favorites
              </Button>
            )}
          </Box>
        )}
      </React.Fragment>
    </Modal>
  );
};

export { ImageModal };
