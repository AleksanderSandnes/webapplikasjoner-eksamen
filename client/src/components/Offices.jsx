import { number } from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { list } from '../utils/eventService';

const Offices = () => {
  const [offices, setOffices] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await list();
      if (!data.success) {
        setError(error);
      } else {
        setOffices(data.data);
        setError(null);
      }
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <HeaderTitle>
        <Title>Våre kontorer</Title>
      </HeaderTitle>
      {error && <p>{error}</p>}
      <SideWrapper>
        <FlexContainer>
          <FlexItem>
            {loading && <div>Loading...</div>}
            {offices && offices.map((office) => <TitleCards key={office.id} />)}
            <OfficeText>
              <ul>
                {offices.map((office) => (
                  <li key={office.id}>
                    <p>{office.name}</p>
                    <p>{office.address}</p>
                    {number.map((TheNumber) => (
                      <p>{TheNumber.number}</p>
                    ))}
                    <p>{office.email}</p>
                  </li>
                ))}
              </ul>
            </OfficeText>
          </FlexItem>
        </FlexContainer>
        <Footer>
          <FooterText>OrgnNr: 007 007 007</FooterText>
          <FooterText>Ig@Igror.no</FooterText>
          <FooterText>99 00 00 00</FooterText>
        </Footer>
      </SideWrapper>
    </div>
  );
};

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin-left: 200px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const FooterText = styled.p`
  font-size: 18px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const TitleCards = styled.h2`
  font-size: 1rem;
  text-align: left;
  font-weight: bold;
  color: black;
`;

// eslint-disable-next-line no-unused-vars
const TitleOffice = styled.h1`
  font-size: 2rem;
  text-align: left;
  color: black;
  font-weight: bold;
`;

const OfficeText = styled.p`
  font-size: 0.75rem;
  text-align: left;
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

const FlexItem = styled.div`
  background-color: #f1f1f1;
  margin-right: 100px;
  margin-bottom: 30px;
  padding: 20px;
  font-size: 30px;
  border: 1px solid black;
  width: 300px;
`;

const SideWrapper = styled.div`
  margin: 80px;
`;

export default Offices;
