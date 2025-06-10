import React from 'react';
import PropTypes from 'prop-types';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
);
Messages.propTypes = {
  room: PropTypes.string.isRequired,
};
export default Messages;