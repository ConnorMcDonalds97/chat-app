import React from "react";
import PropTypes from 'prop-types';

const Message = ({ message, author, username }) => ( // renders the messages
    <li className = {author === username ? "my-message" : "other-message"}>
        <div className="message-author">{author === username ? "me" : author}</div>
        <br/>
        <div>{message}</div>
    </li>
);
// <i>{author === username ? "me" : author}</i>: {message}


Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

export default Message;