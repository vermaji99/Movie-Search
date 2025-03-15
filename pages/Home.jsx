import React, { useState } from 'react'
import Movies from '../components/Movies/Movies'
import Navbar from '../components/Navbar/Navbar'
import dataBase from '../../db.json'

const Home = () => {

    const [filterData, setFilter] = useState(dataBase.movies)

    //search
    const handleSearch = (searchQuery) => {
        // Filter the data based on the search query
        const filteredMovies = dataBase.movies.filter(movie =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilter(filteredMovies);
    };

    //sort by Title Asc
    const handleSortAZ = () => {
        const filteredMovies = [...dataBase.movies].sort((a, b) =>
            a.title.localeCompare(b.title)
        );
        setFilter(filteredMovies);
    }
    //sort by Title Desc
    const handleSortZA = () => {
        const filteredMovies = [...dataBase.movies].sort((a, b) =>
            b.title.localeCompare(a.title)
        );
        setFilter(filteredMovies);
    }
    //sort by Year Asc
    const handleSortYrAsc = () => {
        const filteredMovies = [...dataBase.movies].sort((a, b) =>
            a.year - b.year

        );
        setFilter(filteredMovies);
    }
    //sort by Year Desc
    const handleSortYrDesc = () => {
        const filteredMovies = [...dataBase.movies].sort((a, b) =>

            b.year - a.year
        );
        setFilter(filteredMovies);
    }

    const filterMovies = (selectedGenres) => {
        const filteredMovies = dataBase.movies.filter((movie) => {
            return movie.genres.some(genre => selectedGenres.includes(genre));
        });
        setFilter(filteredMovies);
    };


    return (
        <>
            <Navbar
                onSearch={handleSearch}
                onSortAZ={handleSortAZ}
                onSortZA={handleSortZA}
                onSortYrAsc={handleSortYrAsc}
                onSortYrDesc={handleSortYrDesc}
                onFilter={filterMovies}
            />
            <Movies movies={filterData} />
        </>
    )
}

export default Home

