import React, { useEffect, useState } from 'react'
import MovieDB from "../../../db.json"
import { Link, useParams } from 'react-router-dom'
import "./SimilarMovies.css"

const SimilarMovies = ({ genre }) => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const moviesFiltered = MovieDB.movies.filter((elem) => {
            for (let i = 0; i < genre.length; i++) {
                for (let j = 0; j < elem.genres.length; j++) {
                    return id != elem.id && genre[i] == elem.genres[j] 
                }
            }
        })
        setMovies(moviesFiltered)
    }, [id])


    return (
        <div className='main'>
            <p>More like this</p>
            <div className="wrapper">
                {movies.map((elem) => {
                    return (
                        <Link key={elem.id} to={`/movie/${elem.id}`}>
                            <img src={elem.posterUrl} alt={elem.title} key={elem.id}  className='sim-img'/>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default SimilarMovies