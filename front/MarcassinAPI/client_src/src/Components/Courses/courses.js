import React, { Component } from "react"
import moment from 'moment'
import {Link} from 'react-router-dom'
import { getFromApi } from "../dbQueries";

class Courses extends Component {
    constructor(props){
        super(props)
        this.state= {
            participes : [],
            competences : []
        }
    }

    componentWillMount=() =>{
        this.getCoursesPending()
    }

    getCoursesPending = () => {

        let participes = []
        getFromApi("http://localhost:3000/api/Participants?filter[include][cours]&filter[where][idUtilisateur]=21").then(participes =>{
            Object.keys(participes).map(key => {    
            getFromApi("http://localhost:3000/api/LangueCompetences?filter[where][idCompetence]=" + participes[key].cours.idCompetence + "&filter[where][idLangue]=1&filter[include][competence]")
            .then(competence =>{
                participes[key].competences= competence 
                participes.push(participes[key])
                this.setState({participes})
                console.log(participes[key].competences[0])
                })
            })
        })
        
    }

    render(){
        const {participes} = this.state;
        
        return(

            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>
                                Date
                            </th>
                            <th>
                                Intitule
                            </th>
                            <th>
                                Page du cours
                            </th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {participes && participes.length !== 0 && Object
                            .keys(participes)
                            .map(key => {
                                return (
                                    <tr key={ participes[key].idCours }>
                                        <td>{ moment(participes[key]).format('Do MMM YYYY HH:mm') }</td>
                                        <td>{ participes[key].competences[0] }</td>
                                        <td>
                                            <Link
                                                to={`/course/${participes[key].idCours}`}
                                                className='btn waves-effect waves-light blue lighten-1'>
                                                Voir le cours &nbsp;
                                                <i className="far fa-eye fa-sm-right"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>    
                
            </div>
        )
    }
}

export default Courses;
