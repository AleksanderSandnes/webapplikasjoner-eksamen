import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {
  Footer,
  FooterText,
  Title,
  HeaderTitle,
} from '../styles/themeStyledComponents.js';

const OfficeAndContactWrapper = styled.section`
  margin-top: 40px;
`;

const Offices = styled.section`
  padding: 150px 50px 50px 50px;
  background: lightgray;
  width: 20%;
  float: left;
  margin-right: 40px;
  margin-left: 70px;
  height: 350px;

  &:hover {
    border-color: #2c91bd;
    background: #2c91bd;
  }
`;

const Contact = styled.section`
  padding: 10em;
  background: lightgray;
  float: right;
  width: 70%;
  margin-right: 70px;
  height: 350px;

  &:hover {
    border-color: #2c91bd;
    background: #2c91bd;
  }
`;

const Articles = styled.section`
  padding: 10em;
  background: lightgray;
  margin-top: 425px;
  margin-left: 70px;
  margin-right: 70px;

  &:hover {
    border-color: #2c91bd;
    background: #2c91bd;
  }
`;

const Home = () => {
  const history = useHistory();
  const onHandleClick = async (path) => {
    history.push(path);
  };

  return (
    <section>
      <HeaderTitle>
        <Title>Velkommen til FG Rørleggerservice AS</Title>
      </HeaderTitle>
      <OfficeAndContactWrapper>
        <Offices onClick={() => onHandleClick('/offices')}>
          <Title>Kontorer</Title>
        </Offices>
        <Contact onClick={() => onHandleClick('/contact')}>
          <Title>Kontakt</Title>
        </Contact>
      </OfficeAndContactWrapper>
      <Articles onClick={() => onHandleClick('/articles')}>
        <Title>Se våre fagartikler om oppussing av bad</Title>
      </Articles>
      <Footer>
        <FooterText>OrgnNr: 007 007 007</FooterText>
        <FooterText>Ig@Igror.no</FooterText>
        <FooterText>99 00 00 00</FooterText>
      </Footer>
    </section>
  );
};

export default Home;
