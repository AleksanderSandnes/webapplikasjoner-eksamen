import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { createCategory } from '../utils/categoryService';
import {
  Flexrow,
  FormGroup,
  InputLabel,
  Input,
  StyledForm,
  StyledButton,
} from '../styles/ArticleStyling.js';

const CreateNewCategory = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (formData) => {
    const { data } = await createCategory(formData);
    if (!data.success) {
      setError(data.message);
    } else {
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        history.push(`/NewArticle`);
      }, 2000);
    }
  };
  return (
    <Modal>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Flexrow>
            <div>
              <InputLabel htmlFor="inpNewCategory">Ny kategori</InputLabel>
            </div>
          </Flexrow>
          <Input
            type="text"
            name="category"
            id="inpNewCategory"
            placeholder="Placeholder for inputfelt"
            ref={register({
              required: true,
            })}
          />
        </FormGroup>
        <FormGroup>
          <StyledButton type="submit" isLoading={formState.isSubmitting}>
            Opprett ny kategori
          </StyledButton>
          {error && <p>{error.message}</p>}
        </FormGroup>
      </StyledForm>
    </Modal>
  );
};

export default CreateNewCategory;
