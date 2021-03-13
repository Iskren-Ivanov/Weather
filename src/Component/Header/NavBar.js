import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Get Weather Forecast" />
                <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    );
};

export default NavBar