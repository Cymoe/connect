import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  margin-top: 20px;
  
  @media (max-width: 480px) {
    margin-top: 16px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  padding-right: 50px;
  border-radius: 30px;
  border: 1px solid #333;
  font-size: 16px;
  outline: none;
  background-color: #1a1a1a;
  color: #e0e0e0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  
  &:focus {
    border-color: #6b7afc;
    box-shadow: 0 0 0 2px rgba(107, 122, 252, 0.2);
  }
  
  &::placeholder {
    color: #777;
  }
  
  @media (max-width: 480px) {
    padding: 12px 45px 12px 16px;
    font-size: 14px;
  }
`;

const SendButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #2a2a2a;
  color: #bbb;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    background-color: #6b7afc;
    color: white;
  }
  
  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    right: 8px;
  }
`;

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');
  
  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };
  
  return (
    <InputContainer>
      <StyledInput
        type="text"
        placeholder="Ask me anything"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <SendButton onClick={handleSend}>→</SendButton>
    </InputContainer>
  );
};

export default ChatInput; 