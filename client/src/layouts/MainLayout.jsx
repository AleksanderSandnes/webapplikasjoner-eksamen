import React from 'react';
import { Box } from '@chakra-ui/core';
import styled from 'styled-components';
import Nav from '../components/Nav';

const StyledHeader = styled.header`
  background: #fff;
  box-shadow: 1px 1px 2px #f5f5f5;
  margin-bottom: 60px;
  width: 100%;
`;

const MainLayout = ({ children }) => (
  <Box>
    <StyledHeader>
      <Nav />
    </StyledHeader>
    <Box w="100%" padding="0 20px" margin="0 auto">
      {children}
    </Box>
  </Box>
);

export default MainLayout;
