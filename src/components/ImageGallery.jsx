import * as React from "react";
import { ImageList } from "@mui/material";

import { PreviewTile } from "./PreviewTile";
import { ImageModal } from "./ImageModal";

const ImageGallery = ({ images }) => {
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

  return (
    <React.Fragment>
      <ImageList cols={5}>
        {images.map((image) => (
          <PreviewTile image={image} key={image.id} handleClick={openModal} />
        ))}
      </ImageList>
      <ImageModal
        open={showModal}
        handleClose={closeModal}
        image={activeImage}
      />
    </React.Fragment>
  );
};

export { ImageGallery };
