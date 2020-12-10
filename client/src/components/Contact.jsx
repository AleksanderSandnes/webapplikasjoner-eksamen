import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {
  Flexrow,
  FormGroup,
  InputLabel,
  Input,
  StyledTextArea,
  StyledForm,
  StyledButton,
} from '../styles/ArticleStyling.js';
import {
  Footer,
  FooterText,
  Title,
  HeaderTitle,
} from '../styles/themeStyledComponents.js';
import { create } from '../utils/supportEmailService';
import { getUserInfo } from '../utils/authService';

const ContactPage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUserInfo();
      if (!data.success) {
        setError(data.error);
      } else {
        setCurrentUser(data.data);
      }
    };
    fetchData();
  }, []);

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
          </Flexrow>
          {console.log(currentUser)}
          <Input
            type="text"
            name="name"
            defaultValue={currentUser?.name}
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
          </Flexrow>
          <Input
            type="text"
            name="email"
            id="inpEmail"
            defaultValue={currentUser?.email}
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
  );
};

export default ContactPage;
