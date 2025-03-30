import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: #1e1e1e;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 16px;
  color: #e0e0e0;
`;

const ExpandButton = styled.button`
  background-color: #2d3250;
  border-radius: 6px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8f96ff;
  font-weight: bold;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 32px;
`;

const NavLink = styled.a`
  font-size: 14px;
  color: #aaa;
  &:hover {
    color: #e0e0e0;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <span>connectX</span>
        <ExpandButton>›</ExpandButton>
      </Logo>
      <Navigation>
        <NavLink href="#">GenAI Guidelines</NavLink>
        <NavLink href="#">Contact Us</NavLink>
        <NavLink href="#">What's New</NavLink>
        <NavLink href="#">Knowledge Base</NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header; 