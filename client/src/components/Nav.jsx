import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../context/AuthProvider';
import { logout } from '../utils/authService';

const Nav = () => {
  const { isLoggedIn, setUser, isAdmin, isSuperAdmin } = useAuthContext();
  const handleLogout = async () => {
    await logout();
    setUser(null);
  };
  return (
    <Wrapper>
      <Header>
        <H1Text>FG</H1Text>
        <NavBar2>
          <UnorderedList>
            <ListItem>
              <NavLink exact to="/homepage" activeClassName="active">
                Hjem
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink exact to="/offices" activeClassName="active">
                Kontorer
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink exact to="/articles" activeClassName="active">
                Fagartikler
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink exact to="/contact" activeClassName="active">
                Kontakt
              </NavLink>
            </ListItem>
            {(isAdmin || isSuperAdmin) && (
              <ListItem>
                <NavLink exact to="/support" activeClassName="active">
                  Support
                </NavLink>
              </ListItem>
            )}
            <ListItem>
              {!isLoggedIn && (
                <NavLink exact to="/login" activeClassName="active">
                  <StyledButton>LOGG INN</StyledButton>
                </NavLink>
              )}
              {isLoggedIn && (
                <StyledButton onClick={handleLogout}>LOGG UT</StyledButton>
              )}
            </ListItem>
          </UnorderedList>
        </NavBar2>
      </Header>
    </Wrapper>
  );
};

const UnorderedList = styled.ul`
  @media (min-width: 200px) and (max-width: 500) {
    padding: 0.1em;
    justify-content: center;
    display: flex;
  }

  @media (min-width: 501px) and (max-width: 800px) {
    margin: 0;
    padding: 0;
  }

  @media (min-width: 801px) {
    margin: 0;
    display: inline;
    padding-right: 0.15em;
  }
`;

const ListItem = styled.li`
  & a {
    font-weight: bold;
  }

  & a.active {
    color: #2c91bd;
  }

  @media (min-width: 200px) and (max-width: 500) {
    background-color: white;
    border-radius: 1em;
    margin-top: 1em;
    padding: 0.6em;
    list-style: none;

    & a {
      padding: 1em;
      text-decoration: none;
    }
  }

  @media (min-width: 501px) and (max-width: 800px) {
    display: inline;

    & a {
      display: inline-block;
      padding: 1em;
      text-decoration: none;
    }
  }

  @media (min-width: 801px) {
    display: inline-block;
    list-style: none;
    padding: 0.36em 0.9375em;

    & a {
      text-decoration: none;
    }
  }
`;

const StyledButton = styled.button`
  background-color: #2c91bd;
  font-size: 15px;
  font-weight: 730;
  padding: 20px 38px;
  color: white;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const H1Text = styled.h1`
  font-weight: bold;

  @media (min-width: 200px) and (max-width: 500px) {
    margin-top: 0;
    padding: 0.25em;
    font-size: 2rem;
    text-align: center;
  }

  @media (min-width: 501px) and (max-width: 800px) {
    margin-top: 0;
    padding: 0.3em;
    font-size: 2rem;
    text-align: center;
  }

  @media (min-width: 801px) {
    display: inline;
    margin: 0 0 0 4rem;
    font-size: 3rem;
  }
`;

const Header = styled.header`
  background-color: white;
  box-shadow: 0 6px 4px -2px rgba(0, 0, 0, 0.2);

  @media (min-width: 801px) {
    padding: 0.35em;
    width: 100%;
    display: inline-block;
  }
`;

const NavBar2 = styled.nav`
  @media (min-width: 200px) and (max-width: 500) {
    font-size: 1.3em;
    margin-right: 2.9em;
    margin-left: 2.9em;
    padding: 0;
    text-align: center;
    text-decoration: none;
  }

  @media (min-width: 501px) and (max-width: 800px) {
    background-color: white;
    font-size: 1.4em;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  @media (min-width: 801px) {
    display: inline-block;
    float: right;
    font-size: 1.5em;
  }
`;

export default Nav;
