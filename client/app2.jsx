import React, { Component } from 'react';
import styled from 'styled-components';
import ResponsiveFonts from './responsive-fonts';
import { Breakpoint } from './make-responsive-component';
import {
  MediumAndUp,
  LargeAndUp,
  SmallAndDown,
  MediumAndDown,
  MediumOnly,
} from './breakpoints.jsx';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: center;
`;

// eslint-disable-next-line react/display-name
export default class extends Component {
  render() {
    return (
      <Wrapper>
        <ResponsiveFonts>
          <SmallAndDown>sm and down</SmallAndDown>
          <MediumAndUp>med and up</MediumAndUp>
          <MediumAndDown>med and down</MediumAndDown>
          <MediumOnly>medium only</MediumOnly>
          <LargeAndUp>lg and up</LargeAndUp>
          <Breakpoint max="1200px">only on huge width</Breakpoint>
        </ResponsiveFonts>
      </Wrapper>
    );
  }
}
