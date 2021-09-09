import React from 'react'
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className="navigation">
            <img src='https://upload.wikimedia.org/wikipedia/fr/c/c7/New_Line_Cinema_-_Logo.png' alt='logo'/>
            <ul>
                <Link to='/'>
                <li>
                <i class="fad fa-home"></i>
                Home
                </li>
                </Link>
                <Link to='/movies'>
                <li>
                <i class="fad fa-film-alt"></i>
                Movies
                </li>
                </Link>
                <Link to='/about'>
                <li>
                <i class="fas fa-info-circle"></i>
                About
                </li>
                </Link>
            </ul>
        </div>
    )
}
export default Navigation;