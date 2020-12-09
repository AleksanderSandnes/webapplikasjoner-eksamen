import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import { list } from '../utils/supportEmailService.js';
import {
  Footer,
  FooterText,
  Title,
  HeaderTitle,
} from '../styles/themeStyledComponents.js';

const ArticlePage = () => {
  const { isAdmin, isSuperAdmin } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emails, setEmails] = useState(null);
  const history = useHistory();

  const redirectToDetailView = (id) => {
    history.push(`/emails/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await list();
      console.log(data);
      if (!data.success) {
        setError(error);
      } else {
        setEmails(data.data);
        setError(null);
      }
      setLoading(false);
    };
    fetchData();
  }, [error]);

  return (
    <div>
      <HeaderTitle>
        <Title>Support</Title>
      </HeaderTitle>
      {error && <p>{error}</p>}
      <SideWrapper>
        {loading && <div>Loading...</div>}
        <FlexBoxButtons>
          <ButtonRight>
            <SearchButton>SØK</SearchButton>
            <FilterButton>FILTER</FilterButton>
          </ButtonRight>
        </FlexBoxButtons>
        {emails &&
          emails.map((email) => (
            <Flexrow>
              <p>Fra: {email.email}</p>
              <p>Navn: {email.name}</p>
              <p>Emne: {email.subject}</p>
              <p>Innhold: {email.content}</p>
            </Flexrow>
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

export default ArticlePage;

const Flexrow = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
`;

const SearchButton = styled.button`
  color: black;
  background-color: lightgray;
  padding: 10px;
  margin-right: 20px;
  width: 150px;
  font-weight: bold;
  text-align: center;
`;

const FilterButton = styled.button`
  color: black;
  background-color: lightgray;
  padding: 10px;
  width: 150px;
  font-weight: bold;
  text-align: center;
`;

const FlexBoxButtons = styled.div`
  display: flex;
  height: 60px;
  margin-bottom: 40px;
`;

const SideWrapper = styled.div`
  margin-top: 40px;
  margin-left: 500px;
  margin-right: 500px;
`;

const ButtonRight = styled.div`
  flex: 0 0 50%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 400px;
  padding: 10px;
  font-weight: bold;
  width: 300px;
  height: 80px;
  text-align: center;
`;
