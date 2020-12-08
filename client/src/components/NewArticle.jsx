import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import { Title, HeaderTitle } from '../styles/themeStyledComponents.js';
import { list } from '../utils/categoryService';
import { create } from '../utils/articleService';

const NewArticle = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();

  const history = useHistory();

  const {
    register,
    errors,
    handleSubmit,
    formState,
    reset,
    setValue,
  } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (user) {
      register({ adminId: user._id });
    }
  }, []);

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
    console.log(formState);
    const { data } = await create(formData);
    console.log(data);
    if (!data.success) {
      setError(data.message);
    } else {
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        history.push(`/articles/${data.data.id}`);
      }, 2000);
    }
  };

  return (
    <div>
      <HeaderTitle>
        <Title>Tittel</Title>
      </HeaderTitle>
      <SideWrapper>
        {success && (
          <div>
            <h1>Artikkel opprettet ...</h1>
          </div>
        )}
        {error && (
          <div>
            <h1>{error}</h1>
          </div>
        )}
      </SideWrapper>
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
        <input
          hidden
          type="text"
          name="adminId"
          id="inpNavn"
          placeholder="adminId"
          ref={register({
            required: true,
          })}
          defaultValue={user._id}
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
                <option
                  name={category._id}
                  value={category._id}
                  key={category._id}
                >
                  {category.name}
                </option>
              ))}
          </StyledSelect>
          <CategoryButton>Ny</CategoryButton>
        </FlexItems>
        <label htmlFor="inpAuthor">Forfatter</label>
        <StyledSelect
          name="author"
          id="inpAuthor"
          ref={register({
            required: true,
          })}
        >
          <option value="Lars Larsen">Lars Larsen</option>
          <option value="Gunn Gundersen">Gunn Gundersen</option>
          <option value="Simen Simensen">Simen Simensen</option>
        </StyledSelect>
        <StyledButton type="submit" isLoading={formState.isSubmitting}>
          Opprett ny artikkel
        </StyledButton>
        {error && <p>{error.message}</p>}
      </StyledForm>
    </div>
  );
};

const SideWrapper = styled.div`
  margin-left: 400px;
  margin-right: 400px;
`;

export default NewArticle;

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
