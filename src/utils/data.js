import { createContext } from "react";
import { API_KEY } from "../secret";

const API = "https://api.giphy.com/v1/gifs";

const getGifs = (search) => {
  const url = `${API}/search?api_key=${API_KEY}&q=${search}&limit=20`;
  return fetch(url).then((res) => res.json());
};

const appReducer = (state, action) => {
  console.log("yo", action);
  switch (action.type) {
    case "SET_GIFS":
      console.log("uh");
      return { ...state, gifs: action.payload };
    case "ADD_TO_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FROM_FAVORITES":
      const newFavs = [...state.favorites];
      newFavs.splice(action.payload, 1);
      return { ...state, favorites: newFavs };
    default:
      return state;
  }
};

const defaultState = {
  gifs: [],
  favorites: []
};

const AppContext = createContext({
  state: defaultState,
  dispatch: () => {}
});

export { getGifs, AppContext, appReducer, defaultState };
