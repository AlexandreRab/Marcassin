import React, {Component} from 'react'
import SearchSelector from '../Components/searchSelector/SearchSelector'
import moment from 'moment'
import TimeSelector from '../Components/timeSelector/TimeSelector'
import { postInApi } from '../Components/dbQueries';

/**
 * Page for adding a course
 * @Simon Huet
 */
class addCoursePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: {},
            postUrl: {
                'postCourse': 'http://localhost:3000/api/Cours',
                'postParticipant' : 'http://localhost:3000/api/Participants'
            },
            selectedDate: moment().startOf('day').toISOString(),
            connectedUser: {idUtilisateur : 21 , estIntervenant: false} // when a user is logged in (user is spread in whole app)
        }
    }
    
    addNewCourse =(newCourse)=>{
    
        postInApi(this.state.postUrl.postCourse , newCourse)
        .then(course =>{
            /** inserted course
             * Adding orga in participant table
             */
            const newParticipant = {
                idUtilisateur: this.state.connectedUser.idUtilisateur,
                idCours: course.idCours,
                estOrga: true
                }
                /**
                 * Post orga in participant table
                 */
                postInApi(this.state.postUrl.postParticipant , newParticipant).then(response =>{
                    this.props.history.push('/')
                }
                )    
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const newCourse = {
            idCompetence: this.state.selectedOption.idCompetence,
            lieu: this.refs.lieu.value,
            date: this.state.selectedDate,
            statut: "Pending",
            description: this.refs.desc.value
        }
        this.addNewCourse(newCourse)

    }

    /**
     * get selected competence in child component
     */
    selectHandler = (selectedOption) => {
        this.setState({selectedOption: selectedOption.value});
    }

    /**
     * get selected date in child component
     */
    timeHandler = (selectedDate) => {
        this.setState({selectedDate})
    }

    render() {
        return (
            <div className="container">
                <br/>
                <h1>Créer un cours</h1>
                {!this.state.connectedUser.estIntervenant ?
                    (<form onSubmit ={this.onSubmit}>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <SearchSelector name='comp' handler={this.selectHandler}/>
                        </div>
                        <div className='input-field col s12'>
                            <TimeSelector handler={this.timeHandler}/>
                        </div>
                        <div className="input-field col s12">
                            <textarea name="lieu" ref="lieu" className="materialize-textarea" required/>
                            <label htmlFor="lieu"> Adresse du lieu
                            </label>

                        </div>
                        <div className="input-field col s12">
                            <textarea
                                name="desc"
                                ref="desc"
                                className="materialize-textarea add-course-description"/>
                            <label htmlFor="desc">Description</label>

                        </div>
                        <br/>
                        <button
                            className={`btn waves-effect waves-light right blue lighten-1 ${this.state.selectedOption
                            ? ''
                            : 'disabled'}`}
                            type="submit">Créer
                            <i className="fa fa-paper-plane fa-sm right"></i>
                        </button>
                    </div>

                </form>): (
                  <div>
                      <blockquote className ="centered">
                      Vous êtes intervenant , vous ne pouvez pas créer de cours
                      </blockquote>
                  </div>
                )}
            </div>

        )

    }
}

export default addCoursePage;