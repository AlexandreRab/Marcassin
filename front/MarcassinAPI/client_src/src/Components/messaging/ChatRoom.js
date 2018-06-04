import React , { Component } from 'react'

import MessageForm from './MessageForm'
import MessageList from './MessageList'
import { getFromApi } from '../dbQueries'

class ChatRoom extends Component{
    constructor(props){
        super(props)
        this.state ={
            endpoint: "http://localhost:3000",
            messages: [],
            user :[],
            users: [],
        }
    }

    componentWillReceiveProps(){
        this.getRoomUsers()  
    }

    getRoomUsers = () =>{
        getFromApi(`http://localhost:3000/api/UtilisateurRooms?filter[where][idRoom]=${this.props.room.idRoom}&filter[include][utilisateur]`)
        .then(data=>{
            let users = this.state.users
            console.log(data)
            /*data.map(da=>{
                /*users.push(da.utilisateur)
                console.log(users)
                

            })*/
        })
    }
  
    getInitialState() {
        return {users: [], messages:[], text: ''};
    }
  

  
  
    handleMessageSubmit(message) {
       
    }
  
    render() {
        const { room } = this.props
        //const { users } = this.state

        return (
            <div className="chat-box">
                <div className='chat-box-header'>
                    <i className="fas fa-users"></i> Conversation : {room.nom}, 
                      Utilisateurs :
                {/*users.length >0  && users.map( user =>{
                    return user.nom && user.prenom
                })*/}
                </div>
                {/*room.length > 0 &&
                <MessageList
                    messages={room.messages}
                />*/}
                <MessageForm
                    onMessageSubmit={this.handleMessageSubmit}
                    user={this.props.user}
                />
            
            </div>
        );
    }
  }
  export default ChatRoom;
  