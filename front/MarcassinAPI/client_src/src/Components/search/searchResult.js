import React, {Component} from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'

/**
 * display course get from search
 * @Simon-Huet
 */
class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: []
        }
    }

    render() {
        const {courses} = this.props

        return (
            <div>
                <p>{`${ 1 > courses.length
                        ? 'Aucun resultat trouvé'
                        : courses.length + ' resultats trouvés'} `}
                </p>
                <div className="table">
                    <table className='striped responsive-table'>
                        <thead>
                            <tr>
                                <th>
                                    Date
                                </th>
                                <th>
                                    Competence
                                </th>
                                <th>
                                    Formateur
                                </th>
                                <th>
                                    Lieu
                                </th>
                                <th>
                                    Page du cours
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.length != null && Object
                                .keys(courses)
                                .map(key => {
                                    return (
                                        <tr key={courses[key].idCours}>
                                            <td>{moment(courses[key].date).format('Do MMM YYYY HH:mm')}</td>
                                            <td>{courses[key].langueCompetence.traduction}</td>
                                            <td>{`${courses[key].organisateur.nom }  ${courses[key].organisateur.prenom}`}</td>
                                            <td>{courses[key].lieu}</td>
                                            <td>
                                                <Link
                                                    to={`/course/${courses[key].idCours}`}
                                                    className='btn waves-effect waves-light blue lighten-1'>
                                                    Voir le cours
                                                    <i className="far fa-eye fa-sm right"></i>
                                                </Link>
                                            </td>

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
export default SearchResult;