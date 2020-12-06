import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const FlexItem = styled.div`
  margin-right: 50px;
  margin-bottom: 30px;
  padding: 15px;
  font-size: 20px;
  width: auto;
`;

const Span = styled.span`
  margin-right: 50px;
`;

const OfficeList = ({ office, location, setOffice }) => {
  const history = useHistory();
  const redirectToDetailView = () => {
    setOffice(office);
    history.push(`/offices/${office.name}`);
  };
  return (
    <FlexItem key={office.name} onClick={() => redirectToDetailView()}>
      <Span>{office.name}</Span>
      <Span>{office.address}</Span>
      <Span>{location.number}</Span>
      <Span>{office.email}</Span>
    </FlexItem>
  );
};

OfficeList.propTypes = {
  office: PropTypes.object,
  location: PropTypes.object,
  setOffice: PropTypes.func,
};

export default OfficeList;
