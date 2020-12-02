import { Button } from '@chakra-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

const Nav = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/" activeClassName="active">
          Hjem
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/offices" activeClassName="active">
          Kontorer
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/articles" activeClassName="active">
          Fagartikler
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/kontakt" activeClassName="active">
          Kontakt
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <Button type="button">Logg inn</Button>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Nav;
