/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('body');

function NewCategory({
  state,
  handleCategoryChange,
  handleSubmit,
  setModalOpen,
}) {
  return state ? (
    <Modal
      className="modal"
      isOpen={state}
      onRequestClose={setModalOpen}
      style={{
        overlay: {
          backgroundColor: 'rgba(52, 52, 52, 0.5)',
        },
        content: {
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          width: '350px',
          height: '400px',
          margin: '0 auto ',
          marginTop: '25vh',
          outline: 'none',
        },
      }}
    >
      <ModalWrapper>
        <Form>
          <Label>Ny kategori</Label>
          <Input
            type="text"
            placeholder="Placeholder for inputfelt"
            onChange={handleCategoryChange}
          />

          <SubmitButton type="submit" onClick={handleSubmit}>
            SUBMIT
          </SubmitButton>
        </Form>
      </ModalWrapper>
    </Modal>
  ) : null;
}

export default NewCategory;

const ModalWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  margin-top: 25vh;
  outline: none;
  padding: 40px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  width: 500px;
  padding: 10px;
`;

const SubmitButton = styled.button`
  padding: 12px 10px;
  width: 125px;
  background-color: #2c91bd;
  color: white;
  margin-top: 15px;
  margin-left: 373px;
`;

const Form = styled.form``;
