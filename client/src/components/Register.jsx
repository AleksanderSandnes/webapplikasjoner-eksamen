import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  Flexrow,
  Right,
  FormGroup,
  InputLabel,
  Input,
  Message,
  StyledForm,
  StyledButton,
} from '../styles/ArticleStyling.js';
import {
  Footer,
  FooterText,
  Title,
  HeaderTitle,
} from '../styles/themeStyledComponents.js';
import { useAuthContext } from '../context/AuthProvider';
import { registerUser } from '../utils/authService';

const Register = () => {
  const { user } = useAuthContext();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const { register, errors, handleSubmit, formState, reset } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (formData) => {
    const { data } = await registerUser(formData);
    if (!data.success) {
      setError(data.message);
    } else {
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        history.push(`/login`);
      }, 5000);
    }
  };

  return (
    <div>
      <HeaderTitle>
        <Title>Register ny bruker</Title>
      </HeaderTitle>
      {console.log(user)}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Flexrow>
            <div>
              <InputLabel htmlFor="inpName">Navn</InputLabel>
            </div>
            <Right>
              <Message>Legg inn Navn</Message>
            </Right>
          </Flexrow>
          <Input
            type="text"
            name="name"
            id="inpNavn"
            placeholder="Navn"
            ref={register({
              required: true,
            })}
          />
        </FormGroup>
        <FormGroup>
          <Flexrow>
            <div>
              <InputLabel htmlFor="inpEmail">Epost</InputLabel>
            </div>
            <Right>
              <Message>Legg inn epost</Message>
            </Right>
          </Flexrow>
          <Input
            type="text"
            name="email"
            id="inpEmail"
            placeholder="Epost"
            ref={register({
              required: true,
            })}
          />
        </FormGroup>
        <FormGroup>
          <Flexrow>
            <div>
              <InputLabel htmlFor="inpPassword">Passord</InputLabel>
            </div>
            <Right>
              <Message>Legg inn Emne</Message>
            </Right>
          </Flexrow>
          <Input
            type="password"
            name="password"
            id="inpPassword"
            placeholder="Passord"
            ref={register({
              required: true,
            })}
          />
        </FormGroup>
        <FormGroup>
          <StyledButton type="submit" isLoading={formState.isSubmitting}>
            LAG BRUKER
          </StyledButton>
          {error && <p>{error.message}</p>}
        </FormGroup>
      </StyledForm>
      <FormGroup>
        {success && (
          <div>
            <H1>Bruker er registert. Omdirigerer til inlogging...</H1>
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

export default Register;

const H1 = styled.h1`
  font-size: 32px;
  width: 500px;
  color: green;
`;
