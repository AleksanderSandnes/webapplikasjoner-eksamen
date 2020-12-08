import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import {
  Footer,
  FooterText,
  Title,
  HeaderTitle,
} from '../styles/themeStyledComponents.js';
import { get, remove } from '../utils/articleService';

const ArticleDetails = () => {
  const { isAdmin, isSuperAdmin } = useAuthContext();
  const [error, setError] = useState(null);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  const removeArticle = async (articleId) => {
    const { data } = await remove(articleId);
    console.log(data);
    if (!data.success) setError(data.error);
    else {
      setError(null);
      setArticle(null);
    }
    console.log(article);
    history.push(`/articles`);
  };

  const editArticle = async (articleId) => {
    history.push(`/articles/${articleId}/edit`);
  };

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setLoading(true);
        const { data } = await get(id);
        if (!data.success) {
          setError(data.error);
        } else {
          setArticle(data.data);
        }
        setLoading(false);
      };
      fetchData();
    }
  }, [id]);

  return (
    article && (
      <div>
        <HeaderTitle>
          <Title>{article.title}</Title>
        </HeaderTitle>
        {error && <p>{error}</p>}
        <SideWrapper>
          {loading && <div>Loading...</div>}
          <article>
            <Flexbar>
              <LeftAlign>
                <H3Text>Av {article.author}</H3Text>
              </LeftAlign>
              <RightAlign>
                <H3Text>{article.createdAt}</H3Text>
              </RightAlign>
            </Flexbar>
            <Text>{article.leadParagraph}</Text>
            <H2Text>{article.title}</H2Text>
            <Text> {article.content} </Text>
          </article>
          <CategoryName>{article.categoryId.name}</CategoryName>
          {(isAdmin || isSuperAdmin) && (
            <>
              <DeleteButton onClick={() => removeArticle(article._id)}>
                SLETT
              </DeleteButton>
              <EditButton onClick={() => editArticle(article._id)}>
                REDIGER
              </EditButton>
            </>
          )}
          <Footer>
            <FooterText>OrgnNr: 007 007 007</FooterText>
            <FooterText>Ig@Igror.no</FooterText>
            <FooterText>99 00 00 00</FooterText>
          </Footer>
        </SideWrapper>
      </div>
    )
  );
};

export default ArticleDetails;

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
