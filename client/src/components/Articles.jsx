import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../context/AuthProvider';
import { list } from '../utils/articleService.js';

const ArticlePage = () => {
  const { isAdmin, isSuperAdmin } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await list();
      if (!data.success) {
        setError(error);
      } else {
        setArticles(data.data);
        setError(null);
      }
      setLoading(false);
    };
    fetchData();
    
  }, []);

  return (
    <div>
      <HeaderTitle>
        <Title>Fagartikler</Title>
      </HeaderTitle>
      {error && <p>{error}</p>}
      <SideWrapper>
        {loading && <div>Loading...</div>}
        <FlexBoxButtons>
          {isAdmin && (
            <ButtonLeft>
              <NewArticleButton>Ny Artikkel</NewArticleButton>
            </ButtonLeft>
          )}
          {isSuperAdmin && (
            <ButtonLeft>
              <NewArticleButton>Ny Artikkel</NewArticleButton>
            </ButtonLeft>
          )}
          <ButtonRight>
            <SearchButton>Søk</SearchButton>
            <FilterButton>Filter</FilterButton>
          </ButtonRight>
        </FlexBoxButtons>
        <ArticlesWrapper>
          {console.log(articles)};
          {articles &&
            articles.map((article) => (
              <Article key={article._id}>
                <ArticleFlexRow>
                  <ArticleLeft>
                    <ArticleHeader>{article.title}</ArticleHeader>
                  </ArticleLeft>
                  <ArticleRight>
                    <CategoryName>{article.categoryId.name}</CategoryName>
                  </ArticleRight>
                </ArticleFlexRow>
                <ArticleText>{article.content}</ArticleText>
              </Article>
            ))}
        </ArticlesWrapper>
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
import pic from '../assets/images/pic.png';

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const HeaderTitle = styled.section`
  padding: 10em;
  background: lightgray;
  margin-top: -59px;
`;

const NewArticleButton = styled.button`
  background-color: #2c91bd;
  color: white;
  padding: 10px;
  font-weight: bold;
  width: 150px;
  text-align: center;
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

const ArticleHeader = styled.h1`
  font-size: 35px;
  font-weight: bold;
  padding-bottom: 10px;
  padding-right: 10px;
`;

const ArticleFlexRow = styled.div`
  display: flex;
`;

const CategoryName = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const ArticleText = styled.div`
  font-size: 15px;
`;

const ArticleRight = styled.div`
  justify-content: flex-end;
`;

const ArticleLeft = styled.div`
  flex: 0 0 83%;
  display: flex;
  justify-content: flex-start;
`;

const ButtonRight = styled.div`
  flex: 0 0 50%;
  display: flex;
  justify-content: flex-end;
`;

const ButtonLeft = styled.div`
  flex: 0 0 50%;
  display: flex;
  justify-content: flex-start;
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

const MarginTop = styled.div`
  margin-top: 50px;
`;

const Image = styled.div`
  margin-top: 10px;
  padding-right: 20px;
  padding-bottom: 20px;
  float: left;
  width: 190px;
`;
<<<<<<< HEAD
=======

const ArticlePage = () => {
  const { isAdmin, isSuperAdmin } = useAuthContext();

  return (
    <div>
      <HeaderTitle>
        <Title>Fagartikler</Title>
      </HeaderTitle>
      <SideWrapper>
        <FlexBoxButtons>
          {isAdmin && (
            <ButtonLeft>
              <NewArticleButton>Ny Artikkel</NewArticleButton>
            </ButtonLeft>
          )}
          {isSuperAdmin && (
            <ButtonLeft>
              <NewArticleButton>Ny Artikkel</NewArticleButton>
            </ButtonLeft>
          )}
          <ButtonRight>
            <SearchButton>Søk</SearchButton>
            <FilterButton>Filter</FilterButton>
          </ButtonRight>
        </FlexBoxButtons>
        <MarginTop>
          <Image>
            <img name="midlertidig" src={pic} alt="midlertidig" />
          </Image>
          <ArticleFlexRow>
            <ArticleLeft>
              <ArticleHeader>ArtikkelTittel</ArticleHeader>
            </ArticleLeft>
            <ArticleRight>
              <CategoryName>Kategorinavn</CategoryName>
            </ArticleRight>
          </ArticleFlexRow>
          <ArticleText>
            Vi pusser opp små og mellomstore bad for privatkunder og
            entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste
            rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge
            drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet
            i alle ledd for at du skal være i trygge hender.
          </ArticleText>
        </MarginTop>
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
>>>>>>> 96e38cdbe0780fe1ce93b6940a95304becabf00e
