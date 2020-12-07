import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../context/AuthProvider';
import { list } from '../utils/articleService.js';
import {
  Footer,
  FooterText,
  Title,
  HeaderTitle,
} from '../styles/themeStyledComponents.js';

const SideWrapper = styled.div`
  margin-left: 400px;
  margin-right: 400px;
`;

const H3Text = styled.h3`
  font-size: 15px;
  font-weight: bold;
`;

const CategoryName = styled.h3`
  font-size: 15px;
  font-weight: bold;
  margin: 30px 0 50px 0;
`;

const Flexbar = styled.div`
  display: flex;
  margin-top: 70px;
  margin-bottom: 25px;
`;

const RightAlign = styled.div`
  flex: 0 0 50%;
  display: flex;
  justify-content: flex-end;
`;

const LeftAlign = styled.div`
  flex: 0 0 50%;
  display: flex;
  justify-content: flex-start;
`;

const Text = styled.p`
  font-size: 20px;
`;

const H2Text = styled.h2`
  font-size: 35px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 25px;
`;

const EditButton = styled.button`
  padding: 10px;
  color: white;
  background-color: #ebba34;
  font-weight: bold;
  width: 150px;
  height: 50px;
`;

const DeleteButton = styled.button`
  padding: 10px;
  width: 150px;
  height: 50px;
  color: white;
  font-weight: bold;
  background-color: #eb4934;
  margin-right: 20px;
`;

const ArticleDetails = () => {
  const { isAdmin, isSuperAdmin } = useAuthContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await list();
      if (!data.success) {
        setError(error);
      } else {
        setError(null);
      }
      setLoading(false);
    };
    fetchData();
  }, [error]);

  return (
    <div>
      <HeaderTitle>
        <Title>Tittel</Title>
      </HeaderTitle>
      {error && <p>{error}</p>}
      <SideWrapper>
        {loading && <div>Loading...</div>}
        <Flexbar>
          <LeftAlign>
            <H3Text>Av Forfatternavn</H3Text>
          </LeftAlign>
          <RightAlign>
            <H3Text>20.12.20</H3Text>
          </RightAlign>
        </Flexbar>
        <article>
          <Text>
            Dette er ingressen. Vi pusser opp små og mellomstore bad for
            privatkunder og entreprenører. Vi er opptatt av god kvalitet og
            bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg
            med å planlegge drømmebadet ditt fra A til Å! Med hjertet for faget
            yter vi kvalitet i alle ledd for at du skal være i trygge hender.
          </Text>
        </article>
        <H2Text>Subtittel</H2Text>
        <article>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor
            semper leo et porta. Suspendisse sagittis nunc ipsum, id vestibulum
            tortor cursus non. Vestibulum ac purus ac odio sodales fermentum
            laoreet ut eros. Fusce arcu urna, egestas id tortor a, pretium
            pellentesque erat. Sed diam ex, fringilla nec mauris nec, cursus
            convallis ligula. Maecenas massa nibh, iaculis nec dignissim a,
            sagittis vel felis. Etiam id erat ac turpis pretium volutpat.
            Curabitur felis libero, dictum eu egestas non, tempus ut enim.
            Integer id leo aliquet, pellentesque nisi id, tristique ex. Proin
            nisl mauris, dictum eget porttitor non, ullamcorper non mi. Donec
            tempor libero quis faucibus consequat. Vivamus ex lacus, placerat ut
            nunc vel, tempor finibus nunc. Quisque egestas sit amet eros id
            tempor. Proin at libero vulputate, ultrices lectus vel, congue eros.
            Donec varius nisi quis eros posuere porta.
          </Text>
          <br />
          <Text>
            Nunc tempor faucibus eros, sit amet cursus nunc. Nunc ut elementum
            dui, a pellentesque ipsum. Aliquam in orci accumsan, varius orci
            sed, molestie lacus. Suspendisse potenti. Donec viverra tempus
            fringilla. Pellentesque eget lacus ultrices, dictum purus vel,
            iaculis elit. Phasellus ac dolor non turpis imperdiet interdum.
          </Text>
        </article>
        <H2Text>Subtittel</H2Text>
        <article>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor
            semper leo et porta. Suspendisse sagittis nunc ipsum, id vestibulum
            tortor cursus non. Vestibulum ac purus ac odio sodales fermentum
            laoreet ut eros. Fusce arcu urna, egestas id tortor a, pretium
            pellentesque erat. Sed diam ex, fringilla nec mauris nec, cursus
            convallis ligula. Maecenas massa nibh, iaculis nec dignissim a,
            sagittis vel felis. Etiam id erat ac turpis pretium volutpat.
            Curabitur felis libero, dictum eu egestas non, tempus ut enim.
            Integer id leo aliquet, pellentesque nisi id, tristique ex. Proin
            nisl mauris, dictum eget porttitor non, ullamcorper non mi. Donec
            tempor libero quis faucibus consequat. Vivamus ex lacus, placerat ut
            nunc vel, tempor finibus nunc. Quisque egestas sit amet eros id
            tempor. Proin at libero vulputate, ultrices lectus vel, congue eros.
            Donec varius nisi quis eros posuere porta.
          </Text>
        </article>
        <CategoryName>Kategorinavn</CategoryName>
        {isAdmin && (
          <div>
            <DeleteButton>SLETT</DeleteButton>
            <EditButton>REDIGER</EditButton>
          </div>
        )}
        {isSuperAdmin && (
          <div>
            <DeleteButton>SLETT</DeleteButton>
            <EditButton>REDIGER</EditButton>
          </div>
        )}
        <Footer>
          <FooterText>OrgnNr: 007 007 007</FooterText>
          <FooterText>Ig@Igror.no</FooterText>
          <FooterText>99 00 00 00</FooterText>
        </Footer>
      </SideWrapper>
    </div>
  );
};

export default ArticleDetails;
