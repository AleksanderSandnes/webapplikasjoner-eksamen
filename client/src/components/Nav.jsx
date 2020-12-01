import { Button } from '@chakra-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../context/AuthProvider';
import { logout } from '../utils/authService';

const StyledNav = styled.nav`
  width: 100%;
`;

const NavMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 0 20px;
  align-items: center;
`;

const NavMenuItem = styled.li`
  padding: 0 20px;

  &:first-child {
    padding-left: 0;
  }

  & > a {
    color: #333;
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 0;
    text-decoration: none;

    &.active {
      color: #007b5f;
      border-bottom: 4px solid #007b5f;
    }
  }
`;

const Nav = () => {
  const { isLoggedIn, isAdmin, setUser } = useAuthContext();
  const handleLogout = async () => {
    await logout();
    setUser(null);
  };
  return (
    <StyledNav>
      <NavMenu>
        <NavMenuItem>
          <NavLink exact to="/" activeClassName="active">
            Events
          </NavLink>
        </NavMenuItem>
        {isLoggedIn && isAdmin && (
          <NavMenuItem>
            <NavLink exact to="/dashboard" activeClassName="active">
              Dashboard
            </NavLink>
          </NavMenuItem>
        )}
        {!isLoggedIn && (
          <NavMenuItem style={{ marginLeft: 'auto' }}>
            <NavLink exact to="/login" activeClassName="active">
              Login
            </NavLink>
          </NavMenuItem>
        )}
        {isLoggedIn && (
          <NavMenuItem style={{ marginLeft: 'auto' }}>
            <Button type="button" onClick={handleLogout}>
              Logout
            </Button>
          </NavMenuItem>
        )}
      </NavMenu>
    </StyledNav>
  );
};

export default Nav;
