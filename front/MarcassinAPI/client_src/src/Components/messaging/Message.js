import React from 'react'

const Message = (props) =>{
    return(
        <div className="message">
            <strong>{this.props.message.utilisateur.nom && this.props.message.utilisateur.prenom} :</strong> 
            <span>{this.props.message.contenu}</span>        
        </div>
    )
}
export default Message;