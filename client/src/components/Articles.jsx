import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Article from './Article';
import { useAuthContext } from '../context/AuthProvider';
import { list } from '../utils/articleService.js';
import {
  Footer,
  FooterText,
  Title,
  HeaderTitle,
} from '../styles/themeStyledComponents.js';

const ArticlePage = () => {
  const { isAdmin, isSuperAdmin, isLoggedIn } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState(null);
  /* const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(4); */
  const history = useHistory();

  const redirectToDetailView = (id) => {
    history.push(`/articles/${id}`);
  };

  const handleClick = () => {
    history.push(`/newarticle`);
  };

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
  }, [error]);

  /* const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticle = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  ); */

  return (
    <div>
      <HeaderTitle>
        <Title>Fagartikler</Title>
      </HeaderTitle>
      {error && <p>{error}</p>}
      <SideWrapper>
        {loading && <div>Loading...</div>}
        <FlexBoxButtons>
          {(isAdmin || isSuperAdmin) && (
            <ButtonLeft>
              <NewArticleButton onClick={handleClick}>
                NY ARTIKKEL
              </NewArticleButton>
            </ButtonLeft>
          )}
          <ButtonRight>
            <SearchButton>SØK</SearchButton>
            <FilterButton>FILTER</FilterButton>
          </ButtonRight>
        </FlexBoxButtons>
        {articles &&
          articles.map(
            (article) =>
              (isLoggedIn && (
                <MarginTop
                  key={article._id}
                  onClick={() => redirectToDetailView(article._id)}
                >
                  <Article article={article} />
                </MarginTop>
              )) ||
              (!isLoggedIn && !article.isClassified && (
                <MarginTop
                  key={article._id}
                  onClick={() => redirectToDetailView(article._id)}
                >
                  <Article article={article} />
                </MarginTop>
              ))
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

export default ArticlePage;

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

const MarginTop = styled.article`
  margin-top: 50px;
  border: 1px solid white;

  &:hover {
    border: 1px solid #2c91bd;
  }
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

const ButtonLeft = styled.div`
  flex: 0 0 50%;
  display: flex;
  justify-content: flex-start;
`;
