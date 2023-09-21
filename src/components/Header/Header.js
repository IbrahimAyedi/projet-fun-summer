import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import user from '../../images/user.png';
import './Header.scss';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Header = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if(term === "") return alert ("please enter search term!");
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("");
    };

    return (
        <div className="header">
            <div className='logo'>
                <Link to="/">Movie App</Link> |
            </div>
            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        value={term}
                        placeholder="Search for a movie"
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button type='submit'>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
            <div className="user-image">
                <img src={user} alt="user" />
            </div>
        </div>
    );
};

export default Header;
