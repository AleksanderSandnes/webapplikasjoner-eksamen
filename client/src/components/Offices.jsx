import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { list } from '../utils/officeService.js';
import OfficeGrid from './OfficeGrid';
import OfficeList from './OfficeList';
import ThreeLines from '../assets/images/ThreeLines.png';
import Squares from '../assets/images/Squares.png';
import Dropdown from './Dropdown';
import {
  Footer,
  FooterText,
  Title,
  HeaderTitle,
} from '../styles/themeStyledComponents.js';

const Locations = ({ setOffice }) => {
  const [locations, setLocations] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isGrid, setisGrid] = useState(true);
  const history = useHistory();
  const urllocation = useLocation();

  const handleClick = (e) => {
    if (e.target.name === 'Squares') setisGrid(true);
    if (e.target.name === 'Lines') setisGrid(false);
  };

  const handleSelectChange = (event) => {
    history.push({
      path: '/offices',
      search: `?q=${event.target.value}`,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await list(urllocation.search);
      if (!data.success) {
        setError(error);
      } else {
        console.log(data);
        setLocations(data.data.data);
        setError(null);
      }
      setLoading(false);
    };
    fetchData();
  }, [urllocation, error]);

  return (
    <div>
      <HeaderTitle>
        <Title>Våre kontorer</Title>
      </HeaderTitle>
      {error && <p>{error}</p>}
      <SideWrapper>
        {loading && <div>Loading...</div>}
        <ButtonPlacement>
          <Select onChange={handleSelectChange}>
            <option value="">Alle</option>
            <option value="Fredrikstad">Fredrikstad</option>
            <option value="Sarpsborg">Sarpsborg</option>
            <option value="Moss">Moss</option>
            <option value="Oslo">Oslo</option>
          </Select>
          <ImageButton type="button" onClick={handleClick}>
            <img name="Lines" src={ThreeLines} alt="Lines" />
          </ImageButton>
          <ImageButton type="button" onClick={handleClick}>
            <img name="Squares" src={Squares} alt="Squares" />
          </ImageButton>
        </ButtonPlacement>
        {locations &&
          locations.map((location) => (
            <div key={location._id}>
              <TitleCards>
                {location.name} ({location.offices.length} kontorer)
              </TitleCards>
              <FlexContainer>
                {location.offices.map(
                  (office, index) =>
                    (isGrid && (
                      <OfficeGrid
                        location={location}
                        office={office}
                        key={office._id}
                        setOffice={setOffice}
                        index={index}
                      />
                    )) ||
                    (!isGrid && (
                      <OfficeList
                        location={location}
                        office={office}
                        key={office._id}
                        setOffice={setOffice}
                        index={index}
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

const ImageButton = styled.button`
  width: 35px;
  margin-left: 15px;
`;

const ButtonPlacement = styled.div`
  top: 10.5rem;
  margin-left: 91rem;
  right: 0px;
  height: 200px;
  max-width: 450px;
`;

const TitleCards = styled.h2`
  font-size: 3rem;
  text-align: left;
  font-weight: bold;
  color: black;
  margin: 7rem 0 3rem 0;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100rem;
`;

const SideWrapper = styled.div`
  margin: 0 80px;
`;

const Select = styled.select`
  background-color: lightgray;
  max-width: 200px;
  font-size: 20px;
  padding: 20px 20px 20px 20px;
  font-weight: bold;
  margin-top: 250px;
  margin-left: -100px;
  position: relative;
  top: 3rem;
  right: 5rem;
`;

export default Locations;
