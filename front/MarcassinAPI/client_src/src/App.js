import React from 'react';
import Routes from './Components/Routes'
import Header from './Components/header/header';
import { Link } from 'react-router-dom';

//Ajout pour la connexion

//import { Provider } from 'react-redux';
//import LoginForm from './Components/login/LoginForm';
//import store from './login/store.js';

const App = () => {
  let coursesPath = ['/','/incomming-courses','/Incomming-courses','/past-courses','/Past-courses'];
  
  return (
  <div>
    <Header est_chef={ false } />
    <div>
      <Routes />
    </div>
    {/* Display add course button on search page, profil course page*/}
    {coursesPath.includes(window.location.pathname) &&
    <div className="fixed-action-btn">
      <Link to="/course/add" className=" btn-floating btn-large red" > <i className="fa fa-plus "></i></Link>
    </div>
    }
    
  </div>
  )
  
}

export default App;
