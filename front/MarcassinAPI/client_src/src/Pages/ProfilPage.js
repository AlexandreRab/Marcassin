import React , { Component } from 'react';
import { getFromApi } from '../Components/dbQueries'
import SideMenu from '../Components/sideMenu/sideMenu'

class ProfilPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            valueInput : '',
        }
        
    }
    componentWillMount =() =>{
        this.getProfilCredentials()
    }

    getProfilCredentials = () =>{
       // getFromApi('http://localhost:3000/api')
    }

    render(){
        
        return(
            <div className="row pageWrapper">
                <SideMenu />

            </div>
        )
    }
}

export default ProfilPage;