import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const FlexItem = styled.div`
  background-color: #f1f1f1;
  margin-right: 50px;
  margin-bottom: 30px;
  padding: 15px;
  font-size: 30px;
  border: 1px solid black;
  width: 350px;

  &:hover {
    border-color: #2c91bd;
    background: #2c91bd;
    cursor: pointer;
  }
`;

const OfficeGrid = ({ office, location, setOffice, index }) => {
  const history = useHistory();
  const redirectToDetailView = () => {
    setOffice(office);
    history.push(`/offices/${location.name.toLowerCase()}/${index + 1}`);
  };
  return (
    <FlexItem key={office.name} onClick={() => redirectToDetailView()}>
      <p>{office.name}</p>
      <p>{office.address}</p>
      <p>{location.number}</p>
      <p>{office.email}</p>
    </FlexItem>
  );
};

OfficeGrid.propTypes = {
  office: PropTypes.object,
  location: PropTypes.object,
  setOffice: PropTypes.func,
  index: PropTypes.number,
};

export default OfficeGrid;
