import React , { Component } from 'react';
import SideMenu from '../Components/sideMenu/sideMenu'
import Courses from '../Components/Courses/courses'

class FinCourseDashBoardPage extends Component {

    render(){
        return(
            <div className="row pageWrapper">
                <SideMenu />
                <div className='container'>
                <Courses 
                    getCoursesAccepted/>
                </div>
            </div>
        )
    }
}

export default FinCourseDashBoardPage;