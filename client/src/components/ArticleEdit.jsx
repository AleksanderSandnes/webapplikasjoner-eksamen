import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
  Footer,
  FooterText,
  Title,
  HeaderTitle,
} from '../styles/themeStyledComponents.js';
import { get, put } from '../utils/articleService';
import { list, create } from '../utils/categoryService';

const ArticleEdit = () => {
  const [error, setError] = useState(null);
  const [article, setArticle] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  const { register, errors, handleSubmit, formState, reset } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const { data } = await get(id);
        setLoading(true);
        reset(data.data);
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
    const fetchData = async () => {
      const { data } = await list();
      setLoading(true);
      reset(data.data);
      if (!data.success) {
        setError(data.error);
      } else {
        setCategories(data.data);
      }
      setLoading(false);
    };
    fetchData();
  }, [setCategories, reset]);

  const onSubmit = async (formData) => {
    console.log(formData);
    const fetchData = async () => {
      const { data } = await put(id, formData);
      if (!data.success) {
        setError(data.message);
      } else {
        setError(null);
        setSuccess(true);
        history.push(`/articles/${id}`);
      }
    };
    fetchData();
  };

  return (
    article && (
      <div>
        <HeaderTitle>{article && <Title>{article.title}</Title>}</HeaderTitle>
        {error && <p>{error}</p>}
        {loading && <div>Loading...</div>}

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="inpName">Tittel</label>
          <StyledInput
            type="text"
            name="title"
            id="inpNavn"
            placeholder="Tittel"
            ref={register({
              required: true,
            })}
          />
          <label htmlFor="inpLeadParagraph">Ingress</label>
          <StyledTextArea
            type="text"
            name="leadParagraph"
            id="inpLeadParagraph"
            placeholder="Ingress"
            ref={register({
              required: true,
            })}
          />
          <label htmlFor="inpLeadParagraph">Tekst</label>
          <StyledTextArea
            type="text"
            name="content"
            id="inpContent"
            placeholder="Tekst"
            ref={register({
              required: true,
            })}
          />
          <label htmlFor="inpCategories">Kategori</label>
          <FlexItems>
            <StyledSelect
              name="categoryId"
              id="inpCategories"
              ref={register({
                required: true,
              })}
            >
              {categories &&
                categories.map((category) => (
                  <option value={category._id} key={category._id}>
                    {category.name}
                  </option>
                ))}
            </StyledSelect>
            <CategoryButton>Ny</CategoryButton>
          </FlexItems>
          <StyledButton type="submit" isLoading={formState.isSubmitting}>
            Oppdater artikkel
          </StyledButton>
          {error && <p>{error.message}</p>}
        </StyledForm>
        <Footer>
          <FooterText>OrgnNr: 007 007 007</FooterText>
          <FooterText>Ig@Igror.no</FooterText>
          <FooterText>99 00 00 00</FooterText>
        </Footer>
      </div>
    )
  );
};

export default ArticleEdit;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
`;

const StyledInput = styled.input`
  margin: 0px 0px 20px 0px;
  background-color: #cccccc;
`;

const StyledTextArea = styled.textarea`
  margin: 0px 0px 20px 0px;
  background-color: #cccccc;
`;

const StyledButton = styled.button`
  text-align: left;
  margin: 0px 0px 20px 0px;
`;

const StyledSelect = styled.select`
  text-align: left;
  margin: 0px 0px 20px 0px;
  border-color: black;
  background-color: #c2c1c1;
  width: 100%;
`;

const FlexItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CategoryButton = styled.button`
  padding: 0px 10px;
`;
