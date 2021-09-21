import axios from "axios";

// BASE OF THE MOVIE URL
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  // baseURL:
  //   "`https://immense-garden-85870.herokuapp.com/api/v1/discovery/${order}/${video}/${page}/${year}/${genre}`",
});

export default instance;
