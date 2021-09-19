import React from "react";
import { Container, Typography } from "@mui/material";

import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import { AppContext } from "./utils/data";

function App() {
  const [gifs, setGifs] = React.useState(null);

  const contextVal = {
    gifs,
    setGifs: (g) => setGifs(g)
  };

  React.useEffect(() => {
    console.log("hoy", gifs);
  });

  return (
    <AppContext.Provider value={contextVal}>
      <div
        className="App"
        style={{ background: "#b6d8fc", minHeight: "100vh" }}
      >
        <Container maxWidth="xl">
          <Typography variant="h1" sx={{ color: "#fff" }} pt={6}>
            GiphyHub
          </Typography>
          <SearchBar />
          <SearchResults />
        </Container>
      </div>
    </AppContext.Provider>
  );
}

export default App;
