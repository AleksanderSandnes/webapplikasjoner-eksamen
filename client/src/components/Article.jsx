import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import pic from '../assets/images/pic.png';
import { getImage } from '../utils/imageService';

const Article = ({ article }) => {
  const [error, setError] = useState(null);
  const [src, setSrc] = useState(null);

  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  useEffect(() => {
    if (article.image) {
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
  }, [error, article]);
  return (
    <div>
      <Flexrow>
        <Image>
          {(article.image && (
            <Img name="midlertidig" src={src} alt="midlertidig" />
          )) || <Img name="midlertidig" src={pic} alt="midlertidig" />}
        </Image>
        <RightSide>
          <ArticleFlexRow>
            <ArticleLeft>
              <ArticleHeader>{article.title}</ArticleHeader>
            </ArticleLeft>
            <CategoryName>{article.categoryId.name}</CategoryName>
          </ArticleFlexRow>
          <ArticleText>
            {article.leadParagraph.substring(0, 150)}...
          </ArticleText>
        </RightSide>
      </Flexrow>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object,
};

export default Article;

const Img = styled.img`
  vertical-align: top;
  max-width: 500px;
  height: 200px;
  margin-top: -50px;
`;

const Image = styled.div`
  margin-top: 50px;
  margin-bottom: -30px;
  padding-right: 20px;
  padding-bottom: 20px;
  text-align: right;
`;

const Flexrow = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
`;

const RightSide = styled.div`
  margin: auto 0;
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

const ArticleLeft = styled.div`
  flex: 0 0 89%;
  display: flex;
  justify-content: flex-start;
`;
