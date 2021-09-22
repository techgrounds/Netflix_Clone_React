import axios from "axios";


// BASE OF THE MOVIE URL
const instance = axios.create({
  baseURL: `https://immense-garden-85870.herokuapp.com/api/v1/`,
});



export default instance;
