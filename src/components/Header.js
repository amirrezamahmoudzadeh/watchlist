import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {
    return (
        <div className='container'>
            <div className='inner-content'>
                <div className='brand'>
                    <Link to='/'>WatchList</Link>
                </div>

                <ul className='nav-links'>
                    <li>
                        <Link to='/'>Watch List</Link>
                    </li>

                    <li>
                        <Link to='/Watched'>Watched</Link>
                    </li>

                    <li>
                        <Link to='/Add' className='add-btn'>
                            <FontAwesomeIcon className='i-search' icon={faSearch}/>
                            <span className='search'>search</span>
                            </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
