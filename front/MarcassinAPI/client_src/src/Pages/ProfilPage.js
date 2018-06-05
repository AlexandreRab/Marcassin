import React, {Component} from 'react';
import {getFromApi} from '../Components/dbQueries'
import SideMenu from '../Components/sideMenu/sideMenu'

/**
 * page which display connected user informations
 * @Simon-HUET
 */
class ProfilPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            connectedUser: {
                idUtilisateur: 21
            },
            user: []
        }

    }
    componentWillMount = () => {
        this.getProfilCredentials()
    }

    getProfilCredentials = () => {

        getFromApi(`http://localhost:3000/api/Utilisateurs?filter[where][idUtilisateur]=${this.state.connectedUser.idUtilisateur}&filter[include][utilisateurCompetences]`).then(data => {
            getFromApi(`http://localhost:3000/api/UtilisateurBadges?filter[where][idUtilisateur]=21&filter[include][badge]`).then(badges => {
                if (data[0].estIntervenant) {
                    getFromApi(`http://localhost:3000/api/Personnels?filter[where][idUtilisateur]=${this.state.connectedUser.idUtilisateur}&filter[include][services]`).then(personnel => {
                        Object
                            .keys(data[0].utilisateurCompetences)
                            .map(key => {
                                return getFromApi(`http://localhost:3000/api/LangueCompetences?filter[where][idCompetence]=${data[0].utilisateurCompetences[key].idCompetence}&filter[where][idLangue]=1`).then(lanComp => {
                                    data[0].utilisateurBadges = badges
                                    data[0].personnel = personnel[0]
                                    data[0].utilisateurCompetences[key].langueCompetence = lanComp[0]
                                    this.setState({user: data[0]})
                                })

                            })
                    })
                }
            })

        })
    }

    render() {
        const {user} = this.state
        return (
            <div className="row pageWrapper">
                <SideMenu/>

                <div className="col s12 m8 19 container right">
                    <div className=''>
                        <h3>Mon profil</h3>
                        <div className='credential-wrapper'>
                            <div className='Capitalize'>{user.nom} {user.prenom}</div>

                            <div className='profile-service'>
                                <b>Service : </b>
                                {user.personnel && user.personnel.services.nom}</div>
                            </div>
                            <div className='profile-badges left'>
                            <b>Badges : </b>
                            {user.utilisateurBadges && user
                                .utilisateurBadges
                                .map(utiBadge => {
                                    return (
                                        <div key={utiBadge.idBadge} className='profile-badge'>
                                            <img src={utiBadge.badge.images} alt={utiBadge.badge.nom} className='circle responsive-img badge-img'/>
                                            <legend> {utiBadge.badge.nom} </legend>
                                        </div>
                                    )
                                })}
                            </div>
                        <table className='striped profile-comp'>
                            <thead>
                                <tr>
                                    <th className=''>Mes compétences
                                    </th>
                                    <th className=''>Note
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.utilisateurCompetences && user
                                    .utilisateurCompetences
                                    .map(comp => {
                                        return (
                                            <tr key={comp.idCompetence}>
                                                <td className='collection-item'>
                                                    {comp.langueCompetence && comp.langueCompetence.traduction
}
                                                </td>
                                                <td className=''>
                                                    {comp.note}
                                                    / 5
                                                </td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfilPage;