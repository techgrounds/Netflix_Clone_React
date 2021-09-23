
import React, {useState, useEffect } from 'react'
import Carousel from './Carousel'
import axios from "../../utilities/axios";




export default function CatSlider({ title, fetchUrl, isLargeRow, id }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);


  useEffect(() => {


    async function fetchData() {
     
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);


    return (
     
        <div className="container-fluid py-5">
          <h2 className="movie__title text-secondary px-4">{title}</h2>
          <Carousel
              show={6}
              infiniteLoop={true}
          >
               {movies.map((movie) => (
              <img className="movie-thumb"
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ))}

          </Carousel>
   
        </div>
    )
}
