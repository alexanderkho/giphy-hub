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
    try {
      e.preventDefault();
      const gifs = await getGifs(search);
      if (!gifs.data.length) {
        dispatch({
          type: "SET_ERROR",
          message: "No Results Found, try another search"
        });
      } else {
        dispatch({ type: "SET_GIFS", payload: gifs.data });
      }
    } catch (e) {
      dispatch({ type: "SET_ERROR", message: e.message });
    }
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
