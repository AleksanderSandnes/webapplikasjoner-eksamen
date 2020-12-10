/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Article from './Article';
import { useAuthContext } from '../context/AuthProvider';
import { list } from '../utils/articleService.js';
import { listCategories } from '../utils/categoryService.js';
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
  const [categories, setCategories] = useState(null);
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

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await listCategories();
      if (!data.success) {
        setError(data.error);
      } else {
        setCategories(data.data);
      }
    };
    fetchData();
  }, [setCategories]);

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
            <div>
              <Select>
                <option value="alle">Alle</option>
                {categories &&
                  categories.map((category) => (
                    <option
                      name={category._id}
                      value={category._id}
                      key={category._id}
                    >
                      {category.name}
                    </option>
                  ))}
              </Select>
            </div>
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

const Select = styled.select`
  color: black;
  background-color: lightgray;
  padding: 10px;
  width: 150px;
  height: 60px;
  font-weight: bold;
  text-align: center;
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
