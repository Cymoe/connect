import React from 'react';
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
`;

const App = () => {
  const handleAddNew = () => {
    console.log('Add new item clicked');
    // Handle adding a new item/conversation
  };

  return (
    <AppContainer>
      <Sidebar onAddClick={handleAddNew} />
      <ContentContainer>
        <Header />
        <Dashboard />
      </ContentContainer>
    </AppContainer>
  );
};

export default App; 