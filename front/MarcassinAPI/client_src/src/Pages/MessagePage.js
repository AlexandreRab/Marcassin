import React, {Component} from 'react';
import ChatRoom from '../Components/messaging/ChatRoom'
import {getFromApi} from '../Components/dbQueries';

/**
 * @Simon-HUET
 */
class MessagePage extends Component {
    constructor() {
        super()

        this.state = {
            connectedUser: {
                idUser: 21
            },
            user: {},
            selectedRoom: {},
            rooms: []
        }
    }

    componentWillMount() {
        /**
       * get connected user
       */
        getFromApi(`http://localhost:3000/api/Utilisateurs/${this.state.connectedUser.idUser}?filter[include][utilisateurRooms]`).then(user => {
            this.setState({user})
            let rooms = []
            /**
           * get rooms for this user
           */
            if (user) {
                Object
                    .keys(user.utilisateurRooms)
                    .map(key => {
                        return getFromApi('http://localhost:3000/api/Rooms/' + user.utilisateurRooms[key].idRoom + "?filter[include][messages]").then(room => {
                            rooms.push(room)
                            this.setState({rooms})
                            this.setState({selectedRoom: this.state.rooms[0]})
                        })
                    })
            }

        })

    }

    changeSelectedRoom = (selectedRoom) => {
        this.setState({selectedRoom})
    }

    render() {
        const { selectedRoom, user, rooms } = this.state
        return (
            <div>
                {rooms.length > 0 && user.length > 0 && <div className="chat">
                    <div className="col s12 m4 l3 left">
                        <ul className='collection'>
                            <li className='collection-header'>
                                <b>
                                    Conversations :</b>
                            </li>
                            {rooms && rooms.map(room => {
                                return (
                                    <li
                                        className={`collection-item ${room === selectedRoom && 'active'}`}
                                        key={room.idRoom}
                                        onClick={() => this.changeSelectedRoom(room)}>
                                        {room.nom}
                                    </li>
                                )
                            })}
                            <li className='collection-item'>
                                <button className='btn blue ligthen-1 waves-effect waves-blue'>
                                    Ajouter une conversation &nbsp;
                                    <i className="far fa-plus-square"></i>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="col s12 m8 19 container right ">
                        {selectedRoom && <ChatRoom room={selectedRoom} user={user}/>}
                    </div>
                </div>}
            </div>

        )
    }
}

export default MessagePage;