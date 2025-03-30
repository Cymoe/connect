import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #1f1f1f;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.2s;
  
  &:hover {
    background-color: #2a2a2a;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    margin-bottom: 10px;
  }
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #e0e0e0;
  
  @media (max-width: 480px) {
    min-width: 24px; /* Prevent shrinking */
  }
`;

const PromptText = styled.p`
  font-size: 14px;
  color: #ddd;
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const PromptCard = ({ icon, text, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Icon>{icon}</Icon>
      <PromptText>{text}</PromptText>
    </Card>
  );
};

export default PromptCard; 