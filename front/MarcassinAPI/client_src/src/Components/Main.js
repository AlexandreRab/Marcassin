import React from 'react'
import { Switch , Route } from 'react-router-dom'

// Import Pages components 
import SearchPage from '../Pages/SearchPage'
import ProfilPage from '../Pages/ProfilPage'
import ReceptionPage from '../Pages/ReceptionPage'
import MessagePage from '../Pages/MessagePage'
import FinCourseDashBoardPage from '../Pages/FinCourseDashBoardPage'
import CoursePage from '../Pages/CoursePage'
import IncCourseDashBoardPage from '../Pages/IncCourseDashBoardPage';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={ ReceptionPage } />
            
            <Route exact path='/Search' component={ SearchPage } />
            <Route exact path='/Profile' component={ ProfilPage } />
            <Route exact path='/Messaging-box' component={ MessagePage } />
            <Route exact path='/Course' component={ CoursePage} />
            <Route exact path='/Incomming-courses' component={ IncCourseDashBoardPage } />
            <Route exact path='/Past-courses' component={ FinCourseDashBoardPage} />
        </Switch>
    </main>
)

export default Main;