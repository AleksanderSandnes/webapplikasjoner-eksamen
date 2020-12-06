import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
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
  margin-left: 80px;
  margin-right: 80px;
`;

const H3Text = styled.h3`
  font-size: 15px;
  font-weight: bold;
`;

const ArticleDetails = () => (
  <div>
    <HeaderTitle>
      <Title>Tittel</Title>
    </HeaderTitle>
    <SideWrapper>
      <H3Text>Av Forfatternavn</H3Text>
      <H3Text />
    </SideWrapper>
  </div>
);

export default ArticleDetails;
