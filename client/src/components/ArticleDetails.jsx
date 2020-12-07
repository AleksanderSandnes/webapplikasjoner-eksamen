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
  margin-left: 300px;
  margin-right: 300px;
`;

const H3Text = styled.h3`
  font-size: 15px;
  font-weight: bold;
`;

const Flexbar = styled.div`
  display: flex;
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
    </SideWrapper>
  </div>
);

export default ArticleDetails;
