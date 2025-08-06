import React from "react";
import PropTypes from 'prop-types';

const Message = ({ message, author, username }) => ( // renders the messages
    <li>
        <i>{author === username ? "me" : author}</i>: {message} // put the username if it isn't "me"
    </li>
);

Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

export default Message;