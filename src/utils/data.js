import { createContext } from "react";
import { API_KEY } from "../secret";

const API = "https://api.giphy.com/v1/gifs";

const getGifs = async (search) => {
  const url = `${API}/search?api_key=${API_KEY}&q=${search}&limit=20`;
  const res = await fetch(url);
  if (!res.ok) {
    const { message } = await res.json();
    throw new Error(`${res.status} Error: ${message}`);
  }
  return res.json();
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_GIFS":
      return { ...state, gifs: action.payload, error: null };
    case "ADD_TO_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FROM_FAVORITES":
      const idx = state.favorites.findIndex((i) => i.id === action.payload);
      if (idx === -1) return state;
      const newFavs = [...state.favorites];
      newFavs.splice(idx, 1);
      return { ...state, favorites: newFavs };
    case "SET_ERROR":
      return { ...state, error: action.message };
    default:
      return state;
  }
};

const defaultState = () => {
  const savedFavorites = localStorage.getItem("giphy-hub-favorites");
  const favorites = savedFavorites !== null ? JSON.parse(savedFavorites) : [];
  return {
    gifs: [],
    favorites,
    error: null
  };
};

const AppContext = createContext({
  gifs: [],
  favorites: [],
  error: null
});

export { getGifs, AppContext, appReducer, defaultState };
