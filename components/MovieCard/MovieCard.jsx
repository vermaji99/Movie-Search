import React from 'react'
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movieKey, movie }) => {
    return (
        <>
            <Link className="movie-card" key={movieKey} to={`/movie/${movie.id}`}>
                <img className="movie-poster" src={movie.posterUrl} alt={movie.title} />
                <div className="overlay">
                    <p className="movie-title">{movie.title}</p>
                    <p className="movie-genres">{movie.genres.join(', ')}</p>
                    <div className='runtime '>
                        <p className="movie-runtime">{movie.runtime} mins</p>
                        <p className="movie-year">{movie.year}</p>
                    </div>
                </div>
            </Link>

        </>
    )
}

export default MovieCard