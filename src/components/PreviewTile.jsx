import * as React from "react";
import { ImageListItem } from "@mui/material";

const PreviewTile = ({ image }) => {
  return (
    <ImageListItem key={image.id}>
      <img
        src={image.images["fixed_width"].url}
        alt={image.title}
        loading="lazy"
      />
    </ImageListItem>
  );
};

export { PreviewTile };
