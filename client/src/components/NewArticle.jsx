import React, { useState } from 'react';
import styled from 'styled-components';
import { Title, HeaderTitle } from '../styles/themeStyledComponents.js';
import NewCategory from '../modals/NewCategory';

const NewArticle = () => {
  <div>
    <HeaderTitle>
      <Title>Tittel</Title>
    </HeaderTitle>
    <SideWrapper>
      <FormGroup>
        <InputLabel htmlFor="label">Label</InputLabel>
        <Input id="label" />
        <Message>This is the validation message</Message>
      </FormGroup>
      <FormGroup>
        <InputLabel htmlFor="label">Label</InputLabel>
        <Input id="label" />
        <Message>This is the validation message</Message>
      </FormGroup>
      <FormGroup>
        <InputLabel htmlFor="label">Label</InputLabel>
        <Input id="label" />
        <Message>This is the validation message</Message>
      </FormGroup>
      <FormGroup>
        <InputLabel htmlFor="label">Label</InputLabel>
        <Input id="label" />
        <Message>This is the validation message</Message>
      </FormGroup>
      <FormGroup>
        <InputLabel htmlFor="label">Label</InputLabel>
        <Input id="label" />
        <Message>This is the validation message</Message>
      </FormGroup>
      <FormGroup>
        <Flexrow>
          <Right>
            <NewCategoryButton />
          </Right>
          <Left>
            <InputLabel htmlFor="label">Label</InputLabel>
            <Input id="label" />
            <Message>This is the validation message</Message>
          </Left>
        </Flexrow>
      </FormGroup>
      <FormGroup>
        <InputLabel htmlFor="label">Label</InputLabel>
        <Input id="label" />
        <Message>This is the validation message</Message>
      </FormGroup>
    </SideWrapper>
  </div>;
};

const Flexrow = styled.div``;

const Right = styled.div``;

const Left = styled.div``;

const SideWrapper = styled.div`
  margin-left: 400px;
  margin-right: 400px;
`;

const FormGroup = styled.div`
  color: black;
  display: block;
  width: 300px;
  margin: 50px auto;
`;
const InputLabel = styled.label`
  margin-bottom: 0.5em;
  color: black;
  display: block;
`;

const Input = styled.input`
  padding: 0.5em;
  color: black;
  background: white;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

const Message = styled.label`
  margin-bottom: 0.5em;
  color: red;
  display: block;
`;

const NewCategoryBtn = styled.button``;

// eslint-disable-next-line react/prop-types
const NewCategoryButton = ({ formData, setFormData }) => {
  const [addCategoryShow, setaddCategoryShow] = useState(false);

  return (
    <div>
      <NewCategoryBtn onClick={() => setaddCategoryShow(!addCategoryShow)}>
        NY
      </NewCategoryBtn>
      {addCategoryShow && (
        <NewCategory
          closeForm={setaddCategoryShow}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

export default NewArticle;
