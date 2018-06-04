import React from 'react'
import Message from './Message'

const MessageList = (props) =>{
    return(
            <div className='messages grey lighten-5'>
                  {this.props.messages.length > 0 && 
                      this.props.messages.map((message, i) => {
                          return (
                              <Message
                                  key={i}
                                  message={message}
                              />
                          );
                      })
                    }
              </div>       
    )
}
export default MessageList;