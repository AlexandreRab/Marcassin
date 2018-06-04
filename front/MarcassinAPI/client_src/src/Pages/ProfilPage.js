import React , { Component } from 'react';
import { getFromApi } from '../Components/dbQueries'
import SideMenu from '../Components/sideMenu/sideMenu'
import Profile from '../Components/profile/profile'
/**
 * page which display connected user informations
 * @Simon-HUET
 */
class ProfilPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            valueInput : '',
            connectedUser : { idUtilisateur :21 },
            user :[],
        }
        
    }
    componentWillMount =() =>{
        this.getProfilCredentials()
    }

    getProfilCredentials = () =>{
        
       getFromApi(`http://localhost:3000/api/Utilisateurs?filter[where][idUtilisateur]=${this.state.connectedUser.idUtilisateur}&filter[include][utilisateurCompetences]`)
       .then(data =>{
           if (data[0].estIntervenant){
               getFromApi(`http://localhost:3000/api/Personnels?filter[where][idUtilisateur]=${this.state.connectedUser.idUtilisateur}&filter[include][services]`)
               .then(personnel =>{
                    Object.keys(data[0].utilisateurCompetences).map(key=>{
                        getFromApi(`http://localhost:3000/api/LangueCompetences?filter[where][idCompetence]=${data[0].utilisateurCompetences[key].idCompetence}&filter[where][idLangue]=1`)
                        .then(lanComp =>{
                            data[0].personnel= personnel[0]
                            data[0].utilisateurCompetences[key].langueCompetence = lanComp[0]
                            this.setState({ user : data[0] })
                        })
                        
                    })
                })
           }

       })
    }

    render(){
        const { user } = this.state
        return(
            <div className="row pageWrapper">
                <SideMenu />
            {user.lenght > 0 &&
                <div className="container">
                    <div>{ user.nom }{ user.prenom }</div>

                    <div>{user.personnel.service.nom}</div>
                </div>
            }
                
            </div>
        )
    }
}

export default ProfilPage;