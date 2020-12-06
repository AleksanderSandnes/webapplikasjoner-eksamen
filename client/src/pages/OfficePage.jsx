import React from 'react';
import PropTypes from 'prop-types';
import Offices from '../components/Offices';

const OfficePage = ({ setOffice }) => <Offices setOffice={setOffice} />;

OfficePage.propTypes = {
  setOffice: PropTypes.func,
};

export default OfficePage;
