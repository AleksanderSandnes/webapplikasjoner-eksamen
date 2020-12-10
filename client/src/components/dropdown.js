/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import styled from 'styled-components';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'filter' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert(`${this.state.value}`);
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Select value={this.state.value} onChange={this.handleChange}>
          <option value="filter">FILTER</option>
          <option value="all">Alle</option>
          <option value="fredrikstad">Fredrikstad</option>
          <option value="sarpsborg">Sarpsborg</option>
          <option value="moss">Moss</option>
          <option value="oslo">Oslo</option>
        </Select>
      </form>
    );
  }
}

export default Dropdown;

const Select = styled.select`
  background-color: lightgray;
  width: 150px;
  font-size: 20px;
  padding: 20px 20px 20px 20px;
  font-weight: bold;
  margin-top: 250px;
  margin-left: -100px;
  position: relative;
  top: 3rem;
  right: 5rem;
`;
