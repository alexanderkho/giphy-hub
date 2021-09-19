import { createContext } from "react";
import { API_KEY } from "../secret";

const API = "https://api.giphy.com/v1/gifs";

const getGifs = (search) => {
  const url = `${API}/search?api_key=${API_KEY}&q=${search}&limit=20`;
  return fetch(url).then((res) => res.json());
};

const AppContext = createContext({
  gifs: [],
  updateGifs: () => {}
});

export { getGifs, AppContext };
