import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlexItem = styled.div`
  background-color: #f1f1f1;
  margin-right: 50px;
  margin-bottom: 30px;
  padding: 15px;
  font-size: 30px;
  border: 1px solid black;
  width: 350px;
`;

const OfficeGrid = ({ office, location }) => (
  <FlexItem key={office.name}>
    <p>{office.name}</p>
    <p>{office.address}</p>
    <p>{location.number}</p>
    <p>{office.email}</p>
  </FlexItem>
);

OfficeGrid.propTypes = {
  office: PropTypes.object,
  location: PropTypes.object,
};

export default OfficeGrid;
