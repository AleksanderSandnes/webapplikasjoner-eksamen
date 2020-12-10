import React, { useEffect, useState } from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../utils/authService';
import { useAuthContext } from '../context/AuthProvider';

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    color: blue;
  }
`;

const LoginForm = () => {
  const [closeBtnState, setCloseBtnState] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { setUser, isLoggedIn } = useAuthContext();
  const history = useHistory();
  const { state } = useLocation();

  const { register, errors, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (isLoggedIn && state) {
      history.push(state?.from.pathname);
    }
  }, [isLoggedIn, state]);

  const onSubmit = async (credentials) => {
    const { data } = await login(credentials);
    if (!data.success) {
      setCloseBtnState(true);
      setError(data.message);
    } else {
      const user = data?.user;
      const expire = JSON.parse(window.atob(data.token.split('.')[1])).exp;
      setUser({ ...user, expire });
      setSuccess(true);
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  };

  return (
    <>
      <Box
        w="500px"
        margin="0 auto"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && closeBtnState && (
          <Alert mb={4} status="error">
            <AlertIcon />
            {error &&
              Array.isArray(error) &&
              error.map((err) => (
                <AlertTitle mr={2}>
                  {err.field && <span>{err.field}</span>} {err.message}
                </AlertTitle>
              ))}
            {error && !Array.isArray(error) && (
              <AlertTitle mr={2}>{error}</AlertTitle>
            )}
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => setCloseBtnState(false)}
            />
          </Alert>
        )}
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">Epost</FormLabel>
          <Input
            id="email"
            placeholder="Epost"
            name="email"
            type="email"
            ref={register({
              required: true,
            })}
          />
          <FormErrorMessage valid={!errors.email}>
            Fyll ut e-post
          </FormErrorMessage>
        </FormControl>
        <FormControl margin="25px 0" isInvalid={errors.password}>
          <FormLabel htmlFor="password">Passord</FormLabel>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Passord"
            ref={register({
              required: true,
              minLength: 3,
            })}
          />
          <FormErrorMessage valid={!errors.password}>
            Passord må fylles ut og bestå av 3 tall/bokstaver
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <StyledLink to="register">
            Har du ikke en bruker? Registrer deg her.
          </StyledLink>
        </FormControl>
        <Button
          mt={4}
          variantColor="teal"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Login
        </Button>

        <FormGroup>
          {success && (
            <div>
              <H1>
                Du er nå logget inn. Sender deg til hovedsiden om 3 sekunder.
              </H1>
            </div>
          )}
          {error && (
            <div>
              <h1>{error}</h1>
            </div>
          )}
        </FormGroup>
      </Box>
    </>
  );
};

export default LoginForm;

export const FormGroup = styled.div`
  color: black;
  display: block;
  width: 300px;
  margin: 30px auto;
`;

const H1 = styled.h1`
  font-size: 32px;
  width: 500px;
  color: green;
`;
