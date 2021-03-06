import * as React from "react";
import { Container, Typography, Box, Tabs, Tab } from "@mui/material";

import { Search } from "./Search";
import { Favorites } from "./Favorites";

const Home = () => {
  const [tab, setTab] = React.useState(0);

  return (
    <div className="App">
      <Container maxWidth="xl">
        <Typography variant="h1" sx={{ color: "#fff" }} pt={6}>
          GiphyHub
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tab}
            onChange={(_, i) => setTab(i)}
            aria-label="giphy-hub-main"
          >
            <Tab label="Search" />
            <Tab label="Favorites" />
          </Tabs>
        </Box>
        <div hidden={tab !== 0}>
          <Search />
        </div>
        <div hidden={tab !== 1}>
          <Typography variant="p">
            <Favorites />
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export { Home };
