import React from 'react';
import styled from 'styled-components';

const FlexLocation = styled.div`
  background-color: #f1f1f1;
  margin-right: 100px;
  margin-bottom: 30px;
  padding: 20px;
  font-size: 30px;
  border: 1px solid black;
  width: 300px;
`;
const LocationGrid = ({ location }) => (
  <FlexItem>
    <p>{location.name}</p>
  </FlexItem>
);

export default LocationGrid;
