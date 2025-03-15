import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import movieDB from '../../../db.json';
import './MovieDetails.css'
import SimilarMovies from '../SimilarMovies/SimilarMovies';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const { movies } = movieDB;
        // Find the movie with the matching ID
        const selectedMovie = movies.find(elem => elem.id == id);
        setMovie(selectedMovie);
    }, [id]);


    if (!movie) {
        return <h1>Loading....</h1>;
    }

    return (
        <>
            <Navbar md={true}/>
            <div className='movieDetails-wrapper'>
                <img src={movie.posterUrl} alt={movie.title} />
                <div className="details">
                    {/* title */}
                    <p className="movieDetails-name">{movie.title}</p>
                    {/* Runtime */}
                    <span className="movieDetails-runtime">{movie.runtime}mins </span>
                    <span>   |   </span>
                    {/* Year */}
                    <span className="movieDetails-year"> {movie.year}</span>
                    {/* Plot */}
                    <div className="overview">
                        <span>Overview: </span>
                        <p className='plot'>{movie.plot}</p>
                    </div>
                    {/* Actors */}
                    <div className="overview">
                        <span>Actors: </span>
                        <p className="movieDetails-actors">{movie.actors}</p>
                    </div>
                    {/* Director */}
                    <div className="overview">
                        <span>Director: </span>
                        <p className="movieDetails-director">{movie.director}</p>
                    </div>
                    {/* Genre */}
                    <div className="overview">
                        <span>Genre: </span>
                        <p className="movieDetails-genres">{movie.genres.join(', ')}</p>
                    </div>

                </div>
            </div>
            <SimilarMovies genre={movie.genres}  />
        </>
    );
}

export default MovieDetails;
