import React, { useState } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import PromptCard from './PromptCard';
import ChatInput from './ChatInput';

const DashboardContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
`;

const WelcomeHeader = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 40px;
  text-align: center;
  color: #e0e0e0;
`;

const SuggestedPrompts = styled.div`
  margin-top: 30px;
  max-width: 600px;
  margin: 0 auto;
`;

const SuggestedPromptHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const PromptSectionTitle = styled.h3`
  font-size: 14px;
  color: #999;
  font-weight: 500;
`;

const ViewMoreButton = styled.button`
  font-size: 14px;
  color: #999;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    color: #e0e0e0;
  }
`;

const PromptHelpText = styled.p`
  font-size: 14px;
  color: #999;
  text-align: center;
  margin: 20px 0;
`;

const HelpLink = styled.a`
  color: #8f96ff;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    text-decoration: underline;
    color: #a4acff;
  }
`;

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('client');
  
  const tabs = [
    { id: 'client', label: 'Client Capabilities' },
    { id: 'genai', label: 'GenAI' }
  ];
  
  const promptSuggestions = [
    { icon: '💼', text: 'Create a company profile' },
    { icon: '💡', text: 'Explain a concept' },
    { icon: '✉️', text: 'Draft a template email' },
    { icon: '📈', text: 'List top trends in...' }
  ];
  
  const handleSendMessage = (message) => {
    console.log('Sending message:', message);
    // Handle sending the message to the backend
  };
  
  return (
    <DashboardContainer>
      <WelcomeHeader>Welcome to connectX</WelcomeHeader>
      
      <Tabs 
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      <SuggestedPrompts>
        <SuggestedPromptHeader>
          <PromptSectionTitle>SUGGESTED PROMPTS</PromptSectionTitle>
          <ViewMoreButton>View more prompts +</ViewMoreButton>
        </SuggestedPromptHeader>
        
        {promptSuggestions.map((prompt, index) => (
          <PromptCard 
            key={index}
            icon={prompt.icon}
            text={prompt.text}
            onClick={() => console.log('Selected prompt:', prompt.text)}
          />
        ))}
        
        <PromptHelpText>
          Not sure where to start? <HelpLink href="#">How to write a great prompt →</HelpLink>
        </PromptHelpText>
        
        <ChatInput onSend={handleSendMessage} />
      </SuggestedPrompts>
    </DashboardContainer>
  );
};

export default Dashboard; 