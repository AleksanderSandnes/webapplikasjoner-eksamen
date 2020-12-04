import React from 'react';
import styled from 'styled-components';

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
  margin-left: 20px;
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
`;

const Contact = styled.section`
  padding: 10em;
  background: lightgray;
  float: right;
  width: 70%;
  margin-right: 70px;
  height: 350px;
`;

const Articles = styled.section`
  padding: 10em;
  background: lightgray;
  margin-top: 425px;
  margin-left: 70px;
  margin-right: 70px;
`;

const HomePage = () => (
  <PageWrapper>
    <WelcomeBox>
      <Title>Velkommen til FG Rørleggerservice AS</Title>
    </WelcomeBox>
    <OfficeAndContactWrapper>
      <Offices>
        <Title>Kontorer</Title>
      </Offices>
      <Contact>
        <Title>Kontakt</Title>
      </Contact>
    </OfficeAndContactWrapper>
    <Articles>
      <Title>Se våre fagartikler om oppussing av bad</Title>
    </Articles>
  </PageWrapper>
);

export default HomePage;
