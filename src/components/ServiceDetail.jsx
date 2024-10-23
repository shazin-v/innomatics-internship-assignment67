import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ServiceDetail = ({ service }) => {
    return <h2>Details about {service} Service</h2>;
};

// Define prop types for ServiceDetail component
ServiceDetail.propTypes = {
    service: PropTypes.string.isRequired, // Validate that service is a required string
};

export default ServiceDetail;