import { createContext } from "react";
import { API_KEY } from "../secret";

const API = "https://api.giphy.com/v1/gifs";

const getGifs = (search) => {
  const url = `${API}/search?api_key=${API_KEY}&q=${search}&limit=20`;
  return fetch(url).then((res) => res.json());
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_GIFS":
      return { ...state, gifs: action.payload };
    case "ADD_TO_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FROM_FAVORITES":
      const idx = state.favorites.findIndex((i) => i.id === action.payload);
      if (idx === -1) return state;
      const newFavs = [...state.favorites];
      newFavs.splice(idx, 1);
      return { ...state, favorites: newFavs };
    default:
      return state;
  }
};

const defaultState = () => {
  let favorites;
  const savedFavorites = localStorage.getItem("giphy-hub-favorites");
  if (savedFavorites !== null) {
    favorites = JSON.parse(savedFavorites);
  }
  return {
    gifs: [],
    favorites
  };
};

const AppContext = createContext({
  gifs: [],
  favorites: []
});

export { getGifs, AppContext, appReducer, defaultState };
