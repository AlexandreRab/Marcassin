import React from 'react'
import Message from './Message'

const MessageList = (props) =>{
    return(
            <div className='messages grey lighten-5'>
                <ul>
                  {props.messages && props.messages.length > 0 && 
                      props.messages.map((message, i) => {
                          return (
                              <Message
                                  key={i}
                                  message={message}
                                  user={props.user}
                              />
                          );
                      })
                    }
                </ul>
              </div>       
    )
}
export default MessageList;