import * as React from "react";
import { ImageList } from "@mui/material";

import { AppContext } from "../utils/data";
import { PreviewTile } from "./PreviewTile";
import { ImageModal } from "./ImageModal";

const SearchResults = () => {
  const { state } = React.useContext(AppContext);
  const { gifs } = state;

  const [showModal, setShowModal] = React.useState(false);
  const [activeImage, setActiveImage] = React.useState(null);

  const openModal = (img) => {
    setShowModal(true);
    setActiveImage(img);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveImage(null);
  };

  return gifs.length ? (
    <React.Fragment>
      <ImageList cols={5}>
        {gifs.map((image) => (
          <PreviewTile image={image} key={image.id} handleClick={openModal} />
        ))}
      </ImageList>
      <ImageModal
        open={showModal}
        handleClose={closeModal}
        image={activeImage}
      />
    </React.Fragment>
  ) : null;
};

export { SearchResults };
