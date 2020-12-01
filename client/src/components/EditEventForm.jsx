import React, { useState, useEffect } from 'react';
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
  Heading,
} from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { get, put } from '../utils/eventService';

const EventForm = () => {
  const [closeBtnState, setCloseBtnState] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  const { register, errors, handleSubmit, formState, reset } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const { data } = await get(id);
        reset(data.data);
      };
      fetchData();
    }
  }, [id]);

  const onSubmit = async (formData) => {
    const fetchData = async () => {
      const { data } = await put(id, formData);

      if (!data.success) {
        setCloseBtnState(true);
        setError(data.message);
      } else {
        setError(null);
        setSuccess(true);
        setTimeout(() => {
          history.push(`/`);
        }, 2000);
      }
    };
    fetchData();
  };
  return (
    <>
      <Box
        w="500px"
        margin="0 auto"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading mb={10} as="h1" size="lg">
          Oppdater event
        </Heading>
        {success && (
          <Alert status="success">
            <AlertIcon />
            Event oppdatert ...
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
          Oppdater event
        </Button>
      </Box>
    </>
  );
};

export default EventForm;
