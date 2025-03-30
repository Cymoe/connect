import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 64px;
  background-color: #1e1e1e;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  border-right: 1px solid #2c2c2c;
`;

const AddButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #5364ff;
  color: #e0e0e0;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    background-color: #6b7afc;
    transform: scale(1.05);
  }
`;

const Sidebar = ({ onAddClick }) => {
  return (
    <SidebarContainer>
      <AddButton onClick={onAddClick}>+</AddButton>
    </SidebarContainer>
  );
};

export default Sidebar; 