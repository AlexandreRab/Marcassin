import React from 'react'
import {Link} from 'react-router-dom'

const sideMenu = () => {
    
    return (
        <div className="col s12 m4 l3 left">
            <ul className='collection'>
                <Link
                    className={`collection-item ${window.location.pathname === '/profile' && 'active'}`}
                    to='/profile'>
                    Profil
                </Link>
                <Link
                    className={`collection-item ${window.location.pathname === '/incomming-courses' && 'active'}`}
                    to='/incomming-courses'>
                    Cours à venir
                </Link>
                <Link
                    className={`collection-item ${window.location.pathname === '/past-courses' && 'active'}`}
                    to='/past-courses'>
                    Cours terminés
                </Link>
            </ul>
        </div>

    )
}

export default sideMenu