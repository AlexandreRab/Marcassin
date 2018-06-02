import React, {Component} from 'react';
import {getFromApi} from '../Components/dbQueries'
import Search from '../Components/search/search'
import SearchResult from '../Components/search/searchResult'

/**
 * Searching page by categories or competence
 * @ Simon-Huet
 */
class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            getUrl: {
                "getCoursesByIdCompetence": "http://localhost:3000/api/Cours?filter[include][participants]&filter[where][stat" +
                        "ut]=Pending&filter[where][idCompetence]="
            },
            courses: [],
            traduction: ''
        }
    }
    componentWillMount() {}
    getSearchParams = (params) => {
        // all competence for a categorie
        if (params instanceof Array) {
            let courses = []
            params.map(param => {
                return getFromApi(this.state.getUrl.getCoursesByIdCompetence + param.value.idCompetence).then(data => {
                    if (data.length) {
                        data.map(course => {
                            return getFromApi("http://localhost:3000/api/LangueCompetences?filter[where][idCompetence]=" + course.idCompetence + "&filter[where][idLangue]=1").then(langue => {
                                let getUti = []
                                getUti.push(course.participants.filter(part => {
                                    return part.estOrga
                                }))
                                return getFromApi("http://localhost:3000/api/Utilisateurs/" + getUti[0][0].idUtilisateur).then(orga => {
                                    course["langueCompetence"] = langue[0]
                                    course["organisateur"] = orga

                                    courses.push(course)
                                    courses.sort((a, b) => {
                                        var dateA = new Date(a.Date)
                                        var dateB = new Date(b.Date)
                                        return dateA - dateB
                                    });
                                    return this.setState({courses})
                                })

                            })

                        })
                    }
                })
            })

        } else {
            //All course for One competence
            getFromApi(this.state.getUrl.getCoursesByIdCompetence + params.value.idCompetence).then(data => {
                let courses = []
                Object
                    .keys(data)
                    .map(key => {
                        return getFromApi("http://localhost:3000/api/LangueCompetences?filter[where][idCompetence]=" + params.value.idCompetence + "&filter[where][idLangue]=1").then(course => {
                            let getUti = []
                            getUti.push(data[key].participants.filter(part => {
                                return part.estOrga
                            }))
                            return getFromApi("http://localhost:3000/api/Utilisateurs/" + getUti[0][0].idUtilisateur).then(orga => {
                                data[key].langueCompetence = course[0]
                                data[key].organisateur = orga
                                courses.push(data[key])
                                courses.sort((a, b) => {
                                    var dateA = new Date(a.Date)
                                    var dateB = new Date(b.Date)
                                    return dateA - dateB
                                });
                                return this.setState({courses})
                            })
                        })

                    })
            })
        }
    }
    render() {
        const {courses} = this.state;

        courses.sort((a, b) => {
            return (new Date(a.date) > new Date(b.date)
                ? 1
                : ((new Date(b.date) > new Date(a.date))
                    ? -1
                    : 0))
        });
        return (
            <div className="col s12">
                <h2>Rechercher un cours</h2>
                <div className="row search-bar">
                    <Search getSearchParams={this.getSearchParams}/>
                </div>
                <div className=" row search-result-wrapper">
                    {courses.length > 0 && <SearchResult courses={courses}/>}

                </div>
            </div>
        )
    }
}

export default SearchPage;