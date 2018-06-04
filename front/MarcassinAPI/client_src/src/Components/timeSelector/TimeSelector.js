import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'
require('moment/locale/fr');


/**
 * date picker
 * @Simon-HUET
 */
 class TimeSelector extends Component {
        constructor(props) {
            super(props);
            this.state = {
                selectedDate: moment().startOf('Day'),
                postUrl:{'postCourse': 'http://localhost'}
            }
        }
        
    handleChange = (selectedDate) => {
        this.setState({selectedDate})
        // get the good format for database datetime
        this.props.handler(selectedDate.toISOString())
    }
    render(){
    return (
        <div >
        <label htmlFor="date" className={'left add-course_Date_label'}>Date  </label>
        <br/>
        <br/>
        <DatePicker
            selected={this.state.selectedDate}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="LLL"
            timeCaption="Heure"
            minDate={moment()}
            className='add-course_Date'
            name='date'
            ref='date'
        />
        
        </div>
    )
    }
}

export default TimeSelector;