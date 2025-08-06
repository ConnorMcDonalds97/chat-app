// Implements the text field

import React from "react";
import PropTypes from 'prop-types'
import Message from './Message'

// The messages list expects two props, the message and the user who sent it.
const MessagesList = ({ messages, username }) => ( 
    <section id='messages-list'>
        <ul>
            // iterate over the messages
            {messages.map(message => ( 
                // render a message for each message prop in the array
                <Message
                    key = {message.id} // checks for changes, in this case, adding 
                    {...message} // passes all the properties 
                    username = {username} // passes the name
                />
            ))}
        </ul>
    </section>
)

MessagesList.propTypes = {
    messages: PropTypes.arrayOf( // messages must be an array
        PropTypes.shape({
            id: PropTypes.number.isRequired, // id must be a number
            message: PropTypes.string.isRequired, // message and author must be strings
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    username: PropTypes.string.isRequired // username must be a string

}

export default MessagesList