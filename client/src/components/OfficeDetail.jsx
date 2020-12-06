import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

/* const OfficeDetail = ({ office }) => {
console.log(office);

return <>{office && <p>{office.name}</p>}</>;
};

OfficeDetail.propTypes = {
  office: PropTypes.object,
};

*/

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const HeaderTitle = styled.section`
  padding: 10em;
  background: lightgray;
  margin-left: 20px;
  margin-right: 20px;
`;

const SideWrapper = styled.div`
  margin: 80px;
`;

const Headerh1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 20px;
  width: 1200px;
`;

const OfficeDetail = () => (
  <div>
    <HeaderTitle>
      <Title>Kontor</Title>
    </HeaderTitle>
    <SideWrapper>
      <Headerh1>Velkommen til </Headerh1>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus
        neque in volutpat molestie. Etiam a risus id ante hendrerit suscipit
        eget a enim. Fusce ultricies porta suscipit. Maecenas vel quam sit amet
        dui convallis tincidunt vel congue nulla. Integer ut lobortis lectus.
        Maecenas nibh odio, tincidunt vitae magna sed, cursus tempor nunc.
        Aliquam erat volutpat. Cras nec fringilla diam. Mauris magna nisl,
        dictum vel lectus vel, accumsan bibendum ex. Proin eget ornare dolor,
        sed placerat arcu. Phasellus sagittis faucibus odio, nec dictum quam
        auctor in. Sed non pellentesque lectus, vitae ullamcorper risus. Nunc
        urna erat, vehicula sed est eget, viverra pharetra ex.
      </Text>
      <Headerh1>Våre ansatte</Headerh1>
    </SideWrapper>
  </div>
);

export default OfficeDetail;
