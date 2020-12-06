import React from 'react';
import styled from 'styled-components';
import pic from '../assets/images/pic.png';

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const HeaderTitle = styled.section`
  padding: 10em;
  background: lightgray;
  margin-left: 20px;
  margin-right: 20px;
`;

const SideWrapper = styled.div`
  margin: 80px;
`;

const Headerh1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 20px;
  width: 1200px;
`;

const EmployeeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const OneEmployee = styled.div`
  margin-right: 20px;
`;

const Image = styled.div`
  background-color: lightgray;
  width: 200px;
  height: 200px;
`;

const MarginTop = styled.p`
  margin-top: 10px;
`;

const MarginBottom = styled.p`
  margin-bottom: 10px;
`;

const FooterTitle = styled.div`
  padding: 10em;
  background: lightgray;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 380px;
  margin: auto;
  padding: 50px 0 50px 0;
  flex-direction: row;
`;

const FooterText = styled.p`
  font-size: 15px;
  font-weight: 600;
`;

const OfficeDetail = () => (
  <div>
    <HeaderTitle>
      <Title>Kontor</Title>
    </HeaderTitle>
    <SideWrapper>
      <Headerh1>Velkommen til </Headerh1>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus
        neque in volutpat molestie. Etiam a risus id ante hendrerit suscipit
        eget a enim. Fusce ultricies porta suscipit. Maecenas vel quam sit amet
        dui convallis tincidunt vel congue nulla. Integer ut lobortis lectus.
        Maecenas nibh odio, tincidunt vitae magna sed, cursus tempor nunc.
        Aliquam erat volutpat. Cras nec fringilla diam. Mauris magna nisl,
        dictum vel lectus vel, accumsan bibendum ex. Proin eget ornare dolor,
        sed placerat arcu. Phasellus sagittis faucibus odio, nec dictum quam
        auctor in. Sed non pellentesque lectus, vitae ullamcorper risus. Nunc
        urna erat, vehicula sed est eget, viverra pharetra ex.
      </Text>
      <Headerh1>Våre ansatte</Headerh1>
      <EmployeeWrapper>
        <OneEmployee>
          <img name="ProfilePicture" src={pic} alt="ProfilePicture" />
          <MarginTop>Ansatt Ansattnavn</MarginTop>
          <MarginBottom>Stilling</MarginBottom>
        </OneEmployee>
      </EmployeeWrapper>
      <FooterTitle>
        <Title>Kontakt oss på 69 99 00 00</Title>
      </FooterTitle>
      <Footer>
        <FooterText>OrgnNr: 007 007 007</FooterText>
        <FooterText>Ig@Igror.no</FooterText>
        <FooterText>99 00 00 00</FooterText>
      </Footer>
    </SideWrapper>
  </div>
);

export default OfficeDetail;
