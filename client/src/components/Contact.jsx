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
  margin-left: 20px;
`;

const ContactPage = () => (
  <HeaderTitle>
    <Title>Kontakt oss</Title>
  </HeaderTitle>
);

export default ContactPage;
