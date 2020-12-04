import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const TitleCards = styled.h2`
  font-size: 1rem;
  text-align: left;
  font-weight: bold;
  color: black;
`;

const TitleOffice = styled.h1`
  font-size: 2rem;
  text-align: left;
  color: black;
  font-weight: bold;
`;

const OfficeText = styled.p`
  font-size: 0.75rem;
  text-align: left;
`;

const HeaderTitle = styled.section`
  padding: 10em;
  background: lightgray;
  margin-left: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const FlexItem = styled.div`
  background-color: #f1f1f1;
  margin-right: 100px;
  margin-bottom: 30px;
  padding: 20px;
  font-size: 30px;
  border: 1px solid black;
  width: 300px;
`;

const SideWrapper = styled.div`
  margin: 80px;
`;

const OfficePage = () => (
  <div>
    <HeaderTitle>
      <Title>Våre kontorer</Title>
    </HeaderTitle>
    <SideWrapper>
      <div>
        <TitleOffice>Fredrikstad (8 kontorer)</TitleOffice>
      </div>
      <FlexContainer>
        <FlexItem>
          {Offices.map((data) => (
            <TitleCards key={data.id}>{data.OfficeHeadline}</TitleCards>
          ))}
          <OfficeText>
            <ul>
              {Offices.map((data) => (
                <li key={data.id}>
                  <p>{data.OfficeAddress}</p>
                  <p>{data.OfficePhoneNumber}</p>
                  <p>{data.OfficeEmail}</p>
                </li>
              ))}
            </ul>
          </OfficeText>
        </FlexItem>
        <FlexItem>Test</FlexItem>
        <FlexItem>Test</FlexItem>
        <FlexItem>Test</FlexItem>
        <FlexItem>Test</FlexItem>
        <FlexItem>Test</FlexItem>
        <FlexItem>Test</FlexItem>
        <FlexItem>Test</FlexItem>
      </FlexContainer>
    </SideWrapper>
  </div>
);

export default OfficePage;
