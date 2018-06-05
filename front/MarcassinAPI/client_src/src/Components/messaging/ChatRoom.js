import React , { Component } from 'react'
import MessageForm from './MessageForm'
import MessageList from './MessageList'
import { getFromApi, postInApi } from '../dbQueries'

class ChatRoom extends Component{
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    
    componentWillReceiveProps(nextProps){
        this.getRoomUsers(nextProps)
    }

    getRoomUsers = (nextProps) =>{
        getFromApi(`http://localhost:3000/api/UtilisateurRooms?filter[where][idRoom]=${nextProps.room.idRoom}&filter[include][utilisateur]`)
        .then(data=>{
            let users = []
            data.map(da=>{
               return users.push(da.utilisateur)
            })
            this.setState({users})
        })
    }
    
    handleMessageSubmit= (message)=> {
       console.log(message)
       postInApi(`http://localhost:3000/api/Messages`, message).then(
           data =>{
                this.props.newMessage()
           }
        )
    }
  
    render() {
        const { room , user} = this.props
        const { users  } = this.state
        return (
            <div className="chat-box">
                <div className='chat-box-header Capitalize'>
                    <i className="fas fa-users"></i> Conversation : {room.nom}, 
                      Utilisateurs : 
                {users && users.map((user,i) =>{
                    return ` ${user.nom} ${user.prenom}${users.length-1 !== i ? ',': ''}`
                })}
                </div>
                {user && 
                <MessageList
                    messages={room.messages}
                    user={user}
                />}
                {user &&
                <MessageForm
                    onMessageSubmit={this.handleMessageSubmit}
                    user={user}
                    idRoom={room.idRoom}
                />}
            
            </div>
        );
    }
  }
  export default ChatRoom;
  