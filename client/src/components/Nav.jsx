import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  box-shadow: 0 6px 4px -2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
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

  @media only screen and (max-width: 800px) {
  }
`;

const NavMenuItem = styled.li`
  padding: 0 0 0 20px;

  & > a {
    color: #333;
    display: block;
    font-size: 20px;
    font-weight: 700;
    line-height: 3.456;
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
  font-weight: 750;
  padding: 8px 38px;
  color: white;

  @media only screen and (max-width: 500px) {
  }
`;

const Nav = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/HomePage" activeClassName="active">
          Hjem
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/Offices" activeClassName="active">
          Kontorer
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/Articles" activeClassName="active">
          Fagartikler
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/Contact" activeClassName="active">
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
