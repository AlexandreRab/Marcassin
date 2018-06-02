import React, { Component } from 'react';
import { getFromApi } from '../dbQueries';
import ReactTags from 'react-tag-autocomplete';

/**
 * Searching module, fetch main categories and competences
 * @Simon-Huet
 */
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getUrl: {
                "getMainCategories": "http://localhost:3000/api/Categories?filter=%7B%22where%22%3A%7B%22idCategorieMe" +
                        "re%22%3A%20null%7D%7D",
                "getAllActivesCompetences": "http://localhost:3000/api/LangueCompetences?filter[where][estActif]=true&filter[inc" +
                        "lude][competence]&filter[where][idLangue]=1",
                "getChildCategories": "http://localhost:3000/api/Categories?filter[where][idCategorieMere]=",
                "getCompetencesWithCategorieId": "http://localhost:3000/api/Competences?filter[include][langueCompetences]&filter[where][estActif]=true&filter[where][idCategorie]=",
                "getCategorieById": "http://localhost:3000/api/Categories?filter[where][idCategorieMere]="
            },
            tags: [],
            suggestions: [],
            oldSuggestions : []
        }
    }

    componentWillMount() {
        // Get categories with no parent categorie
        getFromApi(this.state.getUrl.getMainCategories).then(data => {
            let suggestions = []
            Object
                .keys(data)
                .map(key => {
                    return suggestions.push({
                        id: "cat" + data[key].idCategorie,
                        name: "Catégorie : " + data[key].intitule,
                        value: data[key],
                        isCategorie: true
                    })
                })
            this.setState({suggestions})

        })
        // Get all competences
        getFromApi(this.state.getUrl.getAllActivesCompetences).then(data => {
            let suggestions = [...this.state.suggestions]
            Object
                .keys(data)
                .map(key => {
                    return suggestions.push({
                        id: "comp" + data[key].idCompetence,
                        name: "Competence : " + data[key].traduction,
                        value: data[key],
                        isCategorie: false
                    })
                })
            this.setState({suggestions})
        })
    }

    handleDelete = (i) => {
        
        if (this.state.tags.length-1 === i){
            const tags = this.state.tags.slice(0)
            tags.splice(i, 1)
            
            // get previous suggestions and set as new suggestions
            let suggestions = this.state.oldSuggestions[this.state.oldSuggestions.length-1]
            let oldSuggestions = this.state.oldSuggestions
            oldSuggestions.splice(-1,1)
            this.setState({suggestions})
            this.setState({oldSuggestions})
            this.setState({ tags })
        }
    }

    handleAddition = (tag) => {
        this.setState(state => ({
            tags: [
                ...state.tags,
                tag
            ]
        }));
        let oldSuggestions= [...this.state.oldSuggestions]
        oldSuggestions.push(this.state.suggestions)
        this.setState({oldSuggestions})
        if (tag.isCategorie) {
            // get all child categories
            
            getFromApi(this.state.getUrl.getChildCategories + tag.value.idCategorie).then(data => {
                let suggestions = []
                Object
                    .keys(data)
                    .map(key => {
                        return suggestions.push({
                            id: "cat" + data[key].idCategorie,
                            name: "Catégorie : " + data[key].intitule,
                            value: data[key],
                            isCategorie: true
                        })
                    })
                this.setState({suggestions})
            })
            //get all competences of selected categorie
            getFromApi(this.state.getUrl.getCompetencesWithCategorieId + tag.value.idCategorie).then(data => {
                let suggestions = [...this.state.suggestions]
                Object
                    .keys(data)
                    .map(key => {
                        return suggestions.push({
                            id: "comp" + data[key].idCompetence,
                            name: "Competence : " + data[key].langueCompetences.find(x => x.idLangue === 1).traduction,
                            value: data[key],
                            isCategorie: false
                        })
                    })
                this.setState({suggestions})
            })
        } else {
            this.setState({suggestions: []})
        }

    }

    searchParams = () =>{
        if(this.state.tags[this.state.tags.length-1].isCategorie){
            //return all comp in the selected categorie
            this.props.getSearchParams(this.state.suggestions.filter(tag => { return !tag.isCategorie}))
        }else{
            this.props.getSearchParams(this.state.tags[this.state.tags.length-1])
        }
    }

    render() {
        const {tags, suggestions} = this.state
        
        return (
            <div className="search-bar_input search-bar_services">
                <ReactTags
                    tags={tags}
                    suggestions={suggestions.length > 0
                    ? suggestions
                    : [
                        {
                            id: "noSuggest",
                            name: "Aucune catégorie ou compétence trouvées ",
                            disabled: true
                        }
                    ]}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    placeholder={tags.length
                    ? 'Chercher une sous-catégorie ou une compétence'
                    : 'Chercher une catégorie ou une compétence'}
                    autofocus={false}
                    minQueryLength={0}
                    maxSuggestionsLength={10}/>
                <button
                    className={`btn waves-effect waves-light right blue lighten-1 search-bar_button ${tags.length===0 && "disabled"}`}
                    type="submit" onClick={this.searchParams}>Rechercher
                    <i className="fa fa-search fa-sm right"></i>
                </button>
            </div>

        );
    };
}
export default Search;