import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuthContext } from '../context/AuthProvider';
import { list } from '../utils/categoryService';
import { create } from '../utils/articleService';
import { Title, HeaderTitle } from '../styles/themeStyledComponents.js';
import NewCategory from '../modals/NewCategory';

const NewArticle = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [categories, setCategories] = useState(null);
  const { user } = useAuthContext();
  const history = useHistory();

  const { register, errors, handleSubmit, formState, reset } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await list();
      reset(data.data);
      if (!data.success) {
        setError(data.error);
      } else {
        setCategories(data.data);
      }
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
        <Title>Ny artikkel</Title>
      </HeaderTitle>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormGroup isInvalid={errors.title}>
          <InputLabel htmlFor="inpName">Tittel</InputLabel>
          <Input
            type="text"
            name="title"
            id="inpNavn"
            placeholder="Tittel"
            ref={register({
              required: true,
            })}
          />
          <Message valid={!errors.title}>Legg inn tittel på artikkelen</Message>
        </FormGroup>
        <FormGroup isInvalid={errors.leadParagraph}>
          <InputLabel htmlFor="inpLeadParagraph">Ingress</InputLabel>
          <StyledTextArea
            type="text"
            name="leadParagraph"
            id="inpLeadParagraph"
            placeholder="Ingress"
            ref={register({
              required: true,
            })}
          />
          <Message valid={!errors.leadParagraph}>
            Legg inn ingress på artikkelen
          </Message>
        </FormGroup>
        <FormGroup isInvalid={errors.content}>
          <InputLabel htmlFor="inpContent">Tekst</InputLabel>
          <StyledTextArea
            type="text"
            name="content"
            id="inpContent"
            placeholder="Tekst"
            ref={register({
              required: true,
            })}
          />
          <Message valid={!errors.content}>
            Legg inn innhold på artikkelen
          </Message>
        </FormGroup>
        <FormGroup isInvalid={errors.categoryId}>
          <InputLabel htmlFor="inpCategories">Kategori</InputLabel>
          <Flexrow>
            <Left>
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
              <Message valid={!errors.categoryId}>
                Legg inn kategori på artikkelen
              </Message>
            </Left>
            <Right>
              <NewCategoryButton />
            </Right>
          </Flexrow>
        </FormGroup>
        <FormGroup isInvalid={errors.author}>
          <InputLabel htmlFor="inpAuthor">Forfatter</InputLabel>
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
          <Message valid={!errors.author}>
            Legg inn forfatter på artikkelen
          </Message>
        </FormGroup>
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
        <FormGroup>
          <StyledButton type="submit" isLoading={formState.isSubmitting}>
            Opprett ny artikkel
          </StyledButton>
          {error && <p>{error.message}</p>}
        </FormGroup>
      </StyledForm>
      <FormGroup>
        {success && (
          <div>
            <h1>Oppretter artikkel...</h1>
          </div>
        )}
        {error && (
          <div>
            <h1>{error}</h1>
          </div>
        )}
      </FormGroup>
    </div>
  );
};

export default NewArticle;

const Flexrow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Right = styled.div``;

const Left = styled.div``;

const FormGroup = styled.div`
  color: black;
  display: block;
  width: 300px;
  margin: 50px auto;
`;
const InputLabel = styled.label`
  margin-bottom: 0.5em;
  color: black;
  display: block;
`;

const Input = styled.input`
  padding: 0.5em;
  color: black;
  background: white;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

const StyledTextArea = styled.textarea`
  padding: 0.5em;
  color: black;
  background: white;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

const StyledSelect = styled.select`
  padding: 0.5em;
  color: black;
  background: white;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

const Message = styled.label`
  margin-bottom: 0.5em;
  color: red;
  display: block;
`;

const StyledForm = styled.form`
  margin-left: 400px;
  margin-right: 400px;
`;

const StyledButton = styled.button`
  text-align: left;
  margin: 0px 0px 20px 0px;
`;

const NewCategoryBtn = styled.button``;

const NewCategoryButton = ({ formData, setFormData }) => {
  const [addCategoryShow, setaddCategoryShow] = useState(false);

  return (
    <div>
      <NewCategoryBtn onClick={() => setaddCategoryShow(!addCategoryShow)}>
        NY
      </NewCategoryBtn>
      {addCategoryShow && (
        <NewCategory
          closeForm={setaddCategoryShow}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

NewCategoryButton.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
};
