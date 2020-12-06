import React from 'react';
import PropTypes from 'prop-types';

const OfficeDetail = ({ office }) => {
  console.log(office);

  return <>{office && <p>{office.name}</p>}</>;
};

OfficeDetail.propTypes = {
  office: PropTypes.object,
};

export default OfficeDetail;
