import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const HeaderTitle = styled.section`
  padding: 10em;
  background: lightgray;
  margin-top: -59px;
`;

const SideWrapper = styled.div`
  margin-left: 400px;
  margin-right: 400px;
`;

const H3Text = styled.h3`
  font-size: 15px;
  font-weight: bold;
`;

const Flexbar = styled.div`
  display: flex;
  margin-top: 70px;
  margin-bottom: 25px;
`;

const RightAlign = styled.div`
  flex: 0 0 50%;
  display: flex;
  justify-content: flex-end;
`;

const LeftAlign = styled.div`
  flex: 0 0 50%;
  display: flex;
  justify-content: flex-start;
`;

const Text = styled.p`
  font-size: 28px;
`;

const H2Text = styled.h2`
  font-size: 35px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 25px;
`;

const ArticleDetails = () => (
  <div>
    <HeaderTitle>
      <Title>Tittel</Title>
    </HeaderTitle>
    <SideWrapper>
      <Flexbar>
        <LeftAlign>
          <H3Text>Av Forfatternavn</H3Text>
        </LeftAlign>
        <RightAlign>
          <H3Text>20.12.20</H3Text>
        </RightAlign>
      </Flexbar>
      <article>
        <Text>
          Dette er ingressen. Vi pusser opp små og mellomstore bad for
          privatkunder og entreprenører. Vi er opptatt av god kvalitet og bruker
          kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å
          planlegge drømmebadet ditt fra A til Å! Med hjertet for faget yter vi
          kvalitet i alle ledd for at du skal være i trygge hender.
        </Text>
      </article>
      <H2Text>Subtittel</H2Text>
    </SideWrapper>
  </div>
);

export default ArticleDetails;
