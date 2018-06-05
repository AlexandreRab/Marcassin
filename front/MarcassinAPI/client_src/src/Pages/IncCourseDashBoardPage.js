import React , { Component } from 'react';
import SideMenu from '../Components/sideMenu/sideMenu'
import Courses from '../Components/Courses/courses'

class IncCourseDashBoardPage extends Component {

    render(){
        return(
            <div className="row pageWrapper">
                <SideMenu />
                <div className='col s12 container'>
                    <Courses 
                    getCoursesPending/>
                </div>
            </div>
        )
    }
}

export default IncCourseDashBoardPage;