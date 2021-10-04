import React, { useState } from 'react'
import { FaPlay, FaPlus, FaChevronDown, FaThumbsUp, FaThumbsDown } from "react-icons/fa";



export default function MovieCard({ movie, index, isLargeRow, id }) {
    const [isHovered, setIsHovered] = useState(false);

    const trailer =
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    const img_url = "https://image.tmdb.org/t/p/original/";

    const ratingToPercentage = (rating) => {
        return (rating * 10).toFixed(0);
    }


    return (
        <div
            className="movie-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                key={movie.id}
                src={`${img_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                alt={movie.name}
                loading="lazy"
            />

            {isHovered && (
                <div className="movie-card-pop-up">
                    <video src={trailer} autoPlay={true} loop loading="lazy" />
                    <div className="itemInfo">
                        <div className="movie-card-buttons-container">
                            <div className="movie-card-buttons-left">
                                <div className="movie-card-button">
                                    <FaPlus className="movie-card-button-icon" />
                                </div>
                                <div className="movie-card-button">
                                    <FaPlay className="movie-card-button-icon" />
                                </div>
                                <div className="movie-card-button">
                                    <FaThumbsUp className="movie-card-button-icon" />
                                </div>
                                <div className="movie-card-button">
                                    <FaThumbsDown className="movie-card-button-icon" />
                                </div>
                            </div>
                            <div className="movie-card-buttons-right">
                                <div className="movie-card-button">
                                    <FaChevronDown className="movie-card-button-icon" />
                                </div>
                            </div>
                        </div>

                        <div className="movie-card-info">

                            <h2 className="movie-title">{movie.title}</h2>
                            <div className="movie-details">
                                <p>1h 17m</p>
                                <p>PG12</p>
                                <p className="match-percentage">
                                    {ratingToPercentage(movie.vote_average)}% Match
                                </p>
                                <p>{movie.genre_ids}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}