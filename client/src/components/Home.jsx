import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const PageWrapper = styled.section``;

const WelcomeBox = styled.section`
  padding: 10em;
  background: lightgray;
  margin-top: -59px;
`;

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

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin-left: 750px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const FooterText = styled.p`
  font-size: 20px;
`;

const Home = () => {
  const history = useHistory();
  const onHandleClick = async (path) => {
    history.push(path);
  };

  return (
    <PageWrapper>
      <WelcomeBox>
        <Title>Velkommen til FG Rørleggerservice AS</Title>
      </WelcomeBox>
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
    </PageWrapper>
  );
};

export default Home;
