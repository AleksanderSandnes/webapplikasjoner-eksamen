import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const NewCategoryButton = ({ setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <NewCategoryBtn type="button" onClick={handleClick}>
        NY
      </NewCategoryBtn>
    </div>
  );
};
export default NewCategoryButton;

const NewCategoryBtn = styled.button`
  text-align: center;
  background-color: #2c91bd;
  color: white;
  width: 65px;
  height: 45px;
  margin-left: 10px;
`;
