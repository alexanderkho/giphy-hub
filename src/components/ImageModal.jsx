import * as React from "react";
import { Modal, Box, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4
};

const ImageModal = ({ open, handleClose, image }) => {
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
          <Button onClick={() => console.log("nice")} variant="contained">
            Add to Favorites
          </Button>
        </Box>
      ) : (
        <div></div>
      )}
    </Modal>
  );
};

export { ImageModal };
