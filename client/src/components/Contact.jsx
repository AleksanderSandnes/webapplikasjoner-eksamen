import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {
  Flexrow,
  Right,
  FormGroup,
  InputLabel,
  Input,
  StyledTextArea,
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
import { create } from '../utils/supportEmailService';

const ContactPage = () => {
  const { user } = useAuthContext();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const { register, errors, handleSubmit, formState, reset } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (formData) => {
    const { data } = await create(formData);
    if (!data.success) {
      setError(data.message);
    } else {
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        history.push(`/`);
      }, 2000);
    }
  };

  return (
    user && (
      <div>
        <HeaderTitle>
          <Title>Kontakt oss</Title>
        </HeaderTitle>
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
              defaultValue={user.name}
              id="inpNavn"
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
              defaultValue={user.email}
              placeholder="epost"
              ref={register({
                required: true,
              })}
            />
          </FormGroup>
          <FormGroup>
            <Flexrow>
              <div>
                <InputLabel htmlFor="inpSubject">Emne</InputLabel>
              </div>
              <Right>
                <Message>Legg inn Emne</Message>
              </Right>
            </Flexrow>
            <Input
              type="text"
              name="subject"
              id="inpSubject"
              placeholder="Tekst"
              ref={register({
                required: true,
              })}
            />
          </FormGroup>
          <FormGroup>
            <Flexrow>
              <div>
                <InputLabel htmlFor="inpContent">Innhold</InputLabel>
              </div>
              <Right>
                <Message>Legg inn innhold</Message>
              </Right>
            </Flexrow>
            <StyledTextArea
              type="text"
              name="content"
              id="inpContent"
              placeholder="Innhold"
              ref={register({
                required: true,
              })}
            />
          </FormGroup>
          <FormGroup>
            <StyledButton type="submit" isLoading={formState.isSubmitting}>
              SEND EPOST
            </StyledButton>
            {error && <p>{error.message}</p>}
          </FormGroup>
        </StyledForm>
        <FormGroup>
          {success && (
            <div>
              <h1>Sender epost. Omdirigerer til forsiden...</h1>
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
    )
  );
};

export default ContactPage;
