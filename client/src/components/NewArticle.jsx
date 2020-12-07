import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Title, HeaderTitle } from '../styles/themeStyledComponents.js';

const NewArticle = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const history = useHistory();

  const { register, errors, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (formData) => {
    const { data } = await create(formData);
    if (!data.success) {
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
    <div>
      <HeaderTitle>
        <Title>Tittel</Title>
      </HeaderTitle>
      <SideWrapper>
        <form onSubmit={handleSubmit(onSubmit)} />
        {success && (
          <div>
            <h1>Artikkel opprettet ...</h1>
          </div>
        )}
        {error && (
          <div>
            <h1>{error}</h1>
          </div>
        )}
      </SideWrapper>
    </div>
  );
};

const SideWrapper = styled.div`
  margin-left: 400px;
  margin-right: 400px;
`;

export default NewArticle;
