import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuthContext } from '../context/AuthProvider';
import { list } from '../utils/categoryService';
import { create } from '../utils/articleService';
import NewCategory from '../modals/NewCategory';
import {
  Footer,
  FooterText,
  Title,
  HeaderTitle,
} from '../styles/themeStyledComponents.js';
import {
  Flexrow,
  FlexrowCategory,
  Right,
  FormGroup,
  InputLabel,
  Input,
  StyledTextArea,
  StyledSelect,
  StyledSelectAuthor,
  Message,
  StyledForm,
  StyledButton,
} from '../styles/ArticleStyling.js';

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
    const { data } = await create(formData);
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
          <Flexrow>
            <div>
              <InputLabel htmlFor="inpName">Tittel</InputLabel>
            </div>
            <Right>
              <Message valid={!errors.title}>
                Legg inn tittel på artikkelen
              </Message>
            </Right>
          </Flexrow>
          <Input
            type="text"
            name="title"
            id="inpNavn"
            placeholder="Tittel"
            ref={register({
              required: true,
            })}
          />
        </FormGroup>
        <FormGroup isInvalid={errors.leadParagraph}>
          <Flexrow>
            <div>
              <InputLabel htmlFor="inpLeadParagraph">Ingress</InputLabel>
            </div>
            <Right>
              <Message valid={!errors.leadParagraph}>
                Legg inn ingress på artikkelen
              </Message>
            </Right>
          </Flexrow>
          <StyledTextArea
            type="text"
            name="leadParagraph"
            id="inpLeadParagraph"
            placeholder="Ingress"
            ref={register({
              required: true,
            })}
          />
        </FormGroup>
        <FormGroup isInvalid={errors.content}>
          <Flexrow>
            <div>
              <InputLabel htmlFor="inpContent">Tekst</InputLabel>
            </div>
            <Right>
              <Message valid={!errors.content}>
                Legg inn innhold på artikkelen
              </Message>
            </Right>
          </Flexrow>
          <StyledTextArea
            type="text"
            name="content"
            id="inpContent"
            placeholder="Tekst"
            ref={register({
              required: true,
            })}
          />
        </FormGroup>
        <FormGroup isInvalid={errors.categoryId}>
          <FlexrowCategory>
            <div>
              <InputLabel htmlFor="inpCategories">Kategori</InputLabel>
            </div>
            <Right>
              <Message valid={!errors.categoryId}>
                Legg inn kategori på artikkelen
              </Message>
            </Right>
          </FlexrowCategory>
          <Flexrow>
            <div>
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
            </div>
            <Right>
              <NewCategoryButton />
            </Right>
          </Flexrow>
        </FormGroup>
        <FormGroup isInvalid={errors.author}>
          <Flexrow>
            <div>
              <InputLabel htmlFor="inpAuthor">Forfatter</InputLabel>
            </div>
            <Right>
              <Message valid={!errors.author}>
                Legg inn forfatter på artikkelen
              </Message>
            </Right>
          </Flexrow>
          <StyledSelectAuthor
            name="author"
            id="inpAuthor"
            ref={register({
              required: true,
            })}
          >
            <option value="Lars Larsen">Lars Larsen</option>
            <option value="Gunn Gundersen">Gunn Gundersen</option>
            <option value="Simen Simensen">Simen Simensen</option>
          </StyledSelectAuthor>
        </FormGroup>
        <FormGroup isInvalid={errors.isClassified}>
          <Flexrow>
            <div>
              <InputLabel htmlFor="inpIsClassified">Hemmelig</InputLabel>
            </div>
            <Right>
              <Message valid={!errors.categoryId}>
                Legg inn classified på artikkelen
              </Message>
            </Right>
          </Flexrow>
          <Right>
            <input
              type="checkbox"
              defaultChecked={false}
              name="isClassified"
              ref={register({
                required: true,
              })}
            />
          </Right>
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
            CREATE
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
      <Footer>
        <FooterText>OrgnNr: 007 007 007</FooterText>
        <FooterText>Ig@Igror.no</FooterText>
        <FooterText>99 00 00 00</FooterText>
      </Footer>
    </div>
  );
};

export default NewArticle;

const NewCategoryBtn = styled.button`
  text-align: center;
  background-color: #2c91bd;
  color: white;
  width: 65px;
  height: 45px;
  margin-left: 10px;
`;

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
