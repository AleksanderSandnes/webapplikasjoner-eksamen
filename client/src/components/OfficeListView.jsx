import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { list } from '../utils/officeService.js';
import OfficeList from './OfficeList.jsx';

// eslint-disable-next-line react/prop-types
const LocationsListView = ({ setOffice }) => {
  const [locations, setLocations] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
        {locations &&
          locations.map((location) => (
            <div key={location._id}>
              <TitleCards>
                {location.name} ({location.offices.length} kontorer)
              </TitleCards>
              <FlexContainer>
                {location.offices.map((office) => (
                  <OfficeList
                    location={location}
                    office={office}
                    key={office._id}
                    setOffice={setOffice}
                  />
                ))}
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

const HeaderTitle = styled.section`
  padding: 10em;
  background: lightgray;
  margin-left: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const SideWrapper = styled.div`
  margin: 80px;
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

const TitleCards = styled.h2`
  font-size: 3rem;
  text-align: left;
  font-weight: bold;
  color: black;
  margin: 7rem 0 3rem 0;
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

const FlexContainer = styled.div`
  display: inline-block;
`;

export default LocationsListView;
