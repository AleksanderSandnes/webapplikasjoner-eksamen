/* eslint-disable object-shorthand */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
import { listCategories } from '../utils/categoryService';
import { create } from '../utils/articleService';
import CreateNewCategory from '../modals/CreateNewCategory';
import NewCategoryButton from './NewCategoryButton';
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
  StyledForm,
  StyledButton,
} from '../styles/ArticleStyling.js';

const NewArticle = () => {
  const { user, isLoggedIn } = useAuthContext();
  const [error, setError] = useState(null);
  const [newCategory, setNewCategory] = useState({ name: '' });
  const [success, setSuccess] = useState(false);
  const [state, setState] = useState(false);
  const [categories, setCategories] = useState(null);
  const history = useHistory();

  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  const showModal = () => {
    setState(true);
  };

  const closeModal = () => {
    setState(false);
  };

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

  const onSubmit = async (formData) => {
    const { data } = await create(formData);
    if (!data.success) {
      setError(data.message);
    } else {
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        history.push(`/articles/${data.data.id}`);
      }, 3000);
    }
  };

  return (
    user &&
    isLoggedIn && (
      <div>
        <HeaderTitle>
          <Title>Ny artikkel</Title>
        </HeaderTitle>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Flexrow>
              <div>
                <InputLabel htmlFor="inpName">Tittel</InputLabel>
              </div>
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
          <FormGroup>
            <Flexrow>
              <div>
                <InputLabel htmlFor="inpLeadParagraph">Ingress</InputLabel>
              </div>
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
          <FormGroup>
            <Flexrow>
              <div>
                <InputLabel htmlFor="inpContent">Tekst</InputLabel>
              </div>
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
          <FormGroup>
            <FlexrowCategory>
              <div>
                <InputLabel htmlFor="inpCategories">Kategori</InputLabel>
              </div>
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
                <div>
                  {state && (
                    <CreateNewCategory
                      modal={state}
                      close={closeModal}
                      setModalOpen={closeModal}
                    />
                  )}

                  <NewCategoryButton modalHandler={showModal} />
                </div>
              </Right>
            </Flexrow>
          </FormGroup>
          <FormGroup>
            <Flexrow>
              <div>
                <InputLabel htmlFor="inpAuthor">Forfatter</InputLabel>
              </div>
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
          <FormGroup>
            <Flexrow>
              <div>
                <InputLabel htmlFor="inpIsClassified">Hemmelig</InputLabel>
              </div>
            </Flexrow>
            <Right>
              <input
                type="checkbox"
                defaultChecked={false}
                name="isClassified"
                ref={register}
              />
            </Right>
          </FormGroup>
          <input
            hidden
            type="text"
            name="adminId"
            id="inpNavn"
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
              <H1>
                Artikkel ble nå opprettet. Sender deg til redigeringssiden om 3
                sekunder.
              </H1>
            </div>
          )}
          {error && (
            <div>
              <ErrorMessage>{error}</ErrorMessage>
            </div>
          )}
        </FormGroup>
        <Footer>
          <FooterText>OrgnNr: 007 007 007</FooterText>
          <FooterText>Ig@Igror.no</FooterText>
          <FooterText>99 00 00 00</FooterText>
        </Footer>
      </div>
    )
  );
};

export default NewArticle;

const H1 = styled.h1`
  font-size: 32px;
  width: 500px;
  color: green;
`;

const ErrorMessage = styled.h1`
  font-size: 32px;
  width: 500px;
  color: red;
`;
