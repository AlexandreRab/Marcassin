import React, { Component } from "react";
import { getFromApi } from "../Components/dbQueries";
import { sha256 } from "js-sha256";
import { Redirect } from "react-router"

class ConnectionPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            utilisateur : '',
            motDePasse : '',
        }
    }
    //Si valeur modif fonction excuté
    changeUsername =(e) =>{
        this.setState({utilisateur : e.target.value})
    }

    changePassword =(e) =>{
        this.setState({motDePasse : e.target.value})
    }
    
    
    login=(utilisateur)=>{
        let identifiant = ''
        
        
        getFromApi('http://localhost:3000/api/Utilisateurs')
        .then(data => {
            identifiant = data.filter( ut => {return ut.nom === utilisateur})
            

            if(identifiant.length > 0)
            {
            
            if(identifiant[0].motDePasse === sha256(this.state.motDePasse))
            {
                    console.log("ok");
                    <Redirect from="/Login" to="/"/> 
            }
            }
        })
    }

    render() {
        const { utilisateur }  = this.state
        const { motDePasse } = this.state
      return (
<div>
        <h1>Se Connecter</h1>
    <form onSubmit={this.onSubmit}>
            
            <div className="input-field">
                <input
                    type="text"
                    name="Identifiant"
                    ref="Identifiant"
                    onChange={this.changeUsername}
                    value={this.state.utilisateur}    
                />
                <label htmlFor="name">Identifiant</label>
                {!utilisateur.length > 0 && <div className="red-text accent-4">
                <i className="italique">Ce champ est requis</i></div>}
            </div>
        
            <div className="input-field">
                    <input
                        type="password"
                        name="Mot de passe"
                        ref="Mot de passe"
                        onChange={this.changePassword}
                        value={this.state.motDePasse}
                    />
                    <label htmlFor="name">Mot de Passe</label>
                {!motDePasse.length > 0 && <div className="red-text accent-4">
                <i className="italique">Ce champ est requis</i></div>}
            </div>
              <input 
              value="Se connecter" 
              type="button" 
              onClick={this.login(utilisateur)} 
              className={utilisateur.length>0 && motDePasse.length>0 ? 'btn' : 'btn disabled'}
               />
    </form>
      
</div>
      )
  }
}



export default ConnectionPage;