import React from "react";

import "./App.css";
import { AppContext, appReducer, defaultState } from "./utils/data";
import { Home } from "./layouts/Home";

function App() {
  const [state, dispatch] = React.useReducer(appReducer, defaultState);
  const contextVal = { state, dispatch };

  return (
    <AppContext.Provider value={contextVal}>
      <Home />
    </AppContext.Provider>
  );
}

export default App;
