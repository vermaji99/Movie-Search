import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import database from "../../../db.json";
import './Navbar.css';

const Navbar = ({ onSearch, onSortAZ, onSortZA, onSortYrAsc, onSortYrDesc, onFilter, md }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenres, setSelectedGenres] = useState({});
    const Genres = database.genres;

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    const handleSortAZ = () => onSortAZ();
    const handleSortZA = () => onSortZA();
    const handleSortYrAsc = () => onSortYrAsc();
    const handleSortYrDesc = () => onSortYrDesc();

    const handleFilterChange = (event) => {
        const { value, checked } = event.target;
        setSelectedGenres(prevState => ({
            ...prevState,
            [value]: checked
        }));
    };

    const handleFilter = () => {
        // Apply the filter
        onFilter(Object.keys(selectedGenres).filter(key => selectedGenres[key]));
        // Reset the selected genres
        setSelectedGenres({});
        // Optionally, clear search query
        setSearchQuery('');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className='logo'>Movie Search</Link>
            </div>
            {!md && (
                <>
                    <div className="navbar-search">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="navbar-dropdown">
                        <div className="dropdown">
                            <button className="dropbtn">Filter</button>
                            <div className="dropdown-content filter-dropdown">
                                {Genres.map(genre => (
                                    <div key={genre} className='filter'>
                                        <label htmlFor={genre} className='black'>{genre}</label>
                                        <input
                                            type="checkbox"
                                            name={genre}
                                            value={genre}
                                            id={genre}
                                            checked={selectedGenres[genre] || false}
                                            onChange={handleFilterChange}
                                        />
                                    </div>
                                ))}
                                <button onClick={handleFilter} type='button' className='btn-filter'>Apply</button>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-dropdown">
                        <div className="dropdown">
                            <button className="dropbtn">Sort</button>
                            <div className="dropdown-content">
                                <button onClick={handleSortAZ}>Title (A-Z)</button>
                                <button onClick={handleSortZA}>Title (Z-A)</button>
                                <button onClick={handleSortYrAsc}>Year (Asc)</button>
                                <button onClick={handleSortYrDesc}>Year (Desc)</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
}

export default Navbar;
