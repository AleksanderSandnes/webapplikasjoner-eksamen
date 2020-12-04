import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const SideWrapper = styled.section``;

const VelkommenBox = styled.section`
  padding: 10em;
  background: lightgray;
  margin-left: 20px;
`;

const KontorerOgKontaktWrapper = styled.section`
  margin-top: 40px;
`;

const Kontorer = styled.section`
  padding: 150px 50px 50px 50px;
  background: lightgray;
  width: 20%;
  float: left;
  margin-right: 40px;
  margin-left: 70px;
  height: 350px;
`;

const Kontakt = styled.section`
  padding: 10em;
  background: lightgray;
  float: right;
  width: 70%;
  margin-right: 70px;
  height: 350px;
`;

const Fagartikler = styled.section`
  padding: 10em;
  background: lightgray;
  margin-top: 425px;
  margin-left: 70px;
  margin-right: 70px;
`;

const HomePage = () => (
  <SideWrapper>
    <VelkommenBox>
      <Title>Velkommen til FG Rørleggerservice AS</Title>
    </VelkommenBox>
    <KontorerOgKontaktWrapper>
      <Kontorer>
        <Title>Kontorer</Title>
      </Kontorer>
      <Kontakt>
        <Title>Kontakt</Title>
      </Kontakt>
    </KontorerOgKontaktWrapper>
    <Fagartikler>
      <Title>Se våre fagartikler om oppussing av bad</Title>
    </Fagartikler>
  </SideWrapper>
);

export default HomePage;
