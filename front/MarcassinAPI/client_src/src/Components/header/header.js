import React from 'react';
import logo from '../../ressources/Marcassin_Logo.png';
import {Link} from 'react-router-dom';

/**
 * Header navbar
 * @Simon-HUET
 */
const Header = () => {
    return (
        <div className='header'>
            <nav className="nav-fixed blue lighten-1">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">
                        <img src={logo} className="header-logo" alt="logo"/>
                    </Link>
                    <a data-target="main-menu" className="sidenav-trigger">
                        <i className="fa fa-bars"></i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>

                            <Link to="/">
                                Trouver un cours &nbsp;
                                <i className="fa fa-search fa-sm"></i>
                            </Link>

                        </li>

                        <li>
                            <Link to="/profile">Profil &nbsp;
                                <i className="fa fa-user fa-sm"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/messaging-box">
                                Messagerie &nbsp;<i className="fa fa-comments fa-sm"></i>

                            </Link>
                        </li>
                        {/* feature for service chiefs
                        est_chef && <li>
                            <Link to="/Course">
                                Gestion du service &nbsp;
                                <i className="fa fa-users fa-sm"></i>
                            </Link>
                        </li>*/}
                        <li>
                            <Link to="/Login">
                                Se Connecter &nbsp;
                                <i className="fas fa-sign-in-alt fa-sm"></i>
                            </Link>
                        {/*
                            <Link to="/Connet">
                                Se Deconnecter $nbsp;
                                <i className="fa fa-power-off fa-sm"></i>
                        */}
                        </li>
                    </ul>

                </div>
            </nav>
            <ul className="sidenav" id="main-menu">
                <li>
                    <Link to="/">
                        Trouver un cours &nbsp;
                        <i className="fa fa-search fa-sm"></i>
                    </Link>
                </li>

                <li>
                    <Link to="/profile">Profil &nbsp;
                        <i className="fa fa-user fa-sm"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/messaging-box">
                        Messagerie &nbsp;<i className="fa fa-comments fa-sm"></i>
                    </Link>
                </li>
                {/*est_chef && <li>
                    <Link to="/Course">
                        Gestion du service &nbsp;
                        <i className="fa fa-users fa-sm"></i>
                    </Link>
                </li>*/}
                <li>
                    <Link to="/connect">
                        Deconnexion &nbsp;
                        <i className="fa fa-power-off fa-sm"></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;
