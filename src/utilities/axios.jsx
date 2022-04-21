import axios from "axios";

const DOMAIN = process.env.REACT_APP_DOMAIN

// BASE OF THE MAIN MOVIE URL
const baseInstance = axios.create({
  baseURL: `http://${DOMAIN}/api/v1/`,

  // // FEATURED URL - RESERVED_DO NOT REMOVE PLZ
  // featuredURL: "https://api.themoviedb.org/3",
});

const movieInstance = axios.create({
   baseURL: `http://${DOMAIN}/api/v1/movie/`,
});


export { baseInstance, movieInstance };
