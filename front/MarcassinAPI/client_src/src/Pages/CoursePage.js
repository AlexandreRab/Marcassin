import React, {Component} from 'react';
import {getFromApi} from '../Components/dbQueries'
import moment from 'moment'

/**
 * Display a course and allow to register to this course
 * @Simon-HUET
 */
class CoursePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            course: '',
            utilisateur:{ idUtilisateur : 21 }
        }
    }
    componentWillMount() {
        this.getCourse()
    }

    /**
     * Get the course by id and course planner infos
     */
    getCourse = async() => {
        await getFromApi(`http://localhost:3000/api/Cours/${this.props.match.params.id}?filter[include][participants]`).then(course => {
            getFromApi(`http://localhost:3000/api/LangueCompetences?filter[where][idCompetence]=${course.idCompetence}&filter[where][idLangue]=1`).then(comp => {
                let getUti = []
                getUti.push(course.participants.filter(part => {
                    return part.estOrga
                }))
                return getFromApi("http://localhost:3000/api/Utilisateurs/" + getUti[0][0].idUtilisateur).then(orga => {
                    course.nomCompetence = comp[0].traduction
                    course.organisateur = orga
                    return this.setState({course})
                })
            })
        })
    }
    /**
     * register the connected user to the current course
     */
    register=()=>{
        const newParticipant = {
            idUtilisateur: this.state.utilisateur.idUtilisateur,
            idCours: this.state.course.idCours,
            estOrga: false
        }
        this.addParticipant(newParticipant)

    }

    /**
     * post request
     */
    addParticipant =(newParticipant)=>{
        console.log(newParticipant)
        
    }

    render() {
        const { course } = this.state
        return (
             <div>
                {course && <div>
                <h3>
                    Page du cours sur : {course.nomCompetence}
                </h3>
                <ul className='collapsible popout'>
                    <li className="collection-item">
                        <div className="collapsible-header card-panel grey lighten-4">
                            <b>Où et quand ?
                            </b>
                        </div>
                        <div className="collapsible-body">
                            Le <u>{moment(course.date).format("Do MMMM YYYY à  HH:mm")}</u> au {course.lieu}
                            
                            <a target='blank' href={`https://www.google.fr/maps/search/${course.lieu}`}>
                                <button className="btn waves-effects waves-blue blue lighten-1 right">
                                    Voir sur la map &nbsp;<i className="far fa-map"></i>
                                </button>
                            </a>
                            {course.date && 
                            <a target='blank' href={
                                `https://www.google.com/calendar/render?action=TEMPLATE&text=Cours%20sur%20:%20${course.nomCompetence.replace(" ", "%20")}&details=%20Cours%20de%20:%20${course.organisateur.nom}%20${course.organisateur.prenom}&location=${course.lieu.replace(" ","%20")}&dates=${moment(course.date).format("YYYYMMDD")+'T'+ moment(course.date).format('HHmmss') + "Z"}%2F${moment(course.date).format("YYYYMMDD")+'T'+ moment(course.date).format('HHmmss') + "Z"}`
                            }>
                                <button className="btn waves-effects waves-blue blue lighten-1 right">
                                    Ajouter sur Google Agenda &nbsp;<i className="fas fa-calendar-plus"></i>
                                </button>
                            </a>}
                        </div>
                    </li>
                    <li className="collection">
                        <div className="collapsible-header card-panel grey lighten-4">
                            <b>
                                Par qui ?
                            </b>
                        </div>
                        {course.organisateur && <div className="collapsible-body">
                            {`${course.organisateur.nom} ${course.organisateur.prenom} `}
                            {course.organisateur.linkedin.length > 0 && <a target='blank' href={course.organisateur.linkedin}>
                                <button className="btn waves-effects waves-blue blue lighten-1 right">
                                    Voir le profil Linkedin &nbsp;
                                    <i className="fab fa-linkedin"></i>
                                </button>
                            </a>}
                        </div>}
                    </li>
                    {course.description && <li>
                        <div className="collapsible-header card-panel grey lighten-4">
                            <b>
                                Descriptif 
                            </b>
                        </div>
                        <div className="collapsible-body">{course.description}</div>
                    </li>}
                </ul>
                {course.participants && course.participants.filter(x => {return x.idUtilisateur === this.state.utilisateur.idUtilisateur}).length >0 ?
                <blockquote className="centered">Vous êtes déja inscrit à ce cours</blockquote> :
                <div>
                    <blockquote className ="centered"> Vous n'êtes pas inscrit à ce cours 
                        <button className="btn waves-effects waves-blue blue lighten-1 right" onClick={this.register}>
                             S'inscrire &nbsp;
                         <i className="fas fa-user-plus"></i>
                         
                         </button>
                    </blockquote>
                </div>}
                </div>}
            </div>
        )
    }
}

export default CoursePage;