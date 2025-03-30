import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #121212;
`;

const ContentContainer = styled.div`
  margin-left: 64px;
  min-height: calc(100vh - 70px);
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding-bottom: 60px; /* Space for mobile nav */
  }
`;

const App = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const handleAddNew = () => {
    console.log('Add new item clicked');
    // Handle adding a new item/conversation
  };
  
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <AppContainer>
      <Sidebar onAddClick={handleAddNew} showMobile={showMobileMenu} />
      <ContentContainer>
        <Header onMenuToggle={toggleMobileMenu} />
        <Dashboard />
      </ContentContainer>
    </AppContainer>
  );
};

export default App; 