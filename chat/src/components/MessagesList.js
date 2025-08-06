// Implements the text field

import React from "react";
import PropTypes from 'prop-types'
import Message from './Message'


const MessagesList = ({ messages, username }) => (
    <section id='messages-list'>
        <ul>
            {messages.map(message => (
                <Message
                    key = {message.id}
                    {...message}
                    username = {username}
                />
            ))}
        </ul>
    </section>
)

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    username: PropTypes.string.isRequired // Add this

}

export default MessagesList