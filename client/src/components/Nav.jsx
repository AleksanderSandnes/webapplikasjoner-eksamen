import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  box-shadow: 0 6px 4px -2px rgba(0, 0, 0, 0.2);
`;

const NavMenu = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: right;
  align-self: right;
  //margin: 0;
  //padding: 0;
  list-style: none;
  //padding: 0 20px;
  align-items: center;
`;

const NavMenuItem = styled.li`
  padding: 0 0 0 20px;

  & > a {
    color: #333;
    display: block;
    font-size: 20px;
    font-weight: 700;
    /* line-height: 3.456; */
    text-decoration: none;

    &.active {
      color: #33c1ff;
    }
  }
`;

const StyledButton = styled.button`
  background-color: #2c91bd;
  //border-radius: 3px;
  font-size: 15px;
  font-weight: 730;
  padding: 20px 38px;
  color: white;
`;

const Nav = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/homePage" activeClassName="active">
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
        <NavLink exact to="/contact" activeClassName="active">
          Kontakt
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/login" activeClassName="active">
          <StyledButton>LOGG INN</StyledButton>
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Nav;
