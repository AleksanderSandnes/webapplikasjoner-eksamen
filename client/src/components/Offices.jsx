import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@chakra-ui/core';
import { list } from '../utils/officeService.js';
import OfficeGrid from './OfficeGrid';
import OfficeList from './OfficeList.jsx';
import ThreeLines from '../assets/images/ThreeLines.png';
import Squares from '../assets/images/Squares.png';

const Locations = ({ setOffice }) => {
  const [locations, setLocations] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isGrid, setisGrid] = useState(true);

  const handleClick = (e) => {
    if (e.target.name === 'Squares') setisGrid(true);
    if (e.target.name === 'Lines') setisGrid(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await list();
      if (!data.success) {
        setError(error);
      } else {
        setLocations(data.data);
        setError(null);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <HeaderTitle>
        <Title>Våre kontorer</Title>
      </HeaderTitle>
      {error && <p>{error}</p>}
      <SideWrapper>
        {loading && <div>Loading...</div>}
        <FilterButton>Filter</FilterButton>
        <div>
          <Button type="button" name="Squares" onClick={handleClick}>
            <img name="Squares" src={Squares} alt="Squares" />
          </Button>
        </div>
        <div>
          <Button type="button" name="Lines" onClick={handleClick}>
            <img name="Lines" src={ThreeLines} alt="Lines" />
          </Button>
        </div>
        {locations &&
          locations.map((location) => (
            <div key={location._id}>
              <TitleCards>
                {location.name} ({location.offices.length} kontorer)
              </TitleCards>
              <FlexContainer>
                {location.offices.map(
                  (office) =>
                    (isGrid && (
                      <OfficeGrid
                        location={location}
                        office={office}
                        key={office._id}
                        setOffice={setOffice}
                      />
                    )) ||
                    (!isGrid && (
                      <OfficeList
                        location={location}
                        office={office}
                        key={office._id}
                        setOffice={setOffice}
                      />
                    ))
                )}
              </FlexContainer>
            </div>
          ))}
        <Footer>
          <FooterText>OrgnNr: 007 007 007</FooterText>
          <FooterText>Ig@Igror.no</FooterText>
          <FooterText>99 00 00 00</FooterText>
        </Footer>
      </SideWrapper>
    </div>
  );
};

Locations.propTypes = {
  setOffice: PropTypes.func,
};

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

const FilterButton = styled.button`
  color: black;
  background-color: lightgray;
  padding: 2rem 4.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  position: relative;
  top: 12rem;
  left: 78rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const TitleCards = styled.h2`
  font-size: 3rem;
  text-align: left;
  font-weight: bold;
  color: black;
  margin: 7rem 0 3rem 0;
`;

// eslint-disable-next-line no-unused-vars
const TitleOffice = styled.h1`
  font-size: 2rem;
  text-align: left;
  color: black;
  font-weight: bold;
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

const SideWrapper = styled.div`
  margin: 80px;
`;

export default Locations;
