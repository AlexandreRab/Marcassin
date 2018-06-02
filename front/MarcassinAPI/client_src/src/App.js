import React from 'react';
import Routes from './Components/Routes'
import Header from './Components/header/header';
import { Link } from 'react-router-dom';
//import ConnectionPage from './Pages/ConnectionPage'

const App = () => {
  let coursesPath = ['/Search','/search','/incomming-courses','/Incomming-courses','/past-courses','/Past-courses','/Course/:id', '/course/:id'];
  
  return (
    //si connecté lancer ça
      // remplacer par l'utilisateur récup depuis la bdd
  <div>
    <Header est_chef={ true } />
    <div className="container">
      <Routes />
    </div>
    
    {coursesPath.includes(window.location.pathname) &&
    <div className="fixed-action-btn">
      <Link to="/course/add" className=" btn-floating btn-large red" > <i className="fa fa-plus "></i></Link>
    </div>
    }
    
  </div>
  )

}

export default App;
