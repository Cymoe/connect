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
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 16px;
    bottom: 0;
    top: auto;
    flex-direction: row;
    justify-content: space-around;
    transform: ${props => props.showMobile ? 'translateY(0)' : 'translateY(100%)'};
    border-right: none;
    border-top: 1px solid #2c2c2c;
  }
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

const MobileNavItem = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #2d2d2d;
  color: #999;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  &.active {
    background-color: #3d3d3d;
    color: #e0e0e0;
  }
`;

const Sidebar = ({ onAddClick, showMobile }) => {
  return (
    <SidebarContainer showMobile={showMobile}>
      <AddButton onClick={onAddClick}>+</AddButton>
      
      {/* Mobile Navigation Items */}
      <MobileNavItem className="active">🏠</MobileNavItem>
      <MobileNavItem>📋</MobileNavItem>
      <MobileNavItem>⚙️</MobileNavItem>
    </SidebarContainer>
  );
};

export default Sidebar; 