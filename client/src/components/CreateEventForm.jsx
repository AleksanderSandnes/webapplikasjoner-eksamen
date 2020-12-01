import React, { useState } from 'react';
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
import { useHistory } from 'react-router-dom';
import { create } from '../utils/eventService';

const EventForm = () => {
  const [closeBtnState, setCloseBtnState] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const history = useHistory();

  const { register, errors, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (formData) => {
    const { data } = await create(formData);
    if (!data.success) {
      setCloseBtnState(true);
      setError(data.message);
    } else {
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        history.push(`/events/${data.data.id}`);
      }, 2000);
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
            Event opprettet ...
          </Alert>
        )}
        {error && closeBtnState && (
          <Alert mb={4} status="error">
            <AlertIcon />
            <AlertTitle mr={2}>{error}</AlertTitle>
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => setCloseBtnState(false)}
            />
          </Alert>
        )}
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">Navn</FormLabel>
          <Input
            id="name"
            placeholder="Navn"
            name="name"
            type="name"
            ref={register({
              required: true,
            })}
          />
          <FormErrorMessage valid={!errors.name}>
            Legg til navn på event
          </FormErrorMessage>
        </FormControl>
        <FormControl margin="25px 0" isInvalid={errors.description}>
          <FormLabel htmlFor="description">Beskrivelse</FormLabel>
          <Input
            type="description"
            name="description"
            id="description"
            placeholder="Beskrivelse"
            ref={register({
              required: true,
            })}
          />
          <FormErrorMessage valid={!errors.description}>
            Legg til beskrivelse
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          variantColor="teal"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Lag nytt event
        </Button>
      </Box>
    </>
  );
};

export default EventForm;
