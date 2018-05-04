import React , { Component } from 'react';
import axios from 'axios';

class SearchPage extends Component {
    constructor(){
        super();
        this.state={
            courses:[]
        }
    }

    componentWillMount(){
        this.getCourses();
    }

    getCourses(){
        axios.get('http://localhost:3000/api/Cours')
        .then(response =>{
            console.log(response);
        })
    }

    render(){
        return(
            <div>
                <h1>Compétences </h1>
                </div>
        )
    }
}

export default SearchPage;