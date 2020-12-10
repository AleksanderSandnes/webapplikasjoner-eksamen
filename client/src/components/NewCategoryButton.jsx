import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
function NewCategoryButton({ modalHandler }) {
  return (
    <div>
      <NewCategoryBtn type="button" onClick={modalHandler}>
        NY
      </NewCategoryBtn>
    </div>
  );
}

export default NewCategoryButton;

const NewCategoryBtn = styled.button`
  text-align: center;
  background-color: #2c91bd;
  color: white;
  width: 65px;
  height: 45px;
  margin-left: 10px;
`;
