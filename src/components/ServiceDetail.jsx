import React from "react";
import PropTypes from "prop-types";

const ServiceDetail = ({ service }) => {
  return <h2>Details about {service} Service</h2>;
};

ServiceDetail.propTypes = {
  service: PropTypes.string.isRequired,
};

export default ServiceDetail;
