import React, {Component} from 'react';
import getFromApi from '../Components/dbQueries'

class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            courses: []
        }
    }

    componentWillMount() {
        getFromApi('http://localhost:3000/api/Cours?filter[include][Competence]').then(data => {
            this.setState({courses: data});
        })

    }
     //?filter[include][Competence]&filter[where][or][0][statut]=Pending&filter[where][or][1][statut]=Refused
    /*getCourses = () => {
        //
        axios.get('http://localhost:3000/api/Cours?filter[include][Competence]&filter[where][or][0][statut]=Pending&filter[where][or][1][statut]=Refused')
        .then(response =>{
            this.setState({courses : response.data});
        })
    }*/

    /*getCompetenceById = () =>{
        axios.get('http://localhost:3000/api/')
    }*/

    render() {
        const { courses } = this.state;
        console.log(courses)
        return (
            <div>
                <h1>Compétences
                </h1>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Compétence
                                </th>
                                <th>
                                    Nom du formateur
                                </th>
                                <th>
                                    test
                                </th>
                                <th></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {courses && Object.keys(courses).map( key => {
                                return(
                                    <tr key={courses[key].idCours}>
                                        <td>{courses[key].idCompetence}</td>
                                        <td>{courses[key].idCours}</td>
                                        <td>{courses[key].statut}</td>
                                        <td></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default SearchPage;