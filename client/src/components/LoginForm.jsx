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
import { useHistory, useLocation } from 'react-router-dom';
import { login } from '../utils/authService';
import { useAuthContext } from '../context/AuthProvider';

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
      history.push('/');
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
        {success && (
          <Alert status="success">
            <AlertIcon />
            Du er logget inn. Omdirigerer til forsiden ...
          </Alert>
        )}
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
        <Button
          mt={4}
          variantColor="teal"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Login
        </Button>
      </Box>
    </>
  );
};

export default LoginForm;
