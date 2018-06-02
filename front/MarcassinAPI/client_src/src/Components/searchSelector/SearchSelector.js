import React, {Component} from 'react';
import { getFromApi } from '../dbQueries';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

/**
 * Search a competence in active competence list
 * @Simon HUET
 */
class SearchSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getUrl: {
                "getAllCompetences": "http://localhost:3000/api/LangueCompetences?filter=%7B%20%22include%22%3A%5B%7B%" +
                        "22competence%22%3A%20%22langueCompetences%22%7D%2C%7B%22langue%22%3A%22langueCom" +
                        "petences%22%7D%5D%2C%20%22where%22%3A%20%7B%22idLangue%22%3A%201%7D%7D"
            },
            selectedOption: '',
            competences: []
        }
    }

    componentWillMount() {
        // get all competences with langueComp & langue
        getFromApi(this.state.getUrl.getAllCompetences).then(data => {
            let value = []
            Object.keys(data).map(key => {
                   return value.push({value: data[key], label: data[key].traduction})
                })
            this.setState({competences: value})
        })

    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        this.props.handler(selectedOption);
    }

    render() {
        const {selectedOption, competences} = this.state
        
        return (
            <div className='input-field '>
                <div>
                    <label htmlFor="comp" className="add-course_search_label">
                        Chercher une compétence</label>
                </div>
                <div>
                    <Select
                        className="add-course_Select"
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={competences}
                        placeholder={""}
                        name="comp"
                        />
                </div>

            </div>

        );
    };
}
export default SearchSelector;