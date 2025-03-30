import React from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease;
  background-color: ${props => props.active ? '#2d2d2d' : '#1a1a1a'};
  box-shadow: ${props => props.active ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none'};
  color: ${props => props.active ? '#e0e0e0' : '#999'};
  
  &:hover {
    background-color: ${props => props.active ? '#2d2d2d' : '#222'};
  }
`;

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          active={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </TabButton>
      ))}
    </TabsContainer>
  );
};

export default Tabs;
