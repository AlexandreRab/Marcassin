import React from 'react'
import { Switch , Route } from 'react-router-dom'

// Import Pages components 
import SearchPage from '../Pages/SearchPage'
import ProfilPage from '../Pages/ProfilPage'
import ReceptionPage from '../Pages/ReceptionPage'
import MessagePage from '../Pages/MessagePage'
import FinCourseDashBoardPage from '../Pages/FinCourseDashBoardPage'
import CoursePage from '../Pages/CoursePage'
import addCoursePage from '../Pages/addCoursePage'
import IncCourseDashBoardPage from '../Pages/IncCourseDashBoardPage'

const Routes = () => (
    <main>
        <Switch>
            <Route exact path='/' component={ ReceptionPage } />
            <Route exact path='/search' component={ SearchPage } />
            <Route exact path='/profile' component={ ProfilPage } />
            <Route exact path='/messaging-box' component={ MessagePage } />
            <Route exact path='/course/add' component={ addCoursePage } />
            <Route exact path='/course/:id' component={ CoursePage } />
            <Route exact path='/incomming-courses' component={ IncCourseDashBoardPage } />
            <Route exact path='/past-courses' component={ FinCourseDashBoardPage} />
        </Switch>
    </main>
)

export default Routes;