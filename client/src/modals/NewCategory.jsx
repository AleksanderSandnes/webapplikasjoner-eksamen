import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const NewCategory = ({ closeForm, formData, setFormData }) => {
  const handleSubmit = (eventHandleSubmit) => {
    eventHandleSubmit.preventDefault();
    setFormData({ category: '' });
    closeForm(false);
  };

  const updateFormData = (eventFormData, name) => {
    setFormData({ ...formData, [name]: eventFormData.target.value });
  };

  return (
    <BeforeCreateCategory>
      <CreateCategory>
        <NotExitable>
          <ErrorMessage />
          <Form onSubmit={handleSubmit}>
            <label htmlFor="NewCategory">Ny kategori</label>
            <InputNewCategory
              // eslint-disable-next-line react/prop-types
              value={formData.NewCategory}
              onChange={(e) => updateFormData(e, 'NewCategory')}
              type="text"
              required
            />
            <InputSubmit type="submit" value="Create" />
          </Form>
        </NotExitable>
      </CreateCategory>
    </BeforeCreateCategory>
  );
};

export default NewCategory;

const BeforeCreateCategory = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
`;

const CreateCategory = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotExitable = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 25%;
  z-index: 10;
`;

const ErrorMessage = styled.p`
  color: red;
  padding-top: 20px;
  display: none;
`;

const Form = styled.form`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputNewCategory = styled.input`
  padding: 10px;
`;

const InputSubmit = styled.input`
  border: none;
  background-color: cadetblue;
`;
