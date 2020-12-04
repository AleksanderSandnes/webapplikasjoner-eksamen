import React from 'react';
import styled from 'styled-components';

const OfficesCard = ({
  t = 'Rørlegger $nummer',
  d = 'Rørleggerveien $nummer<br />69 99 00 00<br />$lokasjon$nummer@epost.no',
}) => (
  <FlexItem>
    <TitleCards title={t} />
    <OfficeText className="descriptionForOfficeCards">{d}</OfficeText>
  </FlexItem>
);

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

const Contact = () => (
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
          <TitleCards>Rørlegger $nummer</TitleCards>
          <OfficeText>
            Rørleggerveien $nummer
            <br />
            69 99 00 00
            <br />
            $lokasjon$nummer@epost.no
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

export default Contact;
