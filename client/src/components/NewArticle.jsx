import React from 'react';
import styled from 'styled-components';
import { Title, HeaderTitle } from '../styles/themeStyledComponents.js';

const NewArticle = () => {
  <div>
    <HeaderTitle>
      <Title>Tittel</Title>
    </HeaderTitle>
    <SideWrapper>
      <FormGroup>
        <Label htmlFor="label">Label</Label>
        <Input id="label" />
        <Message>This is the validation message</Message>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="label">Label</Label>
        <Input id="label" />
        <Message>This is the validation message</Message>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="label">Label</Label>
        <Input id="label" />
        <Message>This is the validation message</Message>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="label">Label</Label>
        <Input id="label" />
        <Message>This is the validation message</Message>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="label">Label</Label>
        <Input id="label" />
        <Message>This is the validation message</Message>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="label">Label</Label>
        <Input id="label" />
        <Message>This is the validation message</Message>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="label">Label</Label>
        <Input id="label" />
        <Message>This is the validation message</Message>
      </FormGroup>
    </SideWrapper>
  </div>;
};

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
const Label = styled.label`
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

export default NewArticle;
