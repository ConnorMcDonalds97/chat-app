import React from "react";
import PropTypes from 'prop-types';

const Message = ({ message, author, username }) => (
    <li>
        <i>{author === username ? "me" : author}</i>: {message}
    </li>
);

Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired // Add this
};

export default Message;