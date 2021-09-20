import * as React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useState, useContext } from "react";

import { AppContext, getGifs } from "../utils/data";

const SearchBar = () => {
  const { dispatch } = useContext(AppContext);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const gifs = await getGifs(search);
    dispatch({ type: "SET_GIFS", payload: gifs.data });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container justifyContent="center" mt={6}>
        <TextField
          label="Search"
          value={search}
          onChange={handleChange}
          sx={{ width: "40%" }}
          autoFocus
        />
        <Button variant="outlined" type="submit">
          Go
        </Button>
      </Grid>
    </form>
  );
};

export { SearchBar };
