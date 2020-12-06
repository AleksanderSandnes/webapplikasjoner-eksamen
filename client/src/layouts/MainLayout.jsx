import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';

const StyledHeader = styled.header`
  background: #fff;
  box-shadow: 1px 1px 2px #f5f5f5;
  margin-bottom: 60px;
  width: 100%;
`;

const Wrapper = styled.section`
  //padding: 0 20px 0 0;
  margin: 0 auto;
  width: 100%;
`;

const Wrapper2 = styled.section``;

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => (
  <Wrapper2>
    <StyledHeader>
      <Nav />
    </StyledHeader>
    <Wrapper>{children}</Wrapper>
  </Wrapper2>
);

export default MainLayout;
