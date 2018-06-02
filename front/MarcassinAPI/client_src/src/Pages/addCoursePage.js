import React, {Component} from 'react'
import SearchSelector from '../Components/searchSelector/SearchSelector'
//import {postInApi} from '../Components/dbQueries'
import TimeSelector from '../Components/timeSelector/TimeSelector'

/**
 * Page for adding a course
 * @Simon Huet
 */
class addCoursePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            postUrl: {
                'postCourse': 'http://localhost'
            },
            selectedDate: ''
        }
    }

    onSubmit = () => {
        /* postInApi(this.state.postUrl.postCourse)*/

    }

    selectHandler = (selectedOption) => {
        this.setState({selectedOption: selectedOption.value});
    }

    timeHandler = (selectedDate) => {
        this.setState({selectedDate})
    }

    render() {
        return (
            <div>
                <br/>
                <h1>Ajouter un cours</h1>
                <form onSubmit ={this.onSubmit}>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <SearchSelector name='comp' handler={this.selectHandler}/>
                        </div>
                        <div className='input-field col s12'>
                            <TimeSelector handler={this.timeHandler}/>
                        </div>
                        <div className="input-field col s12">
                            <textarea name="lieu" ref="lieu" className="materialize-textarea"/>
                            <label htmlFor="lieu">Lieu
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
                        <button className="btn waves-effect waves-light right blue lighten-1" type="submit">Créer
                            <i className="fa fa-paper-plane fa-sm right"></i>
                        </button>
                    </div>

                </form>

            </div>

        )

    }
}

export default addCoursePage;