import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import { useAuthContext } from '../context/AuthProvider';
import {
  Footer,
  FooterText,
  Title,
  HeaderTitle,
} from '../styles/themeStyledComponents.js';
import { get, remove } from '../utils/articleService';
import { getImage } from '../utils/imageService';

const ArticleDetails = () => {
  const { isAdmin, isSuperAdmin } = useAuthContext();
  const [error, setError] = useState(null);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  const [src, setSrc] = useState(null);

  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

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

  useEffect(() => {
    console.log(article);
    if (article) {
      if (article.hasOwnProperty('image')) {
        console.log(article);
        const fetchData = async () => {
          const { data } = await getImage(article.image._id);
          const img = await data.arrayBuffer().then((buffer) => {
            const base64Flag = 'data:image/jpeg;base64,';
            const imageStr = arrayBufferToBase64(buffer);
            return base64Flag + imageStr;
          });
          setSrc(img);
        };
        fetchData();
      }
    }
  }, [error, article]);

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

  const uploadImage = async (articleId) => {
    history.push(`/uploadImage/${articleId}`);
  };

  return (
    article && (
      <div>
        {article.image && (
          <HeaderTitle
            style={{
              backgroundImage: `url("${src}")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}
          >
            <Title>{article.title}</Title>
          </HeaderTitle>
        )}
        ||
        {!article.image && (
          <HeaderTitle>
            <Title>{article.title}</Title>
          </HeaderTitle>
        )}
        {error && <p>{error}</p>}
        <SideWrapper>
          {loading && <div>Loading...</div>}
          <article>
            <Flexbar>
              <LeftAlign>
                <H3Text>Av {article.author}</H3Text>
              </LeftAlign>
              <RightAlign>
                <FlexTime>
                  <H3Text>
                    Publisert:{' '}
                    <Moment
                      date={article.createdAt}
                      format="DD/MM/YYYY hh:mm"
                    />
                  </H3Text>
                  <H3Text>
                    Redigert:{' '}
                    <Moment
                      date={article.updatedAt}
                      format="DD/MM/YYYY hh:mm"
                    />
                  </H3Text>
                </FlexTime>
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
              <UploadImageButton onClick={() => uploadImage(article._id)}>
                LAST OPP BILDE
              </UploadImageButton>
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

const UploadImageButton = styled.button`
  padding: 10px;
  width: 150px;
  height: 50px;
  color: white;
  font-weight: bold;
  background-color: #2c82df;
  margin: 0 20px 0 20px;
`;

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
  flex-direction: row;
  margin-top: 70px;
  margin-bottom: 25px;
  justify-content: space-between;
`;

const FlexTime = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const RightAlign = styled.div`
  flex: 0 0 50%;
  display: flex;
  height: 50px;
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
