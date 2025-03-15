import React from 'react'
import MovieCard from '../MovieCard/MovieCard';

const Movies = ({ movies }) => {
    const sliced = movies.slice(0, 30);
    return (
        <div className="container">
            {
                sliced.length === 0 ?
                    <div className="container">
                        <p>No matching movies available. Try again</p>
                    </div> : (
                        sliced.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    )
            }
        </div>
    );
}

export default Movies