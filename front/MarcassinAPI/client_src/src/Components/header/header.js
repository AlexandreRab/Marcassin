import React from 'react';
import logo from '../../ressources/Marcassin_Logo.png';
import {Link} from 'react-router-dom';

const Header = (est_chef, utilisateur) => {
    return (
        <div>
            <nav className="nav-fixed light-blue lighten-1">
                <div className="nav-wrapper">

                    <Link to="/" className="brand-logo">
                        <img src={logo} className="header-logo" alt="logo"/>
                    </Link>
                    <a data-target="main-menu" className="sidenav-trigger">
                        <i className="fa fa-bars"></i>
                    </a>
                   
                    <ul className="right hide-on-med-and-down">
                        <li>
                        
                        <div className="input-field">
                            <input id="search" type="search" />
                            <label className="label-icon" htmlFor="search">
                                <i className="fa fa-search fa-sm"></i>
                            </label>
                            
                        </div>
                     
                        </li>
                        
                        <li>
                            <Link to="/Profile">Profil &nbsp;
                                <i className="fa fa-user fa-sm"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Messaging-box">
                                Messagerie &nbsp;<i className="fa fa-comments fa-sm"></i>

                            </Link>
                        </li>
                        {est_chef && <li>
                            <Link to="/Course">
                                Gestion du service &nbsp;
                                <i className="fa fa-users fa-sm"></i>
                            </Link>
                        </li>
}
                        <li>
                            <Link to="/Connect">
                                Deconnexion &nbsp;
                                <i className="fa fa-power-off fa-sm"></i>
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
            <ul className="sidenav" id="main-menu">
                <li>
                    <Link to="/Profile">Profil &nbsp;
                        <i className="fa fa-user fa-sm"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/Messaging-box">
                        Messagerie &nbsp;<i className="fa fa-comments fa-sm"></i>

                    </Link>
                </li>
                {est_chef && <li>
                    <Link to="/Course">
                        Gestion du service &nbsp;
                        <i className="fa fa-users fa-sm"></i>
                    </Link>
                </li>
}
                <li>
                    <Link to="/Connect">
                        Deconnexion
                        <i className="fa fa-power-off fa-sm"></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;
