import React from 'react'
import moment from 'moment'
const Message = (props) =>{
    return(
        <li className={`${props.user.idUtilisateur === props.message.idUtilisateur ?'left':'right'}`}>
            <span>{props.message.contenu}</span> 
            <strong 
                className='message-header Capitalize'>
                {moment(props.message.dateAjout).format('DD/MM/YYYY HH:mm')} {props.message.utilisateur.prenom} 
            </strong> 
        </li>
    )
}
export default Message;