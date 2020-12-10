import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
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

Modal.setAppElement('#app');

const CreateNewCategory = ({ setIsOpen, modalIsOpen }) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  const closeModal = () => {
    setTimeout(() => {
      history.push(`/NewArticle`);
    }, 2000);
  };

  const onSubmit = async (formData) => {
    const { data } = await createCategory(formData);
    if (!data.success) {
      setError(data.message);
    } else {
      setIsOpen(false);
      setSuccess(true);
      setError(null);
    }
  };
  return (
    <Modal shouldCloseOnEsc onAfterClose={closeModal} isOpen={modalIsOpen}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Flexrow>
            <div>
              <InputLabel htmlFor="inpNewCategory">Ny kategori</InputLabel>
            </div>
          </Flexrow>
          <Input
            type="text"
            name="name"
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

CreateNewCategory.propTypes = {
  setIsOpen: PropTypes.bool,
  modalIsOpen: PropTypes.bool,
};
