import * as React from "react";
import { ImageListItem } from "@mui/material";

const PreviewTile = ({ image, handleClick }) => {
  return (
    <ImageListItem
      onClick={() => handleClick(image)}
      sx={{ cursor: "pointer" }}
    >
      <img
        src={image.images["fixed_width"].url}
        alt={image.title}
        loading="lazy"
      />
    </ImageListItem>
  );
};

export { PreviewTile };
