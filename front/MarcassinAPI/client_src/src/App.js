import React from 'react';
import Routes from './Components/Routes'
import Header from './Components/header/header';
import { Link } from 'react-router-dom';
//import ConnectionPage from './Pages/ConnectionPage'

const App = () => {
  return (
    //si connecté lancer ça
      // remplacer par l'utilisateur récup depuis la bdd
  <div>
    <Header est_chef={ true } />
    <div className="container">
      <Routes />
    </div>
    <div className="fixed-action-btn">
      <Link to="/Course/Create" className=" btn-floating btn-large red" > <i className="fa fa-plus "></i></Link>
    </div>
  </div>
  )

}

export default App;
