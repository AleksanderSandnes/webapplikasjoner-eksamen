import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const HeaderTitle = styled.section`
  padding: 10em;
  background: lightgray;
  margin-left: 20px;
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

const ArticlesWrapper = styled.div``;

const Article = styled.div``;

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

const ArticleRight = styled.div``;

const ArticleLeft = styled.div`
  flex: 0 0 50%;
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
  max-width: 500px;
  margin-left: 200px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const FooterText = styled.p`
  font-size: 18px;
`;

const ArticlePage = () => (
  <div>
    <HeaderTitle>
      <Title>Fagartikler</Title>
    </HeaderTitle>
    <SideWrapper>
      <FlexBoxButtons>
        <ButtonLeft>
          <NewArticleButton>Ny Artikkel</NewArticleButton>
        </ButtonLeft>
        <ButtonRight>
          <SearchButton>Søk</SearchButton>
          <FilterButton>Filter</FilterButton>
        </ButtonRight>
      </FlexBoxButtons>
      <ArticlesWrapper>
        <Article>
          <ArticleFlexRow>
            <ArticleLeft>
              <ArticleHeader>ArtikkelTittel</ArticleHeader>
            </ArticleLeft>
            <ArticleRight>
              <CategoryName>Kategorinavn</CategoryName>
            </ArticleRight>
          </ArticleFlexRow>
          <ArticleText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            tempor orci nec felis egestas porttitor. Aliquam ornare mauris ac
            commodo feugiat. Quisque auctor sagittis posuere. Nunc hendrerit
            mattis ligula, vitae viverra elit auctor id. Mauris ut pulvinar
            erat. Proin malesuada velit at felis sodales, vitae sodales nisl
            consequat. Cras vel dictum nisi. In sagittis turpis nec urna
            aliquam, sed ultricies odio ultrices. Nullam sodales nec metus in
            molestie. Pellentesque est ex, imperdiet vitae elementum eu, commodo
            in arcu. Suspendisse finibus volutpat ligula, ut vulputate augue
            mattis non. Nulla facilisi. Cras quis massa id tellus consectetur
            tempus eget sit amet libero.
          </ArticleText>
        </Article>
      </ArticlesWrapper>
      <Footer>
        <FooterText>OrgnNr: 007 007 007</FooterText>
        <FooterText>Ig@Igror.no</FooterText>
        <FooterText>99 00 00 00</FooterText>
      </Footer>
    </SideWrapper>
  </div>
);

export default ArticlePage;
