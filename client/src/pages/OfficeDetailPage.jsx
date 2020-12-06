import React from 'react';
import PropTypes from 'prop-types';
import OfficeDetail from '../components/OfficeDetail';

const OfficeDetailPage = ({ office }) => <OfficeDetail office={office} />;

OfficeDetailPage.propTypes = {
  office: PropTypes.object,
};

export default OfficeDetailPage;
