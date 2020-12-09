import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import pic from '../assets/images/pic.png';

const Article = ({ article }) => (
  <div>
    <Flexrow>
      {console.log(article)}
      <Image>
        <Img name="midlertidig" src={pic} alt="midlertidig" />
      </Image>
      <RightSide>
        <ArticleFlexRow>
          <ArticleLeft>
            <ArticleHeader>{article.title}</ArticleHeader>
          </ArticleLeft>
          <CategoryName>{article.categoryId.name}</CategoryName>
        </ArticleFlexRow>
        <ArticleText>{article.leadParagraph.substring(0, 150)}...</ArticleText>
      </RightSide>
    </Flexrow>
  </div>
);

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
